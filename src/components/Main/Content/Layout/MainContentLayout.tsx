import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { ChatHistory } from '../../../Chat/History/ChatHistory';
import { WithQuery } from '../../../../shared/WithQueryFromUrl/WithQuery';
import { WithPreload } from '../../../../shared/WithPreload/WithPreload';
import { ChatMessageBox } from '../../../Chat/MessageBox/ChatMessageBox';

import { MessageList } from '../../../../models/types/MessageList';
import { UrlQueryParams } from '../../../../models/types/UrlQueryParams';

import { getChatHistoryByChatId, sendMessagetoChat } from '../../../../services/chatService';
import { isTextMessageChained } from '../../../../helpers/utils';
import { navigate } from '../../../../helpers/history';
import { IWithPreloadInjectedProps } from '../../../../shared/WithPreload/IWithPreloadInjectedProps';

export class MainContentLayout extends Component<IWithPreloadInjectedProps<MessageList>, { messageList: MessageList }> {
  constructor(props: IWithPreloadInjectedProps<MessageList>) {
    super(props);
    this.state = {
      messageList: props.data,
    };
  }

  private onChatClosed = () => {
    navigate('/');
  }

  private onSend = (content: string) => {
    const { dataId } = this.props;
    if (!content.trim().length) {
      return;
    }
    sendMessagetoChat(dataId, content)
      .then((res) => {
        this.setState((prevState) => {
          const { messageList } = prevState;
          const lastMessage = messageList[messageList.length - 1];
          const message = isTextMessageChained(res, lastMessage);
          return {
            ...prevState,
            messageList: messageList.concat(message),
          };
        });
      });
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
