import React from 'react';

import SidebarView from './SidebarView';

const Home = () => (
  <div className="container-fluid">
    <div className="row">
      <SidebarView selected="/property/home" />
      <div className="col-md-10">
        <h5>Home Page Content</h5>
      </div>
    </div>
  </div>
);

export { Home };
