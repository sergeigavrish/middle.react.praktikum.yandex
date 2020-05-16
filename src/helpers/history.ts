import { createHashHistory } from 'history';

import { Routes } from '../enums/Routes';

export const history = createHashHistory();

export function navigate(location: Routes) {
  history.push(location);
}
