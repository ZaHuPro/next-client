import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { ApolloProvider } from "@apollo/client";

import "react-toastify/dist/ReactToastify.css";
import { client } from "../connector";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ApolloProvider client={client()}>
          <Layout>
            <Component {...pageProps} />
            <ToastContainer
              hideProgressBar
              position="bottom-right"
              autoClose={8000}
            />
          </Layout>
        </ApolloProvider>
      </ThemeProvider>
    );
  }
}
