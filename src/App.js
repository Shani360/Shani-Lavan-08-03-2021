import { HashRouter, Switch, Route } from 'react-router-dom';
import Currency from './components/Currency';
import BoughtItemsPage from './pages/BoughtItemsPage';
import ReceivedItemsPage from './pages/ReceivedItemsPage';
import { configRoutes } from './configs/data';
import './styles.scss';

function App(){
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path={`/${configRoutes.paths[0].value}`} render={() => (
          <BoughtItemsPage/>
        )}
        />

        <Route exact path={`/${configRoutes.paths[1].value}`} render={() => (
          <ReceivedItemsPage/>
        )}
        />
      </Switch>
      <Currency />

      </HashRouter>
    </div>
    );
  }

export default App;
