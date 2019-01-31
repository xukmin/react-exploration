class Button extends React.Component {
  startTimer(event) {
    return this.props.startTimer(this.props.timerLabel);
  }

  render() {
    return React.createElement(
      "button",
      { type: "button",
        className: "btn-default btn",
        onClick: this.startTimer.bind(this) },
      this.props.timerLabel,
      " seconds"
    );
  }
}