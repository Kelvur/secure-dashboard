// Core
import { AxiosError } from 'axios';
// Action Types
import {
  LoginAction, LOGIN,
  AccessTokenAction, ACCESS_TOKEN,
  AccessTokenSuccessAction, ACCESS_TOKEN_SUCCESS,
  AccessTokenFailureAction, ACCESS_TOKEN_FAILURE,
  GetUserAction, GET_USER_INFO,
  GetUserSuccessAction, GET_USER_INFO_SUCCESS,
  GetUserFailureAction, GET_USER_INFO_FAILURE,
  User,
} from './types/user';


export function login(username: string): LoginAction {
  return {
    type: LOGIN,
    payload: username,
  }
}

export function accessToken(code: string): AccessTokenAction {
  return {
    type: ACCESS_TOKEN,
    payload: code,
  }
}

export function accessTokenSuccess(data: string): AccessTokenSuccessAction {
  return {
    type: ACCESS_TOKEN_SUCCESS,
    payload: data,
  }
}

export function accessTokenFailure(error: AxiosError): AccessTokenFailureAction {
  return {
    type: ACCESS_TOKEN_FAILURE,
    payload: error,
  }
}

export function getUser(): GetUserAction {
  return {
    type: GET_USER_INFO,
  }
}

export function getUserSuccess(user: User): GetUserSuccessAction {
  return {
    type: GET_USER_INFO_SUCCESS,
    payload: user,
  }
}

export function getUserFailure(error: AxiosError): GetUserFailureAction {
  return {
    type: GET_USER_INFO_FAILURE,
    payload: error,
  }
}
