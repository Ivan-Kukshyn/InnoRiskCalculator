const chartTypes = [
  { value: "bar", label: "Столбчаста", ariaLabel: "Столбчаста діаграма" },
  { value: "radar", label: "Радар", ariaLabel: "Радарна діаграма" },
  { value: "doughnut", label: "Кругова", ariaLabel: "Кругова діаграма" },
];

const ChartTypeSelector = ({ chartType, onChange }) => (
  <div className="grid gap-2 sm:flex" role="group" aria-label="Вибір типу графіка">
    {chartTypes.map((type) => {
      const isActive = chartType === type.value;

      return (
        <button
          key={type.value}
          type="button"
          className={`rounded-md px-3 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${
            isActive
              ? "bg-indigo-600 text-white shadow-sm"
              : "border border-indigo-200 bg-white text-indigo-700 hover:bg-indigo-50"
          }`}
          onClick={() => onChange(type.value)}
          aria-label={type.ariaLabel}
        >
          {type.label}
        </button>
      );
    })}
  </div>
);

export default ChartTypeSelector;
