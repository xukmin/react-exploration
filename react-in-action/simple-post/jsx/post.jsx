const React = require('react');
const PropTypes = require('prop-types');

class Post extends React.Component {
  render() {
    return <div className='post'>
      <h2 className='postAuthor' id={this.props.id}>{this.props.user}
      </h2>
      <span className='postBody'>{this.props.content}</span>
    </div>
  }
}

Post.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

Post.defaultProps = {
  user: 'mxu',
  content: ' said: This is a post!',
  id: 1
}

module.exports = Post;


