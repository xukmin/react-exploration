ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(Radio, { name: "radio-group", id: "radio 1", order: "1", label: "Credit card" }),
  React.createElement(Radio, { name: "radio-group", id: "radio 2", order: "2", label: "Paypal" }),
  React.createElement(Radio, { name: "radio-group", id: "radio 3", order: "3", label: "Check" })
), document.getElementById('content'));