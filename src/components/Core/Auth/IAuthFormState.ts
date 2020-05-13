import { IAuthData } from '../../../models/interfaces/IAuthData';

export interface IAuthFormState extends IAuthData {
  login: string;
  password: string;
  errors: IAuthData;
}
