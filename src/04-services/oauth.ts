// Core
import { AxiosPromise } from 'axios';
// Service
import { post, get } from './api';


const API_OAUTH_DOMAIN = 'https://github.com/login/oauth';
const CLIENT_ID = '324086028690a4b52cef';
const API_GITHUB_DOMAIN = 'https://api.github.com';

export function buildAuthorizeUrl(login: string): string {
  const params = new URLSearchParams({
    login,
    client_id: CLIENT_ID,
  });
  return `${API_OAUTH_DOMAIN}/authorize?${params}`;
}

export function login(username: string): void{
  window.location.href = buildAuthorizeUrl(username);
}

export function accessToken(code: string): AxiosPromise {
  return post('/api/oauth', {
    code,
    client_id: CLIENT_ID,
  });
}

export function getUser(token: string): AxiosPromise {
  return get('/user', { 'Authorization': `token ${token}`}, API_GITHUB_DOMAIN)
}
