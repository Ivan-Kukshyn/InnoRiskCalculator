import { create } from 'zustand';
import RiskCalculationService from '../services/riskCalculation';

const useRiskStore = create((set, get) => ({
  // Состояние проекта
  currentProject: {
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
  },

  // Флаг для отображения результатов
  riskCalculated: false,

  // Состояние мастера ввода
  currentStep: 0,
  completedSteps: [],

  // Список сохраненных проектов
  projects: [],

  // Действия
  updateProjectName: (name) =>
    set((state) => ({
      currentProject: { ...state.currentProject, name }
    })),

  updateProjectDescription: (description) =>
    set((state) => ({
      currentProject: { ...state.currentProject, description }
    })),

  updateRiskFactor: (factor, value) =>
    set((state) => ({
      currentProject: {
        ...state.currentProject,
        factors: {
          ...state.currentProject.factors,
          [factor]: value
        }
      },
      riskCalculated: false
    })),

  calculateRiskIndex: () => {
    const { factors } = get().currentProject;

    try {
      const riskIndex = RiskCalculationService.calculateRiskIndex(factors);

      set((state) => ({
        currentProject: {
          ...state.currentProject,
          riskIndex
        },
        riskCalculated: true
      }));
    } catch (error) {
      console.error('Error calculating risk index:', error);
      // Установить значение 0, если расчет не удался
      set((state) => ({
        currentProject: {
          ...state.currentProject,
          riskIndex: 0
        },
        riskCalculated: false
      }));
    }
  },

  resetCalculation: () => {
    set({
      riskCalculated: false,
      currentStep: 0,
      completedSteps: [],
      currentProject: {
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
      }
    });
  },

  // Навигационные действия мастера ввода
  setCurrentStep: (step) => {
    set({ currentStep: step });
  },

  nextStep: () => {
    set((state) => {
      const newStep = Math.min(state.currentStep + 1, 4); // 5 factors, 0-4 index
      return { currentStep: newStep };
    });
  },

  previousStep: () => {
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 0)
    }));
  },

  markStepCompleted: (step) => {
    set((state) => ({
      completedSteps: [...new Set([...state.completedSteps, step])]
    }));
  },

  isStepCompleted: (step) => {
    const state = get();
    return state.completedSteps.includes(step);
  },

  saveProject: () => {
    const { currentProject, projects } = get();
    const newProject = {
      ...currentProject,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };

    set({
      projects: [...projects, newProject],
      currentProject: {
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
      }
    });
  },

  loadProject: (projectId) => {
    const project = get().projects.find(p => p.id === projectId);
    if (project) {
      set({ currentProject: { ...project } });
    }
  },
}));

export default useRiskStore;