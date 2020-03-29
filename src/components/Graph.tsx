import React from "react";
import randomColor from "randomcolor";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { GraphData } from "../lib/types";
import { makeStyles } from "@material-ui/core/styles";

type Props = {
  data: GraphData[];
};

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
}));

const Graph: React.FunctionComponent<Props> = ({ data }) => {
  const classes = useStyles();

  return (
    <Grid item md={12} sm={12} xs={12}>
      <Card>
        <CardContent className={classes.root}>
          <PieChart width={300} height={275}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={75}
              outerRadius={100}
              paddingAngle={1}
              fill="#556cd6"
              isAnimationActive={false}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={randomColor({ luminosity: "dark" })}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </CardContent>

        <CardContent>
          <Typography variant="h5" component="h2">
            People who are currently on treatment/observation for COVID-19
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Graph;
