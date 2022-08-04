import React from "react";
import Sidebar from "./navigation/Sidebar";
import Navbar from "./navigation/TopNavbar";

const Navigation = function(props) {
  return (
    <React.Fragment>
      <Navbar trans={props.trans}/>
    </React.Fragment>
  );
}

export default Navigation;