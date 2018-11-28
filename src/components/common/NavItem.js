import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ link, title, selected }) => {
  const linkClass = link === selected ? 'nav-link active' : 'nav-link ';
  return (
    <li className="nav-item">
      <Link to={link} className={linkClass}>
        {title}
      </Link>
    </li>
  );
};

export { NavItem };
