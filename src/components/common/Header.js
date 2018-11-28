import React from 'react';
import { Link } from 'react-router-dom';

import { NavBarItem } from './NavBarItem';

const Header = ({ selected }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-success">
    <a className="navbar-brand mb-0 h1" href="#/">
      eproperty
    </a>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <NavBarItem link="/property" title="Property" selected={selected} />
        <NavBarItem link="/service" title="Service" selected={selected} />
        <NavBarItem link="/user" title="User" selected={selected} />
        <NavBarItem link="/payment" title="Payment" selected={selected} />
        <NavBarItem link="/configuration" title="Configuration" selected={selected} />
        <NavBarItem link="/global" title="Global" selected={selected} />
        <li className="nav-item">
          <Link to="/logout" className="nav-link">
            <i className="fas fa-sign-out-alt" />
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export { Header };
