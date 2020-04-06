import { render } from 'react-dom';
import React from 'react';
import Routes from './routes';
import './styles/global.css';
import 'normalize.css';

const App: React.FC = () => <Routes />;

render(<App />, document.getElementById('root'));
