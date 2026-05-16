import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import RiskCalculationService from '../services/riskCalculation';
import {
  areAllRiskFactorsSet,
  getLastRiskFactorStep,
} from '../services/riskFactors';

const RISK_STORE_NAME = 'risk-calculator-storage';
const RISK_STORE_VERSION = 1;

const createInitialProject = () => ({
  name: '',
  description: '',
  factors: {
    marketRisk: 0,
    technicalRisk: 0,
    financialRisk: 0,
    competitionRisk: 0,
    regulatoryRisk: 0,
  },
  riskIndex: 0,
});

const createInitialState = () => ({
  currentProject: createInitialProject(),
  riskCalculated: false,
  currentStep: 0,
  completedSteps: [],
  projects: [],
});

const createRiskActions = (set, get) => ({
  updateProjectName: (name) =>
    set((state) => ({
      currentProject: { ...state.currentProject, name },
    })),

  updateProjectDescription: (description) =>
    set((state) => ({
      currentProject: { ...state.currentProject, description },
    })),

  updateRiskFactor: (factor, value) =>
    set((state) => ({
      currentProject: {
        ...state.currentProject,
        factors: {
          ...state.currentProject.factors,
          [factor]: value,
        },
      },
      riskCalculated: false,
    })),

  calculateRiskIndex: () => {
    const { factors } = get().currentProject;

    try {
      const riskIndex = RiskCalculationService.calculateRiskIndex(factors);

      set((state) => ({
        currentProject: {
          ...state.currentProject,
          riskIndex,
        },
        riskCalculated: true,
      }));
    } catch (error) {
      console.error('Помилка при обчисленні індексу ризику:', error);

      set((state) => ({
        currentProject: {
          ...state.currentProject,
          riskIndex: 0,
        },
        riskCalculated: false,
      }));
    }
  },

  resetCalculation: () => {
    set({
      riskCalculated: false,
      currentStep: 0,
      completedSteps: [],
      currentProject: createInitialProject(),
    });
  },

  setCurrentStep: (step) => {
    set({ currentStep: step });
  },

  nextStep: () => {
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, getLastRiskFactorStep()),
    }));
  },

  previousStep: () => {
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 0),
    }));
  },

  markStepCompleted: (step) => {
    set((state) => ({
      completedSteps: [...new Set([...state.completedSteps, step])],
    }));
  },

  isStepCompleted: (step) => get().completedSteps.includes(step),

  saveProject: () => {
    const { currentProject, projects } = get();
    const newProject = {
      ...currentProject,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };

    set({
      projects: [...projects, newProject],
      currentProject: createInitialProject(),
    });
  },

  loadProject: (projectId) => {
    const project = get().projects.find((item) => item.id === projectId);

    if (project) {
      set({ currentProject: { ...project } });
    }
  },
});

const selectPersistedRiskState = (state) => ({
  currentProject: state.currentProject,
  riskCalculated: state.riskCalculated,
  currentStep: state.currentStep,
  completedSteps: state.completedSteps,
  projects: state.projects,
});

const normalizePersistedRiskState = (persistedState) => {
  const initialState = createInitialState();
  const persistedProject = persistedState?.currentProject ?? {};

  return {
    ...initialState,
    ...persistedState,
    currentProject: {
      ...initialState.currentProject,
      ...persistedProject,
      factors: {
        ...initialState.currentProject.factors,
        ...persistedProject.factors,
      },
    },
  };
};

export const riskStoreSelectors = {
  allFactorsSet: (state) => areAllRiskFactorsSet(state.currentProject.factors),
  completedSteps: (state) => state.completedSteps,
  currentProject: (state) => state.currentProject,
  currentStep: (state) => state.currentStep,
  factors: (state) => state.currentProject.factors,
  projects: (state) => state.projects,
  riskCalculated: (state) => state.riskCalculated,
  riskCategory: (state) =>
    RiskCalculationService.getRiskCategory(state.currentProject.riskIndex),
  riskIndex: (state) => state.currentProject.riskIndex,

  calculateRiskIndex: (state) => state.calculateRiskIndex,
  loadProject: (state) => state.loadProject,
  markStepCompleted: (state) => state.markStepCompleted,
  nextStep: (state) => state.nextStep,
  previousStep: (state) => state.previousStep,
  resetCalculation: (state) => state.resetCalculation,
  saveProject: (state) => state.saveProject,
  setCurrentStep: (state) => state.setCurrentStep,
  updateProjectDescription: (state) => state.updateProjectDescription,
  updateProjectName: (state) => state.updateProjectName,
  updateRiskFactor: (state) => state.updateRiskFactor,
};

const useRiskStore = create(
  persist((set, get) => ({
    ...createInitialState(),
    ...createRiskActions(set, get),
  }), {
    name: RISK_STORE_NAME,
    version: RISK_STORE_VERSION,
    storage: createJSONStorage(() => localStorage),
    partialize: selectPersistedRiskState,
    migrate: normalizePersistedRiskState,
  })
);

export default useRiskStore;
