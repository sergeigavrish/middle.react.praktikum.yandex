import { RouteProps } from 'react-router-dom';

import { IWithQueryFromUrlInjectedProps } from './IWithQueryFromUrlInjectedProps';

export type WithQueryFromUrlProps<P> = RouteProps & Omit<P, keyof IWithQueryFromUrlInjectedProps>;
