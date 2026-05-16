const AppHeader = () => (
  <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
    <div className="mx-auto w-full max-w-[1400px] px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <svg
            className="h-10 w-10 shrink-0 rounded-lg bg-indigo-600 p-2 text-white shadow-sm sm:h-11 sm:w-11"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <div>
            <h1 className="text-lg font-bold tracking-normal text-slate-950 sm:text-2xl">
              Risk Index Calculator
            </h1>
            <p className="hidden text-sm text-slate-500 sm:block">
              Калькулятор оцінки інвестиційних ризиків
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          {/* <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span>Dashboard mode</span> */}
        </div>
      </div>
    </div>
  </header>
);

export default AppHeader;
