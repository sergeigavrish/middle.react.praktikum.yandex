import { IAuthData } from '../../../interfaces/IAuthData';

export interface IAuthFormState extends IAuthData {
  login: string;
  password: string;
  errors: IAuthData;
}
