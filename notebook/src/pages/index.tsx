import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import styled from 'styled-components';

const StyledPaged = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  h2 {
    padding-left: 20px;
  }

  nav {
    flex-grow: 1;
  }

  ul {
    list-style: none;
  }
`;

const IndexPage: React.FC = () => (
  <StyledPaged>
    <Header />
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
                <a
                  href="https://github.com/redbadger/noosphere/blob/git-instructional-material/lessons/git/instructional-manual.md"
                  title="Git & GitHub"
                >
                  Instructional manual
                </a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </nav>
    <Footer />
  </StyledPaged>
);

export default IndexPage;
