import { IAuthData } from '../../../models/interfaces/IAuthData';

export interface IAuthFormProps {
  onSubmit(authData: IAuthData): void;
  loginPattern: RegExp;
  passwordPattern: RegExp;
  action: string;
}
