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

ChildComponent: oops()   
ChildComponent: shouldComponentUpdate()   
nextProps:  {name: ""}   
nextState:  {name: "Mark", oops: true}   
ChildComponent: componentWillUpdate()   
nextProps:  {name: ""}   
nextState:  {name: "Mark", oops: true}   
ChildComponent: render   
ChildComponent: shouldComponentUpdate()   
nextProps:  {name: ""}   
nextState:  {name: "Mark", oops: true}   
ChildComponent: componentWillUpdate()   
nextProps:  {name: ""}   
nextState:  {name: "Mark", oops: true}   
ChildComponent: render   

Uncaught Error: Something went wrong

ChildComponent: componentWillUnmount   
ParentComponent: componentDidCatch()

ParentComponent: shouldComponentUpdate()   
nextProps:  {true: false}   
nextState:  {text: "", err: Error: Something went wrong   
    at ChildComponent.render (file:///Users/minxu/github/react-explorati…, errorInfo: {…}}   
ParentComponent: componentWillUpdate()   
nextProps:  {true: false}   
nextState:  {text: "", err: Error: Something went wrong   
    at ChildComponent.render (file:///Users/minxu/github/react-explorati…, errorInfo: {…}}   
ParentComponent: render   
ParentComponent: componentDidUpdate()   
previousProps:  {true: false}   
previousState:  {text: ""}
