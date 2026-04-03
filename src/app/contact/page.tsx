import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact & Contributors"
        subtitle="Research team and institutional affiliation"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Research Team */}
          <div className="border border-neutral-200 rounded-lg p-6">
            <h2 className="text-lg font-bold text-neutral-900 mb-4">
              Research Team
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-neutral-900">Shera Potka</h3>
                <p className="text-sm text-neutral-500">Researcher</p>
                <p className="text-sm text-neutral-600 mt-1">
                  Department of Computer Science
                  <br />
                  University of Victoria
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">
                  Prof. Jens Weber
                </h3>
                <p className="text-sm text-neutral-500">Supervisor</p>
                <p className="text-sm text-neutral-600 mt-1">
                  Department of Computer Science
                  <br />
                  University of Victoria
                </p>
              </div>
            </div>
          </div>

          {/* Institutional Affiliation */}
          <div className="border border-neutral-200 rounded-lg p-6">
            <h2 className="text-lg font-bold text-neutral-900 mb-4">
              Institutional Affiliation
            </h2>
            <div className="space-y-3 text-sm text-neutral-600">
              <p>
                <strong className="text-neutral-800">University of Victoria</strong>
                <br />
                Department of Computer Science
                <br />
                Victoria, British Columbia, Canada
              </p>
            </div>

            <h2 className="text-lg font-bold text-neutral-900 mt-8 mb-4">
              About This Platform
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              This website serves as a companion to the research paper
              &ldquo;People, Processes, Platforms: A Coding Framework and
              Comparative Benchmark for Global AI Governance.&rdquo; It is
              designed as a living resource that can be updated as regulations
              evolve, complementing the static analysis in the published paper.
            </p>
          </div>
        </div>

        {/* Citation */}
        <div className="mt-10 bg-neutral-50 border border-neutral-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-neutral-900 mb-3">
            Suggested Citation
          </h2>
          <div className="bg-white border border-neutral-200 rounded p-4 font-mono text-xs text-neutral-600 leading-relaxed">
            Potka, S. &amp; Weber, J. (2026). People, Processes, Platforms:
            A Coding Framework and Comparative Benchmark for Global AI
            Governance. Department of Computer Science, University of Victoria.
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 text-xs text-neutral-400 leading-relaxed">
          <strong className="text-neutral-500">Disclaimer:</strong> This
          platform presents academic research and is intended for informational
          purposes. Regulatory information is current as of the date indicated
          and should be verified against primary legal sources. This platform
          does not constitute legal advice.
        </div>
      </div>
    </>
  );
}
