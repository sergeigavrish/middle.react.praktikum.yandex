import React, { FC } from 'react';

import { MainContentLayoutWithRouterAndQueryAndPreload } from './Layout/MainContentLayout';
import { ChatEmptyPage } from '../../Chat/EmptyPage/ChatEmptyPage';
import { WithQuery } from '../../../shared/WithQueryFromUrl/WithQuery';

import { UrlQueryParams } from '../../../models/types/UrlQueryParams';
import { IWithQueryFromUrlInjectedProps } from '../../../shared/WithQueryFromUrl/IWithQueryFromUrlInjectedProps';

import './MainContent.css';

export const MainContent: FC<IWithQueryFromUrlInjectedProps> = ({ dataId }: IWithQueryFromUrlInjectedProps) => (
  <div className={`content ${dataId ? 'displayed' : 'hidden'}`}>
    {
      dataId
        ? <MainContentLayoutWithRouterAndQueryAndPreload />
        : <ChatEmptyPage />
    }
  </div>
);

export const MainContentWithQuery = WithQuery(UrlQueryParams.chatId)(MainContent);
