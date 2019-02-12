import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChildComponent from './child.jsx';

class ParentComponent extends Component {
  static defaultProps = (function() {
    console.log('ParentComponent: defaultProps');
    return {
      true: false
    };
  })();

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

  componentWillUnmount() {
    console.log('ParentComponent: componentWillUnmount');
  }

  onInputChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  componentDidCatch(err, errorInfo) {
    console.log('ParentComponent: componentDidCatch()');
    console.error(err);
    console.error(errorInfo);
    this.setState({err, errorInfo});
  }

  render() {
    console.log('ParentComponent: render');
    if (this.state.err) {
      return (
        <details style={{ whitespace: 'pre-wrap' }}>
          {this.state.error && this.state.error.toString()}
          <br/>
          {this.state.errorInfo.componentStack}
        </details>
      );
  }
    return [
      <h2 key="h2">Learn about rendering and lifecycle methods!</h2>,
        <input key="input" value={this.state.text}
          onChange={this.onInputChange}/>,
        <ChildComponent key="ChildComponent" name={this.state.text}/>
    ]
  }
  
}

export default ParentComponent;
