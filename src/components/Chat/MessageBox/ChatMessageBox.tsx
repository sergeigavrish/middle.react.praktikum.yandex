import React, { Component, ChangeEvent, FormEvent } from 'react';

import { SendIcon } from '../../../shared/SendIcon/SendIcon';

import { IChatMessageBoxProps } from './IChatMessageBoxProps';
import { IChatMessageBoxState } from './IChatMessageBoxState';
import { ChatMessageBoxRows } from '../../../models/types/ChatMessageBoxRows';

import './ChatMessageBox.css';

export class ChatMessageBox extends Component<IChatMessageBoxProps, IChatMessageBoxState> {
  constructor(props: IChatMessageBoxProps) {
    super(props);
    this.state = {
      content: '',
      rows: ChatMessageBoxRows.MIN_ROWS,
    };
  }

  private onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    const rows = this.calculateSize(value);
    this.setState(() => ({ content: value, rows }));
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
    this.setState(() => ({ content: '', rows: ChatMessageBoxRows.MIN_ROWS }));
  }

  private calculateSize(value: string) {
    let rows = Math.max(value.split('\n').length, value.split('\r').length);
    rows = Math.max(rows, ChatMessageBoxRows.MIN_ROWS);
    rows = Math.min(rows, ChatMessageBoxRows.MAX_ROWS);
    return rows;
  }

  render() {
    const { content, rows } = this.state;
    return (
      <div className="message-box-wrap">
        <form onSubmit={this.onSubmit} className="message-box">
          <label className="message-box-label" htmlFor="control">
            <textarea className="message-box-control" id="control" rows={rows} value={content} onChange={this.onChange} onKeyDown={this.onKeyDown} />
          </label>
          <button type="submit" className="message-box-button button-reset">
            <SendIcon />
          </button>
        </form>
      </div>
    );
  }
}
