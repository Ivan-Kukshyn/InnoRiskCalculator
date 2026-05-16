import RiskChart from "./RiskChart";
import ChartTypeSelector from "./ChartTypeSelector";

const RiskChartPanel = ({ factors, chartType, onChartTypeChange }) => (
  <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
    <div className="border-b border-slate-200 px-5 py-4 sm:px-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Analytics
          </p>
          <h2 className="text-lg font-bold text-slate-950">Візуалізація ризиків</h2>
        </div>
        <ChartTypeSelector chartType={chartType} onChange={onChartTypeChange} />
      </div>
    </div>
    <div className="p-5 sm:p-6">
      <RiskChart factors={factors} chartType={chartType} />
    </div>
  </div>
);

export default RiskChartPanel;
