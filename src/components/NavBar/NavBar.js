import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
const NavBar = () => {
  const { state } = useGlobalContext();
  return (
    <nav className="nav-bar">
      <div className="nav-menu">
        <Link to="/css" className="nav-links">
          CSS
        </Link>
        <Link to="/javascript" className="nav-links">
          JavaScript
        </Link>
        <Link to="/react" className="nav-links">
          React
        </Link>
      </div>
      <div className="nav-result">
        <p>React: {state.react}/10 </p>
        <p>Css: {state.css}/10</p>
        <p>JS: {state.javascript}/10</p>
        <p>Total: {state.total} %</p>
      </div>
    </nav>
  );
};

export default NavBar;
