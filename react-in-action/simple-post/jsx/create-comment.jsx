const React = require('react');
const PropTypes = require('prop-types');

class CreateComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      user: ''
    };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserChange(event) {
    this.setState({
      user: event.target.value
    });
    /*
    this.setState(() => ({
      user: event.target.value
    }));
    */
  }

  handleTextChange(event) {
    this.setState({
      content: event.target.value
    });
    /*
    this.setState(() => ({
      content: event.target.value
    }));
    */
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onCommentSubmit({
      user: this.state.user.trim(),
      content: this.state.content.trim()
    });
    this.setState(() => ({
      user: '',
      content: ''
    }));
  }

  render() {
    return <form className='createComment' onSubmit={this.handleSubmit}>
      <input type='text' placeholder='Your name' value={this.state.user} 
        onChange={this.handleUserChange}/>
      <input type='text' placeholder='Thoughts?' value={this.state.content} 
        onChange={this.handleTextChange}/>
      <button type='submit'>Post</button>
    </form>
  }
}

CreateComment.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
  content: PropTypes.string
};

module.exports = CreateComment;
