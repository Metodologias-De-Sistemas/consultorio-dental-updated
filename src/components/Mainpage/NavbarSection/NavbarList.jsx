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
            <Link to="/signup" className="nav-link pl-2">
              REGISTRARSE{" "}
              <i
                className="fas fa-user-plus fa-sm"
                style={{ position: "relative", top: "-2px" }}
              ></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signin" className="nav-link pl-2">
              INICIAR SESIÓN <i className="fas fa-sign-in-alt"></i>
            </Link>
          </li>
          <NavbarItem text="INICIO" href="/#initialCarousel" />
          <NavbarItem text="SERVICIOS" href="/#servicesSection" />
          <NavbarItem text="QUIENES SOMOS" href="/#aboutUsSection" />
          <NavbarItem text="COVID-19" href="/#covidSection" />
        </>
      )}

      {isAuthenticated() && isAuthenticated().rol === 0 && (
        <Fragment>
          <NavbarItem text="INICIO" href="/" />
          <li className="nav-item">
            <Link to="/user/cita" className="nav-link pl-2">
              PEDIR CITA
            </Link>
          </li>
        </Fragment>
      )}

      {isAuthenticated() && isAuthenticated().rol === 0 && (
        <Fragment>
          <li className="nav-item">
            <Link to="/user/dashboard" className="nav-link pl-2">
              VER CITAS
            </Link>
          </li>
        </Fragment>
      )}

      {isAuthenticated() && isAuthenticated().rol === 1 && (
        <Fragment>
          <li className="nav-item">
            <Link to="/admin/dashboard" className="nav-link pl-2">
              CITAS PENDIENTES
            </Link>
          </li>
        </Fragment>
      )}

      {isAuthenticated() && (
        <Fragment>
          <li className="nav-item ">
            <button
              className="btn btn-link text-decoration-none pl-2 btnSalir"
              style={{ fontSize: "1.2rem", paddingTop: "7px" }}
              onClick={handleLogout}
            >
              SALIR <i className="fas fa-sign-out-alt fa-sm "></i>
            </button>
          </li>
        </Fragment>
      )}
    </ul>
  );
};

export default NavbarList;
