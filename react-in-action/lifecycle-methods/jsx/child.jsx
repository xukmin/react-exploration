const React = require('react');
const PropTypes = require('prop-types');

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('ChildComponent: state');
    this.state = {
      name: 'Mark'
    };
    this.oops = this.oops.bind(this);
  }

  componentWillMount() {
    console.log('ChildComponent: componentWillMount');
  }

  componentDidMount() {
    console.log('ChildComponent: componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('ChildComponent: componentWillReceiveProps()');
    console.log('nextProps: ', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('ChildComponent: shouldComponentUpdate()');
    console.log('nextProps: ', nextProps);
    console.log('nextState: ', nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('ChildComponent: componentWillUpdate()');
    console.log('nextProps: ', nextProps);
    console.log('nextState: ', nextState);
  }

  componentDidUpdate(previousProps, previousState) {
    console.log('ChildComponent: componentDidUpdate()');
    console.log('previousProps: ', previousProps);
    console.log('previousState: ', previousState);
  }

  componentWillUnmount() {
    console.log('ChildComponent: componentWillUnmount');
  }

  oops() {
    console.log('ChildComponent: oops()');
    this.setState({
      oops: true
    });
  }

  render() {
    console.log('ChildComponent: render');
    if (this.state.oops) {
      throw new Error('Something went wrong');
    }
    return [
      <div key="name">Name: {this.props.name}</div>,
      <button key="error" onClick={this.oops}>Create error</button>
    ];
  }
}

ChildComponent.propTypes = {
  name: PropTypes.string
}

ChildComponent.defaultProps = (function(){
  console.log('ChildComponent: defaultProps');
  return {};
})()

module.exports = ChildComponent;
