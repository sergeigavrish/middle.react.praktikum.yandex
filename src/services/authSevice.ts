import { IAuthData } from '../models/interfaces/IAuthData';
import { mockService } from '../helpers/MockState/MockService';
import { setIsAuthorized, setUserData } from './sessionService';
import { navigate } from '../helpers/history';
import { Routes } from '../models/types/Routes';
import { IUser } from '../models/interfaces/IUser';

const handleResponse = (user: IUser) => {
  setIsAuthorized();
  setUserData(user);
  navigate(Routes.HOME);
};

export const signUp = (data: IAuthData) => {
  mockService.signUp(data)
    .then(handleResponse);
};

export const signIn = (data: IAuthData) => {
  mockService.signIn(data)
    .then(handleResponse);
};
