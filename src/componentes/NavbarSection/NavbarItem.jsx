import React from 'react';

const NavbarItem = ({ href, text }) => {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link" href={href}>
          {text}
        </a>
      </li>
    </>
  );
};

export default NavbarItem;
