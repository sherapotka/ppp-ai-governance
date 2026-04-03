import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import PPPBadge from "@/components/PPPBadge";
import { jurisdictions, pppSubDimensions } from "@/data/regulations";

type Dimension = "people" | "processes" | "platforms";

const dimLabels: Record<Dimension, string> = { people: "People", processes: "Processes", platforms: "Platforms" };

function SectionHeading({ id, number, title }: { id: string; number: string; title: string }) {
  return (
    <h2 id={id} className="text-2xl font-bold text-neutral-900 mt-14 mb-4 scroll-mt-20">
      <span className="text-primary-600 mr-2">{number}</span>{title}
    </h2>
  );
}

function SubHeading({ title }: { title: string }) {
  return <h3 className="text-lg font-bold text-neutral-800 mt-8 mb-3">{title}</h3>;
}

function ComparisonTable({ dim }: { dim: Dimension }) {
  const subDims = pppSubDimensions[dim];
  return (
    <div className="overflow-x-auto my-6 border border-neutral-200 rounded-lg">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-neutral-50 border-b border-neutral-200">
            <th className="text-left py-2 px-3 font-semibold text-neutral-900 sticky left-0 bg-neutral-50 min-w-[150px]">Sub-dimension</th>
            {jurisdictions.map((j) => (
              <th key={j.id} className="text-center py-2 px-2 font-semibold text-neutral-900 min-w-[70px]">{j.name.replace("United States", "USA").replace("United Kingdom", "UK").replace(" (Federal)", " Fed").replace(" (Colorado)", " CO")}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {subDims.map((sd, idx) => (
            <tr key={sd.key} className={idx % 2 === 0 ? "bg-white" : "bg-neutral-50/50"}>
              <td className="py-2 px-3 font-medium text-neutral-700 sticky left-0 bg-inherit">
                <span className="text-neutral-400 font-mono mr-1">{sd.code}</span> {sd.label}
              </td>
              {jurisdictions.map((j) => {
                const dimData = j.ppp[dim] as Record<string, { level: "Mandatory" | "Recommended" | "Absent" }>;
                return (
                  <td key={j.id} className="py-2 px-2 text-center">
                    <PPPBadge level={dimData[sd.key].level} />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SurveyPage() {
  return (
    <>
      <PageHeader
        title="Survey Paper"
        subtitle="People, Processes, Platforms: A Coding Framework and Comparative Benchmark for Global AI Governance"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Paper metadata */}
        <div className="border border-neutral-200 rounded-lg p-6 mb-8 bg-neutral-50">
          <p className="text-sm font-medium text-neutral-800">Shera Potka, Jens Weber</p>
          <p className="text-xs text-neutral-500">Department of Computer Science, University of Victoria, 2026</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {["AI Regulation", "AI Governance", "Comparative Analysis", "PPP Framework", "Regulatory Trigger", "AI-Assisted Coding"].map((tag) => (
              <span key={tag} className="text-[10px] bg-neutral-200 text-neutral-600 px-2 py-0.5 rounded">{tag}</span>
            ))}
          </div>
        </div>

        {/* Table of Contents */}
        <div className="border border-neutral-200 rounded-lg p-5 mb-10">
          <h3 className="font-bold text-neutral-900 text-sm mb-3">Table of Contents</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {[
              { n: "1", title: "Introduction", id: "introduction" },
              { n: "2", title: "Background and Related Work", id: "background" },
              { n: "3", title: "The PPP Analytical Framework", id: "framework" },
              { n: "4", title: "Methodology", id: "methodology" },
              { n: "5", title: "People Dimension", id: "people" },
              { n: "6", title: "Processes Dimension", id: "processes" },
              { n: "7", title: "Platforms Dimension", id: "platforms" },
              { n: "8", title: "Cross-Dimensional Analysis", id: "cross" },
              { n: "9", title: "Discussion", id: "discussion" },
              { n: "10", title: "Conclusion", id: "conclusion" },
            ].map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-sm text-primary-700 hover:text-primary-900 hover:underline py-0.5">
                <span className="text-neutral-400 mr-1">{item.n}.</span> {item.title}
              </a>
            ))}
          </div>
        </div>

        {/* Abstract */}
        <div className="bg-primary-50 border border-primary-100 rounded-lg p-6 mb-10">
          <h3 className="font-bold text-primary-900 text-sm uppercase tracking-wider mb-3">Abstract</h3>
          <p className="text-sm text-neutral-700 leading-relaxed">
            What determines whether an AI regulatory framework functions as a coherent governance system or a collection of independent provisions? Existing comparative analyses catalogue cross-jurisdictional differences but offer limited structural explanation for why they arise. This paper introduces a 17-sub-dimension coding framework based on the People&ndash;Processes&ndash;Platforms (PPP) model and applies it to 12 regulatory instruments across 10 jurisdictions, producing a provision-level comparative matrix of global AI governance. All 170 classifications are validated against an independent AI-assisted coding pipeline (87.6% agreement, <em>n</em>=170), with reliability predicted by regulatory text legibility rather than document complexity. From this dataset, we identify two structural features that account for substantial variation in the observed data. First, AI system classification functions as a <em>cross-dimensional regulatory trigger</em>: jurisdictions with formal classification schemes (EU, China, Colorado, Canada) exhibit cascading obligation structures averaging approximately 12 mandatory provisions, while those without (UK, Singapore, Japan, OECD, UNESCO) average fewer than one. This difference is driven by architecture, not ambition. Second, we identify an <em>institutional creation threshold</em> that bounds global governance convergence: provisions implementable through existing institutional capacity are addressed in 76% of jurisdiction&ndash;sub-dimension pairs, while provisions requiring new governance infrastructure (certification, incident reporting, regulatory sandboxes) are addressed in only 27%. This pattern holds across all regulatory philosophies and explains why voluntary frameworks plateau at 65% coverage. Among the jurisdictions studied, these findings suggest that the most consequential barriers to harmonization may not be principled disagreements over values but structural differences in regulatory architecture and institutional creation capacity. We derive five testable propositions and maintain the coding framework as a living benchmark.
          </p>
        </div>

        {/* ============ SECTION 1 ============ */}
        <SectionHeading id="introduction" number="1" title="Introduction" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          In 2024, the European Union enacted the most comprehensive binding AI legislation to date, addressing governance requirements ranging from human oversight to foundation model transparency. In the same year, the United States federal government addressed none of these dimensions with binding force. Between these poles, eight other jurisdictions and international bodies occupy distinct positions, yet no systematic instrument exists to compare their approaches at the provision level. This paper introduces such an instrument.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          The absence of a common analytical framework for AI regulatory comparison creates three problems. First, <strong>analytical fragmentation</strong>: most scholarship examines individual instruments or pairs of jurisdictions in isolation, leaving researchers without a shared vocabulary for cross-regime comparison. Second, <strong>comparison without structure</strong>: cross-jurisdictional analyses proceed descriptively&mdash;cataloguing what each jurisdiction does&mdash;without enabling dimension-level analysis of <em>how</em> and <em>why</em> provisions differ. Third, <strong>practical coordination barriers</strong>: organizations deploying AI across borders cannot systematically identify areas of regulatory convergence and divergence.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          This paper addresses these problems through four contributions. First, we introduce an <strong>operationalized PPP coding framework</strong> with 17 sub-dimensions, validated through an AI-assisted coding protocol achieving 87.6% agreement across 170 classifications (<em>n</em>=170). Second, we produce a <strong>systematic provision-level comparative matrix</strong> of global AI governance, covering 12 instruments across 10 jurisdictions as of early 2026. Third, we identify two <strong>structural determinants of regulatory coherence</strong>: (a) AI system classification functions as a <em>cross-dimensional regulatory trigger</em>: jurisdictions with classification average approximately 12 mandatory provisions while those without average fewer than one; and (b) global governance convergence is bounded by an <em>institutional creation threshold</em>: provisions implementable through existing capacity are addressed in 76% of cases, while provisions requiring new institutional infrastructure are addressed in only 27%, independent of regulatory philosophy. Fourth, we derive <strong>five testable propositions</strong> that reframe the global AI governance gap as a structural problem of regulatory architecture and institutional capacity rather than a problem of principled disagreement.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          The survey is guided by five research questions:
        </p>
        <div className="space-y-2 my-4 pl-4 border-l-2 border-primary-200">
          <p className="text-sm text-neutral-700"><strong>RQ1:</strong> How do major AI regulatory frameworks distribute governance requirements across the People, Processes, and Platforms dimensions, and what configuration patterns emerge?</p>
          <p className="text-sm text-neutral-700"><strong>RQ2:</strong> What governance philosophies underpin different frameworks, and how do these philosophies shape the relative emphasis placed on People, Processes, and Platforms provisions?</p>
          <p className="text-sm text-neutral-700"><strong>RQ3:</strong> On which PPP sub-dimensions do global AI regulatory frameworks exhibit the greatest convergence, and on which do they diverge most significantly?</p>
          <p className="text-sm text-neutral-700"><strong>RQ4:</strong> How do interdependencies between People, Processes, and Platforms dimensions manifest within and across regulatory regimes?</p>
          <p className="text-sm text-neutral-700"><strong>RQ5:</strong> What regulatory gaps emerge from the comparative analysis, and what do they imply for prospects of international regulatory interoperability?</p>
        </div>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Our analysis covers regulatory instruments in force or officially adopted as of early 2026, including the EU AI Act, the U.S. Executive Order on Safe, Secure, and Trustworthy AI (2023), the NIST AI Risk Management Framework (AI RMF 1.0), the Colorado Artificial Intelligence Act (2024), China&rsquo;s Deep Synthesis Provisions (2022) and Generative AI Measures (2023), Canada&rsquo;s Directive on Automated Decision-Making, the UK&rsquo;s Pro-Innovation AI Regulation White Paper (2023), Singapore&rsquo;s Model AI Governance Framework, Japan&rsquo;s AI Promotion Act (2025), the OECD AI Principles, and the UNESCO Recommendation on the Ethics of Artificial Intelligence.
        </p>

        {/* Timeline Figure */}
        <figure className="my-8">
          <Image src="/figures/fig4_timeline.png" alt="Timeline of global AI regulatory milestones" width={1200} height={400} className="w-full rounded-lg border border-neutral-200" />
          <figcaption className="text-xs text-neutral-500 mt-2 leading-relaxed">
            <strong>Figure 1.</strong> Timeline of Global AI Regulatory Milestones (2019&ndash;2027). The EU AI Act&rsquo;s phased implementation extends through 2027. China enacted the earliest binding generative AI regulation in 2023.
          </figcaption>
        </figure>

        {/* ============ SECTION 2 ============ */}
        <SectionHeading id="background" number="2" title="Background and Related Work" />

        <SubHeading title="2.1 The Evolution of AI Governance" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          AI governance has evolved through three broadly distinguishable phases. The first phase (2016&ndash;2019) was characterized by the proliferation of <em>ethical principles and voluntary guidelines</em>. Jobin, Ienca, and Vayena (2019) documented over 84 AI ethics guidelines published during this period, revealing broad convergence on principles such as transparency, fairness, and accountability, but limited operationalization. Hagendorff (2020) argued that most guidelines lacked enforcement mechanisms and failed to address power asymmetries. The OECD AI Principles, adopted in May 2019 and adhered to by 42 countries, marked the culmination of this phase as the first intergovernmental standard on AI, structured around five values-based principles and five policy recommendations.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          The second phase (2019&ndash;2023) saw a transition toward <em>binding regulatory instruments</em>. China became an early mover, enacting the Provisions on the Management of Deep Synthesis Internet Information Services (effective January 2023) and the Interim Measures for the Management of Generative Artificial Intelligence Services (effective August 2023)&mdash;among the earliest binding regulations specifically targeting generative AI. Canada&rsquo;s Directive on Automated Decision-Making, originally issued in 2019 and subsequently amended, established mandatory algorithmic impact assessments for federal government institutions. The UNESCO Recommendation on the Ethics of Artificial Intelligence, adopted in November 2021 by 193 member states, represented the broadest normative consensus achieved. As Cath (2018) and Stahl (2021) had argued, effective AI governance requires bridging ethical principles with enforceable institutional mechanisms&mdash;a transition that the second phase began but did not complete. In the United States, the Executive Order on the Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence (October 2023) directed federal agencies to manage AI risks, while the NIST AI Risk Management Framework (AI RMF 1.0, January 2023) provided a voluntary Govern&ndash;Map&ndash;Measure&ndash;Manage lifecycle.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          The third and current phase (2024&ndash;present) is characterized by <em>comprehensive legislation and implementation</em>. The EU Artificial Intelligence Act (Regulation (EU) 2024/1689) entered into force on August 1, 2024, establishing a four-tier risk classification system with phased implementation extending through August 2027. The Colorado Artificial Intelligence Act (SB 24-205), signed in 2024, introduced mandatory impact assessments for high-risk AI systems at the state level, effective February 2026. Japan enacted the AI Promotion Act in 2025, establishing an institutional framework for AI governance through the AI Strategy Headquarters. The UK, while maintaining its principles-based approach articulated in the 2023 White Paper, has signaled forthcoming comprehensive legislation.
        </p>

        <SubHeading title="2.2 Comparative AI Regulation: Existing Surveys" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          A growing body of literature examines AI regulation comparatively. Veale and Zuiderveen Borgesius (2021) and Madiega (2021) analyzed the EU AI Act&rsquo;s risk-based architecture, while Bradford (2020) theorized the EU&rsquo;s capacity to export regulatory standards globally through the &ldquo;Brussels Effect.&rdquo; Smuha (2021) framed the international landscape as a &ldquo;race to AI regulation&rdquo; driven by regulatory competition. Roberts et al. (2021) provided a detailed analysis of China&rsquo;s distinctive approach, characterizing it as state-directed governance with content-safety priorities. Kerry et al. (2023) assessed the EU AI Act&rsquo;s likely global impact, finding significant but limited regulatory diffusion. M&ouml;kander and Floridi (2023) explored how AI governance principles can be operationalized through ethics-based auditing.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          However, the existing literature exhibits four gaps that this survey addresses:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-700 mb-4 pl-2">
          <li><strong>Jurisdiction-organized analysis</strong>: Most comparative studies organize by country, producing descriptive accounts that limit systematic cross-jurisdictional comparison at the provision level. To our knowledge, no existing survey applies a consistent coding scheme across all major frameworks.</li>
          <li><strong>Unoperationalized frameworks</strong>: The People&ndash;Process&ndash;Technology triad has been discussed conceptually in AI governance (Coglianese, 2023) but has not been formalized into a coding instrument applied across a broad set of regulatory texts.</li>
          <li><strong>Temporal coverage</strong>: The regulatory landscape has changed substantially since most surveys were published&mdash;the EU AI Act entered into force in 2024, Japan enacted the AI Promotion Act in 2025, and the Colorado AI Act takes effect in 2026.</li>
          <li><strong>Missing interdependency analysis</strong>: Few studies examine how provisions in one regulatory dimension condition provisions in another&mdash;for example, how AI classification schemes determine the intensity of human oversight requirements.</li>
        </ol>

        <SubHeading title="2.3 The People\u2013Process\u2013Technology Triad in Governance" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          The conceptual foundation for our analytical framework originates in Harold J. Leavitt&rsquo;s (1965) model of organizational systems, which conceptualized organizations as composed of four interdependent components: people, structure, technology, and task. Leavitt&rsquo;s central insight was that change in any one component produces compensatory changes in the others&mdash;a systems perspective that influenced decades of organizational research.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Over subsequent decades, Leavitt&rsquo;s model was distilled into the People&ndash;Process&ndash;Technology (PPT) triad, gaining prominence in IT management and information security through the work of Schneier (2000), who emphasized that security depends on the alignment of people, processes, and technology. Baxter and Sommerville (2011) extended the socio-technical systems perspective, arguing that effective technology governance requires integrated attention to human actors, organizational procedures, and technical systems. The triad&rsquo;s core proposition has proven durable across domains.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          In the AI governance context, Coglianese (2023) advanced a &ldquo;people-and-processes approach,&rdquo; analyzing Executive Order 14,110 through a management-based regulatory lens. Coglianese argued that effective AI governance cannot rely on prescriptive technical standards alone because AI systems are heterogeneous and rapidly evolving. Instead, governance must focus on ensuring that organizations have the right <em>people</em>&mdash;with appropriate expertise, authority, and accountability&mdash;and the right <em>processes</em>&mdash;including impact assessments, auditing, and continuous monitoring. This argument provides direct scholarly precedent for applying the PPP framework to comparative regulatory analysis.
        </p>

        {/* ============ SECTION 3 ============ */}
        <SectionHeading id="framework" number="3" title="The PPP Analytical Framework" />

        <SubHeading title="3.1 From Concept to Coding Scheme" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          This survey extends the PPP framework from a conceptual lens to an operationalized analytical instrument. We decompose each dimension into sub-dimensions defined with sufficient precision to enable consistent coding across regulatory texts of different legal forms and jurisdictional origins. The framework comprises 17 sub-dimensions: 5 in the People dimension, 6 in the Processes dimension, and 6 in the Platforms dimension. The asymmetric distribution (5&ndash;6&ndash;6) reflects the different granularity required by each dimension rather than an artificial symmetry constraint. The People dimension naturally decomposes into five broad categories of human governance. The Processes and Platforms dimensions each require six because collapsing any would merge provisions that are regulated independently across jurisdictions: for example, certification (PR4) and incident reporting (PR5) are institutionally distinct and show different adoption patterns, as do content labeling (PL5) and GPAI provisions (PL6).
        </p>

        {/* Coding Scheme Table */}
        <div className="overflow-x-auto my-6 border border-neutral-200 rounded-lg">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-neutral-50 border-b border-neutral-200">
                <th className="text-left py-2 px-3 font-semibold text-neutral-900">Dim.</th>
                <th className="text-left py-2 px-3 font-semibold text-neutral-900">Code</th>
                <th className="text-left py-2 px-3 font-semibold text-neutral-900">Sub-dimension</th>
                <th className="text-left py-2 px-3 font-semibold text-neutral-900">Definition</th>
              </tr>
            </thead>
            <tbody>
              {(["people", "processes", "platforms"] as Dimension[]).map((dim) =>
                pppSubDimensions[dim].map((sd, idx) => (
                  <tr key={sd.code} className={idx === 0 ? "border-t-2 border-neutral-300" : "border-t border-neutral-100"}>
                    {idx === 0 && (
                      <td rowSpan={pppSubDimensions[dim].length} className="py-2 px-3 font-bold text-neutral-600 align-top text-[10px] uppercase tracking-wider">
                        {dimLabels[dim]}
                      </td>
                    )}
                    <td className="py-2 px-3 font-mono text-neutral-500">{sd.code}</td>
                    <td className="py-2 px-3 font-medium text-neutral-800">{sd.label}</td>
                    <td className="py-2 px-3 text-neutral-600">
                      {dim === "people" && sd.key === "humanOversight" && "Mandated human review, intervention capability, or human-in-the-loop requirements"}
                      {dim === "people" && sd.key === "accountability" && "Allocation of responsibility and liability among developers, deployers, users, regulators"}
                      {dim === "people" && sd.key === "regulatorRoles" && "Designated regulatory bodies, coordination mechanisms, stakeholder consultation"}
                      {dim === "people" && sd.key === "workforceTraining" && "Requirements for training, upskilling, or AI literacy"}
                      {dim === "people" && sd.key === "affectedPersonsRights" && "Rights of individuals subject to AI-assisted decisions"}
                      {dim === "processes" && sd.key === "riskAssessment" && "Required assessment of AI system risks prior to or during deployment"}
                      {dim === "processes" && sd.key === "auditingCompliance" && "Mechanisms for internal or external audit, monitoring, compliance verification"}
                      {dim === "processes" && sd.key === "transparency" && "Obligations for disclosure, explainability, or public reporting"}
                      {dim === "processes" && sd.key === "certification" && "Conformity assessment, certification schemes, or standardized governance procedures"}
                      {dim === "processes" && sd.key === "incidentReporting" && "Requirements for reporting AI-related incidents or harms"}
                      {dim === "processes" && sd.key === "regulatorySandboxes" && "Provisions for controlled testing environments"}
                      {dim === "platforms" && sd.key === "aiClassification" && "Risk-tiered categorization of AI systems determining regulatory treatment"}
                      {dim === "platforms" && sd.key === "infrastructureStandards" && "Requirements for computing infrastructure or deployment standards"}
                      {dim === "platforms" && sd.key === "dataGovernance" && "Standards for training data, input data quality, or data provenance"}
                      {dim === "platforms" && sd.key === "safetyRobustness" && "Technical standards for reliability, robustness, and cybersecurity"}
                      {dim === "platforms" && sd.key === "contentLabeling" && "Requirements for marking AI-generated content"}
                      {dim === "platforms" && sd.key === "gpaiProvisions" && "Specific regulatory treatment of general-purpose AI or foundation models"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-neutral-500 italic">
          <strong>Table 1.</strong> PPP Coding Scheme: 17 sub-dimensions across three interdependent dimensions. Codes P1&ndash;P5 address human actors, PR1&ndash;PR6 address governance procedures, and PL1&ndash;PL6 address technical systems.
        </p>

        <SubHeading title="3.2 Rating Scale" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Each sub-dimension is coded per jurisdiction on a three-level regulatory intensity scale:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-neutral-700 mb-4 pl-2">
          <li><strong>Mandatory (M)</strong>: The framework imposes a legally binding requirement with specified obligations. Non-compliance may result in enforcement action or penalties.</li>
          <li><strong>Recommended (R)</strong>: The framework officially encourages or expects this practice but does not impose a binding legal obligation.</li>
          <li><strong>Absent (&ndash;)</strong>: The framework does not address this sub-dimension.</li>
        </ul>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          This scale is deliberately coarse to enable comparison across instruments of different legal forms (binding legislation, executive directives, voluntary frameworks, intergovernmental standards). Finer-grained distinctions are captured in the textual evidence accompanying each coding decision.
        </p>

        <SubHeading title="3.3 Framework Justification and Limitations" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          The PPP framework is adopted for three reasons. First, <em>analytical coverage</em>: the three dimensions collectively address the principal concerns of AI regulation&mdash;who is responsible (People), what procedures govern development and deployment (Processes), and what technical requirements apply to the systems themselves (Platforms). This aligns with Floridi and Cowls&rsquo; (2019) observation that AI governance must simultaneously address ethical principles, institutional processes, and technical safeguards. Second, <em>scholarly precedent</em>: the framework builds on established organizational systems theory (Leavitt, 1965; Baxter &amp; Sommerville, 2011) and has been specifically applied to AI governance by Coglianese (2023). Third, <em>comparative utility</em>: the tripartite structure produces a manageable dimensionality for cross-jurisdictional comparison while remaining fine-grained through sub-dimensions. We note that alternative frameworks exist&mdash;including the OECD&rsquo;s five-principle structure and Baldwin, Cave, and Lodge&rsquo;s (2012) regulatory instruments taxonomy&mdash;but these either lack the dimensional symmetry needed for matrix-based comparison or were not designed for provision-level coding across legal forms.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          The framework has known limitations. PPP does not directly capture <em>regulatory philosophy</em> or <em>institutional architecture</em> (centralized vs. distributed enforcement, binding vs. voluntary instruments). We address this by supplementing the PPP coding with a separate characterization of each jurisdiction&rsquo;s regulatory approach (Section 8). The boundaries between dimensions are not always sharp; we code provisions to the dimension of their primary regulatory effect, with cross-references noted. Finally, PPP originates in organizational theory, not regulatory theory; we draw on regulatory governance scholarship (Baldwin, Cave &amp; Lodge, 2012) to contextualize the analysis.
        </p>

        {/* ============ SECTION 4 ============ */}
        <SectionHeading id="methodology" number="4" title="Methodology" />

        <SubHeading title="4.1 Research Design" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          The survey employs a qualitative comparative documentary analysis structured in three phases: (1) document collection and corpus assembly, (2) structured coding against the PPP scheme, and (3) comparative analysis using a jurisdiction-by-sub-dimension matrix.
        </p>

        <SubHeading title="4.2 Document Selection" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Documents were included if they met four criteria: (1) officially adopted, in force, or with confirmed implementation dates as of early 2026; (2) binding legislation, executive directives, official policy frameworks, or intergovernmental standards; (3) available in English (original or official translation); (4) within the nine jurisdictions selected for regulatory significance, typological diversity, and geographic coverage. The EU, United States, and China serve as primary cases (detailed provision-level coding); remaining jurisdictions serve as secondary cases for comparative contrast.
        </p>

        <SubHeading title="4.3 Coding Procedure" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Each regulatory document was coded against the 17 PPP sub-dimensions. For each sub-dimension, the coding captured: (1) presence or absence; (2) regulatory intensity (Mandatory, Recommended, or Absent); (3) specific provision references (articles, sections, clauses); and (4) a textual summary of the provision&rsquo;s content and scope. Coding decisions are documented in full in the appendix.
        </p>

        <SubHeading title="4.4 AI-Assisted Coding and Validation" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          A distinctive methodological feature of this survey is the systematic validation of human coding against an independent AI-assisted pipeline. Recent work has demonstrated that large language models can match or exceed crowd-worker accuracy on text annotation tasks (Gilardi, Alizadeh, &amp; Kubli, 2023) and hold potential to transform computational social science (Ziems et al., 2024). However, their application to regulatory document classification&mdash;where distinctions between binding and voluntary provisions require legal judgment&mdash;is nascent. We develop a replicable protocol that serves as both a practical augmentation and an empirical contribution to comparative regulatory methodology.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          <strong>Protocol.</strong> All 12 regulatory documents were independently coded by a large language model (Claude, Anthropic) against all 17 PPP sub-dimensions. The model received structured prompts presenting (1) sub-dimension definitions from the coding scheme, (2) the three-level rating scale with definitions, and (3) the regulatory text. For each sub-dimension, the model provided a rating, cited specific provisions, and supplied a justification. No information about the manual coding was provided. The resulting 170 classifications (17 sub-dimensions &times; 10 jurisdictions) were compared against manual expert coding to assess inter-method agreement.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          <strong>Validation sequence.</strong> The experiment proceeded in two stages. In Stage 1, a pilot set of three frameworks (EU AI Act, NIST AI RMF, Canada DADM) was validated, achieving 84.3% agreement (43/51). In Stage 2, the remaining seven frameworks were coded and validated using the identical protocol. The full results&mdash;per-jurisdiction, per-dimension, and per-legal-form agreement rates&mdash;are reported in Section 9.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          <strong>Scope.</strong> All final coding decisions in this paper are human-verified. The AI-assisted pipeline serves as a validation instrument and efficiency tool, not as a replacement for expert judgment. The full prompt templates and AI-generated outputs are available in the supplementary materials.
        </p>

        <SubHeading title="4.5 Comparative Analysis Procedure" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          The coded data were organized into a jurisdiction &times; PPP sub-dimension matrix. Analysis proceeded in three stages:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-700 mb-4 pl-2">
          <li><strong>Within-jurisdiction profiling</strong>: for each jurisdiction, we constructed a PPP profile summarizing how regulatory provisions distribute across dimensions and how dimensions interrelate (RQ1).</li>
          <li><strong>Cross-jurisdictional comparison</strong>: we compared profiles to identify convergences, divergences, and characteristic PPP configurations associated with different regulatory philosophies (RQ2, RQ3).</li>
          <li><strong>Gap and interdependency analysis</strong>: we identified sub-dimensions weakly addressed across most jurisdictions (RQ5) and analyzed how provisions in one dimension condition provisions in others (RQ4).</li>
        </ol>
        <p className="text-sm text-neutral-700 leading-relaxed">
          See the <a href="/methodology" className="text-primary-700 hover:underline">Methodology page</a> for interactive visualizations of the AI-assisted coding experiment results.
        </p>

        {/* ============ SECTIONS 5-7 ============ */}
        <SectionHeading id="people" number="5" title="People Dimension: Comparative Analysis" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          The People dimension examines how regulatory frameworks address the human element of AI governance: who is responsible, who oversees AI systems, who is affected, and what rights and obligations apply to human actors throughout the AI lifecycle.
        </p>
        <ComparisonTable dim="people" />
        <p className="text-xs text-neutral-500 italic mb-6">
          <strong>Table 2.</strong> People Dimension: Cross-Jurisdictional Comparison. M = Mandatory, R = Recommended, &ndash; = Absent. Human oversight (P1) and accountability (P2) show the broadest convergence, while affected persons&rsquo; rights (P5) and workforce training (P4) show the greatest divergence.
        </p>

        <SubHeading title="5.1 Human Oversight (P1)" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Human oversight requirements represent one of the strongest areas of global convergence. All ten jurisdictions address this sub-dimension, with four imposing mandatory requirements and six recommending oversight measures.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          The EU AI Act establishes the most detailed human oversight regime. Article 14 requires that high-risk AI systems be designed to allow effective human oversight, including the ability to fully understand system capabilities and limitations, to properly monitor operation, and to decide not to use the system or to override its output. The level of oversight must be commensurate with the risks posed.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          China&rsquo;s regulations require providers to bear responsibility for content generated by AI services and to implement human-based content moderation. Canada&rsquo;s Directive on Automated Decision-Making mandates human-in-the-loop involvement proportionate to the assessed impact level, with higher-impact systems requiring greater human intervention capability. The Colorado AI Act imposes a deployer duty of care that includes human oversight of high-risk AI decision-making.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Among the voluntary frameworks, the NIST AI RMF addresses human oversight through its Govern function, emphasizing organizational policies for human-AI configuration. Singapore&rsquo;s Model AI Governance Framework recommends three approaches to human involvement: human-in-the-loop (full control), human-over-the-loop (supervisory), and human-out-of-the-loop (autonomous), determined by a risk-based assessment of harm severity and probability.
        </p>

        <SubHeading title="5.2 Accountability Structures (P2)" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Accountability provisions show a similar pattern, with four mandatory regimes and six voluntary ones. The EU AI Act allocates obligations to both providers (Articles 16&ndash;22) and deployers (Article 26), creating a dual accountability structure that spans the AI value chain. China places primary liability on service providers, with algorithm filing requirements with the Cyberspace Administration of China serving as an accountability mechanism. Canada holds federal institutions directly accountable for automated decisions, while Colorado assigns deployer-level accountability for high-risk AI decisions.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          The distribution of accountability between developers and deployers remains a significant source of divergence. The EU&rsquo;s dual-accountability model contrasts with China&rsquo;s provider-first approach and with the UK&rsquo;s delegation to existing sectoral regulators without AI-specific accountability provisions.
        </p>

        <SubHeading title="5.3 Regulator and Stakeholder Roles (P3)" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Institutional architecture varies substantially. The EU has established a multi-layered governance structure comprising national competent authorities, the EU AI Office, and the European Artificial Intelligence Board. China centralizes regulatory authority in the Cyberspace Administration of China. Canada assigns oversight to the Treasury Board Secretariat. Japan&rsquo;s AI Promotion Act established the AI Strategy Headquarters. In contrast, the UK delegates AI oversight to existing sectoral regulators, and Singapore relies on the Infocomm Media Development Authority (IMDA) and the Personal Data Protection Commission (PDPC) without binding mandate.
        </p>

        <SubHeading title="5.4 Workforce Training and AI Literacy (P4)" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Workforce provisions represent one of the weakest areas of global coverage. Only the EU imposes mandatory AI literacy obligations: Article 4 of the AI Act requires providers and deployers to ensure that their staff have sufficient AI literacy. All other jurisdictions either recommend training (US federal, China, Singapore, Japan, OECD, UNESCO) or omit the topic entirely (Colorado, UK).
        </p>

        <SubHeading title="5.5 Affected Persons\u2019 Rights (P5)" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Rights for individuals affected by AI-assisted decisions show the sharpest divergence. The EU provides a right to explanation of individual decision-making (Article 86). Canada requires that affected individuals receive plain-language explanations of automated decisions and provides a right of recourse. Colorado mandates consumer notification and opt-out rights. In contrast, the US federal framework has no AI-specific individual rights provisions, and Japan&rsquo;s AI Promotion Act is silent on affected persons&rsquo; rights. China provides user complaint mechanisms but stops short of enforceable individual rights.
        </p>

        <SectionHeading id="processes" number="6" title="Processes Dimension: Comparative Analysis" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          The Processes dimension examines the governance procedures and compliance mechanisms that regulatory frameworks require or recommend.
        </p>
        <ComparisonTable dim="processes" />
        <p className="text-xs text-neutral-500 italic mb-6">
          <strong>Table 3.</strong> Processes Dimension: Cross-Jurisdictional Comparison. Risk assessment (PR1) and transparency (PR3) show near-universal adoption. Certification (PR4) is the most divergent sub-dimension across all 17: only the EU mandates conformity assessment. Incident reporting (PR5) and regulatory sandboxes (PR6) are similarly sparse, representing significant global regulatory gaps.
        </p>

        <SubHeading title="6.1 Risk Assessment (PR1)" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Risk assessment represents one of the strongest areas of convergence after human oversight. Four jurisdictions mandate risk assessment (EU, Colorado, China, Canada), five recommend it, and only Japan&rsquo;s promotional framework is silent.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          The EU AI Act requires a comprehensive risk management system for high-risk AI (Article 9), including identification and analysis of known and reasonably foreseeable risks, estimation and evaluation of risks arising from intended use and foreseeable misuse, and adoption of appropriate risk management measures. The NIST AI RMF structures risk assessment through its Map and Measure functions, providing a voluntary but detailed lifecycle approach (Govern&ndash;Map&ndash;Measure&ndash;Manage). Canada&rsquo;s Directive requires an Algorithmic Impact Assessment (AIA) before any automated decision system is deployed in federal institutions, using a scoring system that determines the impact level (I through IV). China mandates security assessments before public deployment of generative AI services. Colorado requires impact assessments for all high-risk AI systems.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          A notable difference lies in the <em>type</em> of assessment required. The EU emphasizes fundamental rights impact alongside safety risks. Canada&rsquo;s AIA centers on impacts to individuals and communities. China&rsquo;s security assessment prioritizes content safety and societal stability. This variation reflects different regulatory philosophies even where the procedural requirement converges.
        </p>

        <SubHeading title="6.2 Auditing and Compliance (PR2)" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Auditing requirements show moderate convergence at the mandatory level (four jurisdictions: EU, Colorado, China, Canada) but notable absence in Japan and the OECD framework. The EU combines conformity assessment (Article 43) with post-market monitoring (Article 72). China requires algorithm filing and periodic review by the Cyberspace Administration. Canada mandates ongoing monitoring and periodic review of automated decision systems. Colorado requires annual review of impact assessments. Singapore offers the AI Verify testing toolkit as a voluntary self-assessment tool.
        </p>

        <SubHeading title="6.3 Transparency Requirements (PR3)" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Transparency is the sub-dimension with the broadest coverage: all ten jurisdictions address it, with four imposing mandatory obligations (EU, Colorado, China, Canada). The EU AI Act imposes graduated transparency obligations by risk tier (Articles 13 and 50), including a requirement that AI-generated content be marked as such. China requires service providers to disclose the AI nature of their services. Canada mandates public disclosure of AIA results.
        </p>

        <SubHeading title="6.4 Certification and Governance Procedures (PR4)" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Certification is the most divergent sub-dimension across all 17: only the EU mandates conformity assessment (Article 43), which may require third-party assessment for certain high-risk categories. No other jurisdiction has established an AI-specific certification scheme. This represents a significant gap in the global regulatory architecture.
        </p>

        <SubHeading title="6.5 Incident Reporting (PR5)" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Only the EU (Article 73, requiring serious incident reporting to market surveillance authorities) and China (illegal content reporting obligations) mandate AI-specific incident reporting. The US Executive Order directs safety reporting for dual-use foundation models as a recommended measure. The absence of incident reporting provisions in seven of ten jurisdictions represents a notable regulatory gap.
        </p>

        <SubHeading title="6.6 Regulatory Sandboxes (PR6)" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          The EU is the only jurisdiction that mandates regulatory sandboxes (Articles 57&ndash;60), requiring member states to establish AI regulatory sandboxes. The UK, Singapore, and Japan support sandbox environments on a voluntary or sector-specific basis. Most jurisdictions do not address this sub-dimension.
        </p>

        <SectionHeading id="platforms" number="7" title="Platforms Dimension: Comparative Analysis" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          The Platforms dimension examines the technical and infrastructural requirements imposed on AI systems themselves.
        </p>
        <ComparisonTable dim="platforms" />
        <p className="text-xs text-neutral-500 italic mb-6">
          <strong>Table 4.</strong> Platforms Dimension: Cross-Jurisdictional Comparison. The Platforms dimension shows the sharpest divergence of any PPP dimension. Data governance (PL3) and safety (PL4) are broadly addressed, but GPAI provisions (PL6) and content labeling (PL5) are mandatory in only two jurisdictions (EU and China). AI classification (PL1)&mdash;identified in this paper as a cross-dimensional regulatory trigger&mdash;is present in only four jurisdictions.
        </p>

        <SubHeading title="7.1 AI System Classification (PL1)" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          AI system classification&mdash;how jurisdictions categorize AI systems for regulatory purposes&mdash;shows sharp divergence. Four jurisdictions employ formal classification: the EU uses a four-tier risk scheme (unacceptable, high, limited, minimal risk, as defined in Article 6 and Annex III); Colorado employs a binary classification (high-risk versus other); Canada uses an impact-level scoring system (levels I through IV); and China regulates by application category (deep synthesis, generative AI). The NIST AI RMF offers context-based risk framing without binding tiers. Six jurisdictions&mdash;including the UK, Singapore, Japan, OECD, and UNESCO&mdash;do not establish any formal AI classification scheme.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          The absence of a common global taxonomy for AI risk classification represents one of the most significant barriers to international regulatory interoperability.
        </p>

        <SubHeading title="7.2 Infrastructure and Deployment Standards (PL2)" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Infrastructure requirements are addressed by only two mandatory regimes (EU and China) and four recommending jurisdictions. The EU AI Act mandates technical documentation requirements (Annex IV). China imposes technical standards for deep synthesis and generative AI infrastructure. Most jurisdictions leave infrastructure standards to voluntary adoption or sector-specific regulation.
        </p>

        <SubHeading title="7.3 Data Governance (PL3)" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Data governance shows broad engagement: all ten jurisdictions address it, though only the EU and China impose mandatory requirements. The EU AI Act (Article 10) mandates data governance for training, validation, and testing datasets. China requires training data legality, quality, and provenance. The remaining jurisdictions recommend data quality and governance measures without binding force.
        </p>

        <SubHeading title="7.4 Safety and Robustness (PL4)" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Safety and robustness requirements are broadly addressed: eight of ten jurisdictions cover this sub-dimension, with the EU (Article 15, requiring accuracy, robustness, and cybersecurity) and China imposing mandatory standards. Colorado and Canada do not address this sub-dimension. The NIST AI RMF addresses reliability and robustness through its trustworthiness characteristics. Singapore and Japan encourage robustness through guidelines.
        </p>

        <SubHeading title="7.5 Content Labeling and Provenance (PL5)" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Content labeling&mdash;requiring AI-generated content to be marked as such&mdash;is mandatory only in the EU (Article 50) and China (deep synthesis provisions). This sub-dimension is absent from eight of ten frameworks, a notable gap given the growing significance of synthetic content.
        </p>

        <SubHeading title="7.6 GPAI and Foundation Model Provisions (PL6)" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          General-purpose AI regulation is the most sparsely addressed sub-dimension alongside certification: only the EU (Articles 51&ndash;56, establishing obligations for GPAI model providers including those posing systemic risk) and China (Generative AI Measures specifically regulating foundation model services) have enacted specific provisions. This gap is significant given the centrality of foundation models to current AI deployment.
        </p>

        {/* Heatmap Figure */}
        <figure className="my-8">
          <Image src="/figures/fig1_heatmap.png" alt="PPP Comparative Heatmap" width={1200} height={800} className="w-full rounded-lg border border-neutral-200" />
          <figcaption className="text-xs text-neutral-500 mt-2 leading-relaxed">
            <strong>Figure 2.</strong> Full PPP Comparative Heatmap (17 sub-dimensions &times; 10 jurisdictions). Green = Mandatory, amber = Recommended, gray = Absent. The EU&rsquo;s complete green column, the voluntary ceiling in UK/Singapore/OECD/UNESCO, and the concentration of absent provisions in Tier 3 sub-dimensions are visible.
          </figcaption>
        </figure>

        {/* Radar Figure */}
        <figure className="my-8">
          <Image src="/figures/fig2_radar.png" alt="PPP Regulatory Profiles Radar" width={1200} height={800} className="w-full rounded-lg border border-neutral-200" />
          <figcaption className="text-xs text-neutral-500 mt-2 leading-relaxed">
            <strong>Figure 3.</strong> PPP Regulatory Profiles: Radar Comparison. The EU presents a near-complete hexagon. China shows strong Platforms but weaker People. The US federal profile is small and uniform (all voluntary). Canada shows asymmetric People/Processes strength.
          </figcaption>
        </figure>

        {/* ============ SECTION 8 ============ */}
        <SectionHeading id="cross" number="8" title="Cross-Dimensional Analysis" />

        <SubHeading title="8.1 Regulatory Philosophy Typology" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Based on the observed PPP configuration patterns, we identify six distinct regulatory philosophies. The typology reveals a governance spectrum from comprehensive mandatory regulation (EU) to normative guidance without enforcement (OECD, UNESCO). A striking quantitative pattern emerges: the EU&rsquo;s 17 mandatory provisions represent complete PPP coverage, while the combined US federal and state approach yields only 8 mandatory provisions with 12 absent sub-dimensions, the most fragmented profile among jurisdictions with binding instruments. China&rsquo;s 13 mandatory provisions place it closer to the EU than to any other jurisdiction, despite fundamental differences in regulatory philosophy and enforcement mechanisms.
        </p>

        {/* Typology Table */}
        <div className="overflow-x-auto my-6 border border-neutral-200 rounded-lg">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-neutral-50 border-b border-neutral-200">
                <th className="text-left py-2 px-3 font-semibold text-neutral-900">Philosophy</th>
                <th className="text-left py-2 px-3 font-semibold text-neutral-900">Jurisdiction(s)</th>
                <th className="text-left py-2 px-3 font-semibold text-neutral-900">Characteristics</th>
                <th className="text-left py-2 px-3 font-semibold text-neutral-900">PPP Profile</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-neutral-100">
                <td className="py-2 px-3 font-medium text-neutral-800">Comprehensive risk-based</td>
                <td className="py-2 px-3 text-neutral-700">EU</td>
                <td className="py-2 px-3 text-neutral-600">Binding legislation; risk-tiered obligations; balanced coverage across all PPP dimensions</td>
                <td className="py-2 px-3 text-neutral-600 font-mono">17M / 0R / 0A</td>
              </tr>
              <tr className="border-t border-neutral-100 bg-neutral-50/50">
                <td className="py-2 px-3 font-medium text-neutral-800">State-directed</td>
                <td className="py-2 px-3 text-neutral-700">China</td>
                <td className="py-2 px-3 text-neutral-600">Binding regulations; application-specific; state-supervised; strong Platforms emphasis</td>
                <td className="py-2 px-3 text-neutral-600 font-mono">13M / 2R / 2A</td>
              </tr>
              <tr className="border-t border-neutral-100">
                <td className="py-2 px-3 font-medium text-neutral-800">Public-sector focused</td>
                <td className="py-2 px-3 text-neutral-700">Canada</td>
                <td className="py-2 px-3 text-neutral-600">Mandatory for government use; strong People and Processes; limited Platforms</td>
                <td className="py-2 px-3 text-neutral-600 font-mono">8M / 2R / 7A</td>
              </tr>
              <tr className="border-t border-neutral-100 bg-neutral-50/50">
                <td className="py-2 px-3 font-medium text-neutral-800">Sector-based decentralized</td>
                <td className="py-2 px-3 text-neutral-700">USA (Federal + CO)</td>
                <td className="py-2 px-3 text-neutral-600">No central AI authority; voluntary federal + binding state; fragmented coverage</td>
                <td className="py-2 px-3 text-neutral-600 font-mono">8M / 14R / 12A</td>
              </tr>
              <tr className="border-t border-neutral-100">
                <td className="py-2 px-3 font-medium text-neutral-800">Principles-based / voluntary</td>
                <td className="py-2 px-3 text-neutral-700">UK, Singapore, Japan</td>
                <td className="py-2 px-3 text-neutral-600">Non-binding guidance; sectoral implementation; Recommended-heavy profiles</td>
                <td className="py-2 px-3 text-neutral-600 font-mono">1M / 29R / 21A</td>
              </tr>
              <tr className="border-t border-neutral-100 bg-neutral-50/50">
                <td className="py-2 px-3 font-medium text-neutral-800">Normative-international</td>
                <td className="py-2 px-3 text-neutral-700">OECD, UNESCO</td>
                <td className="py-2 px-3 text-neutral-600">Values-based; no enforcement; broad principled coverage</td>
                <td className="py-2 px-3 text-neutral-600 font-mono">0M / 21R / 13A</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-neutral-500 italic mb-4">
          <strong>Table 5.</strong> Typology of AI Regulatory Philosophies. The EU&rsquo;s complete mandatory coverage (17M) contrasts sharply with the combined US approach (8M/12R/14A), the most fragmented profile among jurisdictions with binding instruments.
        </p>

        <SubHeading title="8.2 Convergence and Divergence Patterns" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Analysis of the comparative matrices reveals a hierarchy of global adoption:
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          <strong>Tier 1 &mdash; Near-universal adoption</strong> (addressed by 9&ndash;10 jurisdictions): human oversight (P1), accountability (P2), regulator roles (P3), risk assessment (PR1), transparency (PR3), data governance (PL3), and safety and robustness (PL4). Among the jurisdictions studied, these sub-dimensions constitute an emerging convergence on minimum AI governance requirements.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          <strong>Tier 2 &mdash; Common but not universal</strong> (addressed by 5&ndash;8 jurisdictions): workforce training (P4), affected persons&rsquo; rights (P5), auditing and compliance (PR2), infrastructure standards (PL2). Coverage at this tier varies substantially in regulatory intensity.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          <strong>Tier 3 &mdash; Sparse or emerging</strong> (addressed by 1&ndash;4 jurisdictions at the mandatory level): certification (PR4, 1/10 mandatory), incident reporting (PR5, 2/10), regulatory sandboxes (PR6, 1/10), AI classification (PL1, 4/10), content labeling (PL5, 2/10), and GPAI provisions (PL6, 2/10). These represent the frontier of AI regulation, where international divergence is greatest and harmonization most challenging.
        </p>

        <SubHeading title="8.3 Classification as Cross-Dimensional Trigger" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          AI system classification (PL1) functions as a <em>regulatory trigger</em>&mdash;a Platforms-dimension provision that formally determines the regulatory intensity applied to People and Processes dimensions. The mechanism operates through three channels: <em>obligation activation</em> (classification creates discrete categories linked to specific obligation bundles), <em>proportionality anchoring</em> (classification provides the formal basis for calibrating governance intensity to risk level), and <em>enforcement gating</em> (classification determines which AI systems fall within mandatory regulatory scope).
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          This produces two distinct regulatory architectures. In the <strong>cascading architecture</strong> (EU, Colorado, Canada), classification triggers calibrated obligations across all PPP dimensions. The EU&rsquo;s four-tier classification (Art. 6, Annex III) directly determines human oversight intensity (P1, Art. 14), accountability scope (P2, Arts. 16, 26), risk assessment depth (PR1, Art. 9), conformity assessment applicability (PR4, Art. 43), and data governance standards (PL3, Art. 10). Cross-dimensional coherence is high: provisions are not merely present but are <em>calibrated to</em> the classification level.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          In the <strong>flat architecture</strong> (UK, Singapore, Japan, OECD, UNESCO), governance provisions operate independently, unanchored to system-level risk determinations. The UK&rsquo;s five principles apply uniformly regardless of AI system type. Singapore recommends risk-based human involvement but leaves the determination to organizational discretion. Governance intensity depends on organizational judgment rather than regulatory structure.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          The US federal approach reveals an instructive <em>hybrid</em>: the NIST AI RMF articulates cascading logic&mdash;its MAP function recommends context-based risk categorization&mdash;but because classification is voluntary, the cascade is never formally triggered. The result is a process-rich framework with zero mandatory provisions: the architecture of coherence without its structural foundation.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Quantitatively, among the jurisdictions studied, those with classification average 11.5 mandatory provisions; those without average 0.2. This difference is not explained by regulatory ambition: Canada&rsquo;s narrowly-scoped DADM achieves higher coherence (8 mandatory) than the UK&rsquo;s economy-wide White Paper (0 mandatory), because Canada&rsquo;s instrument contains a classification scheme and the UK&rsquo;s does not. The explanatory variable is architectural, not aspirational.
        </p>

        {/* Architecture Figure */}
        <figure className="my-8">
          <Image src="/figures/fig3_architecture.png" alt="Cascading vs Flat Regulatory Architecture" width={1200} height={500} className="w-full rounded-lg border border-neutral-200" />
          <figcaption className="text-xs text-neutral-500 mt-2 leading-relaxed">
            <strong>Figure 4.</strong> Two regulatory architectures. <strong>Cascading</strong> (EU, China, Colorado, Canada): classification triggers calibrated obligations across all PPP dimensions (avg. 11.5 mandatory). <strong>Flat</strong> (UK, Singapore, Japan, OECD, UNESCO): provisions operate independently (avg. 0.2 mandatory).
          </figcaption>
        </figure>

        <SubHeading title="8.4 The Institutional Creation Threshold" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          A second structural pattern emerges when we partition the 17 sub-dimensions by the type of institutional capacity they require. Fourteen sub-dimensions&mdash;including human oversight, accountability, risk assessment, transparency, data governance, and AI classification itself&mdash;can be implemented by <em>adapting existing regulatory infrastructure</em>: extending mandates, adding requirements to existing compliance procedures, or issuing guidance within established frameworks. Three sub-dimensions&mdash;certification (PR4), incident reporting (PR5), and regulatory sandboxes (PR6)&mdash;require <em>creating entirely new governance institutions</em>: certification bodies with AI-specific expertise, incident databases with standardized reporting protocols, and sandbox environments with dedicated legal frameworks.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          The data reveal a stark divide. Adaptation provisions are addressed (at any intensity level) in 76% of jurisdiction&ndash;sub-dimension pairs (106 of 140). Creation provisions are addressed in only 27% of cases (8 of 30) and are mandatory in just 4 of 30 cases (13%), with the EU accounting for three (PR4, PR5, PR6) and China for one (PR5). This divide holds across all regulatory philosophies: it is equally visible in binding legislation (China omits certification and sandboxes despite 13 mandatory provisions), narrowly-scoped directives (Canada omits all three despite 8 mandatory provisions), and voluntary frameworks.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          The threshold explains the voluntary ceiling (Proposition 3) at the level of mechanism: principles-based frameworks plateau at approximately 65% coverage not because they lack governance ambition but because non-binding instruments are structurally incapable of mandating the creation of new institutions. It also explains why the residual global governance gap&mdash;the provisions that separate the EU from every other jurisdiction&mdash;consists precisely of creation provisions. The most consequential barrier to AI governance harmonization is not principled disagreement over values but the differential capacity and willingness of jurisdictions to invest in new governance infrastructure.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Together, these two structural features provide a parsimonious explanation for the majority of variation in our dataset. Jurisdictions with both classification and institutional creation (EU only) achieve complete PPP coverage. Jurisdictions with classification but without institutional creation (Colorado, Canada, China) achieve high but incomplete coherence. Jurisdictions with neither (UK, Singapore, Japan, OECD, UNESCO) achieve zero mandatory provisions regardless of stated governance ambition.
        </p>
        <div className="grid grid-cols-2 gap-4 my-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 text-center">
            <p className="text-3xl font-bold text-blue-700">76%</p>
            <p className="text-xs text-neutral-600 mt-1">Adaptation provisions addressed<br/>(106 of 140)</p>
          </div>
          <div className="bg-neutral-100 border border-neutral-200 rounded-lg p-5 text-center">
            <p className="text-3xl font-bold text-neutral-400">27%</p>
            <p className="text-xs text-neutral-600 mt-1">Creation provisions addressed<br/>(8 of 30)</p>
          </div>
        </div>

        <SubHeading title="8.5 Regulatory Gaps" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Five sub-dimensions are identified as significant global regulatory gaps:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-700 mb-4 pl-2">
          <li><strong>GPAI/Foundation model provisions (PL6)</strong>: Only the EU and China specifically regulate foundation models. Given that GPAI models are the underlying technology powering most current AI applications, this represents the most consequential gap.</li>
          <li><strong>Certification (PR4)</strong>: Only the EU has established an AI-specific conformity assessment regime. The absence of certification frameworks elsewhere limits mutual recognition and international interoperability.</li>
          <li><strong>Incident reporting (PR5)</strong>: Only the EU and China mandate AI-specific incident reporting. Without systematic incident reporting, jurisdictions lack the data needed to identify emerging risks and refine regulatory approaches.</li>
          <li><strong>Content labeling (PL5)</strong>: Only the EU and China require AI-generated content labeling. As synthetic content becomes increasingly prevalent, this gap poses challenges for information integrity.</li>
          <li><strong>Workforce training (P4)</strong>: Only the EU mandates AI literacy. The global underinvestment in AI workforce development limits the effectiveness of other governance provisions that depend on informed human actors.</li>
        </ol>

        <SubHeading title="8.6 Five Propositions" />
        <div className="space-y-3 my-6">
          {[
            {
              id: "P1",
              title: "Architectural Coherence",
              text: "In multi-dimensional technology regulation, the presence of a formal classification scheme is a stronger predictor of cross-dimensional regulatory coherence than regulatory philosophy, legal tradition, or the scope of the regulatory instrument. The intuitive expectation is that comprehensive regulatory ambition produces coherent regulation. The data show otherwise: Canada\u2019s narrow directive (federal government only) is more coherent (8M) than the UK\u2019s economy-wide White Paper (0M), because Canada has classification and the UK does not. Among the jurisdictions studied, those with classification average 11.5 mandatory provisions regardless of scope; those without average 0.2 regardless of stated goals."
            },
            {
              id: "P2",
              title: "Institutional Creation Threshold",
              text: "Global convergence in AI governance is bounded by an institutional creation threshold: jurisdictions converge on provisions implementable through existing institutional capacity and diverge on provisions requiring new governance infrastructure\u2014independent of regulatory philosophy or political system. This offers an alternative to the common assumption that governance gaps primarily reflect different values. The UK and EU share nearly identical stated values (safety, transparency, fairness, accountability) yet differ on exactly the provisions requiring institutional creation. Adaptation provisions are addressed in 75% of cases; creation provisions in only 27%."
            },
            {
              id: "P3",
              title: "Voluntary Ceiling as Institutional Limit",
              text: "Voluntary AI governance frameworks exhibit a structural ceiling of 60\u201370% sub-dimension coverage because the provisions they systematically fail to address\u2014certification, incident reporting, regulatory sandboxes\u2014require institutional commitments that non-binding instruments cannot generate, regardless of the specificity or ambition of their guidance. The deeper explanation is not that voluntary frameworks are \u201cweaker\u201d on what they address\u2014Singapore\u2019s guidance on transparency is substantively rich\u2014but that they are structurally incapable of addressing provisions requiring new institutions. All four voluntary frameworks (UK, Singapore, OECD, UNESCO) uniformly omit PR4 and PR5; while the UK and Singapore recommend sandboxes (PR6), none mandates them."
            },
            {
              id: "P4",
              title: "Philosophy\u2013Architecture Decoupling",
              text: "Regulatory philosophy predicts which PPP dimension receives emphasis within a jurisdiction\u2019s covered provisions, but does not predict total coverage\u2014which is determined by architectural features (classification and institutional creation) rather than governance goals. Philosophy determines shape: rights-based regimes emphasize People (EU: 5/5 People mandatory; Canada: 4/5); state-directed regimes emphasize Platforms (China: 6/6 Platforms mandatory). Architecture determines coverage: China (state-directed, 13M) and the EU (rights-based, 17M) have opposing philosophies but similar coverage because both have classification. The UK and EU have similar philosophies but radically different coverage (0M vs. 17M) because they differ on architecture."
            },
            {
              id: "P5",
              title: "Legibility Predicts AI-Coding Reliability",
              text: "The reliability of AI-assisted regulatory coding is determined by the formal legibility of the regulatory text\u2014the degree to which obligations specify identifiable duty-holders, enumerated actions, and explicit conditions\u2014rather than by document complexity, subject matter, or jurisdiction. AI-assisted coding is therefore most viable precisely for the instruments most important to code correctly: binding legislation with explicit obligations. The most complex document (EU AI Act, 113 articles) achieves 100% agreement; shorter voluntary frameworks achieve 76.5%. Binding legislation: 92.6%; directives/policy: 76.5%."
            },
          ].map((p) => (
            <div key={p.id} className="flex gap-3 items-start bg-neutral-50 border border-neutral-200 rounded-lg p-4">
              <span className="bg-primary-700 text-white text-xs font-bold px-2 py-0.5 rounded flex-shrink-0 mt-0.5">{p.id}</span>
              <div>
                <h4 className="text-sm font-semibold text-neutral-900">{p.title}</h4>
                <p className="text-xs text-neutral-600 mt-0.5">{p.text}</p>
              </div>
            </div>
          ))}
        </div>

        <SubHeading title="8.7 Summary of Key Findings" />
        <div className="overflow-x-auto my-6 border border-neutral-200 rounded-lg">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-neutral-50 border-b border-neutral-200">
                <th className="text-left py-2 px-3 font-semibold text-neutral-900 w-16">RQ</th>
                <th className="text-left py-2 px-3 font-semibold text-neutral-900">Principal Finding</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-neutral-100">
                <td className="py-2 px-3 font-medium text-neutral-800 align-top">RQ1</td>
                <td className="py-2 px-3 text-neutral-700">The EU is the only jurisdiction with mandatory coverage across all 17 sub-dimensions (17M). Among binding frameworks, mandatory coverage ranges from 17 (EU) to 1 (Japan). The three voluntary/principles-based frameworks (UK, Singapore, Japan) converge on 0&ndash;1 mandatory and 8&ndash;11 recommended provisions, exhibiting a characteristic ceiling (Proposition 3).</td>
              </tr>
              <tr className="border-t border-neutral-100 bg-neutral-50/50">
                <td className="py-2 px-3 font-medium text-neutral-800 align-top">RQ2</td>
                <td className="py-2 px-3 text-neutral-700">Six regulatory philosophies emerge: comprehensive risk-based (EU), state-directed (China), public-sector focused (Canada), sector-based decentralized (USA), principles-based/voluntary (UK, Singapore, Japan), and normative-international (OECD, UNESCO). Philosophy predicts PPP emphasis: rights-based regimes prioritize People; process-oriented regimes prioritize Processes; technology-focused regimes prioritize Platforms.</td>
              </tr>
              <tr className="border-t border-neutral-100">
                <td className="py-2 px-3 font-medium text-neutral-800 align-top">RQ3</td>
                <td className="py-2 px-3 text-neutral-700">Highest convergence: transparency (PR3), risk assessment (PR1), human oversight (P1), and accountability (P2) are addressed by all 10 jurisdictions. Highest divergence: GPAI provisions (PL6), certification (PR4), and content labeling (PL5) are mandatory in at most 2 jurisdictions and absent from 6&ndash;8.</td>
              </tr>
              <tr className="border-t border-neutral-100 bg-neutral-50/50">
                <td className="py-2 px-3 font-medium text-neutral-800 align-top">RQ4</td>
                <td className="py-2 px-3 text-neutral-700">AI classification (PL1) functions as a <em>regulatory trigger</em>: jurisdictions with formal classification (EU, China, Colorado, Canada) show strong cross-dimensional linkages where risk tier determines People and Processes intensity. Jurisdictions without classification show weaker interdependencies.</td>
              </tr>
              <tr className="border-t border-neutral-100">
                <td className="py-2 px-3 font-medium text-neutral-800 align-top">RQ5</td>
                <td className="py-2 px-3 text-neutral-700">Five critical gaps identified: GPAI regulation (PL6), certification (PR4), incident reporting (PR5), content labeling (PL5), and workforce training (P4). These Tier 3 sub-dimensions represent the highest barriers to international harmonization.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-neutral-500 italic mb-4">
          <strong>Table 6.</strong> Summary of Key Findings by Research Question. RQ4 yields the paper&rsquo;s central theoretical contribution: the identification of AI classification as a cross-dimensional regulatory trigger.
        </p>

        {/* ============ SECTION 9 ============ */}
        <SectionHeading id="discussion" number="9" title="Discussion" />

        <SubHeading title="9.1 Implications for International Harmonization" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Our comparative analysis identifies both opportunities and barriers for international AI regulatory harmonization. The Tier 1 sub-dimensions&mdash;where near-universal coverage exists&mdash;represent a potential foundation for mutual recognition agreements. All major jurisdictions agree, at minimum, that AI governance requires human oversight, accountability structures, risk assessment, transparency, and data governance. This convergence, while varying in regulatory intensity, provides a common vocabulary for international coordination.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          The barriers are concentrated in Tier 3 sub-dimensions, where fundamental disagreements persist. The absence of a common AI classification taxonomy means that jurisdictions cannot straightforwardly map each other&rsquo;s risk categories. The EU&rsquo;s GPAI provisions have no counterpart in most other jurisdictions, creating compliance asymmetries for foundation model providers operating globally. The EU&rsquo;s unique certification regime lacks international equivalents, limiting mutual recognition.
        </p>

        <SubHeading title="9.2 AI-Assisted Coding: Full Experimental Results" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          We validated all 170 classifications (17 sub-dimensions &times; 10 jurisdictions) by comparing manual expert coding against independent AI-assisted coding. The overall agreement rate of 87.6% across 170 classifications indicates substantial inter-method alignment. Three patterns emerge from the 21 disagreements:
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          <strong>Pattern 1: AI overrates coverage (9/21 disagreements).</strong> The LLM classified provisions as present where the manual coder judged them too tangential. For example, the LLM coded the UK White Paper as addressing risk assessment (PR1) based on the safety principle, which the manual coder assessed as too general to constitute a substantive risk assessment provision.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          <strong>Pattern 2: AI underrates coverage (7/21 disagreements).</strong> The LLM coded provisions as Absent where the manual coder found them indirectly present. This concentrated in the infrastructure standards sub-dimension (PL2), where the LLM applied a strict interpretation requiring explicit infrastructure provisions, while the manual coder recognized indirect coverage through technical documentation or standards-development mandates.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          <strong>Pattern 3: Intensity confusion (5/21 disagreements).</strong> The LLM disagreed on the Mandatory/Recommended boundary for provisions using strong normative language without explicit penalties.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          These patterns support Proposition 5: agreement is highest for explicit, enumerated obligations (binding legislation: 92.6%; international standards with clear principle structure: 94.1%) and lowest for directive and policy instruments with mixed normative language (76.5%). Legal form&mdash;specifically the explicitness with which obligations are stated&mdash;predicts AI-coding reliability more strongly than document length, jurisdiction, or PPP dimension.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          The protocol reduces initial classification time from approximately 4&ndash;6 hours per framework to under 30 minutes, with approximately 1 hour of human validation per framework. We recommend that future studies: (1) report per-jurisdiction and per-dimension agreement rates, (2) characterize disagreement patterns by regulatory text features, and (3) retain human validation as the final arbiter.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          See the <a href="/methodology" className="text-primary-700 hover:underline">Methodology page</a> for interactive visualizations of per-jurisdiction agreement rates and disagreement patterns.
        </p>

        <SubHeading title="9.3 Framework Utility and Limitations" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          The PPP framework proved effective as a comparative instrument. Its primary strength is enabling dimension-level comparison across regulatory instruments of fundamentally different legal forms&mdash;the same coding scheme applies to binding EU legislation, voluntary US frameworks, and normative international standards. The 17 sub-dimensions provided sufficient granularity to identify meaningful variation without producing an unmanageable coding burden.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          The framework&rsquo;s principal limitation is its inability to capture regulatory <em>intensity</em> beyond the coarse three-level scale. The EU&rsquo;s detailed GPAI provisions spanning five articles and the UK&rsquo;s single-sentence mention of foundation model considerations are both coded at the same level, despite representing vastly different levels of regulatory specificity. Future work could explore finer-grained intensity scales or supplementary metrics capturing regulatory specificity, such as provision word count or number of enumerated obligations.
        </p>

        <SubHeading title="9.4 Limitations" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Four limitations merit explicit acknowledgment. First, the <em>single-coder design</em> constrains inter-coder reliability. We mitigate this through documented coding decisions with provision-level evidence and through the AI-assisted validation (87.6% agreement across 170 classifications), but a multi-coder design would strengthen validity. Second, the <em>three-level coding scale</em> collapses substantial within-category variation: the EU&rsquo;s five-article GPAI regime and China&rsquo;s single-regulation approach both receive a Mandatory rating despite differing markedly in specificity. Future work could supplement the M/R/A scale with a provision-count or specificity metric. Third, the survey captures <em>regulatory design as of early 2026</em>, not implementation or enforcement&mdash;the gap between regulatory text and regulatory effect is a distinct research question requiring empirical methods beyond documentary analysis. Fourth, the <em>nine-jurisdiction scope</em>, while covering the principal regulatory models, excludes significant activity in Latin America, South Asia, and Africa; the propositions derived here should be tested against a broader set of jurisdictions before claiming generalizability.
        </p>

        <SubHeading title="9.5 Robustness Check: EU-Excluded Analysis" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          A potential concern is that the EU AI Act, as the only jurisdiction with complete mandatory coverage, disproportionately drives our structural findings. We therefore verify that the two principal patterns hold when the EU is excluded. <em>Classification trigger</em>: among the remaining nine jurisdictions, those with formal classification (Colorado, Canada, China) average 9.7 mandatory provisions; those without (US Federal, UK, Singapore, Japan, OECD, UNESCO) average 0.2. The pattern is not EU-dependent. <em>Institutional creation threshold</em>: among the nine non-EU jurisdictions, adaptation provisions are addressed in 73% of cases (92/126); creation provisions are addressed in 19% of cases (5/27) and are mandatory in 4% (1/27, Chinese). The gap between adaptation and creation provisions persists without the EU. <em>Voluntary ceiling</em>: the four voluntary frameworks (UK, Singapore, OECD, UNESCO) still converge on 10&ndash;11 of 17 sub-dimensions with uniform absence on PR4 and PR5, and none mandating PR6. These checks confirm that our findings describe structural patterns in the global regulatory landscape, not artifacts of a single comprehensive outlier.
        </p>

        {/* ============ SECTION 10 ============ */}
        <SectionHeading id="conclusion" number="10" title="Conclusion" />
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          This paper has introduced a validated coding framework for comparative AI regulatory analysis and applied it to produce a systematic provision-level benchmark of global AI governance across 10 jurisdictions and 170 coded classifications. From this dataset, we have identified two structural features that together account for substantial variation in the observed regulatory landscape.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          The first finding&mdash;<em>classification as cross-dimensional trigger</em>&mdash;reveals that the coherence of an AI regulatory system is determined by a single architectural feature. Jurisdictions with formal AI classification schemes (EU, China, Colorado, Canada) exhibit cascading obligation structures in which a taxonomic decision activates calibrated requirements across all PPP dimensions (average: 12 mandatory provisions). Jurisdictions without classification (US Federal, UK, Singapore, Japan, OECD, UNESCO) exhibit flat structures in which provisions operate independently (average: 0.2). This difference is architectural, not aspirational: Canada&rsquo;s narrowly-scoped directive achieves higher coherence than the UK&rsquo;s economy-wide framework because Canada has classification and the UK does not.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          The second finding&mdash;the <em>institutional creation threshold</em>&mdash;reveals that global AI governance convergence is bounded not by principled disagreement but by institutional capacity. Provisions that can be implemented by adapting existing regulatory infrastructure are addressed in 76% of jurisdiction&ndash;sub-dimension pairs. Provisions that require creating new governance institutions (certification bodies, incident databases, regulatory sandboxes) are addressed in only 27%, with mandatory adoption concentrated in the EU (three of three creation sub-dimensions) and China (incident reporting only). This threshold holds across all regulatory philosophies and explains both the voluntary ceiling (approximately 65% coverage) and the specific provisions that constitute the residual global governance gap.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
          Together, these findings suggest that the challenge of AI governance harmonization extends beyond value alignment. While most jurisdictions studied agree on transparency, accountability, and risk assessment, the observed gaps concentrate on architecture (whether a classification trigger exists) and institutional investment (whether jurisdictions create the new institutions that the most consequential governance provisions require). Our findings suggest that policy efforts focused solely on aligning principles may be insufficient to close these structural gaps.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed">
          The five propositions, the coding framework, and the companion website are maintained as a living resource for the research community.
        </p>

        {/* References */}
        <div className="mt-14 pt-8 border-t border-neutral-200">
          <h2 className="text-lg font-bold text-neutral-900 mb-4">References</h2>
          <div className="text-xs text-neutral-600 space-y-2 leading-relaxed">
            <p>Baldwin, R., Cave, M., &amp; Lodge, M. (2012). <em>Understanding Regulation: Theory, Strategy, and Practice</em> (2nd ed.). Oxford University Press.</p>
            <p>Baxter, G., &amp; Sommerville, I. (2011). Socio-technical systems: From design methods to systems engineering. <em>Interacting with Computers</em>, 23(1), 4&ndash;17.</p>
            <p>Bradford, A. (2020). <em>The Brussels Effect: How the European Union Rules the World</em>. Oxford University Press.</p>
            <p>Cath, C. (2018). Governing artificial intelligence: ethical, legal and technical opportunities and challenges. <em>Philosophical Transactions of the Royal Society A</em>, 376(2133).</p>
            <p>Coglianese, C. (2023). A People-and-Processes Approach to AI Governance. <em>Administrative &amp; Regulatory Law News</em>, American Bar Association.</p>
            <p>Kerry, C. F., Meltzer, J. P., Renda, A., Engler, A., &amp; Fanni, R. (2023). The EU AI Act will have global impact, but a limited Brussels effect. <em>Brookings Institution</em>.</p>
            <p>European Commission. (2024). Regulation (EU) 2024/1689 of the European Parliament and of the Council laying down harmonised rules on artificial intelligence (Artificial Intelligence Act). <em>Official Journal of the European Union</em>.</p>
            <p>Floridi, L., &amp; Cowls, J. (2019). A unified framework of five principles for AI in society. <em>Harvard Data Science Review</em>, 1(1).</p>
            <p>Gilardi, F., Alizadeh, M., &amp; Kubli, M. (2023). ChatGPT outperforms crowd workers for text-annotation tasks. <em>Proceedings of the National Academy of Sciences</em>, 120(30).</p>
            <p>Hagendorff, T. (2020). The ethics of AI ethics: An evaluation of guidelines. <em>Minds and Machines</em>, 30(1), 99&ndash;120.</p>
            <p>Jobin, A., Ienca, M., &amp; Vayena, E. (2019). The global landscape of AI ethics guidelines. <em>Nature Machine Intelligence</em>, 1(9), 389&ndash;399.</p>
            <p>Leavitt, H. J. (1965). Applied Organizational Change in Industry: Structural, Technological, and Humanistic Approaches. In J. G. March (Ed.), <em>Handbook of Organizations</em> (pp. 1144&ndash;1170). Rand McNally.</p>
            <p>Madiega, T. (2021). Artificial Intelligence Act. <em>European Parliamentary Research Service</em>, PE 698.792.</p>
            <p>M&ouml;kander, J., &amp; Floridi, L. (2023). Operationalising AI governance through ethics-based auditing: an industry case study. <em>AI and Ethics</em>, 3(2), 451&ndash;468.</p>
            <p>Roberts, H., Cowls, J., Morley, J., Taddeo, M., Wang, V., &amp; Floridi, L. (2021). The Chinese approach to artificial intelligence: an analysis of policy, ethics, and regulation. <em>AI &amp; Society</em>, 36(1), 59&ndash;77.</p>
            <p>Schneier, B. (2000). <em>Secrets and Lies: Digital Security in a Networked World</em>. John Wiley &amp; Sons.</p>
            <p>Smuha, N. A. (2021). From a &lsquo;race to AI&rsquo; to a &lsquo;race to AI regulation&rsquo;: regulatory competition for artificial intelligence. <em>Law, Innovation and Technology</em>, 13(1), 57&ndash;84.</p>
            <p>Stahl, B. C. (2021). <em>Artificial Intelligence for a Better Future</em>. Springer.</p>
            <p>Veale, M., &amp; Zuiderveen Borgesius, F. (2021). Demystifying the Draft EU Artificial Intelligence Act. <em>Computer Law Review International</em>, 22(4), 97&ndash;112.</p>
            <p>Ziems, C., Held, W., Shaikh, O., Chen, J., Zhang, Z., &amp; Yang, D. (2024). Can large language models transform computational social science? <em>Computational Linguistics</em>, 50(1), 237&ndash;291.</p>
          </div>
        </div>
      </div>
    </>
  );
}
