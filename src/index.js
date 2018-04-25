import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/form.js';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './css/base.css'

const client = new ApolloClient({
  uri: 'https://fathomless-temple-55923.herokuapp.com/graphql'
});

ReactDOM.render(
  <div>
    <ApolloProvider client={client}>
      <div className="header">
        <h1 className="title">College Search</h1>
        <Form className="form" />
      </div>
        {/* <SchoolList /> */}
    </ApolloProvider>
  </div>,
  document.getElementById('root')
);
