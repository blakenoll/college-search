import React from 'react';
import SchoolList from './graphqllist.js';
import Option from './degreeOption';
import states from '../data/states.js';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      name: '',
      pages: '',
      total: '',
      searchCity: '',
      searchName: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({initialLoad: false});
    this.setState({ searchCity: this.state.city, searchName: this.state.name });
  }

  render() {
    return (
      <div className="search-form">
        <h1>Search</h1>
          <form onSubmit={this.handleSubmit}>
          <div className="form-input">
            <label>City:</label>
              <input name="city" type="text" value={this.state.city} onChange={this.handleChange} />
          </div>
          <div className="form-input">
            <label>Name:</label>
                <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className="form-input">
          <label>State: </label>
            <select name="state" onChange={this.handleChange}>
            <Option options={states} />
            </select>
          </div>
            <input type="submit" value="Submit" />
          </form>
          {this.state.searchCity !== '' && <h2>Search Location: <small>{this.state.searchCity}</small></h2>}
          {this.state.searchName !== '' && <h2>Search Name: <small>{this.state.searchName}</small></h2>}
          <SchoolList city={this.state.searchCity} name={this.state.searchName} />
      </div>
    )
  }
}

export default Form;
