class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: []
    };
  }

  componentDidMount() {
    fetch(this.props['data-url']).then(response => response.json()).then(menus => this.setState({ menus: menus }));
  }

  render() {
    /*
    let menus = [
      'Home',
      'About',
      'Services',
      'Portfolio',
      'Contact us'];
      */
    return React.createElement(
      'div',
      null,
      this.state.menus.map((v, i) => {
        return React.createElement(
          'div',
          { key: i },
          React.createElement(Link, { label: v })
        );
      })
    );
  }
}