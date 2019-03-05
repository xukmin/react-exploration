const isDateValid = function(date) {
/*
  let td = "2019 1 29 10 33".split(' ');
  let index = td.length;
  for (; index < 6; index++) {
    td[index] = 0;
  }
  test = new Date(td[0], td[1], td[2], td[3], td[4], td[5]);
  console.log("test = " + test);
*/
  /*
  console.log("date : " + date);
  let value = new Date(date);
  console.log("value : " + value);

  return (new Date(date) !== "Invalid Date") &&
      !isNaN(new Date(date));
  */
  return getDate(date) !== "Invalid Date" && !isNaN(getDate(date));
}

const getDate = function(date) {
  let dates = date.toString().split(' ');
  let i = dates.length;
  for (; i < 6; i++) {
    dates[i] = 0;
  }

  /*
  let j = 0;
  for (; j < dates.length; j++) {
    console.log("dates[" + j + "] = " + dates[j]);
  }
  */

  // Note: By default, JavaScript will use the browser's time zone 
  // and display a date as a full text string.
  return new Date(dates[0], dates[1] - 1, dates[2], dates[3], dates[4], dates[5]);
}

const CalculateTime = function(d, offset) {
    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    nd = new Date(utc + (3600000*offset));

    // return time as a string
    //return "The local time in " + city + " is " + nd.toLocaleString();
    return nd.toLocaleString();
}

class WorldClock extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      dateNumber: 0
    }
  }

  handleChange(event) {
    console.log('Typed: ', event.target.value);
    this.setState({
      dateNumber: event.target.value
    });
  }

  render() {
    let date = getDate(this.state.dateNumber);

    return <div>Current time:
      <input type="text" onChange={this.handleChange} placeholder="123456" value={this.state.dateNumber}/>
      <br/>
      <span>{'You entered: ' + date.toLocaleString()}</span>
      <br/>
      <br/>
      <span>{'GMT time : ' + CalculateTime(date, 0)}</span>
      <br/>
      <span>{'Beijing time: ' + CalculateTime(date, +8)}</span>
    </div>
  }
}
