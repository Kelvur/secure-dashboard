// Core
import React from 'react';
// Hooks
import useSecureRoute from '01-hooks/useSecureRoute';
import useRequestUserInfo from '01-hooks/useRequestUserInfo';
import { useSelector } from 'react-redux';
// Components
import { Link } from 'react-router-dom';
// Types
import { RootState } from '06-reducers';
// Constants
import PATHS from '08-constants/paths/paths';


const getUserSelector = (state: RootState) => state.user

const Dashboard: React.FC = () => {
  useSecureRoute();
  useRequestUserInfo();

  const user = useSelector(getUserSelector);

  return (
    <div>
      Dashboard
      <p>{user.name} @{user.username}</p>
      <ul>
        <li>
          <Link to={PATHS.SETTINGS}>Settings</Link>
        </li>
      </ul>
    </div>
  )
};

export default Dashboard;
