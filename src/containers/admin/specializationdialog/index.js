/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import './style.scss';

const SpecializationDialog = ({ onSave, onCancel, data = null}) => {
  const [filialId] = useState(filialId);
  const [name, setSpecName] = useState('');


  const handleSave = () => {
    let errors = 0;

    if (errors === 0) {
      const data = {
        name,
        filialId : 1,
      };
      onSave(data);
    }
  };
  return (
    <div className="service-dialog-container">
      <div className="contact-media-s20" />  
      <div className="fields" style={{ textAlign: 'left' }}>
        <div className="contact-media-s20" />  
        <div className="service__input">
          <label htmlFor="specName" style={{ textAlign: 'left' }}>Название специализации</label>
          <input
            type="text"
            id="specName"
            placeholder="Введите название специализации"
            // className="admin-select"
            style={{ textAlign: 'left' }}
            // value={serviceName}
            value={name}
            autoComplete="off"
            // onChange={e => setServiceName(e.target.value)}
            onChange={e => setSpecName(e.target.value)}
          />
        </div>
        {/* <div className="service__input">
          <label htmlFor="serviceCode" style={{ textAlign: 'left' }}>Код</label>
          <input
            type="text"
            id="serviceCode"
            value={serviceCode}
            autoComplete="off"
            onChange={e => setServiceCode(e.target.value)}
          />
        </div> */}
        {/* <div className="service__input">
          <label htmlFor="serviceDuration" style={{ textAlign: 'left' }}>Время</label>
          <input
            type="number"
            step="1"
            min="10"
            id="serviceDuration"
            value={serviceDuration}
            onChange={e => setServiceDuration(e.target.value)}
          />
        </div> */}
        {/* <div className="service__input">
          <label htmlFor="servicePrice" style={{ textAlign: 'left' }}>Стоимость</label>
          <input
            type="number"
            min="1"
            id="servicePrice"
            value={servicePrice}
            onChange={e => setServicePrice(e.target.value)}
          />
        </div> */}
      </div>
      <div className="contact-media-s30" />  
      <div style={{ textAlign: 'center' }} className="">
        {/* <div className="button button_secondary button_med"> */}
        {/* <button className="record-list-button" type="button" onClick={handleSave}> */}
        <button className="button button_secondary button_med" type="button" onClick={handleSave}>
          Сохранить
        </button>
        &nbsp;&nbsp;
        {/* <button className="record-list-button" type="button" onClick={onCancel}> */}
        <button 
          // className="button button_secondary button_med" 
          className="button button_cancel" 
          style={{ fontSize: '18px' }}
          type="button" 
          onClick={onCancel}
        >
          Отмена
        </button>
      </div>
      <div className="contact-media-s20" />  
    </div>
  );
};

export default SpecializationDialog;
