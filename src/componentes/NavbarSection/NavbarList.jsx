import React from 'react';
import NavbarItem from './NavbarItem';

const NavbarList = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul className="navbar-nav ml-auto">
        <NavbarItem text="INICIO" href="#bannerSection" />
        <NavbarItem text="SERVICIOS" href="#aboutUsSection" />
        <NavbarItem text="QUIENES SOMOS" href="#aboutUsSection" />
        <NavbarItem text="CONTACTO" href="#covidSection" />
      </ul>
    </div>
  );
};

export default NavbarList;
