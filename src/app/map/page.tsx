"use client";

import { useEffect, useState, useCallback } from "react";
import PageHeader from "@/components/PageHeader";
import { jurisdictions, pppSubDimensions } from "@/data/regulations";
import type { Jurisdiction } from "@/data/regulations";

type Dimension = "people" | "processes" | "platforms";

const dimensionMeta: Record<Dimension, { label: string; color: string; bg: string; border: string; icon: string; description: string }> = {
  people: {
    label: "People",
    color: "#2563eb",
    bg: "bg-blue-50",
    border: "border-blue-500",
    icon: "\u{1F465}",
    description: "Human oversight, accountability, regulator roles, workforce training, affected persons\u2019 rights",
  },
  processes: {
    label: "Processes",
    color: "#d97706",
    bg: "bg-amber-50",
    border: "border-amber-500",
    icon: "\u{2699}\uFE0F",
    description: "Risk assessment, auditing, transparency, certification, incident reporting, sandboxes",
  },
  platforms: {
    label: "Platforms",
    color: "#059669",
    bg: "bg-emerald-50",
    border: "border-emerald-500",
    icon: "\u{1F4BB}",
    description: "AI classification, infrastructure, data governance, safety, content labeling, GPAI provisions",
  },
};

function getRatingColor(level: string, dim: Dimension): string {
  if (level === "Mandatory") return dimensionMeta[dim].color;
  if (level === "Recommended") return "#fbbf24";
  return "#d1d5db";
}

function getRatingLabel(level: string): string {
  if (level === "Mandatory") return "M";
  if (level === "Recommended") return "R";
  return "\u2013";
}

function getMandatoryCount(j: Jurisdiction, dim: Dimension): number {
  const dimData = j.ppp[dim] as Record<string, { level: string }>;
  return Object.values(dimData).filter((r) => r.level === "Mandatory").length;
}

function getTotalCount(dim: Dimension): number {
  return pppSubDimensions[dim].length;
}

function getArchitecture(j: Jurisdiction): string {
  const hasPL1 = (j.ppp.platforms as Record<string, { level: string }>).aiClassification.level === "Mandatory";
  if (j.id === "eu") return "Cascading + Institutional creation";
  if (hasPL1) return "Cascading";
  return "Flat";
}

