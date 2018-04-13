import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { fade } from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';
import { white, grey800, amber800, transparent } from 'material-ui/styles/colors';

// custom values from https://github.com/mui-org/material-ui/blob/master/src/styles/getMuiTheme.js

const muiTheme = getMuiTheme({
  appBar: {
    color: transparent,
    textColor: grey800,
  },
  dropDownMenu: {
    accentColor: grey800,
  },
  menuItem: {
    padding: 0,
  },
});

export default muiTheme;