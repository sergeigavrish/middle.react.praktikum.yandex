export interface IWithPreloadState<T> {
  isLoading: boolean;
  preloadedData?: T;
}
