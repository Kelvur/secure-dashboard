// Action Types
import {
  UserState,
  UserActionTypes,
  ACCESS_TOKEN_SUCCESS,
  AccessTokenSuccessAction,
  GET_USER_INFO_SUCCESS,
  GetUserSuccessAction,
} from '03-actions/types/user';
// Utils
import getParams from '07-utils/string/getParams'


const initialState: UserState = {
  username: '',
  name: '',
  access_token: '',
}

function userReducer(
  state = initialState,
  action: UserActionTypes
): UserState {
  switch (action.type) {
    case ACCESS_TOKEN_SUCCESS:
      const access_token = getParams((action as AccessTokenSuccessAction).payload).access_token;
      return {...state, access_token}
    case GET_USER_INFO_SUCCESS:
      const username = (action as GetUserSuccessAction).payload.login;
      const name = (action as GetUserSuccessAction).payload.name;
      return {...state, username, name}
    default:
      return state
  }
}

export default userReducer;
