import React from 'react';
import NavbarItem from './NavbarItem';

const NavbarList = () => {
  return (
    <ul className="navbar-nav ml-auto">
      <NavbarItem text="INICIO" href="#bannerSection" />
      <NavbarItem text="SERVICIOS" href="#servicesSection" />
      <NavbarItem text="QUIENES SOMOS" href="#aboutUsSection" />
      <NavbarItem text="CONTACTO" href="#covidSection" />
    </ul>
  );
};

export default NavbarList;
