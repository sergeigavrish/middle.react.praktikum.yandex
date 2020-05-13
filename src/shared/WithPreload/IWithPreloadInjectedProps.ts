import { IWithPreloadSelfProps } from './IWithPreloadSelfProps';

export interface IWithPreloadInjectedProps<T> extends IWithPreloadSelfProps {
  data: T;
}
