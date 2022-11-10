import React from 'react';
import {AppRouter} from './src/router';
import {AppThemeProvider, ConnectProvider} from './src/shared/contexts';
import {Connect} from './src/shared/components';
export const App = () => {
  return (
    <AppThemeProvider>
      <ConnectProvider>
        <Connect>
          <AppRouter />
        </Connect>
      </ConnectProvider>
    </AppThemeProvider> 
  );
};
