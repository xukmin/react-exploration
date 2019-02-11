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
