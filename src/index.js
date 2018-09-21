import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from "react-apollo";

const ApolloProviderApp = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}

const client = new ApolloClient({
  // uri: "/graphql"
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));

ReactDOM.render(ApolloProviderApp(), document.getElementById('root'));
registerServiceWorker();
