const React = require('react');
const PropTypes = require('prop-types');
const ChildComponent = require('./child.jsx');

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('ParentComponent: state');
    this.state = {
      text: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentWillMount() {
    console.log('ParentComponent: componentWillMount');
  }

  componentDidMount() {
    console.log('ParentComponent: componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('ParentComponent: componentWillReceiveProps()');
    console.log('nextProps: ', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('ParentComponent: shouldComponentUpdate()');
    console.log('nextProps: ', nextProps);
    console.log('nextState: ', nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('ParentComponent: componentWillUpdate()');
    console.log('nextProps: ', nextProps);
    console.log('nextState: ', nextState);
  }

  componentDidUpdate(previousProps, previousState) {
    console.log('ParentComponent: componentDidUpdate()');
    console.log('previousProps: ', previousProps);
    console.log('previousState: ', previousState);
  }

  onInputChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    console.log('ParentComponent: render');
    return [
      <h2 key="h2">Learn about rendering and lifecycle methods!</h2>,
        <input key="input" value={this.state.text}
          onChange={this.onInputChange}/>,
        <ChildComponent key="ChildComponent" name={this.state.text}/>
    ]
  }
  
}

ParentComponent.defaultProps = (function() {
  console.log('ParentComponent: defaultProps');
  return {
    true: false
  };
})();

module.exports = ParentComponent;
