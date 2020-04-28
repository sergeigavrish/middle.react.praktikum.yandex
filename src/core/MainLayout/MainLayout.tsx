import React from 'react';

import './MainLayout.css';

interface IMainLayoutProps {
  sidebar: React.ReactNode;
  content?: React.ReactNode;
}

const MainLayout: React.FunctionComponent<IMainLayoutProps> = ({
  sidebar,
  content,
}: IMainLayoutProps) => (
  <main className="layout">
    <aside className="layout__sidebar">{sidebar}</aside>
    <div className="layout__content">{content}</div>
  </main>
);

export default MainLayout;
