require('../css/main.css');

const React = require('react');
const ReactDOM = require('react-dom');
const CommentBox = require('./comment-box.jsx');

const data = {
  post: {
    id: 123,
    content: 'What we hope ever to do with ease, we must first learn to do' +
      'with diligence. -- Samuel Johnson',
    user: 'Min Xu',
  },
  comments: [
    {
      id: 0,
      user: 'David',
      content: 'such. win.',
    },
    {
      id: 1,
      user: 'Haley',
      content: 'Love it.',
    },
    {
      id: 2,
      user: 'Peter',
      content: 'Who was Samuel Johnson?',
    },
    {
      id: 3,
      user: 'Mitchell',
      content: '@Peter get off Letters and do your homework',
    },
    {
      id: 4,
      user: 'Peter',
      content: '@Mitchell ok :P',
    },
  ],
};

ReactDOM.render(
  <CommentBox comments={data.comments} post={data.post}/>,
  document.getElementById('root')
)
