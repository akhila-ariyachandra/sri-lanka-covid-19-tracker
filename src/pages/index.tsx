import Layout from "../components/Layout";
import dynamic from "next/dynamic";
import StatCard from "../components/StatCard";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import HospitalCard from "../components/HospitalCard";
import Divider from "@material-ui/core/Divider";
const Link = dynamic(() => import("@material-ui/core/Link"));
const Graph = dynamic(() => import("../components/Graph"));
import { NextPage, GetServerSideProps } from "next";
import { api } from "../lib/api";
import { apiData, GraphData } from "../lib/types";
import { NextSeo } from "next-seo";
import { makeStyles } from "@material-ui/core/styles";

dayjs.extend(advancedFormat);

type Props = {
  data: apiData;
  graphData: GraphData[];
};

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: theme.spacing(2, 0),
  },
  text: {
    margin: theme.spacing(2, 0),
  },
}));

const Index: NextPage<Props> = ({ data, graphData }) => {
  const classes = useStyles();

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
      />

      <Typography variant="h3" component="h1" className={classes.text}>
        Sri Lanka COVID-19 Tracker
      </Typography>

      <Typography variant="h5" component="h3" className={classes.text}>
        {`Last updated on ${dayjs(data.update_date_time).format(
          "Do MMMM YYYY, h:mm a"
        )}`}
      </Typography>

      <Typography variant="subtitle2" className={classes.text}>
        All data is from the{" "}
        <Link
          href="https://hpb.health.gov.lk/en"
          target="_blank"
          rel="noopnoopener noreferrerener"
        >
          Health Promotion Bureau
        </Link>
      </Typography>

      <Grid container spacing={2}>
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
      </Grid>

      <Divider className={classes.divider} />

      <Typography variant="h4" component="h4" className={classes.text}>
        Global Cases
      </Typography>

      <Grid container spacing={2}>
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
      </Grid>

      <Divider className={classes.divider} />

      <Typography variant="h4" component="h4" className={classes.text}>
        Hospitals
      </Typography>

      <Grid container spacing={2}>
        <Graph data={graphData} />

        {data.hospital_data.map((data) => (
          <HospitalCard hospitalData={data} key={data.hospital_id} />
        ))}
      </Grid>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const response = await api.get("/");

    const data = response.data.data as apiData;

    // Uncomment to enable Serverless Pre-Rendering (SPR) - https://zeit.co/blog/serverless-pre-rendering
    //if (context.res) {
    //  context.res.setHeader(
    //    "Cache-Control",
    //    "s-maxage=1, stale-while-revalidate"
    //  );
    //}

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
    };
  } catch (error) {
    console.log("> Error fetching data: ", error);

    context.res.statusCode = 503;
    context.res.statusMessage = "Error fetching API data";
  }
};

export default Index;
