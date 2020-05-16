import React, { FC } from 'react';
import { Route } from 'react-router-dom';

import { MainLayout } from '../../Main/Layout/MainLayout';
import { Auth } from '../Auth/Auth';
import { ProtectedRoute } from '../../../shared/ProtectedRoute/ProtectedRoute';

import { signUp, signIn } from '../../../services/authSevice';
import { NAME_PATTERN } from '../../../constants/NAME_PATTERN';
import { PASSWORD_PATTERN } from '../../../constants/PASSWORD_PATTERN';
import { Routes } from '../../../enums/Routes';
import { AuthType } from '../../../enums/AuthType';

import './App.css';

export const App: FC = () => {
  return (
    <div className="App">
      <ProtectedRoute exact path={Routes.HOME} component={MainLayout} />
      <ProtectedRoute path={Routes.CHAT} component={MainLayout} />
      <Route path={Routes.LOGIN}>
        <Auth onSubmit={signIn} loginPattern={NAME_PATTERN} passwordPattern={PASSWORD_PATTERN} type={AuthType.SIGN_IN} />
      </Route>
      <Route path={Routes.REGISTER}>
        <Auth onSubmit={signUp} loginPattern={NAME_PATTERN} passwordPattern={PASSWORD_PATTERN} type={AuthType.SIGN_UP} />
      </Route>
    </div>
  );
};
