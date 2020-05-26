import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1> Todo List Header</h1>
      <Link style={fontLink} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={fontLink} to="/about">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

const fontLink = {
  color: "#fff"
};
export default Header;
