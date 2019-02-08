const React = require('react');
const PropTypes = require('prop-types');

class Comment extends React.Component {
  render () {
    return <div className='comment'>
      <h2 className='commentAuthor'>{this.props.user}
        <span className='commentContent'>{this.props.content}</span>
      </h2>
    </div>
  }
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};

module.exports = Comment;
