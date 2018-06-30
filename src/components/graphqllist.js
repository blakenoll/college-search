import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const MyQuery = gql`
  query allSchools($city: String! $name: String!) {
    allSchools( city: $city name: $name) {
      id
      name
      city
      cost
      admissRate
      url
    }
  }`;

function ListItem(props) {
  return (
    <li>
      <a href={`http://${props.link}`} target="_blank">{props.name}</a><br />
      <span>Tuition: ${props.cost}</span><br />
      <span>Acceptance Rate: {Math.floor(props.rate)}%</span><br />
      <span>City: {props.city}</span>
    </li>
  );
}

function SchoolList(props) {
  if (props.city === '') {
    return ''
  } else {
    return (
    <Query query={MyQuery} variables={{ city: props.city, name: props.name }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading ...</p>;
      if (!data) return <p>no results</p>
      if (error) return `Error!: ${error}`;

      const schools = data.allSchools.map((s) => (
        <ListItem key={s.id}
          name={s.name}
          link={s.url}
          rate={s.admissRate}
          cost={s.cost}
          city={s.city} />
      ));

      return (
        <div>
          <span className="results">{data.allSchools.length} Results</span>
          <ul>
            {schools}
          </ul>
        </div>
      );
     }}
    </Query>
    );
  } 
}

export default SchoolList;