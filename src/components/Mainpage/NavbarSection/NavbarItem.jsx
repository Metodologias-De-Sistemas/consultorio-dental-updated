import React from "react";
import { HashLink } from "react-router-hash-link";

const NavbarItem = ({ href, text }) => {
  return (
    <>
      <li className="nav-item">
        <HashLink className="nav-link pl-2" to={href}>
          {text}
        </HashLink>
      </li>
    </>
  );
};

export default NavbarItem;
