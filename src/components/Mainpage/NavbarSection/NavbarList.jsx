import React, { Fragment } from "react";
import NavbarItem from "./NavbarItem";
import { useHistory } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";
import { isAuthenticated, logout } from "../../../helpers/auth";

const NavbarList = () => {
  const history = useHistory();
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
      {!isAuthenticated() && (
        <>
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
        </>
      )}

      {isAuthenticated() && isAuthenticated().rol === 0 && (
        <Fragment>
          <NavbarItem className="px-2" text="INICIO" href="/" />
          <li className="nav-item">
            <Link to="/user/cita" className="nav-link px-3 pl-1 mb-1">
              <i className="fas fa-tooth fa-sm"></i> PEDIR CITA
            </Link>
          </li>
        </Fragment>
      )}

      {isAuthenticated() && isAuthenticated().rol === 0 && (
        <Fragment>
          <li className="nav-item">
            <Link to="/user/dashboard" className="nav-link px-3 mb-1">
              VER CITAS
            </Link>
          </li>
        </Fragment>
      )}

      {isAuthenticated() && isAuthenticated().rol === 1 && (
        <Fragment>
          <li className="nav-item">
            <Link to="/admin/dashboard" className="nav-link px-3 pl-1 mb-1">
              <i className="fas fa-home"></i> Dashboard
            </Link>
          </li>
        </Fragment>
      )}

      {isAuthenticated() && (
        <Fragment>
          <li className="nav-item">
            <button
              className="btn btn-link text-secondary text-decoration-none pl-0 pt-2 "
              onClick={handleLogout}
            >
              <i className="fas fa-sign-out-alt"></i> CERRAR SESIÓN
            </button>
          </li>
        </Fragment>
      )}
    </ul>
  );
};

export default NavbarList;
