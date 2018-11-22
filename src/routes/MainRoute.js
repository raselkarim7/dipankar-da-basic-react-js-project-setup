import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../components/Home';

const MainRoute = () => (
  <main>
    <Switch>
      <Route path="/home" component={Home} />
      <Redirect from="/" to="/home" /> 
    </Switch>
  </main>
);

export { MainRoute };
