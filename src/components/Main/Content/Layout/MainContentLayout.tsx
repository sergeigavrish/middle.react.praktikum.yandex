import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { ChatHistory } from '../../../Chat/History/ChatHistory';

import { IMainContentLayoutProps } from './IMainContentLayoutProps';
import { ChatMessageBox } from '../../../Chat/MessageBox/ChatMessageBox';
import { MessageList } from '../../../../models/types/MessageList';
import { WithPreload } from '../../../../shared/WithPreload/WithPreload';
import { getChatHistoryByChatId, sendMessagetoChat } from '../../../../services/chatService';
import { WithQuery } from '../../../../shared/WithQueryFromUrl/WithQuery';
import { UrlQueryParams } from '../../../../models/types/UrlQueryParams';
import { MessageTypes } from '../../../../models/enums/MessageTypes';
import { ITextMessage } from '../../../../models/interfaces/IMessage';
import { MOCK_USER } from '../../../../models/constants/admin';

export class MainContentLayout extends Component<IMainContentLayoutProps, { messageList: MessageList }> {
  constructor(props: IMainContentLayoutProps) {
    super(props);
    this.state = {
      messageList: props.data,
    };
  }

  private onChatClosed = () => {
    const { history } = this.props;
    history.push('/');
  }

  private onSend = (content: string) => {
    const { dataId } = this.props;
    const { messageList } = this.state;
    const lastMessage = messageList[messageList.length - 1];
    let isChained: boolean;
    if (lastMessage.type !== MessageTypes.Service) {
      isChained = lastMessage.author.guid === MOCK_USER.guid;
    } else {
      isChained = false;
    }
    const message: ITextMessage = {
      guid: uuid(),
      timestamp: new Date().getTime(),
      author: MOCK_USER,
      content,
      type: MessageTypes.Text,
      isChained,
    };
    this.setState((prevState) => ({
      ...prevState,
      messageList: prevState.messageList.concat(message),
    }));
    sendMessagetoChat(dataId, message);
  }

  render() {
    const { messageList } = this.state;
    return (
      <>
        <button className="close-chat-button button-reset" onClick={this.onChatClosed} type="button">X</button>
        <ChatHistory messageList={messageList} />
        <ChatMessageBox onSend={this.onSend} />
      </>
    );
  }
}

const withPreload = WithPreload(getChatHistoryByChatId)(MainContentLayout);
const withQuery = WithQuery(UrlQueryParams.chatId)(withPreload);
export const MainContentLayoutWithRouterAndQueryAndPreload = withRouter(withQuery);
