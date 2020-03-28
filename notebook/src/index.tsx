/* eslint-disable react/no-array-index-key */
import React from 'react';
import { render } from 'react-dom';
import { MDXProvider } from '@mdx-js/react';
import {
  Deck,
  FlexBox,
  Slide,
  Box,
  Progress,
  FullScreen,
  Notes,
  mdxComponentMap,
} from 'spectacle';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LessonOne from './pages/lesson-1/index';
// eslint-disable-next-line import/extensions
import LessonTwo from './pages/lesson-2/index';

import slides, { notes } from './slides.mdx';

console.log({ slides });

const theme = {
  colors: {
    primary: '#000',
    secondary: '#000',
  },
  fontSizes: {
    header: '64px',
    paragraph: '28px',
  },
  backgroundColor: 'primary',
};
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen size={20} color="black" />
    </Box>
    <Box padding="1em">
      <Progress size={25} color="black" />
    </Box>
  </FlexBox>
);

const Presentation = () => (
  <MDXProvider components={mdxComponentMap}>
    <Deck loop theme={theme} template={template}>
      {slides
        // @ts-ignore
        .map((MDXSlide, i) => [MDXSlide, notes[i]])
        // @ts-ignore
        .map(([MDXSlide, MDXNote], i) => (
          // @ts-ignore
          <Slide key={`slide-${i}`} slideNum={i}>
            <MDXSlide />
            <Notes>
              <MDXNote />
            </Notes>
          </Slide>
        ))}
    </Deck>
  </MDXProvider>
);

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
