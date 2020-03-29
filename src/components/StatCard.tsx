import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

type Props = {
  stat: number;
  title: string;
  description: string;
};

const StatCard: React.FunctionComponent<Props> = ({
  stat,
  title,
  description,
}) => {
  return (
    <Grid item md={6} sm={12} xs={12}>
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h5" component="h2">
            {stat}
          </Typography>
          <Typography color="textSecondary">{description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default StatCard;
