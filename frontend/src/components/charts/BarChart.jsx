import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ChartTooltip from "./ChartTooltip";

const BarChart = ({ data }) => (
  <div className="relative h-[400px]">
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart data={data} margin={{ top: 20, right: 16, left: 0, bottom: 48 }}>
        <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="name"
          interval={0}
          tick={{ fill: "#64748b", fontSize: 12 }}
          tickLine={false}
          axisLine={{ stroke: "#cbd5e1" }}
          angle={-18}
          textAnchor="end"
          height={72}
        />
        <YAxis
          domain={[0, 10]}
          ticks={[0, 2, 4, 6, 8, 10]}
          tick={{ fill: "#64748b", fontSize: 12 }}
          tickLine={false}
          axisLine={{ stroke: "#cbd5e1" }}
          label={{
            value: "Рівень ризику (0-10)",
            angle: -90,
            position: "insideLeft",
            fill: "#475569",
            fontSize: 12,
          }}
        />
        <Tooltip content={<ChartTooltip />} cursor={{ fill: "#eef2ff" }} />
        <Bar dataKey="value" name="Рівень ризику" radius={[6, 6, 0, 0]}>
          {data.map((entry) => (
            <Cell key={entry.key} fill={entry.fill} />
          ))}
        </Bar>
      </RechartsBarChart>
    </ResponsiveContainer>
  </div>
);

export default BarChart;
