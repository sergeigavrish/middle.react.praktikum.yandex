import { IUser } from '../../../interfaces/IUser';

export interface IMockUser extends IUser {
  password?: string;
}
