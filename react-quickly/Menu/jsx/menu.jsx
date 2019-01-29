class Menu extends React.Component {
  render() {
    let menus = [
      'Home',
      'About',
      'Services',
      'Portfolio',
      'Contact us'];
    return <div>
      {
        menus.map((v, i) => {
          return <div key={i}><Link label={v}/></div>
        })
      }
    </div>
  }
}
