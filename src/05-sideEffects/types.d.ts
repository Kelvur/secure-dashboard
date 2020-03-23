// Core
import { Action } from 'redux';
import { ThunkAction as ThunkOriginalAction } from 'redux-thunk';
// Reducers
import { RootState } from '06-reducers';


export type ThunkAction<ReturnType = void> = ThunkOriginalAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

