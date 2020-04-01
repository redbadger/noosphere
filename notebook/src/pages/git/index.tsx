import React from 'react';
import gitSlides from '../../../../lessons/git/slides.md';
import Presentation from '../../components/presentation';

const GitPage: React.FC = () => <Presentation content={gitSlides} />;

export default GitPage;
