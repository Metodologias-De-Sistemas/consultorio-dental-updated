import React from "react";
import NavbarList from "./NavbarList";
import { withRouter, Link } from "react-router-dom";
// Habia un bug que no mostraba el navbar brand cuando estabamos en alguna pantalla como usuario. Habia que importar como componente la imagen.
import muelita from "../../../assets/muelita.svg";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar sticky-top navbar-expand-lg navbar-light backgroundNavbar"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.92)" }}
      >
        <Link className="navbar-brand" to="/">
          <img src={muelita} width="%100" height="40" alt="" /> SONRISA FELIZ
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
