import { createContext, useEffect, useMemo, useState, useContext } from 'react';

import  AsyncStorage  from '@react-native-async-storage/async-storage';

import {ConnectService} from '../../services/api/connect/ConnectService';
import {Environment} from '../../enviroment';
import { IConnectContextData, IConnectProviderProps } from './types';

export const ConnectContext = createContext<IConnectContextData>({} as IConnectContextData);

export const ConnectProvider: React.FC<IConnectProviderProps> = ({ children }) => {
  
  const [connectToken, setConnectToken] = useState<string | null>(null);
  
  useEffect(() => {
    async function ConnectClientAPI() {
      const result = await ConnectService.connect(Environment.PUBLIC_TOKEN, Environment.CLIENT_ID);
      if (result instanceof Error) {
        setConnectToken('error');
      } else {
        if(result.connectToken){
          AsyncStorage.setItem(Environment.PUBLIC_TOKEN, result.connectToken);
          setConnectToken(JSON.stringify(result.connectToken, null, 2));
        }
      }
    }
    ConnectClientAPI();
  }, []);

  const isConnected = useMemo(() => ((connectToken == 'error') ? false : (!(connectToken) ? null : true )), [connectToken]);

  return (
    <ConnectContext.Provider value={{ isConnected, connectToken }}>
      {children}
    </ConnectContext.Provider>
  );
};

export const useConnectContext = () => useContext(ConnectContext);
