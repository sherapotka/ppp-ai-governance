export interface Jurisdiction {
  id: string;
  name: string;
  region: string;
  lat: number;
  lng: number;
  philosophy: string;
  frameworks: Framework[];
  ppp: PPPProfile;
}

export interface Framework {
  name: string;
  type: string;
  status: string;
  year: number;
  url?: string;
}

export interface PPPRating {
  level: "Mandatory" | "Recommended" | "Absent";
  detail: string;
}

export interface PPPProfile {
  people: {
    humanOversight: PPPRating;
    accountability: PPPRating;
    regulatorRoles: PPPRating;
    workforceTraining: PPPRating;
    affectedPersonsRights: PPPRating;
  };
  processes: {
    riskAssessment: PPPRating;
    auditingCompliance: PPPRating;
    transparency: PPPRating;
    certification: PPPRating;
    incidentReporting: PPPRating;
    regulatorySandboxes: PPPRating;
  };
  platforms: {
    aiClassification: PPPRating;
    infrastructureStandards: PPPRating;
    dataGovernance: PPPRating;
    safetyRobustness: PPPRating;
    contentLabeling: PPPRating;
    gpaiProvisions: PPPRating;
  };
}

export const jurisdictions: Jurisdiction[] = [
  {
    id: "eu",
    name: "European Union",
    region: "Europe",
    lat: 50.85,
    lng: 4.35,
    philosophy: "Comprehensive risk-based",
    frameworks: [
      {
        name: "Artificial Intelligence Act (Regulation (EU) 2024/1689)",
        type: "Binding legislation",
        status: "In force (August 2024); phased implementation through 2027",
        year: 2024,
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
      },
    ],
    ppp: {
      people: {
        humanOversight: { level: "Mandatory", detail: "Art. 14 — human oversight measures required for high-risk AI systems" },
        accountability: { level: "Mandatory", detail: "Provider and deployer obligations (Arts. 16, 26)" },
        regulatorRoles: { level: "Mandatory", detail: "National competent authorities, EU AI Office, AI Board" },
        workforceTraining: { level: "Mandatory", detail: "Art. 4 — AI literacy obligations for providers and deployers" },
        affectedPersonsRights: { level: "Mandatory", detail: "Art. 86 — right to explanation of individual decision-making" },
      },
      processes: {
        riskAssessment: { level: "Mandatory", detail: "Art. 9 — risk management system for high-risk AI" },
        auditingCompliance: { level: "Mandatory", detail: "Arts. 43, 61 — conformity assessment and post-market monitoring" },
        transparency: { level: "Mandatory", detail: "Arts. 13, 50 — transparency obligations by risk tier" },
        certification: { level: "Mandatory", detail: "Art. 43 — conformity assessment (third-party or self-assessment)" },
        incidentReporting: { level: "Mandatory", detail: "Art. 62 — serious incident reporting to market surveillance authorities" },
        regulatorySandboxes: { level: "Mandatory", detail: "Arts. 57–60 — AI regulatory sandboxes established by member states" },
      },
      platforms: {
        aiClassification: { level: "Mandatory", detail: "4-tier risk classification: unacceptable, high, limited, minimal (Art. 6, Annex III)" },
        infrastructureStandards: { level: "Mandatory", detail: "Technical documentation requirements (Annex IV)" },
        dataGovernance: { level: "Mandatory", detail: "Art. 10 — data and data governance for training, validation, testing" },
        safetyRobustness: { level: "Mandatory", detail: "Art. 15 — accuracy, robustness, and cybersecurity requirements" },
        contentLabeling: { level: "Mandatory", detail: "Art. 50 — AI-generated content must be marked as such" },
        gpaiProvisions: { level: "Mandatory", detail: "Arts. 51–56 — obligations for GPAI models including systemic risk" },
      },
    },
  },
  {
    id: "us-federal",
    name: "United States (Federal)",
    region: "North America",
    lat: 38.9,
    lng: -77.04,
    philosophy: "Sector-based, innovation-driven",
    frameworks: [
      {
        name: "Executive Order on Safe, Secure, and Trustworthy AI (2023)",
        type: "Executive directive",
        status: "Issued October 2023",
        year: 2023,
        url: "https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/",
      },
      {
        name: "NIST AI Risk Management Framework (AI RMF 1.0)",
        type: "Voluntary technical framework",
        status: "Published January 2023",
        year: 2023,
        url: "https://www.nist.gov/artificial-intelligence/executive-order-safe-secure-and-trustworthy-artificial-intelligence",
      },
    ],
    ppp: {
      people: {
        humanOversight: { level: "Recommended", detail: "NIST AI RMF — Govern function emphasizes human oversight" },
        accountability: { level: "Recommended", detail: "Shared responsibility model; sector-specific enforcement" },
        regulatorRoles: { level: "Recommended", detail: "Distributed across sector regulators; no central AI authority" },
        workforceTraining: { level: "Recommended", detail: "EO directs agencies to address AI workforce needs" },
        affectedPersonsRights: { level: "Absent", detail: "No federal AI-specific individual rights framework" },
      },
      processes: {
        riskAssessment: { level: "Recommended", detail: "NIST AI RMF Govern-Map-Measure-Manage lifecycle" },
        auditingCompliance: { level: "Recommended", detail: "NIST AI RMF — Measure function; no binding audit mandate" },
        transparency: { level: "Recommended", detail: "EO directs transparency for federal AI use" },
        certification: { level: "Absent", detail: "No federal AI certification scheme" },
        incidentReporting: { level: "Recommended", detail: "EO directs safety reporting for dual-use foundation models" },
        regulatorySandboxes: { level: "Absent", detail: "No federal AI sandbox program" },
      },
      platforms: {
        aiClassification: { level: "Recommended", detail: "Context-based risk framing in NIST AI RMF; no binding tiers" },
        infrastructureStandards: { level: "Recommended", detail: "NIST standards development; voluntary adoption" },
        dataGovernance: { level: "Recommended", detail: "Sector-specific data rules; no AI-specific data governance" },
        safetyRobustness: { level: "Recommended", detail: "NIST AI RMF — reliability and robustness characteristics" },
        contentLabeling: { level: "Absent", detail: "No federal content labeling mandate" },
        gpaiProvisions: { level: "Absent", detail: "No federal GPAI-specific regulation" },
      },
    },
  },
  {
    id: "us-colorado",
    name: "United States (Colorado)",
    region: "North America",
    lat: 39.74,
    lng: -104.99,
    philosophy: "State-level risk-based",
    frameworks: [
      {
        name: "Colorado Artificial Intelligence Act (SB 24-205, 2024)",
        type: "State legislation",
        status: "Signed 2024; effective February 1, 2026",
        year: 2024,
        url: "https://leg.colorado.gov/bills/sb24-205",
      },
    ],
    ppp: {
      people: {
        humanOversight: { level: "Mandatory", detail: "Deployer duty of care includes human oversight" },
        accountability: { level: "Mandatory", detail: "Deployer accountability for high-risk AI decisions" },
        regulatorRoles: { level: "Mandatory", detail: "Attorney General enforcement authority" },
        workforceTraining: { level: "Absent", detail: "No specific workforce training provisions" },
        affectedPersonsRights: { level: "Mandatory", detail: "Consumer notification and opt-out rights" },
      },
      processes: {
        riskAssessment: { level: "Mandatory", detail: "Impact assessment required for high-risk AI systems" },
        auditingCompliance: { level: "Mandatory", detail: "Annual review of impact assessments" },
        transparency: { level: "Mandatory", detail: "Disclosure of AI use in consequential decisions" },
        certification: { level: "Absent", detail: "No certification scheme" },
        incidentReporting: { level: "Absent", detail: "No incident reporting requirement" },
        regulatorySandboxes: { level: "Absent", detail: "No sandbox provisions" },
      },
      platforms: {
        aiClassification: { level: "Mandatory", detail: "Binary classification: high-risk / other" },
        infrastructureStandards: { level: "Absent", detail: "No infrastructure standards" },
        dataGovernance: { level: "Recommended", detail: "Algorithmic discrimination safeguards" },
        safetyRobustness: { level: "Absent", detail: "No specific technical safety standards" },
        contentLabeling: { level: "Absent", detail: "No content labeling provisions" },
        gpaiProvisions: { level: "Absent", detail: "No GPAI-specific provisions" },
      },
    },
  },
  {
    id: "china",
    name: "China",
    region: "East Asia",
    lat: 39.9,
    lng: 116.4,
    philosophy: "State-directed comprehensive",
    frameworks: [
      {
        name: "Provisions on the Management of Deep Synthesis Internet Information Services (2022)",
        type: "Binding regulation",
        status: "Effective January 2023",
        year: 2022,
        url: "https://www.cac.gov.cn/2022-12/11/c_1672221949354811.htm",
      },
      {
        name: "Interim Measures for the Management of Generative Artificial Intelligence Services (2023)",
        type: "Binding regulation",
        status: "Effective August 2023",
        year: 2023,
        url: "https://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm",
      },
    ],
    ppp: {
      people: {
        humanOversight: { level: "Mandatory", detail: "Provider responsibility for content generated by AI services" },
        accountability: { level: "Mandatory", detail: "Provider bears primary liability; algorithm filing with CAC" },
        regulatorRoles: { level: "Mandatory", detail: "Cyberspace Administration of China (CAC) as lead regulator" },
        workforceTraining: { level: "Recommended", detail: "General provisions on AI talent development" },
        affectedPersonsRights: { level: "Recommended", detail: "User complaint mechanisms required" },
      },
      processes: {
        riskAssessment: { level: "Mandatory", detail: "Security assessment required before public deployment" },
        auditingCompliance: { level: "Mandatory", detail: "Algorithm filing and periodic review by CAC" },
        transparency: { level: "Mandatory", detail: "Service providers must disclose AI nature of content" },
        certification: { level: "Absent", detail: "No formal certification scheme; algorithm registry serves similar function" },
        incidentReporting: { level: "Mandatory", detail: "Illegal content reporting obligations" },
        regulatorySandboxes: { level: "Absent", detail: "No formal regulatory sandbox" },
      },
      platforms: {
        aiClassification: { level: "Mandatory", detail: "Application-specific regulation (deep synthesis, generative AI)" },
        infrastructureStandards: { level: "Mandatory", detail: "Technical standards for deep synthesis and generative AI" },
        dataGovernance: { level: "Mandatory", detail: "Training data legality, quality, and provenance requirements" },
        safetyRobustness: { level: "Mandatory", detail: "Content safety and core socialist values alignment" },
        contentLabeling: { level: "Mandatory", detail: "Mandatory AI-generated content labeling (deep synthesis provisions)" },
        gpaiProvisions: { level: "Mandatory", detail: "Generative AI Measures specifically regulate foundation model services" },
      },
    },
  },
  {
    id: "canada",
    name: "Canada",
    region: "North America",
    lat: 45.42,
    lng: -75.69,
    philosophy: "Public-sector focused",
    frameworks: [
      {
        name: "Directive on Automated Decision-Making",
        type: "Federal policy directive",
        status: "In force (amended)",
        year: 2019,
        url: "https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=32592",
      },
    ],
    ppp: {
      people: {
        humanOversight: { level: "Mandatory", detail: "Human-in-the-loop required based on impact level" },
        accountability: { level: "Mandatory", detail: "Federal institutions accountable for automated decisions" },
        regulatorRoles: { level: "Mandatory", detail: "Treasury Board Secretariat oversight" },
        workforceTraining: { level: "Recommended", detail: "Training provisions for federal employees" },
        affectedPersonsRights: { level: "Mandatory", detail: "Right to explanation and recourse for affected individuals" },
      },
      processes: {
        riskAssessment: { level: "Mandatory", detail: "Algorithmic Impact Assessment (AIA) required before deployment" },
        auditingCompliance: { level: "Mandatory", detail: "Ongoing monitoring and periodic review" },
        transparency: { level: "Mandatory", detail: "Public disclosure of AIA results and decision-system use" },
        certification: { level: "Absent", detail: "No formal certification" },
        incidentReporting: { level: "Absent", detail: "No specific AI incident reporting" },
        regulatorySandboxes: { level: "Absent", detail: "No sandbox provisions" },
      },
      platforms: {
        aiClassification: { level: "Mandatory", detail: "Impact-level scoring system (I through IV)" },
        infrastructureStandards: { level: "Absent", detail: "No specific infrastructure standards" },
        dataGovernance: { level: "Recommended", detail: "Bias testing and data quality expectations" },
        safetyRobustness: { level: "Absent", detail: "No specific technical safety requirements" },
        contentLabeling: { level: "Absent", detail: "No content labeling provisions" },
        gpaiProvisions: { level: "Absent", detail: "Directive predates GPAI; no specific provisions" },
      },
    },
  },
  {
    id: "uk",
    name: "United Kingdom",
    region: "Europe",
    lat: 51.51,
    lng: -0.13,
    philosophy: "Principles-based, pro-innovation",
    frameworks: [
      {
        name: "A Pro-Innovation Approach to AI Regulation (White Paper, 2023)",
        type: "Policy framework",
        status: "Published March 2023",
        year: 2023,
        url: "https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach",
      },
    ],
    ppp: {
      people: {
        humanOversight: { level: "Recommended", detail: "Accountability and governance as one of five principles" },
        accountability: { level: "Recommended", detail: "Delegated to existing sectoral regulators" },
        regulatorRoles: { level: "Recommended", detail: "Sector regulators apply five cross-cutting principles" },
        workforceTraining: { level: "Absent", detail: "No specific workforce provisions in White Paper" },
        affectedPersonsRights: { level: "Recommended", detail: "Contestability and redress as one of five principles" },
      },
      processes: {
        riskAssessment: { level: "Recommended", detail: "Safety, security, and robustness principle implies risk assessment" },
        auditingCompliance: { level: "Recommended", detail: "Sector regulators expected to develop monitoring approaches" },
        transparency: { level: "Recommended", detail: "Appropriate transparency and explainability principle" },
        certification: { level: "Absent", detail: "No AI-specific certification scheme" },
        incidentReporting: { level: "Absent", detail: "No AI-specific incident reporting" },
        regulatorySandboxes: { level: "Recommended", detail: "AI regulatory sandbox supported by DSIT" },
      },
      platforms: {
        aiClassification: { level: "Absent", detail: "No risk classification; sector-based approach" },
        infrastructureStandards: { level: "Absent", detail: "No AI-specific infrastructure standards" },
        dataGovernance: { level: "Recommended", detail: "Fairness principle implies data quality expectations" },
        safetyRobustness: { level: "Recommended", detail: "Safety, security, and robustness principle" },
        contentLabeling: { level: "Absent", detail: "No content labeling provisions" },
        gpaiProvisions: { level: "Absent", detail: "Under consideration for forthcoming legislation" },
      },
    },
  },
  {
    id: "singapore",
    name: "Singapore",
    region: "Southeast Asia",
    lat: 1.35,
    lng: 103.82,
    philosophy: "Voluntary, innovation-first",
    frameworks: [
      {
        name: "Model AI Governance Framework (1st ed. 2019; 2nd ed. 2020)",
        type: "Voluntary governance framework",
        status: "Active",
        year: 2020,
        url: "https://www.pdpc.gov.sg/help-and-resources/2020/01/model-ai-governance-framework",
      },
    ],
    ppp: {
      people: {
        humanOversight: { level: "Recommended", detail: "Human-in-the-loop recommended for higher-risk decisions" },
        accountability: { level: "Recommended", detail: "Organizations encouraged to establish accountability structures" },
        regulatorRoles: { level: "Recommended", detail: "IMDA and PDPC provide guidance; no binding mandate" },
        workforceTraining: { level: "Recommended", detail: "AI skills development encouraged" },
        affectedPersonsRights: { level: "Recommended", detail: "Transparency to affected individuals encouraged" },
      },
      processes: {
        riskAssessment: { level: "Recommended", detail: "Risk assessment and mitigation recommended" },
        auditingCompliance: { level: "Recommended", detail: "AI Verify testing toolkit for self-assessment" },
        transparency: { level: "Recommended", detail: "Transparency in AI-augmented decision-making encouraged" },
        certification: { level: "Absent", detail: "No mandatory certification; AI Verify is voluntary" },
        incidentReporting: { level: "Absent", detail: "No AI-specific incident reporting" },
        regulatorySandboxes: { level: "Recommended", detail: "Regulatory sandboxes available in fintech and other sectors" },
      },
      platforms: {
        aiClassification: { level: "Absent", detail: "Sector-agnostic; no formal risk classification" },
        infrastructureStandards: { level: "Absent", detail: "No mandatory infrastructure standards" },
        dataGovernance: { level: "Recommended", detail: "Data management and protection guidance" },
        safetyRobustness: { level: "Recommended", detail: "Robustness and reliability encouraged" },
        contentLabeling: { level: "Absent", detail: "No content labeling provisions" },
        gpaiProvisions: { level: "Absent", detail: "No GPAI-specific provisions in main framework" },
      },
    },
  },
  {
    id: "japan",
    name: "Japan",
    region: "East Asia",
    lat: 35.68,
    lng: 139.69,
    philosophy: "Promotional, cooperative",
    frameworks: [
      {
        name: "AI Promotion Act (2025)",
        type: "Legislation",
        status: "Enacted 2025",
        year: 2025,
        url: "https://www.japaneselawtranslation.go.jp/",
      },
    ],
    ppp: {
      people: {
        humanOversight: { level: "Recommended", detail: "Human oversight encouraged through guidelines" },
        accountability: { level: "Recommended", detail: "Cooperative governance model; no strict liability" },
        regulatorRoles: { level: "Mandatory", detail: "AI Strategy Headquarters established under the Act" },
        workforceTraining: { level: "Recommended", detail: "AI talent development as a core objective" },
        affectedPersonsRights: { level: "Absent", detail: "No AI-specific individual rights provisions" },
      },
      processes: {
        riskAssessment: { level: "Absent", detail: "No mandatory risk assessment; guidelines-based" },
        auditingCompliance: { level: "Absent", detail: "No binding audit requirements" },
        transparency: { level: "Recommended", detail: "Transparency encouraged through AI Guidelines for Business" },
        certification: { level: "Absent", detail: "No certification scheme" },
        incidentReporting: { level: "Absent", detail: "No AI incident reporting requirement" },
        regulatorySandboxes: { level: "Recommended", detail: "Regulatory sandbox initiatives in various sectors" },
      },
      platforms: {
        aiClassification: { level: "Absent", detail: "No risk classification scheme" },
        infrastructureStandards: { level: "Recommended", detail: "Promotion of AI infrastructure development" },
        dataGovernance: { level: "Recommended", detail: "Data governance addressed through existing statutes" },
        safetyRobustness: { level: "Recommended", detail: "Safety encouraged through guidelines" },
        contentLabeling: { level: "Absent", detail: "No mandatory content labeling" },
        gpaiProvisions: { level: "Absent", detail: "No GPAI-specific provisions" },
      },
    },
  },
  {
    id: "oecd",
    name: "OECD",
    region: "International",
    lat: 48.86,
    lng: 2.32,
    philosophy: "Normative-international",
    frameworks: [
      {
        name: "OECD AI Principles",
        type: "Intergovernmental standard",
        status: "Adopted 2019; updated 2024",
        year: 2019,
        url: "https://oecd.ai/en/ai-principles",
      },
    ],
    ppp: {
      people: {
        humanOversight: { level: "Recommended", detail: "Human-centred values and fairness principle" },
        accountability: { level: "Recommended", detail: "Accountability principle for AI actors" },
        regulatorRoles: { level: "Recommended", detail: "Policy recommendations for national AI strategies" },
        workforceTraining: { level: "Recommended", detail: "Labour market transition and skills policies recommended" },
        affectedPersonsRights: { level: "Recommended", detail: "Transparency and contestability recommended" },
      },
      processes: {
        riskAssessment: { level: "Recommended", detail: "Robustness, security, and safety principle" },
        auditingCompliance: { level: "Absent", detail: "No specific audit framework (non-binding standard)" },
        transparency: { level: "Recommended", detail: "Transparency and responsible disclosure principle" },
        certification: { level: "Absent", detail: "No certification mechanism" },
        incidentReporting: { level: "Absent", detail: "No incident reporting provisions" },
        regulatorySandboxes: { level: "Absent", detail: "No sandbox provisions" },
      },
      platforms: {
        aiClassification: { level: "Absent", detail: "No classification scheme" },
        infrastructureStandards: { level: "Recommended", detail: "International cooperation on AI infrastructure" },
        dataGovernance: { level: "Recommended", detail: "Data governance addressed under trustworthy AI principles" },
        safetyRobustness: { level: "Recommended", detail: "Robustness, security, and safety principle" },
        contentLabeling: { level: "Absent", detail: "No content labeling provisions" },
        gpaiProvisions: { level: "Absent", detail: "No GPAI-specific provisions" },
      },
    },
  },
  {
    id: "unesco",
    name: "UNESCO",
    region: "International",
    lat: 48.85,
    lng: 2.31,
    philosophy: "Normative-international",
    frameworks: [
      {
        name: "Recommendation on the Ethics of Artificial Intelligence",
        type: "Global normative standard",
        status: "Adopted November 2021",
        year: 2021,
        url: "https://unesdoc.unesco.org/ark:/48223/pf0000381137",
      },
    ],
    ppp: {
      people: {
        humanOversight: { level: "Recommended", detail: "Human oversight and determination principle" },
        accountability: { level: "Recommended", detail: "Responsibility and accountability as core principle" },
        regulatorRoles: { level: "Recommended", detail: "Member states encouraged to establish governance bodies" },
        workforceTraining: { level: "Recommended", detail: "Education and AI literacy as policy action area" },
        affectedPersonsRights: { level: "Recommended", detail: "Human dignity and human rights as foundational principles" },
      },
      processes: {
        riskAssessment: { level: "Recommended", detail: "Ethical impact assessment recommended" },
        auditingCompliance: { level: "Recommended", detail: "Monitoring and evaluation recommended" },
        transparency: { level: "Recommended", detail: "Transparency and explainability as core principle" },
        certification: { level: "Absent", detail: "No certification mechanism" },
        incidentReporting: { level: "Absent", detail: "No incident reporting provisions" },
        regulatorySandboxes: { level: "Absent", detail: "No sandbox provisions" },
      },
      platforms: {
        aiClassification: { level: "Absent", detail: "No classification scheme" },
        infrastructureStandards: { level: "Recommended", detail: "Cooperation on AI infrastructure development" },
        dataGovernance: { level: "Recommended", detail: "Data governance as policy action area" },
        safetyRobustness: { level: "Recommended", detail: "Safety and security as core principle" },
        contentLabeling: { level: "Absent", detail: "No content labeling provisions" },
        gpaiProvisions: { level: "Absent", detail: "Predates GPAI discourse" },
      },
    },
  },
];

