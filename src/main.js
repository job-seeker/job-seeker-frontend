import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import appCreateStore from './lib/app-create-store.js';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiTheme from './style/mui-theme.js';

import RaisedButton from 'material-ui/RaisedButton';
import App from './components/app/';
import { lightBaseTheme } from 'material-ui/styles';
import { white, grey800 } from 'material-ui/styles/colors';

import './style/main.scss';
import FooterIcon from './assets/github.png';

let store = appCreateStore();

const AppContainer = () => {
  return (
    <main>
      <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
          <App />
        </Provider>
      </MuiThemeProvider>
    </main>
  );
};

const FooterContainer = () => {
  return (
    <div>
      <a href='https://github.com/job-seeker/' target='_blank'>
        <img alt='github icon' src={FooterIcon} />
      </a>
    </div>
  );
};

ReactDom.render(<AppContainer />, document.getElementById('root'));
ReactDom.render(<FooterContainer />, document.getElementById('footer'));