import React from "react";
import NavbarList from "./NavbarList";
import { withRouter, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img
            src="images/Logo sonrisa feliz.png"
            width="%100"
            height="45"
            alt=""
          />{" "}
          SONRISA FELIZ
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <NavbarList />
        </div>
      </nav>
    </>
  );
};

export default withRouter(Navbar);
