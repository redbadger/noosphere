import React from 'react';
import template from '../template';
import { Deck, Markdown } from 'spectacle';
import theme from '../../styles/theme';

type PresentationContent = {
  content: React.ReactNode;
};

const Presentation: React.FC<PresentationContent> = ({
  content,
}: PresentationContent) => (
  <Deck theme={theme} template={template} transitionEffect={'none'}>
    <Markdown containsSlides>{content}</Markdown>
  </Deck>
);

export default Presentation;
