import { IUser } from '../../../models/interfaces/IUser';

export interface IMockUser extends IUser {
  password?: string;
}
