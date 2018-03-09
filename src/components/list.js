import React from 'react';

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return (
    <li>
      <a href={`http://${props.link}`} target="_blank">{props.value}</a><br />
      <span>Tuition: ${props.cost}</span><br />
      <span>Acceptance Rate: {Math.floor(props.acceptnce * 100)}%</span>
    </li>
  );
}

function SchoolList(props) {
  const schools = props.schools;
  const listItems = schools.map((school) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={school.id.toString()}
              value={school['school.name']}
              link={school['school.school_url']}
              cost={school['2015.cost.attendance.academic_year']}
              acceptnce={school['2015.admissions.admission_rate.overall']} />
              // use bracket notation since there are periods in object names
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default SchoolList;
