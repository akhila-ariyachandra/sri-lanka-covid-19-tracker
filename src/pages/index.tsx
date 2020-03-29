import Layout from "../components/Layout";
import StatCard from "../components/StatCard";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import dayjs from "dayjs";
import HospitalCard from "../components/HospitalCard";
import Divider from "@material-ui/core/Divider";
import { NextPage, GetServerSideProps } from "next";
import { api } from "../lib/api";
import { apiData } from "../lib/types";
import { NextSeo } from "next-seo";
import { makeStyles } from "@material-ui/core/styles";

type Props = {
  data: apiData;
};

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: theme.spacing(2, 0),
  },
  text: {
    margin: theme.spacing(2, 0),
  },
}));

const Index: NextPage<Props> = ({ data }) => {
  const classes = useStyles();

  return (
    <Layout>
      <NextSeo
        title="Sri Lanka COVID-19 Tracker"
        description="COVID-19 Tracker for Sri Lanka"
      />

      <Typography variant="h3" component="h1" className={classes.text}>
        Sri Lanka COVID-19 Tracker
      </Typography>

      <Typography variant="h5" component="h3" className={classes.text}>
        {`Last updated on ${dayjs(data.update_date_time).format(
          "D MMMM YYYY, h:m a"
        )}`}
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
        Hospitals
      </Typography>

      <Grid container spacing={2}>
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
