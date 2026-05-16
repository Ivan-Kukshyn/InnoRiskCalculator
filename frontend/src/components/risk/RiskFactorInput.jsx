import useRiskFactorWizard from "../../hooks/useRiskFactorWizard";

const RiskFactorInput = () => {
  const {
    currentFactor,
    currentStep,
    currentValue,
    isFirstStep,
    isLastStep,
    isStepCompleted,
    riskFactors,
    goToNextStep,
    goToPreviousStep,
    setCurrentStep,
    updateCurrentFactor,
  } = useRiskFactorWizard();

  const getStepButtonClass = (index) => {
    const base =
      "flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500";

    if (index === currentStep) {
      return `${base} bg-indigo-600 text-white ring-4 ring-indigo-100`;
    }

    if (isStepCompleted(index)) {
      return `${base} bg-emerald-500 text-white hover:bg-emerald-600`;
    }

    return `${base} border border-slate-300 bg-white text-slate-500 hover:border-indigo-300 hover:text-indigo-700`;
  };

  return (
    <div className="h-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="flex h-full flex-col p-5 sm:p-6">
        <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Assessment
            </p>
            <h2 className="text-2xl font-bold text-slate-950">
              Оцінка факторів ризику
            </h2>
          </div>

          <div className="flex flex-wrap justify-start gap-3 xl:justify-end">
            {riskFactors.map((factor, index) => (
              <div
                key={factor.key}
                className="flex min-w-16 flex-col items-center gap-2"
              >
                <button
                  className={getStepButtonClass(index)}
                  onClick={() => setCurrentStep(index)}
                  title={factor.label}
                  aria-label={`Крок ${index + 1}: ${factor.label}${
                    isStepCompleted(index) ? " (завершено)" : ""
                  }`}
                  aria-current={index === currentStep ? "step" : false}
                >
                  {index + 1}
                </button>
                <span className="hidden max-w-24 text-center text-xs leading-tight text-slate-500 lg:block">
                  {factor.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex flex-1 flex-col justify-between rounded-lg border border-slate-200 bg-slate-50 p-5 sm:p-6">
            <div>
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-bold text-slate-950">
                  {currentFactor.label}
                </h3>
                <span
                  className="w-16 rounded-md bg-indigo-600 px-3 py-2 text-center text-base font-bold text-white shadow-sm"
                  aria-label={`Поточне значення: ${currentValue.toFixed(
                    1
                  )} з 10`}
                >
                  {currentValue.toFixed(1)}
                </span>
              </div>

              <p className="mb-6 text-center text-base text-slate-600">
                {currentFactor.description}
              </p>

              <div className="mb-6">
                <label
                  htmlFor={`risk-factor-${currentStep}`}
                  className="sr-only"
                >
                  {currentFactor.label} - значення від 0 до 10
                </label>
                <input
                  id={`risk-factor-${currentStep}`}
                  type="range"
                  className="risk-range w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500"
                  min="0"
                  max="10"
                  step="0.1"
                  value={currentValue}
                  onChange={(e) => updateCurrentFactor(e.target.value)}
                  aria-label={`${currentFactor.label}: ${currentValue.toFixed(
                    1
                  )} из 10. ${currentFactor.description}`}
                  aria-valuemin="0"
                  aria-valuemax="10"
                  aria-valuenow={currentValue}
                  aria-valuetext={`${currentValue.toFixed(1)} из 10`}
                />
                <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-slate-500 sm:text-sm">
                  <span>0 (Мінімальний)</span>
                  <span className="text-center">5 (Середній)</span>
                  <span className="text-right">10 (Максимальний)</span>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={goToPreviousStep}
                  disabled={isFirstStep}
                >
                  Назад
                </button>

                <span className="text-center text-sm text-slate-500">
                  Крок {currentStep + 1} з {riskFactors.length}
                </span>

                <button
                  className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={goToNextStep}
                  disabled={currentValue <= 0 || isLastStep}
                >
                  Далі
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskFactorInput;
