import React from 'react';
import { createBrowserHistory } from 'history';
import {Route, Router, Switch} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
      <Switch>
        <Route path={"/"} component={Home} exact></Route>
        <Route path={"/2"} component={()=><div>test22</div>} exact></Route>
        <Route component={NotFound} exact></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
