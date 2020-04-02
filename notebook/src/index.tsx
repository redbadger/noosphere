import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import GitPage from './pages/git';
import IndexPage from './pages';
import React from 'react';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/git">
            <GitPage />
          </Route>
          <Route path="/">
            <IndexPage />
            <nav>
              <ul>
                <li>
                  <Link to="/git">Git & GitHub</Link>
                </li>
              </ul>
            </nav>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

render(<App />, document.getElementById('root'));
