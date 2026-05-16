import BarChart from "./BarChart";
import PieChart from "./PieChart";
import RadarChart from "./RadarChart";
import { getRiskChartData, hasRiskData } from "./chartData";

const RiskChart = ({ factors, chartType = "bar" }) => {
  const data = getRiskChartData(factors);

  if (!hasRiskData(data)) {
    return (
      <div
        className="rounded-lg bg-sky-50 px-4 py-3 text-center text-sm font-medium text-sky-800"
        role="alert"
      >
        Заповніть фактори ризику для відображення графіків
      </div>
    );
  }

  if (chartType === "radar") {
    return <RadarChart data={data} />;
  }

  if (chartType === "doughnut") {
    return <PieChart data={data} />;
  }

  return <BarChart data={data} />;
};

export default RiskChart;
