import React from 'react';
import { render } from 'react-dom';

import Presentation from './components/presentation/index.tsx';
import slides from '../../lessons/accesability/slides.md';

render(<Presentation content={slides} />, document.getElementById('root'));
