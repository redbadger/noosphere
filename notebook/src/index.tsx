import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import GitPage from './pages/git';
import IndexPage from './pages';
import React from 'react';

export default function App() {
  return (
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
}

render(<App />, document.getElementById('root'));
