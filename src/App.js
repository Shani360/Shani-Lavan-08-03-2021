import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Currency from './components/Currency';
import BoughtItemsPage from './pages/BoughtItemsPage';
import ReceivedItemsPage from './pages/ReceivedItemsPage';
import { configRoutes } from './configs/data';
import './styles.scss';

function App(){
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
      <Currency />
    </div>
    );
  }

export default App;
