import Layout from "../components/Layout";
import StatCard from "../components/StatCard";
import Grid from "@material-ui/core/Grid";
import { NextPage, GetServerSideProps } from "next";
import { api } from "../lib/api";
import { apiData } from "../lib/types";
import { NextSeo } from "next-seo";

type Props = {
  data: apiData;
};

const Index: NextPage<Props> = ({ data }) => {
  return (
    <Layout>
      <NextSeo
        title="Sri Lanka COVID-19 Tracker"
        description="COVID-19 Tracker for Sri Lanka"
      />

      <Grid container spacing={2}>
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
      </Grid>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const response = await api.get("/");

    const data = response.data.data as apiData;

    if (context.res) {
      context.res.setHeader(
        "Cache-Control",
        "s-maxage=1, stale-while-revalidate"
      );
    }

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log("> Error fetching data: ", error);
  }
};

export default Index;
