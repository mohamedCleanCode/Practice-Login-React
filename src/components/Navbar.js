import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const style = {
    display: "inline-block",
    margin: "20px",
  };
  return (
    <div>
      <NavLink style={style} to="/">
        Home
      </NavLink>
      <NavLink style={style} to="/about">
        About
      </NavLink>
      <NavLink style={style} to="/profile">
        Profile
      </NavLink>
      <NavLink style={style} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default Navbar;
