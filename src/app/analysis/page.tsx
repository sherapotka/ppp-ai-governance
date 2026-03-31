"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import PPPBadge from "@/components/PPPBadge";
import { jurisdictions, pppSubDimensions } from "@/data/regulations";

type Dimension = "people" | "processes" | "platforms";

const dimensionColors: Record<Dimension, string> = {
  people: "border-blue-500 bg-blue-50",
  processes: "border-amber-500 bg-amber-50",
  platforms: "border-emerald-500 bg-emerald-50",
};

const dimensionLabels: Record<Dimension, string> = {
  people: "People",
  processes: "Processes",
  platforms: "Platforms",
};

const dimensionDescriptions: Record<Dimension, string> = {
  people:
    "The People dimension examines how regulatory frameworks address the human element of AI governance: who is responsible, who oversees AI systems, who is affected, and what rights and obligations apply to human actors throughout the AI lifecycle.",
  processes:
    "The Processes dimension examines the governance procedures and compliance mechanisms that regulatory frameworks require or recommend: how risks are assessed, how systems are audited, and how transparency and accountability are operationalized.",
  platforms:
    "The Platforms dimension examines the technical and infrastructural requirements that regulatory frameworks impose on AI systems themselves: how systems are classified, what data governance standards apply, and what safety and robustness requirements must be met.",
};

const ratingExplanations = [
  {
    level: "Mandatory" as const,
    color: "bg-emerald-100 text-emerald-800 border-emerald-200",
    meaning: "The framework imposes a legally binding requirement with specified obligations. Non-compliance may result in enforcement action or penalties.",
  },
  {
    level: "Recommended" as const,
    color: "bg-amber-50 text-amber-800 border-amber-200",
    meaning: "The framework officially encourages or expects this practice but does not impose a binding legal obligation. Adoption is voluntary.",
  },
  {
    level: "Absent" as const,
    color: "bg-neutral-100 text-neutral-500 border-neutral-200",
    meaning: "The framework does not address this sub-dimension. No provisions, guidance, or recommendations are included.",
  },
];

