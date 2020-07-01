import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme';
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
  <React.Fragment>
<ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Router>
    <App />
    </Router>

  </ThemeProvider>   
  </React.Fragment>,
  document.getElementById('root')
);

// </React.StrictMode>,
