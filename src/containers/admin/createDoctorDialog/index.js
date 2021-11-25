import React, { useEffect, useState } from 'react';

const CreateDoctorDialog = ({ onOk, onCancel }) => {
  const [doctorName, setDoctorName] = useState('');
  let inputRef;

  useEffect(() => {
    if (inputRef) {
      inputRef.focus();
    }
  }, []);

  return (
    <div className="container">
      <span className="dialog-header">Добавить специалиста</span>
      <br />
      <br />
      <input
        ref={input => {
          inputRef = input;
        }}
        type="text"
        placeholder="Введите фио специалиста"
        className="textbox"
        value={doctorName}
        onChange={e => setDoctorName(e.target.value)}
        onKeyPress={e => {
          e.key === 'Enter' && onOk(doctorName);
        }}
      />
      <div className="confirm-buttons">
        <button
          className="button button_secondary button_med"
          onClick={() => onOk(doctorName)}
          type="button"
        >
          Ок
        </button>
        &nbsp;&nbsp;&nbsp;
        <button className="button button_cancel" type="button" onClick={onCancel}>
          Отмена
        </button>
      </div>
    </div>
  );
};

export default CreateDoctorDialog;
