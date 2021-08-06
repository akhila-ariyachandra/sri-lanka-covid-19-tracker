import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import type { ApiData } from "@/lib/types";

dayjs.extend(advancedFormat);

export const getGraphData = (data: ApiData) => {
  const graphData = [];

  for (let i = 0; i < data.daily_antigen_testing_data.length; i++) {
    graphData.push({
      date: dayjs(data.daily_antigen_testing_data[i].date).format(
        "Do MMMM YYYY"
      ),
      antigen: parseInt(data.daily_antigen_testing_data[i].antigen_count),
      pcr: parseInt(data.daily_pcr_testing_data[i].pcr_count),
    });
  }

  return graphData.reverse();
};
