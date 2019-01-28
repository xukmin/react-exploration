const LoadWebsite = (Component) => {
  class _LoadWebsite extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        label: 'Run'
      }
    }

    getUrl() {
      return 'https://facebook.github.io/react/docs/top-level-api.html';
    }

    handleClick(event) {
      var iframe = document.getElementById('frame').src = this.getUrl();
    }

    componentDidMount() {
      console.log(ReactDOM.findDOMNode(this));
    }

    render() {
      console.log(this.state);
      return <Component {...this.state} {...this.props}/>
    }
  }

  _LoadWebsite.displayName = 'EnhancedComponent';
  return _LoadWebsite;
}
