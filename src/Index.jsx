/* globals document */
import React from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from '../lib/Index';
import ExternalTheme from './ExternalTheme';

ReactDom.render((
  <ThemeProvider theme={ExternalTheme}>
    <App />
  </ThemeProvider>
), document.getElementById('root'));
