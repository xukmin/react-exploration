import React, { Component } from 'react';
import PropTypes from 'prop-types';
import parseLinkHeader from 'parse-link-header';
import orderBy from 'lodash/orderBy';

import Loader from './components/Loader';
import Welcome from './components/Welcome';
import Ad from './components/Ad';
import * as API from './shared/http';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      posts: [],
      endpoint: `${process.env.ENDPOINT}/posts?_page=1&_sort=date&_order=DESC&_embed=comments&_expand=user&_embed=likes`
    };
    this.getPosts = this.getPosts.bind(this);
  }

  static propTypes = {
    children: PropTypes.node
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    API.fetchPosts(this.state.endpoint)
      .then(res => {
        return res.json()
          .then(posts => {
            const links = parseLinkHeader(res.headers.get('Link'));
            this.setState(() => ({
              posts: orderBy(this.state.posts.concat(posts), 'date', 'desc'),
              endpoint: links.next.url
            }));
          })
          .catch(err => {
            this.setState(() => ({ error: err }));
          });
      });
  }

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
                Load more posts!
              </button>
            </div>
            <div>
              <Ad 
                url="https://ifelse.io/book"
                imageUrl="/static/assets/ads/ria.png"
              />
              <Ad
                url="https://ifelse.io/book"
                imageUrl="/static/assets/ads/orly.jpg"
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}


export default App;
