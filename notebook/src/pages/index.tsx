import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const IndexPage: React.FC = () => (
  <Fragment>
    <h1>Noosphere</h1>
    <h2>Table of contents</h2>
    <nav>
      <ul>
        <li>
          <details>
            <summary>Git & GitHub</summary>
            <ul>
              <li>
                <Link to="/git/">Presentation</Link>
              </li>
              <li>
                <a href="">Instructional manual</a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </nav>
  </Fragment>
);

export default IndexPage;
