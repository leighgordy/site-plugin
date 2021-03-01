/* globals document */
import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from '../lib/Index';
import ExternalTheme from './ExternalTheme';

ReactDom.render((
  <Router>
    <ThemeProvider theme={ExternalTheme}>
      <Switch>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </ThemeProvider>
  </Router>
), document.getElementById('root'));
