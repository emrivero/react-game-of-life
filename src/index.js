import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from 'style/theme';
import 'index.css';
import {register} from 'serviceWorker';

import Main from 'pages/Main';

ReactDOM.render(<Router basename="/react-game-of-life">
  <MuiThemeProvider theme={theme}>
    <Switch>
      <Route path="/" exact={true} component={Main}/>
    </Switch>
  </MuiThemeProvider>
</Router>, document.getElementById('root'));
register();