export default function AnalysisPage() {
  const [activeDimension, setActiveDimension] = useState<Dimension>("people");
  const [selectedJurisdiction, setSelectedJurisdiction] = useState<string | null>(null);

  const subDims = pppSubDimensions[activeDimension];

  return (
    <>
      <PageHeader
        title="Comparative Analysis"
        subtitle="PPP-based regulatory comparison across jurisdictions"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Dimension Tabs */}
        <div className="flex gap-2 mb-8">
          {(["people", "processes", "platforms"] as Dimension[]).map((dim) => (
            <button
              key={dim}
              onClick={() => setActiveDimension(dim)}
              className={`px-5 py-2.5 rounded text-sm font-semibold transition-colors ${
                activeDimension === dim
                  ? "bg-primary-900 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {dimensionLabels[dim]}
            </button>
          ))}
        </div>

        {/* Dimension Description */}
        <div className={`rounded-lg p-5 mb-6 border-l-4 ${dimensionColors[activeDimension]}`}>
          <p className="text-sm text-neutral-700 leading-relaxed">
            {dimensionDescriptions[activeDimension]}
          </p>
        </div>

        {/* Rating Legend */}
        <div className="mb-8 bg-neutral-50 border border-neutral-200 rounded-lg p-5">
          <h3 className="text-sm font-semibold text-neutral-900 mb-3">
            How to Read This Matrix
          </h3>
          <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
            Each cell indicates whether a jurisdiction&rsquo;s regulatory framework addresses the given sub-dimension, and at what level of obligation. Click any jurisdiction name to view detailed provision references.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {ratingExplanations.map((r) => (
              <div key={r.level} className="flex items-start gap-3">
                <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded border flex-shrink-0 mt-0.5 ${r.color}`}>
                  {r.level}
                </span>
                <p className="text-xs text-neutral-600 leading-relaxed">{r.meaning}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparative Matrix Table */}
        <div className="overflow-x-auto border border-neutral-200 rounded-lg">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-neutral-50 border-b border-neutral-200">
                <th className="text-left py-3 px-4 font-semibold text-neutral-900 sticky left-0 bg-neutral-50 min-w-[180px]">
                  Sub-dimension
                </th>
                {jurisdictions.map((j) => (
                  <th
                    key={j.id}
                    className="text-center py-3 px-3 font-semibold text-neutral-900 min-w-[120px]"
                  >
                    <button
                      onClick={() =>
                        setSelectedJurisdiction(
                          selectedJurisdiction === j.id ? null : j.id
                        )
                      }
                      className="hover:text-primary-700 transition-colors"
                    >
                      {j.name}
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {subDims.map((sd, idx) => (
                <tr
                  key={sd.key}
                  className={`border-b border-neutral-100 ${
                    idx % 2 === 0 ? "bg-white" : "bg-neutral-50/50"
                  }`}
                >
                  <td className="py-3 px-4 font-medium text-neutral-800 sticky left-0 bg-inherit">
                    <span className="text-xs font-mono text-neutral-400 mr-1.5">
                      {sd.code}
                    </span>
                    {sd.label}
                  </td>
                  {jurisdictions.map((j) => {
                    const dimData = j.ppp[activeDimension] as Record<string, { level: "Mandatory" | "Recommended" | "Absent"; detail: string }>;
                    const rating = dimData[sd.key];
                    return (
                      <td key={j.id} className="py-3 px-3 text-center">
                        <PPPBadge level={rating.level} />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-neutral-400 mt-3">
          Click a jurisdiction name to view its detailed profile below.
        </p>

        {/* Selected Jurisdiction Detail */}
        {selectedJurisdiction && (
          <div className="mt-10">
            {(() => {
              const j = jurisdictions.find(
                (jur) => jur.id === selectedJurisdiction
              );
              if (!j) return null;
              return (
                <div className="border border-neutral-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900">
                        {j.name}
                      </h3>
                      <p className="text-sm text-neutral-500 italic">
                        {j.philosophy}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedJurisdiction(null)}
                      className="text-neutral-400 hover:text-neutral-600 text-sm"
                    >
                      Close
                    </button>
                  </div>

                  {(["people", "processes", "platforms"] as Dimension[]).map(
                    (dim) => (
                      <div key={dim} className="mb-6 last:mb-0">
                        <h4
                          className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
                            dim === "people"
                              ? "text-blue-700"
                              : dim === "processes"
                              ? "text-amber-700"
                              : "text-emerald-700"
                          }`}
                        >
                          {dimensionLabels[dim]}
                        </h4>
                        <div className="space-y-2">
                          {pppSubDimensions[dim].map((sd) => {
                            const dimData = j.ppp[dim] as Record<string, { level: "Mandatory" | "Recommended" | "Absent"; detail: string }>;
                            const rating = dimData[sd.key];
                            return (
                              <div
                                key={sd.key}
                                className="flex items-start gap-3 text-sm"
                              >
                                <span className="font-mono text-xs text-neutral-400 w-8 flex-shrink-0 mt-0.5">
                                  {sd.code}
                                </span>
                                <PPPBadge level={rating.level} />
                                <span className="text-neutral-600">
                                  {rating.detail}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )
                  )}
                </div>
              );
            })()}
          </div>
        )}

        {/* Summary Statistics */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-neutral-900 mb-6">
            Coverage Summary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(["people", "processes", "platforms"] as Dimension[]).map((dim) => {
              let mandatory = 0;
              let recommended = 0;
              let absent = 0;

              jurisdictions.forEach((j) => {
                const dimData = j.ppp[dim] as Record<string, { level: string }>;
                Object.values(dimData).forEach((rating) => {
                  if (rating.level === "Mandatory") mandatory++;
                  else if (rating.level === "Recommended") recommended++;
                  else absent++;
                });
              });

              const total = mandatory + recommended + absent;

              return (
                <div
                  key={dim}
                  className={`border-t-4 rounded-lg p-5 ${dimensionColors[dim]}`}
                >
                  <h3 className="font-semibold text-neutral-900 mb-3">
                    {dimensionLabels[dim]}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-600">Mandatory</span>
                      <span className="font-semibold text-emerald-700">
                        {mandatory} ({Math.round((mandatory / total) * 100)}%)
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-600">Recommended</span>
                      <span className="font-semibold text-amber-700">
                        {recommended} ({Math.round((recommended / total) * 100)}%)
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-600">Absent</span>
                      <span className="font-semibold text-neutral-500">
                        {absent} ({Math.round((absent / total) * 100)}%)
                      </span>
                    </div>
                    {/* Visual bar */}
                    <div className="flex h-2 rounded-full overflow-hidden mt-2">
                      <div
                        className="bg-emerald-500"
                        style={{ width: `${(mandatory / total) * 100}%` }}
                      />
                      <div
                        className="bg-amber-400"
                        style={{ width: `${(recommended / total) * 100}%` }}
                      />
                      <div
                        className="bg-neutral-200"
                        style={{ width: `${(absent / total) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
