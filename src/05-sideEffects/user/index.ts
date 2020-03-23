// Types
import { ThunkAction } from '../types';
// Actions
import {
  login as loginAction,
  accessToken as accessTokenAction,
  accessTokenSuccess,
  accessTokenFailure,
  getUser as getUserAction,
  getUserSuccess,
  getUserFailure,
} from '03-actions/user';
import { push } from 'connected-react-router';
// Service
import {
  login as loginService,
  accessToken as accessTokenService,
  getUser as getUserService,
} from '04-services/oauth';
// Constants
import PATHS from '08-constants/paths/paths';


export function login(username: string): ThunkAction<void> {
  return (dispatch) => {
    dispatch(loginAction(username));
    loginService(username);
  }
}

export function accessToken(code: string): ThunkAction<void> {
  return (dispatch) => {
    dispatch(accessTokenAction(code));
    accessTokenService(code).then(
      response => dispatch(accessTokenSuccess(response.data))
    ).catch(error => {
      dispatch(accessTokenFailure(error));
      dispatch(push(PATHS.LOGIN));
    });
  }
}

export function getUser(): ThunkAction<void> {
  return (dispatch, getState) => {
    dispatch(getUserAction());
    const user = getState().user;
    getUserService(user.access_token).then(
      response => dispatch(getUserSuccess(response.data))
    ).catch(error => dispatch(getUserFailure(error)));
  }
}
