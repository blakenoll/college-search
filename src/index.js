import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/form.js';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3001/graphql'}),
  cache: new InMemoryCache()
});

client.query({ query: gql`{
  allSchools( city: "los angeles") {
    id
    name
    city
    cost
    admissRate
    url
  }
}` }).then(console.log);

ReactDOM.render(
  <ApolloProvider client={client}>
   <Form />
  </ApolloProvider>,
  document.getElementById('root')
);
