ReactDOM.render(
  <div>
    <Tooltip text="The book you've reading now">React Quickly </Tooltip>
     was published in 2017. It's awesome!
    <Tooltip text="Really? test the length" allowToggleWithMouseInteraction={false} allowToggleWithClick={true} positionWhereShowText="top"> Test one more case </Tooltip>
    It's good!
  </div>,
  document.getElementById('tooltip')
)
