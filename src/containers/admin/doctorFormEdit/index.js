/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';

// const DoctorForm = ({ onSave, onCancel, service, specList, handleClose, onClose }) => {
const DoctorForm = ({ onSave, specList, handleClose, schedule }) => {

  const [name, setName] = useState('');
  const [specId, setSpec] = useState(-1);
  const [modalName, setModalName] = useState('');
  // const daysOfWeek = [];

  console.log('ФИО *****', schedule.doctor.name);

  const handleSave = () => {
    const result = {
      filialId: 1,
      specId,
      name,
      businessHours: [{ daysOfWeek: [1, 2, 3, 4, 5, 6], startTime: '9:00', endTime: '18:00' }],
    };
    onSave(result);
  };

  return (
    <>
      <div className="contact-media-s30" />
      <div style={{ textAlign: 'center' }}>
        <span className="schedule__header" style={{ textAlign: 'center', color: '#57AE47' }}>
          <strong>{schedule.doctor.name}</strong>
        </span>
      </div>
      <div className="contact-media-s20" />
      <GridRow style={{ paddingLeft: '20px' }} gutter={{ mobile: 24, tablet: 24, desktop: 24 }}>
        <GridCol
          width={{ mobile: 12, tablet: 12, desktop: 12 }} 
          className="text-center"
        >
          <input  
            onChange={(e) => setName(e.target.value)}
            // placeholder="Введите ФИО"
            placeholder={schedule.doctor.name}
            className="admin-select"
            style={{ textAlign: 'left' }}
          />
        </GridCol>

      </GridRow>

      <GridRow style={{ paddingTop: '20px', paddingLeft: '20px' }} gutter={{ mobile: 24, tablet: 24, desktop: 24 }}>
        {/* <div className="confirm-buttons record-list-buttons"> */}
        <GridCol
          width={{ mobile: 6, tablet: 6, desktop: 6 }} 
          className="text-center"
        >
          <button
          // className="record-list-button"
            className="button button_secondary"
            onClick={handleSave}
            type="button"
          >
            Сохранить
          </button>
          {/* &nbsp;&nbsp; */}
        </GridCol>
        <GridCol
          width={{ mobile: 6, tablet: 6, desktop: 6 }} 
          className="text-center"
        >
          <button 
          // className="record-list-button" 
            className="button button_cancel" 
            style={{ fontSize: '18px' }}
            type="button" 
            // onClick={onCancel}
            onClick={handleClose}
          >
            Отмена
          </button>
        </GridCol>
        {/* </div> */}
      </GridRow>
      <div className="contact-media-s30" />
      {/* </div> */}
    </>
  );
};

export default DoctorForm;
