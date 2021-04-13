import Layout from "src/components/Layout";
import dynamic from "next/dynamic";
import StatCard from "src/components/StatCard";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import HospitalCard from "src/components/HospitalCard";
const Graph = dynamic(() => import("src/components/Graph"));
import { NextPage, GetStaticProps } from "next";
import { api } from "src/lib/api";
import { apiData, GraphData } from "src/lib/types";
import { NextSeo } from "next-seo";

dayjs.extend(advancedFormat);

type Props = {
  data: apiData;
  graphData: GraphData[];
};

const Divider = () => <hr className="my-5 border-solid border-black" />;

const Index: NextPage<Props> = ({ data, graphData }) => {
  return (
    <Layout>
      <NextSeo
        title="Sri Lanka COVID-19 Tracker"
        description="COVID-19 Tracker for Sri Lanka"
        openGraph={{
          url: "https://slcovid19.now.sh/",
          title: "Sri Lanka COVID-19 Tracker",
          description: "COVID-19 Tracker for Sri Lanka",
        }}
        additionalMetaTags={[
          {
            name: "monetization",
            content: process.env.NEXT_PUBLIC_ILP_PAYMENT_POINTER,
          },
        ]}
      />

      <h1 className="text-5xl text-bold">Sri Lanka COVID-19 Tracker</h1>

      <h3 className="text-2xl">{`Last updated on ${dayjs(
        data.update_date_time
      ).format("Do MMMM YYYY, h:mm a")}`}</h3>

      <h6 className="text-xl font-medium">
        All data is from the{" "}
        <a
          className="underline text-green-800"
          href="https://hpb.health.gov.lk/en"
          target="_blank"
          rel="noopnoopener noreferrerener"
        >
          Health Promotion Bureau
        </a>
      </h6>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <StatCard
          stat={data.local_new_cases}
          title="New Cases"
          description="Confirmed COVID-19 cases reported during last 24 hours"
        />

        <StatCard
          stat={data.local_active_cases}
          title="Confirmed Cases"
          description="Confirmed COVID-19 cases currently on treatment at the Hospitals in Sri Lanka"
        />

        <StatCard
          stat={data.local_recovered}
          title="Recovered Cases"
          description="Total COVID-19 cases recovered and discharged in Sri Lanka"
        />

        <StatCard
          stat={data.local_deaths}
          title="Deaths"
          description="Total deaths due to COVID-19 reported in Sri Lanka"
        />
      </div>

      <Divider />

      <h4 className="text-4xl">Global Cases</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <StatCard
          stat={data.global_new_cases}
          title="New Cases"
          description="Confirmed COVID-19 cases reported during last 24 hours"
        />

        <StatCard
          stat={data.global_total_cases}
          title="Total Cases"
          description="Total global confirmed COVID-19 cases"
        />

        <StatCard
          stat={data.global_recovered}
          title="Recovered Cases"
          description="Total Global COVID-19 cases who recovered"
        />

        <StatCard
          stat={data.global_new_deaths}
          title="New Deaths"
          description="Global deaths due to COVID-19 reported during last 24 hours"
        />

        <StatCard
          stat={data.global_deaths}
          title="Deaths"
          description="Total global deaths due to COVID-19"
        />
      </div>

      <Divider />

      <h4 className="text-4xl">Hospitals</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Graph data={graphData} />

        {data.hospital_data.map((data) => (
          <HospitalCard hospitalData={data} key={data.hospital_id} />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await api.get("/");

    const data = response.data.data as apiData;

    const graphData: GraphData[] = data.hospital_data
      .map((hospital) => ({
        name: hospital.hospital.name,
        value: hospital.treatment_total,
      }))
      .filter((data) => data.value !== 0);

    return {
      props: {
        data,
        graphData,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.log("> Error fetching data: ", error);
  }
};

export default Index;
