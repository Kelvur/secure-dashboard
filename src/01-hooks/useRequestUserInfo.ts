// Core
import { useEffect } from 'react';
// Hooks
import { useDispatch, useSelector } from 'react-redux';
// Types
import { RootState } from '06-reducers';
// Service
import { getUser } from '05-sideEffects/user'


const getAccessToken = (state: RootState) => state.user.access_token;

function useRequestUserInfo(): void {
  const dispatch = useDispatch();
  const access_token = useSelector(getAccessToken);

  useEffect(() => {
    if(access_token){
      dispatch(getUser());
    }
  }, [dispatch, access_token]);
}

export default useRequestUserInfo;
