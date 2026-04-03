import PageHeader from "@/components/PageHeader";

export default function FindingsPage() {
  return (
    <>
      <PageHeader
        title="Findings"
        subtitle="Structural determinants of regulatory coherence"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">

        {/* Two Core Contributions */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-6">
            Two Structural Findings
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-8">
            Our analysis identifies two structural features that are associated
            with substantial variation in regulatory coherence across the
            jurisdictions studied. These features &mdash; the classification
            trigger and the institutional creation threshold &mdash; operate
            independently and together account for the observed patterns in our
            170-classification dataset.
          </p>

          {/* Finding 1 */}
          <div className="border-l-4 border-emerald-500 bg-emerald-50 rounded-r-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-neutral-900 mb-3">
              1. Classification as Cross-Dimensional Regulatory Trigger
            </h3>
            <p className="text-sm text-neutral-700 leading-relaxed mb-4">
              AI system classification (PL1) functions as a regulatory trigger
              &mdash; a Platforms-dimension provision that formally determines the
              regulatory intensity applied to People and Processes dimensions.
              The mechanism operates through three channels:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
              {[
                { title: "Obligation Activation", desc: "Classification creates discrete categories linked to specific obligation bundles across all PPP dimensions." },
                { title: "Proportionality Anchoring", desc: "Classification provides the formal basis for calibrating governance intensity to risk level." },
                { title: "Enforcement Gating", desc: "Classification determines which AI systems fall within mandatory regulatory scope." },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-emerald-200 rounded p-3">
                  <h4 className="text-xs font-bold text-emerald-800 mb-1">{item.title}</h4>
                  <p className="text-xs text-neutral-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <h4 className="font-semibold text-neutral-900 text-sm mb-3">
              Two Regulatory Architectures
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white border border-emerald-300 rounded-lg p-4">
                <h5 className="font-bold text-emerald-800 text-sm mb-2">Cascading Architecture</h5>
                <p className="text-xs text-neutral-600 mb-2">
                  Classification triggers calibrated obligations across all PPP
                  dimensions. Provisions are not merely present but calibrated to
                  classification level.
                </p>
                <p className="text-xs text-neutral-500 italic">EU, China, Colorado, Canada</p>
                <p className="text-2xl font-bold text-emerald-700 mt-2">Avg. 12 <span className="text-sm font-normal text-neutral-500">mandatory provisions</span></p>
              </div>
              <div className="bg-white border border-neutral-200 rounded-lg p-4">
                <h5 className="font-bold text-neutral-500 text-sm mb-2">Flat Architecture</h5>
                <p className="text-xs text-neutral-600 mb-2">
                  People, Processes, and Platforms provisions operate independently,
                  unanchored to system-level risk determinations. Intensity depends
                  on organizational judgment.
                </p>
                <p className="text-xs text-neutral-500 italic">US Federal, UK, Singapore, Japan, OECD, UNESCO</p>
                <p className="text-2xl font-bold text-neutral-400 mt-2">Avg. 0.2 <span className="text-sm font-normal text-neutral-500">mandatory provisions</span></p>
              </div>
            </div>

            <div className="bg-white border border-emerald-200 rounded p-3">
              <p className="text-xs text-neutral-600 leading-relaxed">
                <strong className="text-neutral-800">Key evidence:</strong> This
                difference is not explained by regulatory ambition. Canada&rsquo;s
                narrowly-scoped directive (federal government only) achieves higher
                coherence (8 mandatory) than the UK&rsquo;s economy-wide White Paper
                (0 mandatory), because Canada has classification and the UK does not.
              </p>
            </div>
          </div>

          {/* Finding 2 */}
          <div className="border-l-4 border-blue-500 bg-blue-50 rounded-r-lg p-6">
            <h3 className="text-lg font-bold text-neutral-900 mb-3">
              2. The Institutional Creation Threshold
            </h3>
            <p className="text-sm text-neutral-700 leading-relaxed mb-4">
              The 17 PPP sub-dimensions divide into two types based on the
              institutional capacity they require:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white border border-blue-200 rounded-lg p-4">
                <h5 className="font-bold text-blue-800 text-sm mb-2">Adaptation Provisions (14 sub-dimensions)</h5>
                <p className="text-xs text-neutral-600 mb-3">
                  Can be implemented by extending mandates of existing regulatory
                  bodies, adding requirements to existing compliance procedures,
                  or issuing guidance within established frameworks.
                </p>
                <p className="text-2xl font-bold text-blue-700">76% <span className="text-sm font-normal text-neutral-500">addressed (106/140)</span></p>
                <p className="text-xs text-neutral-500 mt-2">
                  Includes: oversight, accountability, risk assessment, transparency,
                  data governance, AI classification, safety, etc.
                </p>
              </div>
              <div className="bg-white border border-neutral-200 rounded-lg p-4">
                <h5 className="font-bold text-neutral-600 text-sm mb-2">Creation Provisions (3 sub-dimensions)</h5>
                <p className="text-xs text-neutral-600 mb-3">
                  Require building entirely new governance institutions:
                  certification bodies, incident databases, sandbox environments
                  with dedicated legal frameworks.
                </p>
                <p className="text-2xl font-bold text-neutral-400">27% <span className="text-sm font-normal text-neutral-500">addressed (8/30)</span></p>
                <p className="text-xs text-neutral-500 mt-2">
                  PR4 (Certification), PR5 (Incident reporting), PR6 (Regulatory sandboxes) &mdash;
                  mandatory only in the EU.
                </p>
              </div>
            </div>

            <div className="bg-white border border-blue-200 rounded p-3">
              <p className="text-xs text-neutral-600 leading-relaxed">
                <strong className="text-neutral-800">Implication:</strong> The
                voluntary ceiling (~65% sub-dimension coverage across UK, Singapore,
                OECD, UNESCO) exists not because voluntary frameworks lack ambition,
                but because non-binding instruments are structurally incapable of
                mandating the creation of new institutions. The most consequential
                barriers to AI governance harmonization may not be principled
                disagreements over values but differences in institutional creation
                capacity.
              </p>
            </div>
          </div>
        </section>

        {/* Convergence Tiers */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-6">
            Three-Tier Adoption Hierarchy
          </h2>
          <div className="space-y-4">
            {[
              {
                tier: "Tier 1",
                label: "Near-universal",
                color: "border-emerald-500 bg-emerald-50",
                tagColor: "bg-emerald-100 text-emerald-800",
                count: "9\u201310 jurisdictions",
                dims: "P1 (Oversight), P2 (Accountability), P3 (Regulator roles), PR1 (Risk assessment), PR3 (Transparency), PL3 (Data governance), PL4 (Safety)",
                note: "Emerging convergence on minimum AI governance requirements among the jurisdictions studied.",
              },
              {
                tier: "Tier 2",
                label: "Common but not universal",
                color: "border-amber-500 bg-amber-50",
                tagColor: "bg-amber-100 text-amber-800",
                count: "5\u20138 jurisdictions",
                dims: "P4 (Workforce training), P5 (Affected persons\u2019 rights), PR2 (Auditing), PL2 (Infrastructure)",
                note: "Coverage varies substantially in regulatory intensity.",
              },
              {
                tier: "Tier 3",
                label: "Sparse / emerging",
                color: "border-red-400 bg-red-50",
                tagColor: "bg-red-100 text-red-800",
                count: "1\u20134 jurisdictions (mandatory)",
                dims: "PR4 (Certification: 1/10), PR5 (Incident reporting: 2/10), PR6 (Sandboxes: 1/10), PL1 (Classification: 4/10), PL5 (Content labeling: 2/10), PL6 (GPAI: 2/10)",
                note: "The frontier of AI regulation. Greatest international divergence and highest barriers to harmonization.",
              },
            ].map((item) => (
              <div key={item.tier} className={`border-l-4 ${item.color} rounded-r-lg p-5`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${item.tagColor}`}>{item.tier}</span>
                  <span className="text-sm font-semibold text-neutral-900">{item.label}</span>
                  <span className="text-xs text-neutral-500">({item.count})</span>
                </div>
                <p className="text-sm text-neutral-700 mb-1">{item.dims}</p>
                <p className="text-xs text-neutral-500 italic">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Regulatory Typology */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-6">
            Regulatory Philosophy Typology
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-neutral-200">
                  <th className="text-left py-3 pr-4 font-semibold text-neutral-900">Philosophy</th>
                  <th className="text-left py-3 pr-4 font-semibold text-neutral-900">Jurisdiction(s)</th>
                  <th className="text-left py-3 pr-4 font-semibold text-neutral-900">PPP Profile</th>
                  <th className="text-left py-3 font-semibold text-neutral-900">Architecture</th>
                </tr>
              </thead>
              <tbody className="text-neutral-600">
                {[
                  { philosophy: "Comprehensive risk-based", jurisdictions: "EU", profile: "17M / 0R / 0A", arch: "Cascading + Institutional creation" },
                  { philosophy: "State-directed", jurisdictions: "China", profile: "13M / 2R / 2A", arch: "Cascading (partial institutional)" },
                  { philosophy: "Public-sector focused", jurisdictions: "Canada", profile: "8M / 2R / 7A", arch: "Cascading (no institutional creation)" },
                  { philosophy: "Sector-based decentralized", jurisdictions: "USA (Fed + CO)", profile: "8M / 14R / 12A", arch: "Hybrid (cascading + flat)" },
                  { philosophy: "Principles-based / voluntary", jurisdictions: "UK, Singapore, Japan", profile: "1M / 29R / 21A", arch: "Flat" },
                  { philosophy: "Normative-international", jurisdictions: "OECD, UNESCO", profile: "0M / 21R / 13A", arch: "Flat" },
                ].map((row) => (
                  <tr key={row.philosophy} className="border-b border-neutral-100">
                    <td className="py-3 pr-4 font-medium text-neutral-800">{row.philosophy}</td>
                    <td className="py-3 pr-4">{row.jurisdictions}</td>
                    <td className="py-3 pr-4 font-mono text-xs">{row.profile}</td>
                    <td className="py-3">{row.arch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Five Propositions */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-2">
            Derived Propositions
          </h2>
          <p className="text-neutral-600 mb-6 text-sm">
            Five testable propositions formalized from the comparative data.
          </p>
          <div className="space-y-4">
            {[
              {
                id: "P1",
                title: "Architectural Coherence",
                text: "The presence of a formal classification scheme is a stronger predictor of cross-dimensional regulatory coherence than regulatory philosophy, legal tradition, or the scope of the regulatory instrument.",
                evidence: "Jurisdictions with classification average 11.5 mandatory provisions regardless of scope; those without average 0.2.",
              },
              {
                id: "P2",
                title: "Institutional Creation Threshold",
                text: "Jurisdictions converge on provisions implementable through existing institutional capacity and diverge on provisions requiring new governance infrastructure \u2014 independent of regulatory philosophy or political system.",
                evidence: "Adaptation provisions addressed in 76% of cases; creation provisions in 27%. Pattern holds across all six regulatory philosophies.",
              },
              {
                id: "P3",
                title: "Voluntary Ceiling as Institutional Limit",
                text: "Voluntary frameworks plateau at 60\u201370% coverage because the provisions they fail to address require institutional commitments that non-binding instruments cannot generate.",
                evidence: "UK (10/17), Singapore (11/17), OECD (10/17), UNESCO (11/17) all omit PR4 and PR5; none mandates PR6.",
              },
              {
                id: "P4",
                title: "Philosophy\u2013Architecture Decoupling",
                text: "Regulatory philosophy predicts which PPP dimension receives emphasis, but does not predict total coverage \u2014 which is determined by architectural features rather than governance goals.",
                evidence: "China (state-directed, 13M) and EU (rights-based, 17M) differ in philosophy but converge on coverage. UK and EU share values but differ radically (0M vs 17M).",
              },
              {
                id: "P5",
                title: "Legibility Predicts AI-Coding Reliability",
                text: "The reliability of AI-assisted regulatory coding is determined by regulatory text legibility rather than document complexity, subject matter, or jurisdiction.",
                evidence: "Binding legislation: 92.6% agreement. Directives/policy: 76.5%. The most complex document (EU AI Act) achieves 100%.",
              },
            ].map((prop) => (
              <div key={prop.id} className="border border-neutral-200 rounded-lg overflow-hidden">
                <div className="p-4 bg-neutral-50">
                  <div className="flex items-start gap-3">
                    <span className="bg-primary-700 text-white text-xs font-bold px-2 py-0.5 rounded flex-shrink-0 mt-0.5">
                      {prop.id}
                    </span>
                    <div>
                      <h4 className="font-semibold text-neutral-900 text-sm mb-1">{prop.title}</h4>
                      <p className="text-sm text-neutral-700 leading-relaxed italic">{prop.text}</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white border-t border-neutral-100">
                  <p className="text-xs text-neutral-500">
                    <strong className="text-neutral-700">Evidence: </strong>{prop.evidence}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Robustness */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            Robustness Check: EU-Excluded Analysis
          </h2>
          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5">
            <p className="text-sm text-neutral-700 leading-relaxed mb-4">
              To verify that findings are not driven by the EU as an outlier,
              both patterns were re-examined with the EU excluded:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-neutral-200 rounded p-3 text-center">
                <p className="text-xs text-neutral-500 mb-1">Classification trigger (EU-excluded)</p>
                <p className="text-lg font-bold text-emerald-700">10.3 vs 0.2</p>
                <p className="text-xs text-neutral-500">mandatory provisions</p>
              </div>
              <div className="bg-white border border-neutral-200 rounded p-3 text-center">
                <p className="text-xs text-neutral-500 mb-1">Adaptation (EU-excluded)</p>
                <p className="text-lg font-bold text-blue-700">70%</p>
                <p className="text-xs text-neutral-500">provisions addressed</p>
              </div>
              <div className="bg-white border border-neutral-200 rounded p-3 text-center">
                <p className="text-xs text-neutral-500 mb-1">Creation (EU-excluded)</p>
                <p className="text-lg font-bold text-neutral-400">19%</p>
                <p className="text-xs text-neutral-500">provisions addressed</p>
              </div>
            </div>
            <p className="text-xs text-neutral-500 mt-3 italic">
              Both patterns persist without the EU, confirming these are structural
              features of the global regulatory landscape, not artifacts of a
              single comprehensive outlier.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
