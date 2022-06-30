import React from "react";
// import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { ApolloProvider } from "@apollo/client";

import "react-toastify/dist/ReactToastify.css";

import "../styles/tailwind.css";
import "../styles/global.css";
import { client } from "../connector";
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
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
          <title>Website</title>
        </Head>
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
      </React.Fragment>
    );
  }
}
