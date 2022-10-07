import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Vidly
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" aria-current="page" to="movies">
              Movie
            </NavLink>
            <NavLink className="nav-link" to="rentals">
              Rentals
            </NavLink>
            <NavLink className="nav-link" to="customers">
              Customers
            </NavLink>
            <NavLink className="nav-link" to="login">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
