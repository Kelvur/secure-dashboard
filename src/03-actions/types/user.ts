// Core
import { AxiosError } from 'axios';


const DOMAIN = '@@USER';

export const LOGIN = `${DOMAIN}/LOGIN`

export const ACCESS_TOKEN = `${DOMAIN}/ACCESS_TOKEN`
export const ACCESS_TOKEN_SUCCESS = `${DOMAIN}/ACCESS_TOKEN_SUCCESS`
export const ACCESS_TOKEN_FAILURE = `${DOMAIN}/ACCESS_TOKEN_FAILURE`

export const GET_USER_INFO = `${DOMAIN}/GET_USER_INFO`
export const GET_USER_INFO_SUCCESS = `${DOMAIN}/GET_USER_INFO_SUCCESS`
export const GET_USER_INFO_FAILURE = `${DOMAIN}/GET_USER_INFO_FAILURE`

export interface UserState {
  username: string,
  name: string,
  access_token: string,
}

export interface LoginAction {
  type: typeof LOGIN,
  payload: string,
}

export interface AccessTokenAction {
  type: typeof ACCESS_TOKEN,
  payload: string,
}

export interface AccessTokenSuccessAction {
  type: typeof ACCESS_TOKEN_SUCCESS,
  payload: string,
}

export interface AccessTokenFailureAction {
  type: typeof ACCESS_TOKEN_FAILURE,
  payload: AxiosError,
}

export interface GetUserAction {
  type: typeof GET_USER_INFO,
}

export interface User {
  login: string,
  name: string,
}

export interface GetUserSuccessAction {
  type: typeof GET_USER_INFO_SUCCESS,
  payload: User,
}

export interface GetUserFailureAction {
  type: typeof GET_USER_INFO_FAILURE,
  payload: AxiosError,
}

export type UserActionTypes =
  LoginAction |
  AccessTokenAction |
  AccessTokenSuccessAction |
  AccessTokenFailureAction |
  GetUserAction |
  GetUserSuccessAction |
  GetUserFailureAction;

