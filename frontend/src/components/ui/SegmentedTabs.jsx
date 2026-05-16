const SegmentedTabs = ({ activeValue, tabs, onChange, className = "" }) => (
  <div
    className={`inline-flex rounded-lg border border-slate-200 bg-white p-1 shadow-sm ${className}`}
    role="tablist"
  >
    {tabs.map((tab) => {
      const isActive = activeValue === tab.value;

      return (
        <button
          key={tab.value}
          className={`rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${
            isActive
              ? "bg-indigo-600 text-white shadow-sm"
              : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-700"
          }`}
          onClick={() => onChange(tab.value)}
          type="button"
          role="tab"
          aria-selected={isActive}
        >
          {tab.label}
        </button>
      );
    })}
  </div>
);

export default SegmentedTabs;
