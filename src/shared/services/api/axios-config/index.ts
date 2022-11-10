import axios from 'axios';

import {responseInterceptor, requestInterceptor, errorInterceptor} from './interceptors';
import {Environment} from '../../../enviroment';


const Api = axios.create({
  baseURL: Environment.URL_BASE,
  //headers: { 'Api-key': Environment.PUBLIC_TOKEN },
  timeout: 10000, 
});

Api.interceptors.request.use(
  (request) => requestInterceptor(request),
  (error) => errorInterceptor(error)
);

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
);


export { Api };
