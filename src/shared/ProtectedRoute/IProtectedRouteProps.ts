import { ComponentType } from 'react';

export interface IProtectedRouteProps {
  component: ComponentType;
  path: string;
  exact?: boolean;
}
