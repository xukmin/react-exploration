ChildComponent: defaultProps
ParentComponent: defaultProps

ParentComponent: state
ParentComponent: componentWillMount
ParentComponent: render

ChildComponent: state
ChildComponent: componentWillMount
ChildComponent: render

ChildComponent: componentDidMount
ParentComponent: componentDidMount

ParentComponent: shouldComponentUpdate()
nextProps:  {true: false}
nextState:  {text: "mark"}
ParentComponent: componentWillUpdate()
nextProps:  {true: false}
nextState:  {text: "mark"}
ParentComponent: render

ChildComponent: componentWillReceiveProps()
nextProps:  {name: "mark"}
ChildComponent: shouldComponentUpdate()
nextProps:  {name: "mark"}
nextState:  null
ChildComponent: componentWillUpdate()
nextProps:  {name: "mark"}
nextState:  null
ChildComponent: render
ChildComponent: componentDidUpdate()
previousProps:  {name: ""}
previousState:  null
ParentComponent: componentDidUpdate()
previousProps:  {true: false}
previousState:  {text: ""}

