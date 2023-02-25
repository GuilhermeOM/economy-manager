import {
  Area,
  XAxis,
  YAxis,
  Line,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface AreaGraphicProps {
  data: any[];
  height?: number;
}

export default function AreaGraphic({ data, height }: AreaGraphicProps) {
  return (
    <ResponsiveContainer width="100%" height={height} minWidth="300px">
      <ComposedChart
        id="area-chart"
        data={data}
        margin={{ top: 10, right: 30, left: -34, bottom: 0 }}
        style={{ cursor: "pointer" }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#1e3a8a" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" name="Mês" fontSize={14} />
        <YAxis name="Quantia R$" fontSize={14} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#6366f1"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#4f46e5"
          strokeWidth={2}
          dot={{ stroke: "#4f46e5", strokeWidth: 4, r: 2, strokeDasharray: "" }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
