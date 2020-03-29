import axios from "axios";

export const api = axios.create({
  baseURL: "https://hpb.health.gov.lk/api/get-current-statistical",
});
