import React from 'react';
import SchoolList from './list.js'
import axios from 'axios';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      results: [],
      pages: '',
      total: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({city: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.city);
    event.preventDefault();
    const city = encodeURIComponent(this.state.city)
    const url = `https://api.data.gov/ed/collegescorecard/v1/schools?school.city=${city}&fields=school.name,school.school_url,id,2015.cost.attendance.academic_year,2015.admissions.admission_rate.overall&per_page=100&sort=school.name&api_key=dM8fcIUTRoq9ieuaPORfcjGilVhjzsOoXTB2p0SB`
    axios.get(url)
      .then((response) => {
        this.setState({ results: response.data.results, pages: response.data.metadata.page, total: response.data.metadata.total + ' Results' })
        console.log(this.state.results)
      })
  }


  render() {
    return(
      <div>
      <h1>Search</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            city: 
            <input name="city" type="text" value={this.state.city} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h2>Search Location: {this.state.city}</h2>
        <span>{this.state.total}</span>
        <SchoolList schools={this.state.results}/>
      </div>
    )
  }
}

export default Form;
