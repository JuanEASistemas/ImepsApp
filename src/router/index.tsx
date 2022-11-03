import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

export const AppRouter = () => {
  const auth = false;
  return (
    <NavigationContainer>
      {auth ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};
