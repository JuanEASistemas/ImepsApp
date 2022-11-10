import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useEffect,
  useState,
} from 'react';
import {NativeBaseProvider} from 'native-base';
import {DarkTheme, LightTheme} from '../../themes';
import {IThemeContextData, IAppThemeProviderProps} from './types'

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider:React.FC<IAppThemeProviderProps> = ({children}) => {

  const [themeName, setThemeName] = useState<'light' | 'dark' | 'contrast'>('light');

  useEffect(() => {
    setThemeName(oldThemeName => (oldThemeName === 'light' ? 'dark' : 'light'));
    setThemeName('dark');
  }, []);

  const toggleTheme = useCallback(() => {
      setThemeName(oldThemeName => (oldThemeName === 'dark' ? 'light' : 'dark'));
  }, []);

  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme;
    if (themeName === 'contrast') return DarkTheme;
    return DarkTheme;
  }, [themeName]);

  return (
      <ThemeContext.Provider value={{ themeName, toggleTheme }}>
        <NativeBaseProvider theme={theme}>
          {children}
        </NativeBaseProvider>
      </ThemeContext.Provider>
    );
};

export const initTeamsTheme = (theme: string | undefined) => {
  switch (theme) {
  case 'dark':
    return 'dark';
  case 'contrast':
    return 'dark';
  default:
    return 'light';
  }
};