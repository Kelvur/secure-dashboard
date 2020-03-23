// Core
import { useLayoutEffect, useEffect } from 'react';
// Hooks
import { useDispatch, useSelector } from 'react-redux';
// Actions
import { push } from 'connected-react-router';
// Types
import { RootState, MyLocation } from '06-reducers'
// Side Effects
import { accessToken } from '05-sideEffects/user';
// Constants
import PATHS from '08-constants/paths/paths';


const getQueryCodeSelector = (state: RootState) => (state.router.location as MyLocation).query.code;
const getAccessTokenSelector = (state: RootState) => state.user.access_token;

function useSecureRoute(): void {
  const dispatch = useDispatch();
  const code = useSelector(getQueryCodeSelector);
  const access_token = useSelector(getAccessTokenSelector);

  useLayoutEffect(() => {
    if(code){
      // Remove code param from the URL
      const urlWithoutParams = window.location.href.split("?")[0];
      window.history.replaceState({}, "", urlWithoutParams);

      dispatch(accessToken(code));
    }
  }, [dispatch, code]);

  useEffect(() => {
    if(!code && !access_token){
      dispatch(push(PATHS.LOGIN));
    }
  }, [code, access_token, dispatch]);
}

export default useSecureRoute;
