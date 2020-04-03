import { render } from 'react-dom';
import React from 'react';
import Routes from './routes';

const App: React.FC = () => <Routes />;

render(<App />, document.getElementById('root'));
