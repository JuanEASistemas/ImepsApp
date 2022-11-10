import { AxiosRequestConfig } from 'axios';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { Environment } from '../../../../enviroment';


export const requestInterceptor = (config: AxiosRequestConfig) => {
  

  const authorization =  AsyncStorage.getItem(Environment.PUBLIC_TOKEN);

  if(authorization){
      config.headers = {
        Authorization: `Bearer ${authorization}`,
    };
  }
    
  return config;
};
