import React from 'react';
import template from '../template';
import { Deck, Markdown } from 'spectacle';
// import theme from '../../styles/theme';

type PresentationContent = {
  content: React.ReactNode;
};

const theme = {
  colors: {
    white: '#fff',
    black: '#000',
  },
  fontSizes: {
    header: '64px',
    paragraph: '28px',
  },
  backgroundColor: '#fff',
};

const Presentation: React.FC<PresentationContent> = ({
  content,
}: PresentationContent) => (
    <Deck
      theme={theme}
      template={template}
      transitionEffect={'none'}
      backgroundColor={'#fff'}
    >
      <Markdown containsSlides>{content}</Markdown>
    </Deck>
  );

export default Presentation;
