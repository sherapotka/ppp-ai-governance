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
            The survey examines regulatory frameworks across ten jurisdictions
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

      {/* Key Findings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">
            Key Findings
          </h2>
          <p className="text-neutral-600 mb-10 max-w-2xl">
            Two structural features account for substantial variation in regulatory
            coherence across the jurisdictions studied.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Finding 1: Classification Trigger */}
            <div className="border-l-4 border-emerald-500 bg-emerald-50 rounded-r-lg p-6">
              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                Classification as Regulatory Trigger
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                Jurisdictions with formal AI classification schemes exhibit a
                cascading obligation structure where a single taxonomic decision
                activates calibrated requirements across all three PPP dimensions.
              </p>
              <div className="flex gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-700">12</p>
                  <p className="text-xs text-neutral-500">avg. mandatory provisions<br/>with classification</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-neutral-400">0.2</p>
                  <p className="text-xs text-neutral-500">avg. mandatory provisions<br/>without classification</p>
                </div>
              </div>
              <p className="text-xs text-neutral-500 mt-4 italic">
                Observed in EU, China, Colorado, Canada (cascading) vs. UK, Singapore, Japan, OECD, UNESCO (flat)
              </p>
            </div>

            {/* Finding 2: Institutional Creation Threshold */}
            <div className="border-l-4 border-blue-500 bg-blue-50 rounded-r-lg p-6">
              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                Institutional Creation Threshold
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                Jurisdictions converge on provisions implementable through existing
                institutions but diverge on provisions requiring new governance
                infrastructure &mdash; independent of regulatory philosophy.
              </p>
              <div className="flex gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-700">76%</p>
                  <p className="text-xs text-neutral-500">adaptation provisions<br/>addressed</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-neutral-400">27%</p>
                  <p className="text-xs text-neutral-500">creation provisions<br/>addressed</p>
                </div>
              </div>
              <p className="text-xs text-neutral-500 mt-4 italic">
                Creation provisions: certification (PR4), incident reporting (PR5), regulatory sandboxes (PR6)
              </p>
            </div>
          </div>

          {/* Research Questions */}
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">
            Research Questions &amp; Findings
          </h2>
          <div className="space-y-5 max-w-4xl">
            {[
              {
                question: "How do major AI regulatory frameworks distribute requirements across People, Processes, and Platforms dimensions?",
                result: "The EU is the only jurisdiction with mandatory coverage across all 17 sub-dimensions (17M). Among binding frameworks, mandatory coverage ranges from 17 (EU) to 1 (Japan). The three voluntary/principles-based frameworks (UK, Singapore, Japan) converge on 0\u20131 mandatory and 8\u201311 recommended provisions.",
              },
              {
                question: "What regulatory philosophies underpin different frameworks, and how do they shape PPP emphasis?",
                result: "Six regulatory philosophies identified. Philosophy predicts which PPP dimension receives emphasis (rights-based \u2192 People; state-directed \u2192 Platforms), but does not predict total coverage \u2014 which is determined by architectural features.",
              },
              {
                question: "On which PPP sub-dimensions do frameworks converge or diverge most?",
                result: "Highest convergence: transparency (PR3) and accountability (P2) are addressed by all 10 jurisdictions. Highest divergence: GPAI provisions (PL6), certification (PR4), and content labeling (PL5) are mandatory in at most 2 jurisdictions.",
              },
              {
                question: "How do interdependencies between PPP dimensions manifest across regimes?",
                result: "AI system classification (PL1) functions as a cross-dimensional regulatory trigger. Jurisdictions with classification (EU, China, Colorado, Canada) average 11.5 mandatory provisions; those without average 0.2.",
              },
              {
                question: "What gaps emerge, and what do they imply for international harmonization?",
                result: "Five critical gaps: GPAI regulation (PL6), certification (PR4), incident reporting (PR5), content labeling (PL5), and workforce training (P4). These are bounded by the institutional creation threshold \u2014 they require new governance infrastructure that most jurisdictions have not built.",
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
                      Finding
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
              People, Processes, Platforms: A Coding Framework and Comparative
              Benchmark for Global AI Governance
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
            This paper introduces a 17-sub-dimension coding framework for AI
            regulatory analysis, applies it across 10 jurisdictions (170
            classifications validated at 87.6% AI-human agreement), and identifies
            two structural determinants of regulatory coherence: classification as
            a cross-dimensional trigger and the institutional creation threshold.
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