export const pppSubDimensions = {
  people: [
    { key: "humanOversight", label: "Human Oversight", code: "P1" },
    { key: "accountability", label: "Accountability", code: "P2" },
    { key: "regulatorRoles", label: "Regulator & Stakeholder Roles", code: "P3" },
    { key: "workforceTraining", label: "Workforce Training & AI Literacy", code: "P4" },
    { key: "affectedPersonsRights", label: "Affected Persons' Rights", code: "P5" },
  ],
  processes: [
    { key: "riskAssessment", label: "Risk Assessment", code: "PR1" },
    { key: "auditingCompliance", label: "Auditing & Compliance", code: "PR2" },
    { key: "transparency", label: "Transparency Requirements", code: "PR3" },
    { key: "certification", label: "Certification & Governance", code: "PR4" },
    { key: "incidentReporting", label: "Incident Reporting", code: "PR5" },
    { key: "regulatorySandboxes", label: "Regulatory Sandboxes", code: "PR6" },
  ],
  platforms: [
    { key: "aiClassification", label: "AI System Classification", code: "PL1" },
    { key: "infrastructureStandards", label: "Infrastructure & Deployment", code: "PL2" },
    { key: "dataGovernance", label: "Data Governance", code: "PL3" },
    { key: "safetyRobustness", label: "Safety & Robustness", code: "PL4" },
    { key: "contentLabeling", label: "Content Labeling & Provenance", code: "PL5" },
    { key: "gpaiProvisions", label: "GPAI / Foundation Model Provisions", code: "PL6" },
  ],
} as const;