function MapComponent() {
  const [L, setL] = useState<typeof import("leaflet") | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const [selected, setSelected] = useState<Jurisdiction | null>(null);
  const [activeDim, setActiveDim] = useState<Dimension>("people");
  const [mapInstance, setMapInstance] = useState<import("leaflet").Map | null>(null);
  const [markers, setMarkers] = useState<import("leaflet").Marker[]>([]);

  useEffect(() => {
    import("leaflet").then((leaflet) => {
      setL(leaflet);
      setMapReady(true);
    });
  }, []);

  // Initialize map once
  useEffect(() => {
    if (!mapReady || !L) return;
    const container = document.getElementById("regulation-map");
    if (!container || (container as HTMLElement & { _leaflet_id?: number })._leaflet_id) return;

    const map = L.map("regulation-map", {
      center: [25, 20],
      zoom: 2,
      minZoom: 2,
      maxZoom: 6,
      scrollWheelZoom: true,
      zoomControl: false,
    });

    L.control.zoom({ position: "bottomright" }).addTo(map);

    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    }).addTo(map);

    setMapInstance(map);

    return () => { map.remove(); };
  }, [mapReady, L]);

  // Update markers when dimension changes
  const updateMarkers = useCallback(() => {
    if (!mapInstance || !L) return;

    // Remove old markers
    markers.forEach((m) => m.remove());

    const newMarkers: import("leaflet").Marker[] = [];
    const dim = activeDim;

    jurisdictions.forEach((j) => {
      const mandatoryCount = getMandatoryCount(j, dim);
      const totalCount = getTotalCount(dim);
      const ratio = mandatoryCount / totalCount;

      // Size based on mandatory count
      const size = 20 + ratio * 30;
      const color = dimensionMeta[dim].color;
      const opacity = 0.3 + ratio * 0.7;

      const icon = L.divIcon({
        className: "custom-marker",
        html: `
          <div style="position: relative; width: ${size}px; height: ${size}px; cursor: pointer;">
            <div style="
              position: absolute; inset: 0;
              background: ${color};
              opacity: ${opacity};
              border-radius: 50%;
              border: 2px solid rgba(255,255,255,0.8);
              box-shadow: 0 0 ${ratio > 0.5 ? 15 : 5}px ${color}${ratio > 0.5 ? '80' : '30'};
              transition: all 0.3s;
            "></div>
            <div style="
              position: absolute; inset: 0;
              display: flex; align-items: center; justify-content: center;
              color: white; font-size: ${size * 0.4}px; font-weight: 700;
              text-shadow: 0 1px 2px rgba(0,0,0,0.5);
            ">${mandatoryCount}</div>
          </div>
        `,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
      });

      const marker = L.marker([j.lat, j.lng], { icon }).addTo(mapInstance);

      // Tooltip on hover
      const dimData = j.ppp[dim] as Record<string, { level: string }>;
      const mCount = Object.values(dimData).filter((r) => r.level === "Mandatory").length;
      const rCount = Object.values(dimData).filter((r) => r.level === "Recommended").length;
      const aCount = Object.values(dimData).filter((r) => r.level === "Absent").length;

      marker.bindTooltip(
        `<div style="font-family: system-ui; min-width: 180px; padding: 4px;">
          <div style="font-weight: 700; font-size: 13px; margin-bottom: 2px;">${j.name}</div>
          <div style="color: #9ca3af; font-size: 11px; font-style: italic; margin-bottom: 6px;">${j.philosophy}</div>
          <div style="font-size: 11px; font-weight: 600; color: ${color}; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">
            ${dimensionMeta[dim].label} Dimension
          </div>
          <div style="display: flex; gap: 8px; font-size: 11px;">
            <span style="color: ${color}; font-weight: 600;">${mCount} mandatory</span>
            <span style="color: #fbbf24; font-weight: 600;">${rCount} recommended</span>
            <span style="color: #6b7280;">${aCount} absent</span>
          </div>
          <div style="margin-top: 4px; font-size: 10px; color: #6b7280;">
            Architecture: ${getArchitecture(j)}
          </div>
        </div>`,
        { direction: "top", offset: [0, -size / 2 - 5], className: "custom-tooltip" }
      );

      marker.on("click", () => setSelected(j));
      newMarkers.push(marker);
    });

    setMarkers(newMarkers);
  }, [mapInstance, L, activeDim]);

  useEffect(() => {
    updateMarkers();
  }, [updateMarkers]);

  const subDims = pppSubDimensions[activeDim];

  return (
    <div className="space-y-0">
      {/* PPP Parliament Selector */}
      <div className="bg-neutral-950 border-b border-neutral-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <p className="text-neutral-400 text-xs uppercase tracking-widest mb-1">
              Select Governance Dimension
            </p>
            <p className="text-neutral-500 text-xs">
              The map updates to show each country&rsquo;s regulatory intensity for the selected dimension
            </p>
          </div>

          <div className="flex justify-center gap-3">
            {(["people", "processes", "platforms"] as Dimension[]).map((dim) => {
              const meta = dimensionMeta[dim];
              const isActive = activeDim === dim;
              return (
                <button
                  key={dim}
                  onClick={() => setActiveDim(dim)}
                  className={`relative group px-6 py-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-neutral-800 shadow-lg scale-105"
                      : "bg-neutral-900 hover:bg-neutral-850 hover:scale-102"
                  }`}
                  style={isActive ? { boxShadow: `0 0 20px ${meta.color}30, 0 0 40px ${meta.color}10` } : {}}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <div
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full"
                      style={{ backgroundColor: meta.color }}
                    />
                  )}
                  <div className="text-2xl mb-1">{meta.icon}</div>
                  <div
                    className={`text-sm font-bold tracking-wide ${isActive ? "text-white" : "text-neutral-400"}`}
                    style={isActive ? { color: meta.color } : {}}
                  >
                    {meta.label}
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-1 max-w-[140px] leading-tight">
                    {meta.description.split(",").slice(0, 2).join(",")}...
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Map + Side Panel */}
      <div className="flex flex-col lg:flex-row" style={{ height: "calc(100vh - 280px)", minHeight: "500px" }}>
        {/* Map */}
        <div className="flex-1 relative">
          <div id="regulation-map" className="w-full h-full bg-neutral-900" />

          {/* Legend overlay */}
          <div className="absolute top-4 left-4 bg-neutral-900/90 backdrop-blur border border-neutral-700 rounded-lg p-3 z-[500]">
            <p className="text-[10px] text-neutral-400 uppercase tracking-wider mb-2 font-semibold">
              Marker Size &amp; Intensity
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: dimensionMeta[activeDim].color, opacity: 1 }} />
                <span className="text-[10px] text-neutral-300">All mandatory</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: dimensionMeta[activeDim].color, opacity: 0.5 }} />
                <span className="text-[10px] text-neutral-300">Partial</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-neutral-500 opacity-40" />
                <span className="text-[10px] text-neutral-300">None</span>
              </div>
            </div>
          </div>

          {/* Stats overlay */}
          <div className="absolute bottom-4 left-4 bg-neutral-900/90 backdrop-blur border border-neutral-700 rounded-lg p-3 z-[500]">
            <p className="text-[10px] text-neutral-400 uppercase tracking-wider mb-1 font-semibold">
              {dimensionMeta[activeDim].label} Dimension
            </p>
            <div className="flex gap-4 text-xs">
              <div>
                <span className="font-bold text-white">{jurisdictions.filter((j) => getMandatoryCount(j, activeDim) > 0).length}</span>
                <span className="text-neutral-400"> with mandatory</span>
              </div>
              <div>
                <span className="font-bold text-white">{getTotalCount(activeDim)}</span>
                <span className="text-neutral-400"> sub-dimensions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="w-full lg:w-96 bg-neutral-50 border-l border-neutral-200 overflow-y-auto">
          {selected ? (
            <div className="p-5">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">{selected.name}</h3>
                  <p className="text-xs text-neutral-500 italic">{selected.philosophy}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-neutral-400 hover:text-neutral-600 p-1"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Architecture badge */}
              <div className="mb-4 px-3 py-2 bg-neutral-100 border border-neutral-200 rounded-lg">
                <p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-0.5">Regulatory Architecture</p>
                <p className="text-sm font-semibold text-neutral-800">{getArchitecture(selected)}</p>
              </div>

              {/* PPP Overview bars */}
              <div className="mb-5 space-y-2">
                {(["people", "processes", "platforms"] as Dimension[]).map((dim) => {
                  const m = getMandatoryCount(selected, dim);
                  const t = getTotalCount(dim);
                  const pct = (m / t) * 100;
                  const meta = dimensionMeta[dim];
                  const isActive2 = activeDim === dim;
                  return (
                    <button
                      key={dim}
                      onClick={() => setActiveDim(dim)}
                      className={`w-full text-left p-2 rounded-lg transition-all ${
                        isActive2 ? "bg-white border-2 shadow-sm" : "bg-neutral-100 border border-transparent hover:bg-white"
                      }`}
                      style={isActive2 ? { borderColor: meta.color } : {}}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold" style={isActive2 ? { color: meta.color } : { color: "#525252" }}>
                          {meta.label}
                        </span>
                        <span className="text-xs text-neutral-500">{m}/{t} mandatory</span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-1.5">
                        <div className="h-1.5 rounded-full transition-all duration-500" style={{ width: `${pct}%`, backgroundColor: meta.color }} />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active dimension detail */}
              <div className={`border-t-2 rounded-b-lg pt-4 ${dimensionMeta[activeDim].border}`}>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: dimensionMeta[activeDim].color }}>
                  {dimensionMeta[activeDim].label} Sub-dimensions
                </h4>
                <div className="space-y-2">
                  {subDims.map((sd) => {
                    const dimData = selected.ppp[activeDim] as Record<string, { level: "Mandatory" | "Recommended" | "Absent"; detail: string }>;
                    const rating = dimData[sd.key];
                    return (
                      <div key={sd.key} className="bg-white border border-neutral-100 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono text-neutral-400">{sd.code}</span>
                            <span className="text-xs font-medium text-neutral-800">{sd.label}</span>
                          </div>
                          <span
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: rating.level === "Mandatory" ? `${dimensionMeta[activeDim].color}20` : rating.level === "Recommended" ? "#fef3c7" : "#f3f4f6",
                              color: rating.level === "Mandatory" ? dimensionMeta[activeDim].color : rating.level === "Recommended" ? "#92400e" : "#9ca3af",
                            }}
                          >
                            {rating.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-500 leading-relaxed">{rating.detail}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Frameworks */}
              <div className="mt-5 pt-4 border-t border-neutral-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                  Regulatory Frameworks
                </h4>
                {selected.frameworks.map((f) => (
                  <div key={f.name} className="mb-3 last:mb-0">
                    {f.url ? (
                      <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-700 hover:underline">
                        {f.name} &#8599;
                      </a>
                    ) : (
                      <p className="text-sm text-neutral-700">{f.name}</p>
                    )}
                    <p className="text-xs text-neutral-400">{f.status}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-5 flex flex-col items-center justify-center h-full text-center">
              <div className="w-16 h-16 rounded-full bg-neutral-200 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-700 mb-1">Select a Country</h3>
              <p className="text-sm text-neutral-500 max-w-xs">
                Click on any marker on the map to explore its regulatory profile across the {dimensionMeta[activeDim].label} dimension.
              </p>
              <div className="mt-6 w-full space-y-1.5">
                {jurisdictions.map((j) => (
                  <button
                    key={j.id}
                    onClick={() => setSelected(j)}
                    className="w-full flex items-center justify-between px-3 py-2 text-left rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-neutral-200 transition-all"
                  >
                    <div>
                      <span className="text-sm font-medium text-neutral-700">{j.name}</span>
                      <span className="text-[10px] text-neutral-400 ml-2">{j.region}</span>
                    </div>
                    <span className="text-xs font-mono font-semibold" style={{ color: dimensionMeta[activeDim].color }}>
                      {getMandatoryCount(j, activeDim)}M
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function MapPage() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />
      <style>{`
        .custom-tooltip {
          background: rgba(23, 23, 23, 0.95) !important;
          border: 1px solid rgba(255,255,255,0.1) !important;
          border-radius: 8px !important;
          padding: 8px 12px !important;
          color: white !important;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3) !important;
        }
        .custom-tooltip .leaflet-tooltip-tip {
          border-top-color: rgba(23, 23, 23, 0.95) !important;
        }
        .leaflet-container {
          background: #0a0a0a !important;
        }
      `}</style>
      <MapComponent />
    </>
  );
}
