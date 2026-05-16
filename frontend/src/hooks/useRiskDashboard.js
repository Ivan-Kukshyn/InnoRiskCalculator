import { useState } from "react";
import useRiskStore, { riskStoreSelectors } from "./useRiskStore";
import { RISK_FACTORS } from "../services/riskFactors";

export const viewTabs = [
  { value: "input", label: "Фактори ризику" },
  { value: "chart", label: "Візуалізація" },
];

const useRiskDashboard = () => {
  const currentProject = useRiskStore(riskStoreSelectors.currentProject);
  const completedSteps = useRiskStore(riskStoreSelectors.completedSteps);
  const riskCalculated = useRiskStore(riskStoreSelectors.riskCalculated);
  const riskCategory = useRiskStore(riskStoreSelectors.riskCategory);
  const allFactorsSet = useRiskStore(riskStoreSelectors.allFactorsSet);
  const calculateRiskIndex = useRiskStore(riskStoreSelectors.calculateRiskIndex);
  const resetCalculation = useRiskStore(riskStoreSelectors.resetCalculation);
  const [chartType, setChartType] = useState("bar");
  const [activeView, setActiveView] = useState("input");

  return {
    activeView,
    allFactorsSet,
    chartType,
    completedCount: completedSteps.length,
    currentProject,
    riskCalculated,
    riskCategory,
    setActiveView,
    setChartType,
    calculateRiskIndex,
    resetCalculation,
    totalFactors: RISK_FACTORS.length,
    viewTabs,
  };
};

export default useRiskDashboard;
