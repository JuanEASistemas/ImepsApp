import {extendTheme} from 'native-base';
import { Environment } from '../enviroment';

export const DarkTheme = extendTheme({
  colors: {
    // Add new color
    primary: {
      100:'#1f1f1f',
    },
    secondary: {
      100:Environment.COLOR_CLIENT_DARK,
    },
    // Redefining only one shade, rest of the color will remain same.
    amber: {
      400: '#d97706',
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
});
