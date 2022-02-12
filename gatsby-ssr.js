const React = require("react");
const { default: Layout } = require("./src/components/Layout");

exports.wrapPageElement = ({ element, props }) => {
  return React.createElement(Layout, props, element);
};
