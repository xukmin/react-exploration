import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loader from './components/Loader';
import Welcome from './components/Welcome';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      posts: [],
      endpoint: `${process.env.ENDPOINT}/posts?_page=1&_sort=date&_order=DESC&_embed=comments&_expand=user&_embed=likes`
    };
  }

  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div className="app">
        {this.state.loading ? (
          <div className="loading">
            <Loader />
          </div>
        ) : (
          <div className="home">
            <Welcome />
            <div>
              <button className="block">
                Load more posts
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}


export default App;
