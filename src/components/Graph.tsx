import type { FC } from "react";
import useData from "@/hooks/useData";
import { getGraphData } from "@/lib/helpers";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Graph: FC = () => {
  const { data } = useData();
  const graphData = getGraphData(data);

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-5">
      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          width={500}
          height={300}
          data={graphData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="antigen"
            stroke="#8884d8"
            name="Antigen"
            activeDot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="pcr"
            stroke="#82ca9d"
            name="PCR"
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
