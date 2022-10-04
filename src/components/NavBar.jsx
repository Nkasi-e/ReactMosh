import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"Products"}>Products</NavLink>
        </li>
        <li>
          <NavLink to={"Post"}>Post</NavLink>
        </li>
        <li>
          <NavLink to={"movies"}>Movies</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
