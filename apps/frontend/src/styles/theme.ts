import {createTheme} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
//import MyriadProWoff from './fonts/MyriadPro-Regular.woff';

// const myriadPro = {
//   fontFamily: 'MyriadPro',
//   fontStyle: 'normal',
//   fontWeight: 400,
//   src: `
//     local('MyriadPro'),
//     local('MyriadPro-Regular'),
//     url(${MyriadProWoff}) format('woff2')
//   `,
//   unicodeRange:
//     'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
// };

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500]
    },
    secondary: {
      main: green[500]
    }
  }
});

export default theme;
