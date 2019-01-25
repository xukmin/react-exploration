const Counter = function (props) {
  return React.createElement(
    "span",
    null,
    "Clicked ",
    props.value,
    " times."
  );
};