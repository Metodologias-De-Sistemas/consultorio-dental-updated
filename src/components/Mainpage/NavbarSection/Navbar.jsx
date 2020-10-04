import React from 'react';
import NavbarList from './NavbarList';

const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src="images/Logo sonrisa feliz.png"
            width="%100"
            height="45"
            alt=""
          />
          SONRISA FELIZ
        </a>

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

export default Navbar;
