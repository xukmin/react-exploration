class TimerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.startTimer = this.startTimer.bind(this);
    this.state = {
      timeLeft: null,
      timer: null 
    }
  }

  startTimer(timeLeft) {
    clearInterval(this.state.timer);
    let timer = setInterval(() => {
        let timeLeft = this.state.timeLeft - 1;
        if (timeLeft == 0) clearInterval(timer);
        this.setState({timeLeft: timeLeft});
        }, 1000);

    this.setState({
      timeLeft: timeLeft,
      timer: timer
    });
  }

  render() {
    return <div className="row-fluid">
      <h2>Timer</h2>
      <div>
        <Button timerLabel="5" startTimer={this.startTimer}/>
        <Button timerLabel="10" startTimer={this.startTimer}/>
        <Button timerLabel="15" startTimer={this.startTimer}/>
      </div>
      <Timer timeLeft={this.state.timeLeft}/>
      <audio id="end-of-time" src="flute_c_long_01.wav" preload="auto"></audio>
    </div>
  }
}
