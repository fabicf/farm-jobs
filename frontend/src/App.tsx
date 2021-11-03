import React from 'react';
import { createBrowserHistory } from 'history';
import {Route, Router, Switch} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import green from '@mui/material/colors/green';

const history = createBrowserHistory();



const theme = createTheme({
  palette: {
    primary: green,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
      <Switch>
        <Route path={"/"} component={Home} exact></Route>
        <Route path={"/2"} component={()=><div>test22</div>} exact></Route>
        <Route component={NotFound} exact></Route>
      </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
