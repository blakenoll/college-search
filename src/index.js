import React from 'react';
import ReactDOM from 'react-dom';
// import Form from './components/form.js';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, graphql } from 'react-apollo';
import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: 'https://fathomless-temple-55923.herokuapp.com/graphql'
});

const MyQuery = gql`{
  allSchools( city: "los angeles") {
    id
    name
    city
    cost
    admissRate
    url
  }
}`;

const SchoolList = ({ data: {loading, error, schools }}) => {
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error.message}</p>
  }
  return <ul>
    { schools.map( s => <li key={s.id}>{s.name}</li> )}
  </ul>;
};

client.query({
  query: gql`
  {
    allSchools( city: "los angeles") {
      id
      name
      city
      cost
      admissRate
      url
    }
  }`
 }).then(data => console.log({data}));

const SchoolListWithData = graphql(MyQuery)(SchoolList);

ReactDOM.render(
  <ApolloProvider client={client}>
  <div>
  <h1>College Serach</h1>
   {/* <Form /> */}
   <SchoolListWithData />
  </div>
  </ApolloProvider>,
  document.getElementById('root')
);
