import React from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <nav>
      <a href="#ddds" className="navbar navbar-light bg-light">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
