/* eslint-disable import/first */
// Core
import React, { Suspense, StrictMode } from 'react';
import { createStore, applyMiddleware, compose, Store } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
// Components
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// Pages
const Login = React.lazy(() => import('02-pages/Login'));
const Dashboard = React.lazy(() => import('02-pages/Dashboard'));
const Settings = React.lazy(() => import('02-pages/Settings'));
// Constants
import PATHS from '08-constants/paths/paths';
// Actiosn
import { Actions } from '03-actions/types';
// Reducers
import { RootState, createRootReducer } from '06-reducers';


interface ComponentPath {
  Component: React.LazyExoticComponent<React.FC>;
  path: string;
}

const history = createBrowserHistory();

const SECURED_COMPONENT_PATHS: Array<ComponentPath> = [{
  Component: Dashboard,
  path: PATHS.DASHBOARD,
}, {
  Component: Settings,
  path: PATHS.SETTINGS,
}];

const COMPONENT_PATHS: Array<ComponentPath> = [{
  Component: Login,
  path: PATHS.LOGIN,
}];

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

function createReduxStore(): Store {
  let composeEnhancers = compose;
  if (process.env.NODE_ENV === 'development') {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }
  return createStore(
    createRootReducer(history),
    {},
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        thunk as ThunkMiddleware<RootState, Actions>)));
};

function App() {
  return (
    <StrictMode>
      <StoreProvider store={createReduxStore()}>
        <BrowserRouter>
          <Switch>
            {COMPONENT_PATHS.map(({ path, Component }) => (
              <Route path={path} exact key={path}>
                <Suspense fallback={<div>Loading...</div>}>
                  <Component />
                </Suspense>
              </Route>
            ))}
            {SECURED_COMPONENT_PATHS.map(({ path, Component }) => (
              <Route path={path} exact key={path}>
                <Suspense fallback={<div>Loading...</div>}>
                  <Component />
                </Suspense>
              </Route>
            ))}
            <Redirect to="/login" />
          </Switch>
        </BrowserRouter>
      </StoreProvider>
    </StrictMode>
  );
}

export default App;
