import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RechartsRadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import ChartTooltip from "./ChartTooltip";

const RadarChart = ({ data }) => (
  <div className="relative h-[400px]">
    <ResponsiveContainer width="100%" height="100%">
      <RechartsRadarChart data={data} outerRadius="72%">
        <PolarGrid stroke="#cbd5e1" />
        <PolarAngleAxis dataKey="name" tick={{ fill: "#475569", fontSize: 12 }} />
        <PolarRadiusAxis
          angle={90}
          domain={[0, 10]}
          tick={{ fill: "#64748b", fontSize: 11 }}
          tickCount={6}
        />
        <Tooltip content={<ChartTooltip />} />
        <Radar
          dataKey="value"
          name="Рівень ризику"
          stroke="#4f46e5"
          fill="#4f46e5"
          fillOpacity={0.24}
          strokeWidth={2}
        />
      </RechartsRadarChart>
    </ResponsiveContainer>
  </div>
);

export default RadarChart;
