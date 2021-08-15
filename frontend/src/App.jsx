import { Router } from 'react-router-dom';

import history from './services/history'
import Routes from './routes';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
