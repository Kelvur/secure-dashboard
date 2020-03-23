// Core
import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router'
import { History, Location } from 'history';
// Action Types
import { UserState } from '03-actions/types/user'
// Reducers
import userReducer from './user';


export function createRootReducer(history: History){
  return combineReducers({
    router: connectRouter(history),
    user: userReducer,
  });
}

interface Query {
  [name: string]: string,
}

export interface MyLocation extends Location {
  query: Query,
}

export interface RootState {
  router: RouterState,
  user: UserState,
}
