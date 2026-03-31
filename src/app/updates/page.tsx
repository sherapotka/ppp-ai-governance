import PageHeader from "@/components/PageHeader";
import { updates } from "@/data/regulations";

export default function UpdatesPage() {
  return (
    <>
      <PageHeader
        title="Regulatory Updates"
        subtitle="A living knowledge base tracking the evolving global AI governance landscape"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-10 text-sm text-amber-800">
          This page is maintained as an evolving record of significant
          regulatory developments. Entries are added as regulations are enacted,
          amended, or take effect. All information should be verified against
          primary sources.
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-neutral-200" />

          {updates.map((update, i) => (
            <div key={i} className="relative pl-12 pb-10 last:pb-0">
              {/* Dot */}
              <div className="absolute left-[11px] top-1 w-[10px] h-[10px] rounded-full bg-primary-700 border-2 border-white shadow-sm" />

              <div className="bg-white border border-neutral-200 rounded-lg p-5 hover:shadow-sm transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-medium bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded">
                    {update.category}
                  </span>
                  <time className="text-xs text-neutral-400 font-mono">
                    {update.date}
                  </time>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  {update.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {update.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-neutral-900 mb-6">
            Upcoming Milestones
          </h2>
          <div className="space-y-3">
            {[
              {
                date: "August 2026",
                event:
                  "EU AI Act: High-risk AI system obligations (Annex III) become applicable",
              },
              {
                date: "August 2027",
                event:
                  "EU AI Act: Annex I high-risk systems embedded in regulated products become applicable",
              },
            ].map((milestone, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-primary-50 border border-primary-100 rounded-lg p-4"
              >
                <span className="text-xs font-mono font-semibold text-primary-700 whitespace-nowrap mt-0.5">
                  {milestone.date}
                </span>
                <p className="text-sm text-neutral-700">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
