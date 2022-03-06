import React from "react";
import "@fontsource/open-sans";
import "@fontsource/work-sans";
import "dracula-prism/dist/css/dracula-prism.css";
import Layout from "./src/components/Layout";

const wrapPageElement = ({ element, props }) => {
  return React.createElement(Layout, props, element);
};

export { wrapPageElement };
