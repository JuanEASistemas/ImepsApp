export interface IThemeContextData {
  themeName: 'light' | 'dark' | 'contrast';
  toggleTheme: () => void;
}
export interface IAppThemeProviderProps {
  children: React.ReactNode;
}