import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Building, Home, Flat } from '../components/property';

const PropertyRoute = () => (
  <Switch>
    <Route path="/property/home" component={Home} />
    <Route path="/property/building" component={Building} />
    <Route path="/property/flat" component={Flat} />
    <Redirect from="/property" exact to="/property/home" />
  </Switch>
);

export { PropertyRoute };
