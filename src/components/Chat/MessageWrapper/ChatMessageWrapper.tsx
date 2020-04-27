import React from 'react';

import './ChatMessageWrapper.css';

interface ChatMessageWrapperProps {
  className?: string;
  children: React.ReactNode;
}

const ChatMessageWrapper: React.FunctionComponent<ChatMessageWrapperProps> = ({
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
