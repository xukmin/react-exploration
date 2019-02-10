const React = require('react');
const ReactDOM = require('react-dom');
const ParentComponent = require('./parent.jsx');

ReactDOM.render(
  <ParentComponent/>,
  document.getElementById('container')
)
