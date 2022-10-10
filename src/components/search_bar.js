import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    // This is how you can access the input -- Controlled components
    this.state = {
      term: ""
    }
  }

  handleUpdate = (event) => {
    this.setState({
      term: event.target.value
    });
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input
        value={this.state.term}
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
