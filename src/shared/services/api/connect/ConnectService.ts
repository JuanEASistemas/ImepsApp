
import { Api } from '../axios-config';
import axios from 'axios';

import {responseInterceptor, requestInterceptor, errorInterceptor} from '../axios-config/interceptors';
import {Environment} from '../../../enviroment';

interface IConnect {
  connectToken: string;
  status?: string;
}

const connect = async (public_token: string, client_id: string): Promise<IConnect | Error> => {
  try {
    const { data } = await Api.post('/connect', { public_token: public_token, client_id: client_id } );
    if (data) {
      return data;
    }    
    return new Error('Erro de Conexao.');
  } catch (error) {
    return new Error((error as { message: string }).message || 'Erro na Conexao.');
  }
};

export const ConnectService = {
  connect,
};
