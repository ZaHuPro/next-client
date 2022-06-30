import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = createHttpLink({
  uri: process.env.GQL_BASE_URL,
});

const wssLink = new GraphQLWsLink(
  createClient({
    url: process.env.GQL_WS_URL,
    webSocketImpl: require("websocket").w3cwebsocket,
  })
);
const cache = new InMemoryCache();

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wssLink,
  httpLink
);

export const client = () => {
  const ssrMode = typeof window === "undefined";
  if (ssrMode) {
    return new ApolloClient({
      link: httpLink,
      cache,
    });
  }
  return new ApolloClient({
    link: splitLink,
    cache,
    credentials: "include",
  });
};
