import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { UrlQueryParams } from '../../../models/types/UrlQueryParams';
import { WithQuery } from '../../../shared/WithQueryFromUrl/WithQuery';
import { ChatEmptyPage } from '../../Chat/EmptyPage/ChatEmptyPage';
import { MainContentLayout } from './Layout/MainContentLayout';

import { IMainContentProps } from './IMainContentProps';

import './MainContent.css';

export class MainContent extends Component<IMainContentProps> {
  private onChatClosed = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { param } = this.props;
    return (
      <div className={`content ${param ? 'displayed' : 'hidden'}`}>
        {
          param
            ? <MainContentLayout onChatClosed={this.onChatClosed} />
            : <ChatEmptyPage />
        }
      </div>
    );
  }
}

export const MainContentWithRouterAndQuery = WithQuery(UrlQueryParams.chatId)(withRouter(MainContent));
