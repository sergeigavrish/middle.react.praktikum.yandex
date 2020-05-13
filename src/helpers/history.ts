import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export function navigate(location: string) {
  history.push(location);
}
