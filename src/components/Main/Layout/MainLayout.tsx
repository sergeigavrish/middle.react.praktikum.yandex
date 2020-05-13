import React, { FC } from 'react';

import { MainSidebarWithQuery } from '../Sidebar/MainSidebar';
import { MainContentWithQuery } from '../Content/MainContent';

import './MainLayout.css';

export const MainLayout: FC = () => (
  <main className="layout">
    <MainSidebarWithQuery />
    <MainContentWithQuery />
  </main>
);
