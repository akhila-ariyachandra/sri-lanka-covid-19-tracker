import React from "react";

type Props = {
  stat: number;
  title: string;
  description: string;
};

const StatCard: React.FunctionComponent<Props> = ({
  stat,
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-5 grid grid-cols-1 gap-1">
      <p className="text-lg text-gray-700 font-light">{title}</p>

      <h2 className="text-2xl">{stat}</h2>

      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default StatCard;
