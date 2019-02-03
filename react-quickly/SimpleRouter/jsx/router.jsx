const React = require('react');

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hash: window.location.hash};
    this.updateHash = this.updateHash.bind(this);
  }

  updateHash() {
    this.setState({hash: window.location.hash});
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.updateHash, false);
  }

  componentWillUnmount() {
    window.removeEventLisenter('hashchange', this.updateHash, false);
  }

  render() {
    if (this.props.mapping[this.state.hash]) {
      return this.props.mapping[this.state.hash];
    } else {
      return this.props.mapping['*'];
    }
  }
}

module.exports = Router;
