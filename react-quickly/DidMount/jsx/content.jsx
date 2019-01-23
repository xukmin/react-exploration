class Content extends React.Component {
  componentWillMount () {
    console.log("componentWillMount is triggered");
    console.log(ReactDOM.findDOMNode(this));
  }

  componentDidMount () {
    console.log("componentDidMount is triggered");
    // Note: output dir
    console.dir(ReactDOM.findDOMNode(this));
  }

  render () {
    return (
      <div/>
    )
  }
}
