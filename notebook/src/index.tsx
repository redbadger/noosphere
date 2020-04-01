import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import GitPage from './pages/git';
import IndexPage from './pages';
import React from 'react';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/">
        <IndexPage />
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/git">Git and GitHub</Link>
            </li>
          </ul>
        </nav> */}
      </Route>
      <Route path="/git">
        <h1>Git</h1>
        <GitPage />
      </Route>
    </Switch>
  </Router>
);

render(<App />, document.getElementById('root'));
