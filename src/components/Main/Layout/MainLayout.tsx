import React, { FC } from 'react';
import { Route, RouteChildrenProps } from 'react-router-dom';

import { MainSidebarWithQuery } from '../Sidebar/MainSidebar';
import { MainContentWithQuery } from '../Content/MainContent';

import './MainLayout.css';

export const MainLayout: FC = () => (
  <main className="layout">
    <MainSidebarWithQuery />
    <Route
      path="/chat"
      // eslint-disable-next-line react/no-children-prop
      children={(props: RouteChildrenProps) => <MainContentWithQuery {...props} />}
    />
  </main>
);
