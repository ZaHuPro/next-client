import { ApolloClient, InMemoryCache } from "@apollo/client";

console.log({ gggql: process.env.GQL_BASE_URL})
const client = new ApolloClient({
  uri: process.env.GQL_BASE_URL,
  cache: new InMemoryCache(),
});

export default client;
