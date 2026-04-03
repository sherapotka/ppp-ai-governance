import PageHeader from "@/components/PageHeader";

export default function MethodologyPage() {
  return (
    <>
      <PageHeader
        title="Methodology"
        subtitle="Qualitative comparative documentary analysis with AI-assisted coding validation"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Research Design */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            Research Design
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-6">
            The survey employs a qualitative comparative documentary analysis
            structured in three phases. Twelve regulatory documents across 10
            jurisdictions are systematically coded against the PPP framework,
            producing 170 classifications that are independently validated
            through an AI-assisted coding pipeline.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                phase: "Phase 1",
                title: "Document Collection",
                desc: "Assemble the primary corpus of 12 regulatory instruments across 10 jurisdictions, selected for regulatory significance, typological diversity, and geographic coverage.",
              },
              {
                phase: "Phase 2",
                title: "Structured Coding",
                desc: "Apply the PPP coding scheme (17 sub-dimensions) to each document. Rate each as Mandatory, Recommended, or Absent with provision-level evidence.",
              },
              {
                phase: "Phase 3",
                title: "Comparative Analysis",
                desc: "Construct a jurisdiction \u00d7 sub-dimension matrix. Analyze within-jurisdiction profiles, cross-jurisdictional patterns, and interdependencies.",
              },
            ].map((p) => (
              <div
                key={p.phase}
                className="border border-neutral-200 rounded-lg p-5"
              >
                <p className="text-xs font-semibold text-primary-700 uppercase tracking-wider mb-1">
                  {p.phase}
                </p>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Document Selection */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            Document Selection Criteria
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-neutral-200">
                  <th className="text-left py-3 pr-4 font-semibold text-neutral-900">Criterion</th>
                  <th className="text-left py-3 pr-4 font-semibold text-neutral-900">Inclusion</th>
                  <th className="text-left py-3 font-semibold text-neutral-900">Exclusion</th>
                </tr>
              </thead>
              <tbody className="text-neutral-600">
                <tr className="border-b border-neutral-100">
                  <td className="py-3 pr-4 font-medium text-neutral-800">Document type</td>
                  <td className="py-3 pr-4">Binding legislation, executive directives, official policy frameworks, intergovernmental standards</td>
                  <td className="py-3">Draft proposals, academic commentary, media reports</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 pr-4 font-medium text-neutral-800">Temporal scope</td>
                  <td className="py-3 pr-4">Instruments adopted or in force as of early 2026</td>
                  <td className="py-3">Expired or fully superseded instruments</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 pr-4 font-medium text-neutral-800">Language</td>
                  <td className="py-3 pr-4">English originals or official translations</td>
                  <td className="py-3">Documents without authoritative English versions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Coding Procedure */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            Coding Procedure
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Each regulatory document was coded against all 17 PPP sub-dimensions.
            For each sub-dimension, the coding captured:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Presence / Absence", desc: "Whether the regulatory instrument addresses this sub-dimension." },
              { title: "Regulatory Intensity", desc: "Mandatory (binding obligation), Recommended (encouraged but not binding), or Absent (not addressed)." },
              { title: "Provision Detail", desc: "Specific articles, sections, or clauses corresponding to the sub-dimension." },
              { title: "Textual Summary", desc: "Brief description of the provision\u2019s content and scope." },
            ].map((item) => (
              <div key={item.title} className="bg-neutral-50 border border-neutral-100 rounded-lg p-4">
                <h3 className="font-semibold text-neutral-900 text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI-Assisted Coding — Full Results */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            AI-Assisted Coding: Validation Experiment
          </h2>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-6">
            <p className="text-neutral-700 leading-relaxed mb-4">
              All 170 classifications (17 sub-dimensions &times; 10 jurisdictions)
              were independently coded by a large language model and compared
              against manual expert coding. This serves as both a validation
              instrument and a methodological contribution demonstrating the
              viability of AI-augmented regulatory analysis.
            </p>

            {/* Overall Result */}
            <div className="bg-white border border-blue-200 rounded-lg p-5 mb-6 text-center">
              <p className="text-4xl font-bold text-primary-700">87.6%</p>
              <p className="text-sm text-neutral-600 mt-1">Overall agreement across 170 classifications</p>
            </div>

            {/* By Jurisdiction Table */}
            <h3 className="font-semibold text-neutral-900 text-sm mb-3">
              Agreement by Jurisdiction
            </h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-blue-200">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-900">Jurisdiction</th>
                    <th className="text-center py-2 px-2 font-semibold text-neutral-900">Agree</th>
                    <th className="text-center py-2 px-2 font-semibold text-neutral-900">Disagree</th>
                    <th className="text-center py-2 font-semibold text-neutral-900">Rate</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600">
                  {[
                    { name: "EU AI Act", agree: 17, disagree: 0, rate: "100.0%" },
                    { name: "Japan AI Promotion Act", agree: 16, disagree: 1, rate: "94.1%" },
                    { name: "OECD AI Principles", agree: 16, disagree: 1, rate: "94.1%" },
                    { name: "UNESCO Recommendation", agree: 16, disagree: 1, rate: "94.1%" },
                    { name: "Colorado AI Act", agree: 15, disagree: 2, rate: "88.2%" },
                    { name: "China (combined)", agree: 15, disagree: 2, rate: "88.2%" },
                    { name: "Singapore Framework", agree: 15, disagree: 2, rate: "88.2%" },
                    { name: "NIST AI RMF 1.0", agree: 13, disagree: 4, rate: "76.5%" },
                    { name: "Canada DADM", agree: 13, disagree: 4, rate: "76.5%" },
                    { name: "UK White Paper", agree: 13, disagree: 4, rate: "76.5%" },
                  ].map((row) => (
                    <tr key={row.name} className="border-b border-neutral-100">
                      <td className="py-2 pr-4 text-neutral-800">{row.name}</td>
                      <td className="py-2 px-2 text-center">{row.agree}/17</td>
                      <td className="py-2 px-2 text-center">{row.disagree}</td>
                      <td className="py-2 text-center font-medium">{row.rate}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-blue-200 font-semibold text-neutral-900">
                    <td className="py-2 pr-4">Overall</td>
                    <td className="py-2 px-2 text-center">149/170</td>
                    <td className="py-2 px-2 text-center">21</td>
                    <td className="py-2 text-center">87.6%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* By Legal Form & Dimension */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold text-neutral-900 text-sm mb-3">Agreement by Legal Form</h3>
                <div className="space-y-2">
                  {[
                    { label: "International standards", rate: 94.1, n: 34 },
                    { label: "Binding legislation", rate: 92.6, n: 68 },
                    { label: "Voluntary frameworks", rate: 88.2, n: 17 },
                    { label: "Directives / policy", rate: 76.5, n: 51 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs text-neutral-600 mb-1">
                        <span>{item.label} (n={item.n})</span>
                        <span className="font-semibold">{item.rate}%</span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: `${item.rate}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 text-sm mb-3">Agreement by PPP Dimension</h3>
                <div className="space-y-2">
                  {[
                    { label: "People (P1\u2013P5)", rate: 90.0, n: 50, color: "bg-blue-500" },
                    { label: "Platforms (PL1\u2013PL6)", rate: 88.3, n: 60, color: "bg-emerald-500" },
                    { label: "Processes (PR1\u2013PR6)", rate: 85.0, n: 60, color: "bg-amber-500" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs text-neutral-600 mb-1">
                        <span>{item.label} (n={item.n})</span>
                        <span className="font-semibold">{item.rate}%</span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-2">
                        <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.rate}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Disagreement Patterns */}
            <h3 className="font-semibold text-neutral-900 text-sm mb-3">
              Disagreement Patterns (21 disagreements)
            </h3>
            <div className="space-y-3">
              {[
                { pattern: "AI overrates coverage", count: "9/21", desc: "The LLM classified provisions as present where the manual coder judged them too tangential or indirect to constitute substantive coverage." },
                { pattern: "AI underrates coverage", count: "7/21", desc: "The LLM coded provisions as Absent where the manual coder found them indirectly present, particularly for infrastructure standards (PL2)." },
                { pattern: "Intensity confusion", count: "5/21", desc: "The LLM disagreed on the Mandatory/Recommended boundary for provisions using strong normative language without explicit penalties." },
              ].map((item) => (
                <div key={item.pattern} className="bg-white border border-blue-200 rounded p-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">{item.count}</span>
                    <h4 className="text-sm font-semibold text-neutral-900">{item.pattern}</h4>
                  </div>
                  <p className="text-sm text-neutral-600">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Key Insight */}
            <div className="mt-6 p-4 bg-primary-50 border border-primary-200 rounded-lg">
              <p className="text-sm text-neutral-700 leading-relaxed">
                <strong className="text-primary-800">Key finding:</strong> Agreement
                is predicted by regulatory text legibility &mdash; the degree to which
                obligations specify identifiable duty-holders, enumerated actions, and
                explicit conditions &mdash; rather than by document complexity, subject
                matter, or jurisdiction. The most complex document (EU AI Act, 113 articles)
                achieves 100% agreement; shorter voluntary frameworks achieve 76.5%.
              </p>
            </div>
          </div>
        </section>

        {/* Limitations */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            Methodological Limitations
          </h2>
          <ul className="space-y-2">
            {[
              "Single-coder design constrains inter-coder reliability; mitigated by documented coding decisions with provision-level evidence and AI-assisted validation (87.6% agreement).",
              "The three-level coding scale (Mandatory / Recommended / Absent) collapses substantial within-category variation. The EU\u2019s five-article GPAI regime and China\u2019s single-regulation approach both receive a Mandatory rating.",
              "The survey captures regulatory design as of early 2026, not implementation or enforcement in practice.",
              "Reliance on English-language documents may not fully capture the intent of instruments originally drafted in other languages, particularly Chinese regulatory texts.",
              "The ten-jurisdiction scope excludes significant regulatory activity in Latin America, South Asia, and Africa.",
            ].map((lim, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                <span className="text-neutral-400 mt-1">&bull;</span>
                {lim}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
