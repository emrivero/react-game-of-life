import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './style/theme';
import './index.css';
import { register } from './serviceWorker';

import Main from './pages/Main';

ReactDOM.render(
  <Router basename="/hcsigc">
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Redirect exact={true} from='/' to='/main'/>
          <Route path="/main" exact={true} component={Main}/>
        </Switch>
      </MuiThemeProvider>
  </Router>, document.getElementById('root'));
register();
