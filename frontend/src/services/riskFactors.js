export const RISK_FACTORS = [
  {
    key: "marketRisk",
    label: "Ринковий ризик",
    description: "Невизначеність щодо попиту та прийняття продукту на ринку",
  },
  {
    key: "technicalRisk",
    label: "Технічний ризик",
    description: "Складність розробки та технічної реалізації продукту",
  },
  {
    key: "financialRisk",
    label: "Фінансовий ризик",
    description: "Невизначеність у фінансуванні та досягненні окупності",
  },
  {
    key: "competitionRisk",
    label: "Конкурентний ризик",
    description: "Загрози з боку існуючих та потенційних конкурентів",
  },
  {
    key: "regulatoryRisk",
    label: "Регулятивний ризик",
    description: "Ризики, пов'язані зі змінами в законодавстві та регулюванні",
  },
];

export const getRiskFactorByStep = (step) => RISK_FACTORS[step];

export const getLastRiskFactorStep = () => RISK_FACTORS.length - 1;

export const isRiskFactorCompleted = (factors, factorKey) =>
  Number(factors[factorKey]) > 0;

export const areAllRiskFactorsSet = (factors) =>
  Object.values(factors).every((factor) => Number(factor) > 0);
