import { findAllByTestId } from '@testing-library/react';
import React, { Component } from 'react';
import ReactDOM, { hydrateRoot } from 'react-dom/client';

// const Hello = (props) => {
//   return <div>Hello {props.name}</div>;
// }

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      counter: 0
    };
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <h1 className={this.state.clicked ? 'clicked' : null}
        onClick={this.handleClick}>
        Hello {this.props.name} {this.state.counter}</h1>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

if (root) {
  root.render(<Hello name="Denis" />);
}
