import React, { ReactNode, FunctionComponent } from 'react';

import './ChatMessageWrapper.css';

interface ChatMessageWrapperProps {
  className?: string;
  children: ReactNode;
}

const ChatMessageWrapper: FunctionComponent<ChatMessageWrapperProps> = ({
  className,
  children,
}: ChatMessageWrapperProps) => (
  <div className={className}>
    {children}
  </div>
);

ChatMessageWrapper.defaultProps = {
  className: 'message-wrap',
};

export default ChatMessageWrapper;
