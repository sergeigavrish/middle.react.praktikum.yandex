import { createHashHistory } from 'history';

export const history = createHashHistory();

export function navigate(location: string) {
  history.push(location);
}
