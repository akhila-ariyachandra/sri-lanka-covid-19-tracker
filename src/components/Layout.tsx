import React from "react";
import Container from "@material-ui/core/Container";
import dynamic from "next/dynamic";
import Typography from "@material-ui/core/Typography";
const Link = dynamic(() => import("@material-ui/core/Link"));
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: "flex",
    alignItems: "center",
  },
  text: {
    flex: 1,
  },
  icon: {
    fontSize: theme.spacing(4),
  },
}));

const Layout: React.FunctionComponent = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="md" component="main">
        {children}
      </Container>

      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Typography className={classes.text}>
          Created by{" "}
          <Link
            href="https://akhilaariyachandra.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Akhila Ariyachandra
          </Link>
        </Typography>

        <Link
          href="https://github.com/akhila-ariyachandra/sri-lanka-covid-19-tracker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className={classes.icon} />
        </Link>
      </Container>
    </div>
  );
};

export default Layout;
