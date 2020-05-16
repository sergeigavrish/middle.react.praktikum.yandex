import React, { Component, RefObject } from 'react';

import { ChatServiceMessage } from '../ServiceMessage/ChatServiceMessage';
import { ChatTextMessage } from '../TextMessage/ChatTextMessage';

import { IChatHistoryProps } from './IChatHistoryProps';
import { MessageTypes } from '../../../enums/MessageTypes';

import './ChatHistory.css';

export class ChatHistory extends Component<IChatHistoryProps> {
  static defaultProps = {
    messageList: [],
  };

  private messageListContainerRef: RefObject<HTMLDivElement>;
  private lastMessageRef: RefObject<HTMLDivElement>;

  constructor(props: IChatHistoryProps) {
    super(props);
    this.messageListContainerRef = React.createRef();
    this.lastMessageRef = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  private scrollToBottom() {
    const bottom = this.lastMessageRef.current?.getBoundingClientRect().bottom || 0;
    if (this.messageListContainerRef.current) {
      const { scrollTop } = this.messageListContainerRef.current;
      this.messageListContainerRef.current.scrollTo(0, scrollTop + bottom);
    }
  }

  render() {
    const { messageList } = this.props;
    return (
      <div ref={this.messageListContainerRef} className="message-history">
        {messageList.map((message, i) => {
          let ref;
          if (i === messageList.length - 1) {
            ref = this.lastMessageRef;
          }
          switch (message.type) {
            case MessageTypes.Service:
              return <ChatServiceMessage key={message.guid} {...message} />;
            case MessageTypes.Text:
            default:
              return <ChatTextMessage key={message.guid} forwardedRef={ref} {...message} />;
          }
        })}
      </div>
    );
  }
}
