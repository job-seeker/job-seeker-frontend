import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import appCreateStore from './lib/app-create-store.js';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiTheme from './style/mui-theme.js';
import './style/main.scss';

import RaisedButton from 'material-ui/RaisedButton';
import App from './components/app/';
import { lightBaseTheme } from 'material-ui/styles';
import { white, grey800 } from 'material-ui/styles/colors';

// TO DO: COMPLETE REDUCERS IN ORDER FOR STORE TO WORK
// let store = appCreateStore();

const AppContainer = () => {
  return (
    <main>
      <MuiThemeProvider muiTheme={muiTheme}>
        {/* <Provider store={store}> */}
        <App />
        {/* </Provider> */}
      </MuiThemeProvider>
    </main>
  );
};

ReactDom.render(<AppContainer />, document.getElementById('root'));