export const updates = [
  {
    date: "2026-02-01",
    title: "Colorado Artificial Intelligence Act Takes Effect",
    category: "USA",
    summary:
      "The Colorado AI Act (SB 24-205) becomes effective, requiring deployers of high-risk AI systems to conduct impact assessments and provide consumer notifications.",
  },
  {
    date: "2025-08-02",
    title: "EU AI Act: GPAI and Governance Rules Applicable",
    category: "EU",
    summary:
      "General-purpose AI model obligations and governance provisions of the EU AI Act become applicable, requiring GPAI providers to comply with transparency and documentation requirements.",
  },
  {
    date: "2025-05-28",
    title: "Japan Enacts AI Promotion Act",
    category: "Japan",
    summary:
      "Japan enacts the AI Promotion Act, establishing a promotional legislative framework for AI research, development, and utilization, including the AI Strategy Headquarters.",
  },
  {
    date: "2025-02-02",
    title: "EU AI Act: Prohibited AI Practices Applicable",
    category: "EU",
    summary:
      "Prohibitions on unacceptable-risk AI practices under the EU AI Act become applicable, including bans on social scoring, certain biometric systems, and manipulative AI.",
  },
  {
    date: "2024-08-01",
    title: "EU AI Act Enters into Force",
    category: "EU",
    summary:
      "Regulation (EU) 2024/1689 — the Artificial Intelligence Act — enters into force, establishing the first comprehensive binding AI regulation globally.",
  },
  {
    date: "2024-05-17",
    title: "Colorado AI Act Signed into Law",
    category: "USA",
    summary:
      "Colorado Governor signs SB 24-205, making Colorado the first U.S. state to enact comprehensive AI legislation with mandatory impact assessments for high-risk systems.",
  },
  {
    date: "2023-10-30",
    title: "U.S. Executive Order on AI",
    category: "USA",
    summary:
      "President issues Executive Order on the Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence, directing federal agencies on AI safety and governance.",
  },
  {
    date: "2023-08-15",
    title: "China Generative AI Measures Take Effect",
    category: "China",
    summary:
      "Interim Measures for the Management of Generative Artificial Intelligence Services become effective, making China the first country with binding generative AI regulation.",
  },
];
