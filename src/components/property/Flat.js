import React from 'react';

import SidebarView from './SidebarView';

const Flat = () => (
  <div className="container-fluid">
    <div className="row">
      <SidebarView selected="/property/flat" />
      <div className="col-md-10">
        <h5>Flat Page Content</h5>
      </div>
    </div>
  </div>
);

export { Flat };
