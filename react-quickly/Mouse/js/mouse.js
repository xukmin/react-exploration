class Mouse extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        {
          style: { border: '1px solid red' },
          onMouseOver: (event => {
            console.log("mouse over on bubbling event");
            console.log("target = " + event.target);
            console.log("value = " + event.target.value);
            console.dir(event, this);
          }).bind(this),
          onMouseOverCapture: (event => {
            console.log("mouse over on capture event");
            console.log("target = " + event.target);
            console.log("value = " + event.target.value);
            console.dir(event, this);
          }).bind(this) },
        "Open DevTools and move your mouse cursor over here"
      )
    );
  }
}