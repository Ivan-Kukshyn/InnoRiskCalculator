const getBadgeClass = (key) => {
  switch (key) {
    case "low":
      return "bg-emerald-500 text-white ring-emerald-200";
    case "medium":
      return "bg-amber-500 text-white ring-amber-200";
    case "high":
      return "bg-rose-500 text-white ring-rose-200";
    case "critical":
      return "bg-slate-900 text-white ring-slate-300";
    default:
      return "bg-slate-500 text-white ring-slate-200";
  }
};

const RiskSummaryCard = ({
  allFactorsSet,
  riskCalculated,
  riskCategory,
  riskIndex,
  onCalculate,
  onReset,
}) => (
  <div className="h-full rounded-lg border border-slate-200 bg-white shadow-sm">
    <div className="flex min-h-[360px] flex-col p-6 text-center">
      <div className="mb-6 text-left">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Summary
        </p>
        <h3 className="text-xl font-bold text-slate-950">Індекс ризику</h3>
      </div>

      {!riskCalculated ? (
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full border-4 border-dashed border-slate-300 bg-slate-50">
            <span className="text-6xl font-bold text-slate-400">?</span>
          </div>
          <button
            className="mb-4 w-full rounded-md bg-indigo-600 px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={onCalculate}
            disabled={!allFactorsSet}
            aria-describedby="risk-status-message"
            aria-label="Розрахувати індекс ризику на основі введених факторів"
          >
            Перевірити ризик
          </button>
          {!allFactorsSet ? (
            <div
              id="risk-status-message"
              className="rounded-lg bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800"
              role="status"
              aria-live="polite"
            >
              Встановіть всі фактори ризику перед розрахунком
            </div>
          ) : (
            <div
              id="risk-status-message"
              className="rounded-lg bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800"
              role="status"
              aria-live="polite"
            >
              Всі фактори ризику були оцінені! Тепер ви можете перевірити свій ризик
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center">
          <div
            className="mb-2 text-5xl font-extrabold text-indigo-700"
            aria-label={`Індекс ризику становить ${riskIndex.toFixed(2)} з 10 можливих балів`}
          >
            {riskIndex.toFixed(2)}
          </div>
          <p className="mb-6 text-sm text-slate-500" aria-hidden="true">
            з 10 можливих
          </p>
          <div className="flex w-full flex-col gap-3">
            <span
              className={`rounded-md px-4 py-3 text-lg font-bold ring-2 ${getBadgeClass(
                riskCategory.key.toLowerCase()
              )}`}
              aria-label={`Рівень ризику: ${riskCategory.label}`}
            >
              {riskCategory.label}
            </span>
            <button
              className="rounded-md border-2 border-rose-500 px-5 py-3 text-base font-semibold text-rose-600 transition hover:bg-rose-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
              onClick={onReset}
              aria-label="Скинути всі фактори ризику та почати заново"
            >
              Скинути все
            </button>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default RiskSummaryCard;
