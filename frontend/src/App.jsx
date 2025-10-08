import "./App.css";
import RiskFactorInput from "./components/RiskFactorInput";
import useRiskStore from "./hooks/useRiskStore";
import RiskCalculationService from "./services/riskCalculation";

function App() {
  const {
    currentProject,
    riskCalculated,
    calculateRiskIndex,
    resetCalculation,
  } = useRiskStore();
  const riskCategory = RiskCalculationService.getRiskCategory(
    currentProject.riskIndex
  );

  // Проверка, все ли факторы имеют значения больше 0
  const allFactorsSet = Object.values(currentProject.factors).every(
    (factor) => factor > 0
  );

  const handleCheckRisk = () => {
    calculateRiskIndex();
  };

  const handleReset = () => {
    resetCalculation();
  };

  // Получить цвет значка Bootstrap на основе уровня риска
  const getBadgeClass = (key) => {
    switch (key) {
      case "low":
        return "success";
      case "medium":
        return "warning";
      case "high":
        return "danger";
      case "critical":
        return "dark";
      default:
        return "secondary";
    }
  };

  return (
    <div className="min-vh-100 bg-light">
      {/* Header */}
      <header className="bg-primary text-white py-4 position-relative">
        <div className="container">
          <div className="text-center">
            <h1 className="display-5 fw-bold mb-2">Risk Index Calculator</h1>
            <p className="lead mb-0">
              Калькулятор оценки инвестиционных рисков инновационных продуктов
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow-1 py-4">
        <div className="container-fluid">
          <div className="row g-4 h-100">
            {/* Risk Factors Section */}
            <div className="col-lg-8 col-xl-9">
              <div className="h-100">
                <RiskFactorInput />
              </div>
            </div>

            {/* Risk Center Section */}
            <div className="col-lg-4 col-xl-3">
              <div className="sticky-lg-top" style={{ top: "1rem" }}>
                {!riskCalculated ? (
                  <div className="card shadow-sm h-100 border-primary">
                    <div className="card-body d-flex flex-column justify-content-center text-center">
                      <h3 className="card-title text-primary mb-4">
                        Индекс риска
                      </h3>
                      <div
                        className="mx-auto mb-4 d-flex align-items-center justify-content-center border border-3 border-dashed border-secondary rounded-circle bg-light"
                        style={{ width: "120px", height: "120px" }}
                      >
                        <span className="display-1 text-secondary fw-bold">
                          ?
                        </span>
                      </div>
                      <button
                        className="btn btn-primary btn-lg mb-3"
                        onClick={handleCheckRisk}
                        disabled={!allFactorsSet}
                        aria-describedby="risk-status-message"
                        aria-label="Рассчитать индекс риска на основе введенных факторов"
                      >
                        Проверить риск
                      </button>
                      {!allFactorsSet ? (
                        <div id="risk-status-message" className="alert alert-warning small" role="status" aria-live="polite">
                          Установите все факторы риска перед расчетом.
                        </div>
                      ) : (
                        <div id="risk-status-message" className="alert alert-success small" role="status" aria-live="polite">
                          Все факторы риска были оценены! Теперь вы можете
                          проверить свой риск.
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="card shadow-sm h-100 border-primary">
                    <div className="card-body d-flex flex-column justify-content-center text-center">
                      <h3 className="card-title text-primary mb-3">
                        Индекс риска
                      </h3>
                      <div 
                        className="display-3 fw-bold text-primary mb-2"
                        aria-label={`Индекс риска составляет ${currentProject.riskIndex.toFixed(2)} из 10 возможных баллов`}
                      >
                        {currentProject.riskIndex.toFixed(2)}
                      </div>
                      <p className="text-muted mb-4" aria-hidden="true">из 10 возможных</p>
                      <div className="d-flex flex-column gap-3">
                        <span
                          className={`badge bg-${getBadgeClass(
                            riskCategory.key.toLowerCase()
                          )} fs-5 py-3 px-4`}
                          aria-label={`Уровень риска: ${riskCategory.label}`}
                        >
                          {riskCategory.label}
                        </span>
                        <button
                          className="btn btn-lg mb-3 btn-outline-danger"
                          onClick={handleReset}
                          aria-label="Сбросить все факторы риска и начать заново"
                        >
                          Сбросить все
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
