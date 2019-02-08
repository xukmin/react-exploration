require('../css/main.css');

const React = require('react');
const ReactDOM = require('react-dom');
const Post = require('./post.jsx');
const Comment = require('./comment.jsx');

ReactDOM.render(
  (<Post>
    <Comment id={2} user='bob' content=' commented: wow! how cool!'/>
  </Post>),
  document.getElementById('root')
)
