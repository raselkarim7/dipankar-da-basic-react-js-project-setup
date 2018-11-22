import React from 'react';
import { Link } from 'react-router-dom';

const NavBarItem = ({ link, title, selected }) => {
  const itemClass = link === selected ? 'nav-item active' : 'nav-item ';
  return (
    <li className={itemClass}>
      <Link to={link} className="nav-link">
        {title}
      </Link>
    </li>
  );
};

export { NavBarItem };
