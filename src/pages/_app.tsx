import React from "react";
import App from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../lib/theme";
import Router from "next/router";
import * as gtag from "../lib/gtag";
import { ThemeProvider } from "@material-ui/core/styles";
import { Fonts } from "../lib/fonts";

Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    // Load fonts
    Fonts();
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
