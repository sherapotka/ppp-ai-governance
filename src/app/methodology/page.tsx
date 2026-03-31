import PageHeader from "@/components/PageHeader";

export default function MethodologyPage() {
  return (
    <>
      <PageHeader
        title="Methodology"
        subtitle="Qualitative comparative documentary analysis with AI-assisted coding"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Research Design */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            Research Design
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-6">
            The survey employs a qualitative comparative documentary analysis
            structured in three phases. Each regulatory document in the corpus
            is systematically coded against the PPP framework to enable
            rigorous cross-jurisdictional comparison.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                phase: "Phase 1",
                title: "Document Collection",
                desc: "Assemble the primary corpus of regulatory texts, executive directives, policy frameworks, and intergovernmental standards.",
              },
              {
                phase: "Phase 2",
                title: "Structured Coding",
                desc: "Apply the PPP coding scheme (17 sub-dimensions) systematically to each regulatory document using deductive coding.",
              },
              {
                phase: "Phase 3",
                title: "Comparative Analysis",
                desc: "Construct and analyze a jurisdiction \u00d7 sub-dimension matrix to identify patterns, gaps, and interdependencies.",
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
                  <th className="text-left py-3 pr-4 font-semibold text-neutral-900">
                    Criterion
                  </th>
                  <th className="text-left py-3 pr-4 font-semibold text-neutral-900">
                    Inclusion
                  </th>
                  <th className="text-left py-3 font-semibold text-neutral-900">
                    Exclusion
                  </th>
                </tr>
              </thead>
              <tbody className="text-neutral-600">
                <tr className="border-b border-neutral-100">
                  <td className="py-3 pr-4 font-medium text-neutral-800">
                    Document type
                  </td>
                  <td className="py-3 pr-4">
                    Binding legislation, executive directives, official policy
                    frameworks, intergovernmental standards
                  </td>
                  <td className="py-3">
                    Draft proposals, academic commentary, media reports
                  </td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 pr-4 font-medium text-neutral-800">
                    Temporal scope
                  </td>
                  <td className="py-3 pr-4">
                    Instruments adopted or in force as of early 2026
                  </td>
                  <td className="py-3">Expired or fully superseded instruments</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 pr-4 font-medium text-neutral-800">
                    Language
                  </td>
                  <td className="py-3 pr-4">
                    English originals or official translations
                  </td>
                  <td className="py-3">
                    Documents without authoritative English versions
                  </td>
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
            Each regulatory document is coded against the 17 PPP sub-dimensions.
            For each sub-dimension, the coding captures:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Presence / Absence",
                desc: "Whether the regulatory instrument addresses this sub-dimension.",
              },
              {
                title: "Regulatory Intensity",
                desc: "Categorical rating: Mandatory (binding), Recommended (encouraged), or Absent (not addressed).",
              },
              {
                title: "Provision Detail",
                desc: "Specific articles, sections, or clauses corresponding to the sub-dimension.",
              },
              {
                title: "Textual Summary",
                desc: "Brief description of the provision\u2019s content and scope.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-neutral-50 border border-neutral-100 rounded-lg p-4"
              >
                <h3 className="font-semibold text-neutral-900 text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI-Assisted Coding */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            AI-Assisted Topic Analysis and Coding
          </h2>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
            <p className="text-neutral-700 leading-relaxed mb-4">
              To enhance the efficiency and consistency of the coding process,
              this project explores the use of AI-assisted analysis for
              regulatory document coding. Large language models are used to
              assist with the initial classification of regulatory provisions
              against the PPP sub-dimensions.
            </p>
            <h3 className="font-semibold text-neutral-900 text-sm mb-3">
              Validation Protocol
            </h3>
            <div className="space-y-3">
              {[
                "A pilot set of 2\u20133 frameworks is manually coded by the researcher to establish ground-truth classifications.",
                "The same documents are independently processed through the AI-assisted pipeline.",
                "Inter-method agreement is calculated to assess reliability.",
                "Where agreement is sufficient, AI-assisted coding is used for remaining frameworks with manual review and correction.",
                "All final coding decisions are human-verified. No classification is accepted without researcher validation.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="bg-blue-200 text-blue-800 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-neutral-700">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-white border border-blue-200 rounded text-sm text-neutral-600">
              <strong className="text-neutral-800">Important:</strong> AI
              assistance is used as a research tool to support human analysis,
              not as a replacement. All results are validated and the AI-assisted
              methodology is itself documented as a methodological contribution.
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
              "Single-coder design limits inter-coder reliability; mitigated by documenting coding decisions with textual evidence.",
              "The three-level intensity scale (Mandatory / Recommended / Absent) is deliberately coarse to enable cross-instrument comparison.",
              "Reliance on English-language documents may introduce bias for jurisdictions where the authoritative text is in another language.",
              "Documentary analysis examines regulatory design, not implementation or enforcement in practice.",
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
