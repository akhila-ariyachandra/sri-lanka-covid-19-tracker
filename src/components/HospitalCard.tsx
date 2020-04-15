import React from "react";
import { hospitalData } from "../lib/types";

type RowProps = {
  description: string;
  stat: number;
};

const Row: React.FunctionComponent<RowProps> = ({ description, stat }) => {
  return (
    <div className="flex">
      <h5 className="flex-1 text-base">{description}</h5>

      <h5 className="text-base">{stat}</h5>
    </div>
  );
};

type Props = {
  hospitalData: hospitalData;
};

const StatCard: React.FunctionComponent<Props> = ({ hospitalData }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-5 grid grid-cols-1 gap-2">
      <h2 className="text-2xl">{hospitalData.hospital.name}</h2>

      <h3 className="text-base text-gray-700">
        {hospitalData.hospital.name_si}
      </h3>

      <h3 className="text-base text-gray-700">
        {hospitalData.hospital.name_ta}
      </h3>

      <div className="grid grid-cols-1 gap-1 py-2">
        <Row
          description="Sri Lankans in treatment/observation"
          stat={hospitalData.treatment_local}
        />

        <hr className="my-2 border-solid border-gray-400" />

        <Row
          description="Sri Lankans treated/observed"
          stat={hospitalData.cumulative_local}
        />

        <hr className="my-2 border-solid border-gray-400" />

        <Row
          description="Foreigners in treatment/observation"
          stat={hospitalData.treatment_foreign}
        />

        <hr className="my-2 border-solid border-gray-400" />

        <Row
          description="Foreigners treated/observed"
          stat={hospitalData.cumulative_foreign}
        />
      </div>
    </div>
  );
};

export default StatCard;
