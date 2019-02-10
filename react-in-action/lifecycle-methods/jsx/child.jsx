const React = require('react');
const PropTypes = require('prop-types');

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('ChildComponent: state');
  }

  render() {
    console.log('ChildComponent: render');
    return <div>
      Name: {this.props.name}
    </div>
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
