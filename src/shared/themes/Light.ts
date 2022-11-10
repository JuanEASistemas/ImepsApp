import {extendTheme} from 'native-base';
import {Environment} from '../enviroment';
export const LightTheme = extendTheme({
  colors: {
    // Add new color
    primary: {
      100:'#fbfbfb',
    },
    secondary: {
      100:Environment.COLOR_CLIENT_LIGHT,
    },
    amber: {
      400: '#d97706',
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
});
