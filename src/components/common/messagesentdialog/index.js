import React from 'react';
import './style.scss';

const MessageSentDialog = ({ onOk, messageState }) => {
  if (messageState.sending) {
    return 'Отправка...';
  }

  const message = !messageState.error
    ? 'Ваше сообщение успешно отправлено!'
    : 'Не удалось отправить сообщение';
  return (
    <div className="container">
      <span className="dialog-header">{message}</span>
      <br />
      <br />

      <div className="confirm-buttons">
        <button className="button button_secondary button_med" onClick={onOk}>
          Ок
        </button>
      </div>
    </div>
  );
};

export default MessageSentDialog;
