import { Router } from 'react-router-dom';

import history from './services/history'
import Routes from './routes';
import { BasicUpgradeProvider } from './contexts/BasicUpgradeContext';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Router history={history}>
      <BasicUpgradeProvider>
        <Routes />
        <GlobalStyle />
      </BasicUpgradeProvider>
    </Router>
  );
}

export default App;
