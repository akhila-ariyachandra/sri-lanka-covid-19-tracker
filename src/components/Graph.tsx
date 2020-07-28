import React from "react";
import randomColor from "randomcolor";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { GraphData } from "src/lib/types";

type Props = {
  data: GraphData[];
};

const Graph: React.FunctionComponent<Props> = ({ data }) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-5 col-span-1 sm:col-span-2 flex flex-col items-center">
        <PieChart width={300} height={275}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={75}
            outerRadius={100}
            paddingAngle={1}
            fill="#556cd6"
            isAnimationActive={false}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={randomColor({ luminosity: "dark" })}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        <h2 className="text-2xl">
          People who are currently on treatment/observation for COVID-19
        </h2>
      </div>
    </>
  );
};

export default Graph;
