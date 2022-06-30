import React from "react";
// import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  split,
  HttpLink,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

import "react-toastify/dist/ReactToastify.css";

import "../styles/tailwind.css";
import "../styles/global.css";

const GQLClient = () => {
  const httpLink = new HttpLink({
    uri: process.env.GQL_BASE_URL,
  });
  const [client, setClient] = React.useState(
    new ApolloClient({
      link: httpLink,
      cache: new InMemoryCache(),
    })
  );

  React.useState(() => {
    if (window) {
      const wsLink = new GraphQLWsLink(
        createClient({
          url: process.env.GQL_WS_URL,
        })
      )
      const splitLink = split(
        ({ query }) => {
          const def = getMainDefinition(query);
          return (
            def.kind === "OperationDefinition" &&
            def.operation === "subscription"
          );
        },
        wsLink,
        httpLink
      );
      setClient(
        new ApolloClient({
          link: splitLink,
          cache: new InMemoryCache(),
        })
      );
    }
  }, []);

  return client;
};

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
    const client = GQLClient();

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
          <title>Website</title>
        </Head>
        <ApolloProvider client={client}>
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
