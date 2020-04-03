import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GitPage from '../pages/git';
import IndexPage from '../pages';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/git">
        <GitPage />
      </Route>
      <Route path="/">
        <IndexPage />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
