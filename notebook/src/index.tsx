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

import slides, { notes } from './slides.mdx';

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

render(<Presentation />, document.getElementById('root'));
