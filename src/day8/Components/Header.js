import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Browser Router</h1>
      {/* <Link to="/home">Home</Link> */}
      <NavLink to="/home" style={({ isActive }) => { return {color: isActive ? "red" : "Black",textDecoration: "none",} }}> Home </NavLink> 
      <Link to="/contact">Contact</Link>
      <Link to="/support">Support</Link>
    </div>
  );
};

export default Header;
