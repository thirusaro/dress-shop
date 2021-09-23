import { createTheme } from '@mui/material';
import { green, purple } from '@mui/material/colors';
import MyriadProRegularWoff2 from './fonts/MyriadPro-Regular.woff2';
import MyriadProRegularWoff from './fonts/MyriadPro-Regular.woff';
import MyriadProBoldWoff2 from './fonts/MyriadPro-Bold.woff2';
import MyriadProBoldWoff from './fonts/MyriadPro-Bold.woff';
import MyriadProSemiboldWoff2 from './fonts/MyriadPro-Semibold.woff2';
import MyriadProSemiboldWoff from './fonts/MyriadPro-Semibold.woff';

const myriadProRegular = {
  fontFamily: 'myriad-pro',
  fontWeight: 400,
  src: `
    url(${MyriadProRegularWoff2}) format('woff2'),
    url(${MyriadProRegularWoff}) format('woff')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
};

const myriadProBold = {
  fontWeight: 700,
  src: `
    url(${MyriadProBoldWoff2}) format('woff2'),
    url(${MyriadProBoldWoff}) format('woff')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
};

const myriadProSemibold = {
  fontWeight: 700,
  src: `
    url(${MyriadProSemiboldWoff2}) format('woff2'),
    url(${MyriadProSemiboldWoff}) format('woff')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
};

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#9e9e9e'
    },
    secondary: {
      main: green[500]
    }
  },
  typography: {
    fontFamily: 'myriad-pro, Arial',
    fontSize: 16
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': [myriadProRegular, myriadProBold, myriadProSemibold]
      }
    }
  }
});

export default theme;
