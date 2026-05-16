export const factorLabels = {
  marketRisk: "Ринковий ризик",
  technicalRisk: "Технічний ризик",
  financialRisk: "Фінансовий ризик",
  competitionRisk: "Конкурентний ризик",
  regulatoryRisk: "Регуляторний ризик",
};

export const chartColors = ["#ef4444", "#3b82f6", "#f59e0b", "#14b8a6", "#8b5cf6"];

export const getRiskChartData = (factors) =>
  Object.entries(factors).map(([key, value], index) => ({
    key,
    name: factorLabels[key] ?? key,
    value: Number(value),
    fill: chartColors[index % chartColors.length],
  }));

export const hasRiskData = (data) => data.some((item) => item.value > 0);