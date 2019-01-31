class TimerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.startTimer = this.startTimer.bind(this);
    this.state = {
      timeLeft: null,
      timer: null
    };
  }

  startTimer(timeLeft) {
    clearInterval(this.state.timer);
    let timer = setInterval(() => {
      let timeLeft = this.state.timeLeft - 1;
      if (timeLeft == 0) clearInterval(timer);
      this.setState({ timeLeft: timeLeft });
    }, 1000);

    this.setState({
      timeLeft: timeLeft,
      timer: timer
    });
  }

  render() {
    return React.createElement(
      "div",
      { className: "row-fluid" },
      React.createElement(
        "h2",
        null,
        "Timer"
      ),
      React.createElement(
        "div",
        null,
        React.createElement(Button, { timerLabel: "5", startTimer: this.startTimer }),
        React.createElement(Button, { timerLabel: "10", startTimer: this.startTimer }),
        React.createElement(Button, { timerLabel: "15", startTimer: this.startTimer })
      ),
      React.createElement(Timer, { timeLeft: this.state.timeLeft }),
      React.createElement("audio", { id: "end-of-time", src: "flute_c_long_01.wav", preload: "auto" })
    );
  }
}