import PageHeader from "@/components/PageHeader";

export default function ProposalPage() {
  return (
    <>
      <PageHeader
        title="Research Proposal"
        subtitle="People, Processes, Platforms: A Coding Framework and Comparative Benchmark for Global AI Governance"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-neutral max-w-none">
          <section className="mb-10">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">
              Motivation and Problem Statement
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Artificial intelligence systems are increasingly embedded in
              consequential domains&mdash;public administration, healthcare,
              financial services, criminal justice, content moderation&mdash;where
              their outputs directly affect individuals and communities. This
              widespread deployment has generated a global regulatory response that
              is substantial in volume but heterogeneous in approach.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-4">
              The European Union has enacted the first comprehensive, binding AI
              legislation through the Artificial Intelligence Act (Regulation (EU)
              2024/1689). The United States has pursued a combination of executive
              directives, voluntary technical frameworks, and emergent state-level
              legislation. China has implemented binding regulations targeting
              specific AI application categories. Other
              jurisdictions&mdash;Canada, the United Kingdom, Singapore,
              Japan&mdash;occupy distinct positions along the spectrum from binding
              legislation to voluntary guidance.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              This regulatory heterogeneity creates analytical fragmentation,
              comparison without structure, and practical coordination barriers
              for organizations operating across borders. A structured comparative
              framework is needed&mdash;one that decomposes AI regulation into
              analytically meaningful dimensions and enables both descriptive
              mapping and analytical comparison.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">
              Research Gap
            </h2>
            <div className="space-y-4">
              {[
                {
                  label: "Gap 1",
                  title: "Absence of a common analytical framework",
                  text: "Most comparative studies organize analysis by jurisdiction rather than by regulatory dimension, limiting systematic cross-jurisdictional comparison at the provision level.",
                },
                {
                  label: "Gap 2",
                  title: "Limited operationalization of governance frameworks",
                  text: "The People\u2013Process\u2013Technology triad has been discussed conceptually in AI governance literature (Coglianese, 2023) but has not been operationalized into a formal coding instrument applied systematically across a broad set of frameworks.",
                },
                {
                  label: "Gap 3",
                  title: "Rapidly evolving regulatory landscape",
                  text: "The EU AI Act entered into force in August 2024, Japan enacted the AI Promotion Act in 2025, and the Colorado AI Act takes effect in 2026. Existing surveys do not capture these developments.",
                },
                {
                  label: "Gap 4",
                  title: "Insufficient attention to regulatory interdependencies",
                  text: "Few studies examine how provisions in one dimension condition or constrain provisions in another\u2014for example, how AI system classification determines the intensity of human oversight requirements.",
                },
              ].map((gap) => (
                <div
                  key={gap.label}
                  className="bg-neutral-50 border border-neutral-100 rounded-lg p-5"
                >
                  <h3 className="text-sm font-semibold text-primary-700 mb-1">
                    {gap.label}: {gap.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {gap.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">
              Research Questions
            </h2>
            <div className="space-y-3">
              {[
                "How do major AI regulatory frameworks distribute governance requirements across the People, Processes, and Platforms dimensions, and what configuration patterns emerge?",
                "What governance philosophies\u2014risk-based, rights-based, innovation-first, state-directed, promotional\u2014underpin different frameworks, and how do they shape PPP emphasis?",
                "On which PPP sub-dimensions do global AI regulatory frameworks exhibit the greatest convergence, and on which do they diverge most significantly?",
                "How do interdependencies between PPP dimensions manifest within and across regulatory regimes?",
                "What regulatory gaps emerge from the comparative analysis, and what do they imply for international harmonization?",
              ].map((rq, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="font-mono text-sm font-semibold text-primary-700 mt-0.5">
                    RQ{i + 1}
                  </span>
                  <p className="text-sm text-neutral-700 leading-relaxed">{rq}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">
              Expected Contributions
            </h2>
            <ol className="space-y-3 list-decimal list-inside">
              {[
                "A validated PPP coding framework with 17 sub-dimensions for comparative AI regulatory analysis, with 87.6% AI-human agreement across 170 classifications.",
                "A systematic provision-level comparative matrix of global AI governance covering 12 instruments across 10 jurisdictions as of early 2026.",
                "Identification of two structural determinants of regulatory coherence: classification as a cross-dimensional trigger and the institutional creation threshold.",
                "Five testable propositions about the relationship between regulatory architecture and governance outcomes.",
              ].map((c, i) => (
                <li key={i} className="text-sm text-neutral-700 leading-relaxed">
                  {c}
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-4">
              Key References
            </h2>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>Baldwin, R., Cave, M., &amp; Lodge, M. (2012). <em>Understanding Regulation</em> (2nd ed.). Oxford University Press.</li>
              <li>Coglianese, C. (2023). A People-and-Processes Approach to AI Governance. <em>Administrative and Regulatory Law News</em>, ABA.</li>
              <li>European Commission. (2024). Regulation (EU) 2024/1689 &mdash; The Artificial Intelligence Act.</li>
              <li>Leavitt, H. J. (1965). Applied Organizational Change in Industry. In March (Ed.), <em>Handbook of Organizations</em>.</li>
              <li>NIST. (2023). <em>AI Risk Management Framework (AI RMF 1.0)</em>. NIST AI 100-1.</li>
              <li>OECD. (2019, updated 2024). <em>OECD Principles on Artificial Intelligence</em>.</li>
              <li>UNESCO. (2021). <em>Recommendation on the Ethics of Artificial Intelligence</em>.</li>
            </ul>
          </section>
        </article>
      </div>
    </>
  );
}
