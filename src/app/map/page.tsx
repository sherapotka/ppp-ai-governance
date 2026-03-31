"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import { jurisdictions } from "@/data/regulations";
import type { Jurisdiction } from "@/data/regulations";

function MapComponent() {
  const [L, setL] = useState<typeof import("leaflet") | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const [selected, setSelected] = useState<Jurisdiction | null>(null);

  useEffect(() => {
    import("leaflet").then((leaflet) => {
      setL(leaflet);
      setMapReady(true);
    });
  }, []);

  useEffect(() => {
    if (!mapReady || !L) return;

    const container = document.getElementById("regulation-map");
    if (!container) return;

    // Prevent re-initialization
    if ((container as HTMLElement & { _leaflet_id?: number })._leaflet_id) return;

    const map = L.map("regulation-map", {
      center: [30, 20],
      zoom: 2,
      minZoom: 2,
      maxZoom: 6,
      scrollWheelZoom: true,
    });

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    }).addTo(map);

    const colorMap: Record<string, string> = {
      "Comprehensive risk-based": "#059669",
      "Sector-based, innovation-driven": "#2563eb",
      "State-level risk-based": "#7c3aed",
      "State-directed comprehensive": "#dc2626",
      "Public-sector focused": "#0891b2",
      "Principles-based, pro-innovation": "#ca8a04",
      "Voluntary, innovation-first": "#ea580c",
      "Promotional, cooperative": "#db2777",
      "Normative-international": "#6b7280",
    };

    jurisdictions.forEach((j) => {
      const color = colorMap[j.philosophy] || "#6b7280";

      const icon = L.divIcon({
        className: "custom-marker",
        html: `<div style="
          width: 14px; height: 14px;
          background: ${color};
          border: 2px solid white;
          border-radius: 50%;
          box-shadow: 0 1px 3px rgba(0,0,0,0.3);
          cursor: pointer;
        "></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      });

      const marker = L.marker([j.lat, j.lng], { icon }).addTo(map);

      marker.bindPopup(
        `<div style="font-family: system-ui; min-width: 200px;">
          <strong style="font-size: 14px;">${j.name}</strong>
          <br/><span style="color: #737373; font-size: 12px; font-style: italic;">${j.philosophy}</span>
          <hr style="margin: 6px 0; border-color: #e5e5e5;"/>
          ${j.frameworks
            .map(
              (f) =>
                `<div style="margin-bottom: 4px;">
                  <div style="font-size: 12px; color: #404040;">${f.name}</div>
                  <div style="font-size: 11px; color: #a3a3a3;">${f.status}</div>
                </div>`
            )
            .join("")}
        </div>`,
        { maxWidth: 300 }
      );

      marker.on("click", () => {
        setSelected(j);
      });
    });

    return () => {
      map.remove();
    };
  }, [mapReady, L]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div
          id="regulation-map"
          className="w-full h-[500px] rounded-lg border border-neutral-200 bg-neutral-100"
        />
        {/* Legend */}
        <div className="mt-4 flex flex-wrap gap-3">
          {[
            { label: "Risk-based", color: "#059669" },
            { label: "Sector-based", color: "#2563eb" },
            { label: "State-directed", color: "#dc2626" },
            { label: "Principles-based", color: "#ca8a04" },
            { label: "Voluntary", color: "#ea580c" },
            { label: "Promotional", color: "#db2777" },
            { label: "International", color: "#6b7280" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5 text-xs text-neutral-600">
              <span
                className="w-3 h-3 rounded-full border border-white shadow-sm"
                style={{ backgroundColor: item.color }}
              />
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* Side Panel */}
      <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5 h-fit">
        {selected ? (
          <>
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-bold text-neutral-900">{selected.name}</h3>
              <button
                onClick={() => setSelected(null)}
                className="text-xs text-neutral-400 hover:text-neutral-600"
              >
                Clear
              </button>
            </div>
            <p className="text-xs text-neutral-500 italic mb-4">
              {selected.philosophy}
            </p>

            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
              Frameworks
            </h4>
            {selected.frameworks.map((f) => (
              <div key={f.name} className="mb-3 text-sm">
                <p className="text-neutral-700">{f.name}</p>
                <p className="text-xs text-neutral-400">{f.status}</p>
              </div>
            ))}

            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2 mt-4">
              PPP Overview
            </h4>
            {(["people", "processes", "platforms"] as const).map((dim) => {
              const dimData = selected.ppp[dim] as Record<string, { level: "Mandatory" | "Recommended" | "Absent" }>;
              const values = Object.values(dimData);
              const m = values.filter((v) => v.level === "Mandatory").length;
              const r = values.filter((v) => v.level === "Recommended").length;
              const a = values.filter((v) => v.level === "Absent").length;
              return (
                <div key={dim} className="mb-2">
                  <p className="text-xs font-medium text-neutral-700 capitalize mb-1">
                    {dim}
                  </p>
                  <div className="flex gap-2 text-xs">
                    <span className="text-emerald-700">{m} mandatory</span>
                    <span className="text-amber-700">{r} recommended</span>
                    <span className="text-neutral-400">{a} absent</span>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div className="text-center py-8">
            <p className="text-sm text-neutral-500">
              Click a marker on the map to view jurisdiction details.
            </p>
          </div>
        )}
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
      <PageHeader
        title="Geographic Visualization"
        subtitle="Explore AI regulatory frameworks across regions"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <MapComponent />
      </div>
    </>
  );
}
