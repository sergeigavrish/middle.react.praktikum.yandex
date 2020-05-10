import { IWithQueryFromUrlInjectedProps } from './IWithQueryFromUrlInjectedProps';
import { WithQueryFromUrlProps } from './WithQueryFromUrlProps';

export type WithQueryChildProps<P> = P & Omit<WithQueryFromUrlProps<P>, keyof IWithQueryFromUrlInjectedProps>;
