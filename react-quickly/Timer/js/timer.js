class Timer extends React.Component {
  render() {
    if (this.props.timeLeft == 0) {
      document.getElementById('end-of-time').play();
    }
    if (this.props.timeLeft == null || this.props.timeLeft == 0) {
      return React.createElement('div', null);
    } else {
      return React.createElement(
        'h1',
        null,
        'Time left : ',
        this.props.timeLeft
      );
    }
  }
}