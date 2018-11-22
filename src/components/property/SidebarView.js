import React from 'react';

import { NavItem } from '../common';

const SidebarView = ({ selected }) => (
  <ul className="nav col-md-1">
    <NavItem link="/property/home" title="Home" selected={selected} />
    <NavItem link="/property/building" title="Building" selected={selected} />
    <NavItem link="/property/flat" title="Flat" selected={selected} />
  </ul>
);

export default SidebarView;
