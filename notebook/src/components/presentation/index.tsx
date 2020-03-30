// @ts-nocheck
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Deck, Slide, mdxComponentMap } from 'spectacle';
import { Lesson } from 'lessons/build';
import theme from '../../styles/theme';
import template from '../template';

const getSlides = async (lesson: Lesson): Promise<JSX.Element[]> =>
  new Promise((resolve, reject) => {
    try {
      const slides: JSX.Element[] = require(`lessons/${lesson.name}`);
      resolve(slides);
    } catch (error) {
      reject(error);
    }
  });

const Presentation = async (lesson: Lesson) => {
  const slides = await getSlides(lesson);
  return (
    <MDXProvider components={mdxComponentMap}>
      <Deck loop theme={theme} template={template}>
        {slides.map(([MDXSlide], i) => (
          <Slide key={`slide-${i}`} slideNum={i}>
            <MDXSlide />
          </Slide>
        ))}
      </Deck>
    </MDXProvider>
  );
};

export default Presentation;
