import React from "react";
import dynamic from "next/dynamic";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
const Tooltip = dynamic(() => import("@material-ui/core/Tooltip"));
import { hospitalData } from "../lib/types";

type RowProps = {
  description: string;
  stat: number;
  longDescription: string;
};

const Row: React.FunctionComponent<RowProps> = ({
  description,
  stat,
  longDescription,
}) => {
  return (
    <Tooltip title={longDescription}>
      <TableRow>
        <TableCell>{description}</TableCell>
        <TableCell align="right">{stat}</TableCell>
      </TableRow>
    </Tooltip>
  );
};

type Props = {
  hospitalData: hospitalData;
};

const StatCard: React.FunctionComponent<Props> = ({ hospitalData }) => {
  return (
    <Grid item md={6} sm={6} xs={12}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {hospitalData.hospital.name}
          </Typography>

          <Typography variant="subtitle1" component="h3">
            {hospitalData.hospital.name_si}
          </Typography>

          <Typography variant="subtitle1" component="h3">
            {hospitalData.hospital.name_ta}
          </Typography>

          <Table>
            <TableBody>
              <Row
                description="Sri Lankans in treatment/observation"
                stat={hospitalData.treatment_local}
                longDescription="Total number of Sri Lankans who are currently on treatment/observation for COVID-19"
              />

              <Row
                description="Sri Lankans treated/observed"
                stat={hospitalData.cumulative_local}
                longDescription="Total number of Sri Lankans who have been treated/observed for COVID-19"
              />

              <Row
                description="Foreigners in treatment/observation"
                stat={hospitalData.treatment_foreign}
                longDescription="Total number of foreigners who are currently on treatment/observation for COVID-19"
              />

              <Row
                description="Foreigners treated/observed"
                stat={hospitalData.cumulative_foreign}
                longDescription="Total number of foreigners who have been treated /observed for COVID-19"
              />
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default StatCard;
