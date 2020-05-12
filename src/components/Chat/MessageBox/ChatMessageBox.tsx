import React, { Component, ChangeEvent, FormEvent } from 'react';

import { IChatMessageBoxProps } from './IChatMessageBoxProps';
import { IChatMessageBoxState } from './IChatMessageBoxState';

import './ChatMessageBox.css';

export class ChatMessageBox extends Component<IChatMessageBoxProps, IChatMessageBoxState> {
  constructor(props: IChatMessageBoxProps) {
    super(props);
    this.state = {
      content: '',
    };
  }

  private onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    this.setState(() => ({ content: value }));
  }

  private onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.submit();
  }

  private onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      this.submit();
    }
  }

  private submit() {
    const { content } = this.state;
    const { onSend } = this.props;
    onSend(content);
    this.setState(() => ({ content: '' }));
  }

  render() {
    const { content } = this.state;
    return (
      <div className="message-box-wrap">
        <form onSubmit={this.onSubmit} className="message-box">
          <label className="message-box-label" htmlFor="control">
            <textarea className="message-box-control" id="control" value={content} onChange={this.onChange} onKeyDown={this.onKeyDown} />
          </label>
          <button type="submit">SEND</button>
        </form>
      </div>
    );
  }
}
