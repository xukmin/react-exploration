class Timer extends React.Component {
  render() {
    if (this.props.timeLeft == 0) {
      document.getElementById('end-of-time').play();
    }
    if (this.props.timeLeft == null || this.props.timeLeft == 0) {
      return <div/>;
    } else {
      return <h1>Time left : {this.props.timeLeft}</h1>; 
    }
  }
}
