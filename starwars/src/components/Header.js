import React from "react";
import { Menu } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css"

const Header = () => {
  return (
    <>
    <Menu secondary className="starwarsmenu">
      <Menu.Item>Star Wars</Menu.Item>
    </Menu>
    </>
  );
}

export default Header; 