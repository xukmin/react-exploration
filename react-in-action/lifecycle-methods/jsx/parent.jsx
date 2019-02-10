const React = require('react');
const PropTypes = require('prop-types');
const ChildComponent = require('./child.jsx');

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  /*
  render() {
    return [
      <h2 key="h2">Learn about rendering and lifecycle methods!</h2>,
      <ChildComponent key="ChildComponent" name={this.state.text}/>
    ]
  }
  */
  render() {
    return [
      <h2 key="h2">Learn about rendering and lifecycle methods!</h2>,
        <input key="input" value={this.state.text}
          onChange={this.onInputChange}/>,
        <ChildComponent key="ChildComponent" name={this.state.text}/>
    ]
  }
  
}

module.exports = ParentComponent;
