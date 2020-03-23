// Core
import React from 'react';
// Hooks
import useSecureRoute from '01-hooks/useSecureRoute';
// Components
import { Link } from 'react-router-dom';
// Constants
import PATHS from '08-constants/paths/paths';


const Settings: React.FC= () => {
  useSecureRoute();
  return (
    <div>
      Settings
      <ul>
        <li>
          <Link to={PATHS.DASHBOARD}>Dashboard</Link>
        </li>
      </ul>
    </div>
  );
}

export default Settings;
