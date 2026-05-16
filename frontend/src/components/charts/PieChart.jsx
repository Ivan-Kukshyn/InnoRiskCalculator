import {
  Cell,
  Legend,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import ChartTooltip from "./ChartTooltip";

const PieChart = ({ data }) => (
  <div className="relative h-[400px]">
    <ResponsiveContainer width="100%" height="100%">
      <RechartsPieChart>
        <Tooltip content={<ChartTooltip />} />
        <Legend
          iconType="circle"
          verticalAlign="bottom"
          wrapperStyle={{ color: "#475569", fontSize: 12, paddingTop: 16 }}
        />
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="45%"
          innerRadius="48%"
          outerRadius="74%"
          paddingAngle={3}
          label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
        >
          {data.map((entry) => (
            <Cell key={entry.key} fill={entry.fill} />
          ))}
        </Pie>
      </RechartsPieChart>
    </ResponsiveContainer>
  </div>
);

export default PieChart;
