import React, { FC } from 'react';
import { Route, RouteComponentProps, Redirect } from 'react-router-dom';

import { IProtectedRouteProps } from './IProtectedRouteProps';

import { getIsAuthorized } from '../../services/sessionService';

export const ProtectedRoute: FC<IProtectedRouteProps> = ({ component: Component, ...rest }: IProtectedRouteProps) => (
  <Route
    {...rest}
    render={(props: RouteComponentProps) => (
      getIsAuthorized()
        ? <Component {...props as any} />
        : <Redirect to="/login" />
    )}
  />
);
