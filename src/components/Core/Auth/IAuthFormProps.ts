import { IAuthData } from '../../../models/interfaces/IAuthData';
import { AuthType } from '../../../models/types/AuthType';

export interface IAuthFormProps {
  onSubmit(authData: IAuthData): void;
  loginPattern: RegExp;
  passwordPattern: RegExp;
  type: AuthType;
}
