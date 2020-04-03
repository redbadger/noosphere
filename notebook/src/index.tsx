import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import GitPage from './pages/git';
import IndexPage from './pages';
import React from 'react';
import Routes from './routes';

// export default function App() {
//   return (

//   );
// }

const App: React.FC = () => <Routes />;

render(<App />, document.getElementById('root'));
