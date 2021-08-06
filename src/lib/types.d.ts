export type ApiData = {
  update_date_time: Date;
  local_new_cases: number;
  local_total_cases: number;
  local_total_number_of_individuals_in_hospitals: number;
  local_deaths: number;
  local_new_deaths: number;
  local_recovered: number;
  local_active_cases: number;
  global_new_cases: number;
  global_total_cases: number;
  global_deaths: number;
  global_new_deaths: number;
  global_recovered: number;
  total_pcr_testing_count: number;
  daily_pcr_testing_data: {
    date: string;
    pcr_count: string;
  }[];
  total_antigen_testing_count: number;
  daily_antigen_testing_data: { date: string; antigen_count: string }[];
  hospital_data: {}[];
};
