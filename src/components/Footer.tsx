export default function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
              About This Project
            </h3>
            <p className="text-sm leading-relaxed">
              A comparative survey of global AI regulatory frameworks through
              the People&ndash;Processes&ndash;Platforms analytical lens.
              University of Victoria, Department of Computer Science.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
              Research Team
            </h3>
            <p className="text-sm">Shera Potka</p>
            <p className="text-sm text-primary-400">Supervisor: Prof. Jens Weber</p>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
              Disclaimer
            </h3>
            <p className="text-sm leading-relaxed">
              This is an academic research platform. Regulatory information is
              current as of the date indicated on each entry and should be
              verified against primary sources.
            </p>
          </div>
        </div>
        <div className="border-t border-primary-800 mt-8 pt-6 text-center text-xs text-primary-500">
          &copy; {new Date().getFullYear()} University of Victoria. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
