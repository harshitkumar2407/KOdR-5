import React from "react";

import CustomNavLink from "./CustomNavLink";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  let { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="navbar">
      <div>
        <p>LOGO</p>
      </div>
      <nav>
        <CustomNavLink to="/home">Home</CustomNavLink>
        <CustomNavLink to="/">Home</CustomNavLink>
        <CustomNavLink to="/about">About</CustomNavLink>
        <CustomNavLink to="/projects">Project</CustomNavLink>
      </nav>
      <div className="btns">
        <button
          onClick={() => setTheme(p => !p)}
          
        >{theme ? "light":"Dark"}</button>
      </div>
    </div>
  );
};

export default Navbar;
