import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";

const Navbar = () => {
  const auth = useAuth();

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
      {!auth.user && (
        <NavLink style={style} to="/login">
          Login
        </NavLink>
      )}
    </div>
  );
};

export default Navbar;
