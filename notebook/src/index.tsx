/* eslint-disable react/no-array-index-key */
import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import lessons from 'lessons';

// eslint-disable-next-line import/extensions
import LessonOne from './pages/lesson-1/index';
// eslint-disable-next-line import/extensions
import LessonTwo from './pages/lesson-2/index';

import slides, { notes } from './slides.mdx';

const App: React.FC = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/lesson-1">Lesson 1</Link>
          </li>
          <li>
            <Link to="/lesson-2">Lesson 2</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/lesson-1">
          <LessonOne />
        </Route>
        <Route path="/lesson-2">
          <LessonTwo />
        </Route>
        <Route path="/">
          <h1>Home</h1>
        </Route>
      </Switch>
    </div>
  </Router>
);

render(<App />, document.getElementById('root'));
