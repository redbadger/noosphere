import React from 'react';
import template from '../template';
import { Deck, Markdown } from 'spectacle';
// import theme from '../../styles/theme';

type PresentationContent = {
  content: React.ReactNode;
};

// const theme = {
//   colors: {
//     white: '#fff',
//     black: '#000',
//   },
//   fontSizes: {
//     header: '64px',
//     paragraph: '28px',
//   },
//   backgroundColor: '#fff',
// };
const theme = {
  size: {
    width: 1366,
    height: 768,
    maxCodePaneHeight: 200,
  },
  colors: {
    primary: 'rgba(0,0,0,.8)',
    secondary: 'rgb(0,0,0)',
    tertiary: 'rgb(255, 255, 255)',
    quaternary: '#ffc951',
    quinary: '#8bddfd',
  },
  fonts: {
    header: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    text: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    monospace: '"Consolas", "Menlo", monospace',
  },
  fontSizes: {
    h1: '72px',
    h2: '64px',
    h3: '56px',
    text: '44px',
    monospace: '20px',
  },
  space: [16, 24, 32],
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
