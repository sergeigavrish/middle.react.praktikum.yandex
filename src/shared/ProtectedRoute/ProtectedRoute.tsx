import React, { FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { IProtectedRouteProps } from './IProtectedRouteProps';

import { getIsAuthorized } from '../../services/sessionService';

export const ProtectedRoute: FC<IProtectedRouteProps> = ({ component: Component, ...rest }: IProtectedRouteProps) => (
  <Route
    {...rest}
    render={(props: RouteProps) => (
      getIsAuthorized()
        ? <Component {...props} />
        : <Redirect to="/login" />
    )}
  />
);
