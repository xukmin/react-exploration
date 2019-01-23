class Content extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor is called")
  }

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
    console.log("Rendering in the class...");
    return (
      <div/>
    )
  }
}
