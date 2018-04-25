import React from 'react';
import SchoolList from './graphqllist.js'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      results: [],
      pages: '',
      total: '',
      request: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({city: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({request: true});
  }

  render() {
    return(
      <div className="search-form">
        <h1>Search</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              city: 
              <input name="city" type="text" value={this.state.city} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        <h2>Search Location: <small>{this.state.city}</small></h2>
          <SchoolList city={this.state.city} />
      </div>
    )
  }
}

export default Form;
