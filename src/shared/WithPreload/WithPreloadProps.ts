import { IWithPreloadSelfProps } from './IWithPreloadSelfProps';
import { IWithPreloadInjectedProps } from './IWithPreloadInjectedProps';

export type WithPreloadProps<P, T> = IWithPreloadSelfProps & Omit<P, keyof IWithPreloadInjectedProps<T>>;
