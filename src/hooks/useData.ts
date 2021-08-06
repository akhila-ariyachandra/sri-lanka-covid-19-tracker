import type { ApiData } from "@/lib/types";
import { useQuery } from "react-query";
import { api } from "@/lib/api";

const useData = () => {
  return useQuery<ApiData>(["data"], () =>
    api.get("/").then(({ data }) => data.data)
  );
};

export default useData;
