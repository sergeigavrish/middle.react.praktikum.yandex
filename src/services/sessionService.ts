import { IUser } from "../models/interfaces/IUser";

export const getIsAuthorized = (): boolean | null => {
  const data = sessionStorage.getItem('isAuthorized');
  if (data !== null) {
    return JSON.parse(data);
  }
  return data;
};

export const setIsAuthorized = () => {
  sessionStorage.setItem('isAuthorized', JSON.stringify(true));
};

export const setUserData = (user: IUser) => {
  sessionStorage.setItem('user', JSON.stringify(user));
};

export const getUserData = (): IUser | null => {
  const data = sessionStorage.getItem('user');
  if (data !== null) {
    return JSON.parse(data);
  }
  return data;
};
