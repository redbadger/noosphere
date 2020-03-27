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

// SPECTACLE_CLI_MDX_START
import slides, { notes } from './slides.mdx';
// SPECTACLE_CLI_MDX_END

// SPECTACLE_CLI_THEME_START
const theme = {};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      // @ts-ignore
      <FullScreen />
    </Box>
    <Box padding="1em">
      // @ts-ignore
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

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
