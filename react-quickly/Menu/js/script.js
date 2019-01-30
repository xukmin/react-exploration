let dataUrl = './menus.json';

ReactDOM.render(React.createElement(Menu, { 'data-url': dataUrl }), document.getElementById('content'));