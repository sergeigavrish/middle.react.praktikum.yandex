import React from 'react';
import { Route } from 'react-router-dom';

import { MainLayout } from './components/Main/Layout/MainLayout';
import { Auth } from './components/Core/Auth/Auth';
import { ProtectedRoute } from './shared/ProtectedRoute/ProtectedRoute';

import { signUp, signIn } from './services/authSevice';
import { NAME_PATTERN } from './models/constants/NAME_PATTERN';
import { PASSWORD_PATTERN } from './models/constants/PASSWORD_PATTERN';
import { resources } from './models/constants/resources';

import './App.css';

function App() {
  return (
    <div className="App">
      <ProtectedRoute exact path="/" component={MainLayout} />
      <ProtectedRoute path="/chat" component={MainLayout} />
      <Route path="/login">
        <Auth onSubmit={signIn} loginPattern={NAME_PATTERN} passwordPattern={PASSWORD_PATTERN} action={resources.auth.actions.signIn} />
      </Route>
      <Route path="/register">
        <Auth onSubmit={signUp} loginPattern={NAME_PATTERN} passwordPattern={PASSWORD_PATTERN} action={resources.auth.actions.signUp} />
      </Route>
    </div>
  );
}

export default App;
