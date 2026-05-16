import useRiskStore, { riskStoreSelectors } from "./useRiskStore";
import {
  getLastRiskFactorStep,
  getRiskFactorByStep,
  isRiskFactorCompleted,
  RISK_FACTORS,
} from "../services/riskFactors";

const useRiskFactorWizard = () => {
  const factors = useRiskStore(riskStoreSelectors.factors);
  const currentStep = useRiskStore(riskStoreSelectors.currentStep);
  const updateRiskFactor = useRiskStore(riskStoreSelectors.updateRiskFactor);
  const setCurrentStep = useRiskStore(riskStoreSelectors.setCurrentStep);
  const nextStep = useRiskStore(riskStoreSelectors.nextStep);
  const previousStep = useRiskStore(riskStoreSelectors.previousStep);
  const markStepCompleted = useRiskStore(riskStoreSelectors.markStepCompleted);
  const currentFactor = getRiskFactorByStep(currentStep);
  const currentValue = factors[currentFactor.key];

  const updateCurrentFactor = (value) => {
    const numericValue = Number(value);

    updateRiskFactor(currentFactor.key, numericValue);

    if (numericValue > 0) {
      markStepCompleted(currentStep);
    }
  };

  const goToNextStep = () => {
    if (currentValue > 0 && currentStep < getLastRiskFactorStep()) {
      nextStep();
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      previousStep();
    }
  };

  const isStepCompleted = (stepIndex) =>
    isRiskFactorCompleted(factors, RISK_FACTORS[stepIndex].key);

  return {
    currentFactor,
    currentStep,
    currentValue,
    factors,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === getLastRiskFactorStep(),
    isStepCompleted,
    riskFactors: RISK_FACTORS,
    goToNextStep,
    goToPreviousStep,
    setCurrentStep,
    updateCurrentFactor,
  };
};

export default useRiskFactorWizard;
