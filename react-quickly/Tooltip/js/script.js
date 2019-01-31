ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(
    Tooltip,
    { text: "The book you've reading now" },
    "React Quickly "
  ),
  "was published in 2017. It's awesome!",
  React.createElement(
    Tooltip,
    { text: "Really? test the length", allowToggleWithMouseInteraction: false, allowToggleWithClick: true, positionWhereShowText: "top" },
    " Test one more case "
  ),
  "It's good!"
), document.getElementById('tooltip'));