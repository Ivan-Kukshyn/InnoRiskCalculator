import "./App.css";
import RiskChartPanel from "./components/charts/RiskChartPanel";
import AppLayout from "./components/layout/AppLayout";
import DashboardGrid from "./components/layout/DashboardGrid";
import RiskDashboardOverview from "./components/risk/RiskDashboardOverview";
import RiskFactorInput from "./components/risk/RiskFactorInput";
import RiskSummaryCard from "./components/risk/RiskSummaryCard";
import SegmentedTabs from "./components/ui/SegmentedTabs";
import useRiskDashboard from "./hooks/useRiskDashboard";

function App() {
  const {
    activeView,
    allFactorsSet,
    chartType,
    completedCount,
    currentProject,
    riskCalculated,
    riskCategory,
    setActiveView,
    setChartType,
    calculateRiskIndex,
    resetCalculation,
    totalFactors,
    viewTabs,
  } = useRiskDashboard();

  const mainContent = (
    <>
      {riskCalculated && (
        <SegmentedTabs
          activeValue={activeView}
          tabs={viewTabs}
          onChange={setActiveView}
          className="mb-4"
        />
      )}

      <div className="min-h-[300px] sm:min-h-[350px] lg:min-h-[500px]">
        <div className={activeView === "input" || !riskCalculated ? "block" : "hidden"}>
          <RiskFactorInput />
        </div>

        {riskCalculated && (
          <div className={activeView === "chart" ? "block" : "hidden"}>
            <RiskChartPanel
              factors={currentProject.factors}
              chartType={chartType}
              onChartTypeChange={setChartType}
            />
          </div>
        )}
      </div>
    </>
  );

  const sidebar = (
    <RiskSummaryCard
      allFactorsSet={allFactorsSet}
      riskCalculated={riskCalculated}
      riskCategory={riskCategory}
      riskIndex={currentProject.riskIndex}
      onCalculate={calculateRiskIndex}
      onReset={resetCalculation}
    />
  );

  return (
    <AppLayout>
      <RiskDashboardOverview
        completedCount={completedCount}
        riskCalculated={riskCalculated}
        riskCategory={riskCategory}
        riskIndex={currentProject.riskIndex}
        totalCount={totalFactors}
      />
      <DashboardGrid main={mainContent} sidebar={sidebar} />
    </AppLayout>
  );
}

export default App;
