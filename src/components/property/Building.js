import React from 'react';

import SidebarView from './SidebarView';

const Building = () => (
  <div className="container-fluid">
    <div className="row">
      <SidebarView selected="/property/building" />
      <div className="col-md-10">
        <h5>Building Page Content</h5>
      </div>
    </div>
  </div>
);

export { Building };
