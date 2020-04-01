/* eslint-disable react/no-array-index-key */
// @ts-nocheck
import React from 'react';
import { render } from 'react-dom';

import { Deck, FlexBox, Box, Progress, FullScreen, Markdown } from 'spectacle';

// import slides from './slides.md';
import slides from '../../lessons/accesability/slides.md';

type PresentationContent = {
  content: React.ReactNode;
};

const Presentation: React.FC<PresentationContent> = ({
  content,
}: PresentationContent) => (
    <Deck loop theme={theme} template={template}>
      <Markdown containsSlides>{content}</Markdown>
    </Deck>
  );

render(<Presentation content={slides} />, document.getElementById('root'));
