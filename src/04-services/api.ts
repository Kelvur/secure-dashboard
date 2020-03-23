// Core
import axios, { AxiosPromise, Method } from "axios";


const API_BASE_DOMAIN: string = 'http://localhost:3000';

export function serviceCall(
    method: Method,
    url: string,
    params?: any,
    data?: any,
    headers?: any,
    base = API_BASE_DOMAIN,
): AxiosPromise {
  return axios({
    method,
    url: `${base}${url}`,
    params,
    data,
    headers,
  });
}

export function post(url: string, data: object): AxiosPromise{
  return serviceCall('POST', url, undefined, data);
}

export function get(url: string, headers: any, base: string){
  return serviceCall('GET', url, undefined, undefined, headers, base);
}
