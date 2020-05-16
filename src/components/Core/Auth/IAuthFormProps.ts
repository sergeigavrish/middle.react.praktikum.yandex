import { IAuthData } from '../../../interfaces/IAuthData';
import { AuthType } from '../../../enums/AuthType';

export interface IAuthFormProps {
  onSubmit(authData: IAuthData): void;
  loginPattern: RegExp;
  passwordPattern: RegExp;
  type: AuthType;
}
