class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opacity: false };
    //this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseInteraction = this.handleMouseInteraction.bind(this);
  }

  handleClick() {
    if (!this.props.allowToggleWithClick) {
      return false;
    }
    this.toggle();
  }

  handleMouseInteraction() {
    if (!this.props.allowToggleWithMouseInteraction) {
      return false;
    }
    this.toggle();
  }

  toggle() {
    const tooltipNode = ReactDOM.findDOMNode(this);
    this.setState({
      opacity: !this.state.opacity,
      top: tooltipNode.offsetTop,
      left: tooltipNode.offsetLeft
    });
  }

  render() {
    const style = {
      zIndex: this.state.opacity ? 1000 : -1000,
      opacity: +this.state.opacity,
      top: (this.state.top || 0) + (this.props.positionWhereShowText === 'bottom' ? +20 : -60),
      left: (this.state.left || 0) - 30
    };
    const className = 'tooltip ' + this.props.positionWhereShowText;
    return React.createElement(
      'div',
      { style: { display: 'inline' } },
      React.createElement(
        'span',
        { style: { color: 'blue' },
          onClick: this.handleClick,
          onMouseEnter: this.handleMouseInteraction,
          onMouseOut: this.handleMouseInteraction },
        this.props.children
      ),
      React.createElement(
        'div',
        { className: className,
          style: style,
          role: 'tooltip' },
        React.createElement('div', { className: 'tooltip-arrow' }),
        React.createElement(
          'div',
          { className: 'tooltip-inner' },
          this.props.text
        )
      )
    );
  }
}

Tooltip.propTypes = {
  allowToggleWithClick: PropTypes.bool,
  allowToggleWithMouseInteraction: PropTypes.bool,
  positionWhereShowText: PropTypes.oneOf(['bottom', 'top'])
};

Tooltip.defaultProps = {
  allowToggleWithClick: false,
  allowToggleWithMouseInteraction: true,
  positionWhereShowText: 'bottom'
};