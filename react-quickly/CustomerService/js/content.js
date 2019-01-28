class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleName = this.handleName.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
    this.submit = this.submit.bind(this);
    this.handleSelectAge = this.handleSelectAge.bind(this);
    this.handleComments = this.handleComments.bind(this);
    this.state = {
      name: '',
      radioGroup: {
        male: false,
        female: false,
        "rather not say": false
      },
      age: '0-10',
      comments: ''
    };
  }

  handleName(event) {
    console.log('name: ' + event.target.value);
    this.setState({
      name: event.target.value
    });
  }

  handleRadio(event) {
    let obj = {};
    console.log('handleRadio: ' + event.target.value);
    obj[event.target.value] = event.target.checked;
    console.log(obj);
    this.setState({ radioGroup: obj });
  }

  handleSelectAge(event) {
    console.log('age: ' + event.target.value);
    this.setState({ age: event.target.value });
  }

  handleComments(event) {
    console.log('comments: ' + event.target.value);
    this.setState({ comments: event.target.value });
  }

  submit(event) {
    let name = this.refs.name;
    let comments = this.refs.comments;
    console.log(ReactDOM.findDOMNode(name).value);
    console.log(ReactDOM.findDOMNode(comments).value);
  }

  render() {
    return React.createElement(
      'div',
      { className: 'well' },
      React.createElement(
        'div',
        { className: 'form-group' },
        'Name: ',
        React.createElement('input', { type: 'text', ref: 'name', className: 'form-control', value: this.state.name, onChange: this.handleName })
      ),
      React.createElement(
        'form',
        null,
        'Gender:',
        React.createElement(
          'label',
          null,
          React.createElement('input', { type: 'radio', name: 'radioGroup', value: 'male', checked: this.state.radioGroup['male'], onChange: this.handleRadio }),
          'male'
        ),
        React.createElement(
          'label',
          null,
          React.createElement('input', { type: 'radio', name: 'radioGroup', value: 'female', checked: this.state.radioGroup['female'], onChange: this.handleRadio }),
          'female'
        ),
        React.createElement(
          'label',
          null,
          React.createElement('input', { type: 'radio', name: 'radioGroup', value: 'rather not say', checked: this.state.radioGroup['rather not say'], onChange: this.handleRadio }),
          'rather not say'
        )
      ),
      React.createElement('br', null),
      React.createElement(
        'form',
        null,
        'Age:',
        React.createElement(
          'select',
          { value: this.state.age, onChange: this.handleSelectAge },
          React.createElement(
            'option',
            { value: '0-10' },
            '0-10'
          ),
          React.createElement(
            'option',
            { value: '11-20' },
            '11-20'
          ),
          React.createElement(
            'option',
            { value: '21-30' },
            '21-30'
          ),
          React.createElement(
            'option',
            { value: '31-40' },
            '31-40'
          ),
          React.createElement(
            'option',
            { value: '41-50' },
            '41-50'
          ),
          React.createElement(
            'option',
            { value: 'above-50' },
            'above 51'
          )
        )
      ),
      React.createElement('br', null),
      React.createElement(
        'form',
        null,
        'Comments:',
        React.createElement('br', null),
        React.createElement('textarea', { ref: 'comments', name: 'comments', value: this.state.comments, onChange: this.handleComments })
      ),
      React.createElement(
        'div',
        { className: 'form-group' },
        React.createElement(
          'a',
          { className: 'btn btn-primary', value: 'Submit', onClick: this.submit },
          'Submit'
        )
      )
    );
  }
}