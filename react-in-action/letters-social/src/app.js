import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div className="app">I am here
      </div>
    );
  }
}


export default App;
