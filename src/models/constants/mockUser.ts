import { v4 as uuid } from 'uuid';

import { IUser } from '../interfaces/IUser';

import avatar from '../../logo.svg';

export const MOCK_USER: IUser = {
  guid: uuid(),
  name: 'MOCK_USER',
  avatar,
};
