export type apiData = {
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
  hospital_data: [hospitalData];
};

export type hospitalData = {
  id: number;
  hospital_id: number;
  cumulative_local: number;
  cumulative_foreign: number;
  treatment_local: number;
  treatment_foreign: number;
  created_at: Date;
  cumulative_total: number;
  treatment_total: number;
  hospital: hospital;
};

export type hospital = {
  id: number;
  name: string;
};
