import React, { Fragment } from "react";
import NavbarItem from "./NavbarItem";
import { Link } from "react-router-dom";
import { isAuthenticated, logout } from "../../../helpers/auth";

const NavbarList = ({ history }) => {
  const handleLogout = (evt) => {
    logout(() => {
      history.push("/signin");
    });
  };

  return (
    /* 
    
    ACA FALTA LO DE CONDITIONAL RENDERING. QUE LO VOY A HACER CON LOS ROLES. COMO NO TENGO BD TODAVIA NO LO HAGO NI TAMPOCO APLICO EL LOGOUT
    
    */
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/signup" className="nav-link">
          <i className="fas fa-edit"></i> REGISTRARSE
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/signin" className="nav-link">
          <i className="fas fa-sign-in-alt"></i> INICIAR SESIÓN
        </Link>
      </li>
      <NavbarItem text="INICIO" href="/#bannerSection" />
      <NavbarItem text="SERVICIOS" href="/#servicesSection" />
      <NavbarItem text="QUIENES SOMOS" href="/#aboutUsSection" />
      <NavbarItem text="COVID-19" href="/#covidSection" />

      {isAuthenticated() && (
        <Fragment>
          <li className="nav-item">
            <button
              className="btn btn-link text-secondary text-decoration-none pl-0 "
              onClick={handleLogout}
            >
              <i className="fas fa-sign-out-alt"></i> Cerrar sesión
            </button>
          </li>
        </Fragment>
      )}
    </ul>
  );
};

export default NavbarList;
