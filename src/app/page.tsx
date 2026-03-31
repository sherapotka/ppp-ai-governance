import Link from "next/link";
import { jurisdictions } from "@/data/regulations";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary-300 text-sm font-medium uppercase tracking-wider mb-3">
            University of Victoria &middot; Department of Computer Science
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-4xl leading-tight">
            Governing AI Across Borders
          </h1>
          <p className="mt-4 text-xl text-primary-200 max-w-3xl leading-relaxed">
            A comparative survey of global AI regulatory frameworks through the
            People&ndash;Processes&ndash;Platforms analytical lens.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/analysis"
              className="bg-white text-primary-900 px-6 py-3 rounded font-semibold text-sm hover:bg-primary-50 transition-colors"
            >
              View Comparative Analysis
            </Link>
            <Link
              href="/proposal"
              className="border border-primary-400 text-primary-100 px-6 py-3 rounded font-semibold text-sm hover:bg-primary-800 transition-colors"
            >
              Read the Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* PPP Framework Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">
            The PPP Analytical Framework
          </h2>
          <p className="text-neutral-600 mb-10 max-w-2xl">
            Regulatory provisions are analyzed across three interdependent
            dimensions, each decomposed into codable sub-dimensions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "People",
                color: "border-blue-500",
                bg: "bg-blue-50",
                items: [
                  "Human oversight requirements",
                  "Accountability structures",
                  "Regulator and stakeholder roles",
                  "Workforce training and AI literacy",
                  "Affected persons' rights",
                ],
              },
              {
                title: "Processes",
                color: "border-amber-500",
                bg: "bg-amber-50",
                items: [
                  "Risk assessment",
                  "Auditing and compliance",
                  "Transparency requirements",
                  "Certification and governance",
                  "Incident reporting",
                  "Regulatory sandboxes",
                ],
              },
              {
                title: "Platforms",
                color: "border-emerald-500",
                bg: "bg-emerald-50",
                items: [
                  "AI system classification",
                  "Infrastructure and deployment",
                  "Data governance",
                  "Safety and robustness",
                  "Content labeling and provenance",
                  "GPAI / foundation model provisions",
                ],
              },
            ].map((dim) => (
              <div
                key={dim.title}
                className={`border-t-4 ${dim.color} ${dim.bg} rounded-lg p-6`}
              >
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  {dim.title}
                </h3>
                <ul className="space-y-2">
                  {dim.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-neutral-700 flex items-start"
                    >
                      <span className="text-neutral-400 mr-2 mt-0.5">&bull;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jurisdictions */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">
            Jurisdictions Under Study
          </h2>
          <p className="text-neutral-600 mb-10 max-w-2xl">
            The survey examines regulatory frameworks across nine jurisdictions
            and international initiatives, selected for regulatory significance,
            typological diversity, and geographic coverage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {jurisdictions.map((j) => (
              <div
                key={j.id}
                className="bg-white border border-neutral-200 rounded-lg p-5 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-neutral-900">{j.name}</h3>
                  <span className="text-xs bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded">
                    {j.region}
                  </span>
                </div>
                <p className="text-xs text-neutral-500 mb-3 italic">
                  {j.philosophy}
                </p>
                {j.frameworks.map((f) => (
                  <div key={f.name} className="mb-2 last:mb-0">
                    {f.url ? (
                      <a
                        href={f.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-700 hover:text-primary-900 hover:underline inline-flex items-center gap-1"
                      >
                        {f.name}
                        <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <p className="text-sm text-neutral-700">{f.name}</p>
                    )}
                    <p className="text-xs text-neutral-400">{f.status}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">
            Research Questions
          </h2>
          <div className="space-y-5 max-w-4xl">
            {[
              {
                question: "How do major AI regulatory frameworks distribute requirements across People, Processes, and Platforms dimensions?",
                result: "The EU AI Act is the only framework with mandatory provisions across all 17 sub-dimensions. The U.S. federal approach relies predominantly on recommended (voluntary) measures, while China concentrates mandatory provisions on Platforms and Processes, with lighter People-dimension requirements.",
              },
              {
                question: "What regulatory philosophies underpin different frameworks, and how do they shape PPP emphasis?",
                result: "Five distinct regulatory philosophies emerge: comprehensive risk-based (EU), sector-based innovation-driven (USA), state-directed (China), principles-based (UK, Singapore), and promotional (Japan). Risk-based regimes show the most balanced PPP distribution; innovation-first regimes skew toward voluntary Processes provisions.",
              },
              {
                question: "On which PPP sub-dimensions do frameworks converge or diverge most?",
                result: "Highest convergence: transparency requirements (PR3) and risk assessment (PR1) appear in nearly all frameworks. Highest divergence: GPAI/foundation model provisions (PL6), content labeling (PL5), and affected persons\u2019 rights (P5) vary dramatically across jurisdictions.",
              },
              {
                question: "How do interdependencies between PPP dimensions manifest across regimes?",
                result: "AI system classification (PL1) functions as a regulatory trigger: jurisdictions with formal risk tiers (EU, Colorado) tie People and Processes obligations directly to classification level. Jurisdictions without classification (UK, Singapore) show weaker cross-dimensional linkages.",
              },
              {
                question: "What gaps emerge, and what do they imply for international harmonization?",
                result: "Workforce training (P4), incident reporting (PR5), and infrastructure standards (PL2) are the most underaddressed sub-dimensions globally. Divergence on GPAI provisions and enforcement mechanisms presents the highest barriers to mutual recognition across jurisdictions.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-neutral-50 rounded-lg border border-neutral-100 overflow-hidden"
              >
                <div className="flex items-start gap-4 p-4">
                  <span className="text-sm font-mono font-semibold text-primary-700 whitespace-nowrap mt-0.5">
                    RQ{i + 1}
                  </span>
                  <p className="text-sm text-neutral-700 leading-relaxed font-medium">{item.question}</p>
                </div>
                <div className="bg-primary-50 border-t border-primary-100 px-4 py-3 ml-0">
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider whitespace-nowrap mt-0.5">
                      Expected
                    </span>
                    <p className="text-sm text-neutral-600 leading-relaxed">{item.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forthcoming Publication */}
      <section className="py-16 bg-primary-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-6">
            <span className="bg-amber-500 text-primary-950 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded flex-shrink-0 mt-0.5">
              Forthcoming
            </span>
            <h2 className="text-2xl font-bold tracking-tight">
              Publication
            </h2>
          </div>
          <div className="bg-primary-900/50 border border-primary-800 rounded-lg p-6 mb-6">
            <p className="text-primary-200 text-sm leading-relaxed mb-1 font-medium">
              Potka, S. &amp; Weber, J.
            </p>
            <p className="text-white text-lg font-semibold leading-snug mb-2">
              Governing AI Across Borders: A Comparative Survey of Global AI
              Regulatory Frameworks Through the People&ndash;Processes&ndash;Platforms
              Analytical Lens
            </p>
            <p className="text-primary-300 text-sm">
              Department of Computer Science, University of Victoria, 2026.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs bg-primary-800 text-primary-300 px-2 py-0.5 rounded">
                Survey Paper
              </span>
              <span className="text-xs bg-primary-800 text-primary-300 px-2 py-0.5 rounded">
                AI Governance
              </span>
              <span className="text-xs bg-primary-800 text-primary-300 px-2 py-0.5 rounded">
                Comparative Regulatory Analysis
              </span>
              <span className="text-xs bg-primary-800 text-primary-300 px-2 py-0.5 rounded">
                PPP Framework
              </span>
            </div>
          </div>
          <p className="text-primary-400 text-sm leading-relaxed mb-6">
            This paper presents a systematic comparative analysis of AI regulatory
            frameworks across nine jurisdictions using an operationalized
            People&ndash;Processes&ndash;Platforms coding scheme with 17 sub-dimensions.
            Target venues include ACM Computing Surveys, Government Information Quarterly,
            and Computer Law &amp; Security Review.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/analysis"
              className="bg-white text-primary-900 px-5 py-2.5 rounded font-semibold text-sm hover:bg-primary-50 transition-colors"
            >
              Preview Comparative Matrix
            </Link>
            <Link
              href="/proposal"
              className="border border-primary-600 text-primary-200 px-5 py-2.5 rounded font-semibold text-sm hover:bg-primary-900 transition-colors"
            >
              Read Full Proposal
            </Link>
            <Link
              href="/map"
              className="border border-primary-600 text-primary-200 px-5 py-2.5 rounded font-semibold text-sm hover:bg-primary-900 transition-colors"
            >
              Explore Interactive Map
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
