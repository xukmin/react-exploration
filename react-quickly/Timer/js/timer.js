/*
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
*/
const Timer = function (props) {
  if (props.timeLeft == 0) {
    document.getElementById('end-of-time').play();
  }

  if (props.timeLeft == null || props.timeLeft == 0) {
    return React.createElement('div', null);
  } else {
    return React.createElement(
      'h1',
      null,
      'Time left : ',
      props.timeLeft
    );
  }
};