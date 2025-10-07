import useRiskStore from "../hooks/useRiskStore";

const RiskFactorInput = () => {
  const {
    currentProject,
    updateRiskFactor,
    currentStep,
    setCurrentStep,
    nextStep,
    previousStep,
    markStepCompleted,
  } = useRiskStore();
  const { factors } = currentProject;

  const riskFactors = [
    {
      key: "marketRisk",
      label: "Рыночный риск",
      description:
        "Неопределенность относительно спроса и принятия продукта рынком",
    },
    {
      key: "technicalRisk",
      label: "Технический риск",
      description: "Сложность разработки и технической реализации продукта",
    },
    {
      key: "financialRisk",
      label: "Финансовый риск",
      description: "Неопределенность в финансировании и достижении окупаемости",
    },
    {
      key: "competitionRisk",
      label: "Конкурентный риск",
      description: "Угрозы со стороны существующих и потенциальных конкурентов",
    },
    {
      key: "regulatoryRisk",
      label: "Регулятивный риск",
      description:
        "Риски, связанные с изменениями в законодательстве и регулировании",
    },
  ];

  const currentFactor = riskFactors[currentStep];
  const currentValue = factors[currentFactor.key];

  const handleFactorChange = (value) => {
    updateRiskFactor(currentFactor.key, Number(value));
    if (Number(value) > 0) {
      markStepCompleted(currentStep);
    }
  };

  const handleNext = () => {
    if (currentValue > 0 && currentStep < riskFactors.length - 1) {
      nextStep();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      previousStep();
    }
  };

  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  const isCurrentStepCompleted = currentValue > 0;

  // Get step button classes
  const getStepButtonClass = (index) => {
    let classes =
      "btn rounded-circle d-flex align-items-center justify-content-center me-2 mb-2";
    if (index === currentStep) {
      classes += " btn-primary";
    } else if (factors[riskFactors[index].key] > 0) {
      classes += " btn-success";
    } else {
      classes += " btn-outline-secondary";
    }
    return classes;
  };

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body d-flex flex-column">
        {/* Заголовок */}
        <div className="mb-4">
          <h4 className="card-title text-primary mb-3">
            Оценка факторов риска
          </h4>

          {/* Этапы прогресса */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
            {riskFactors.map((factor, index) => (
              <div
                key={factor.key}
                className="d-flex flex-column align-items-center"
                style={{ minWidth: "60px" }}
              >
                <button
                  className={getStepButtonClass(index)}
                  onClick={() => handleStepClick(index)}
                  style={{ width: "40px", height: "40px" }}
                  title={factor.label}
                >
                  <small className="fw-bold">{index + 1}</small>
                </button>
                <small
                  className="text-muted text-center d-none d-lg-block"
                  style={{ fontSize: "0.8rem", lineHeight: "1.1" }}
                >
                  {factor.label}
                </small>
              </div>
            ))}
          </div>
        </div>

        {/* Отображение текущего коэффициента */}
        <div className="flex-grow-1 d-flex flex-column">
          <div className="card bg-light border-0 flex-grow-1">
            <div className="card-body d-flex flex-column justify-content-between">
              {/* Заголовок фактора */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0 text-primary fs-4">
                  {currentFactor.label}
                </h5>
                <span
                  className="badge bg-primary fs-6 px-3 py-2"
                  style={{ width: "60px" }}
                >
                  {currentValue.toFixed(1)}
                </span>
              </div>

              {/* Описание фактора */}
              <p className="text-muted text-center mb-4 fs-6">
                {currentFactor.description}
              </p>

              {/* Ползунок */}
              <div className="mb-4">
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="10"
                  step="0.1"
                  value={currentValue}
                  onChange={(e) => handleFactorChange(e.target.value)}
                />
                <div className="d-flex justify-content-between mt-2">
                  <small className="text-muted">0 (Минимальный)</small>
                  <small className="text-muted">5 (Средний)</small>
                  <small className="text-muted">10 (Максимальный)</small>
                </div>
              </div>

              {/* Навигация */}
              <div className="border-top pt-3">
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                  >
                    ← Назад
                  </button>

                  <small className="text-muted">
                    Шаг {currentStep + 1} из {riskFactors.length}
                  </small>

                  <button
                    className="btn btn-primary"
                    onClick={handleNext}
                    disabled={
                      !isCurrentStepCompleted ||
                      currentStep === riskFactors.length - 1
                    }
                  >
                    Далее →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskFactorInput;
