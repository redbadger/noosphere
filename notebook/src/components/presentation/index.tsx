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
    <Deck loop theme={theme} template={template}>
      <Markdown containsSlides>{content}</Markdown>
    </Deck>
  );

export default Presentation;
