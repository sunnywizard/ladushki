/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';

// const DoctorForm = ({ onSave, onCancel, service, specList, handleClose, onClose }) => {
const DoctorForm = ({ onSave, specList, handleClose }) => {

  const [name, setName] = useState('');
  const [specId, setSpec] = useState(-1);
  const [modalName, setModalName] = useState('');
  // const daysOfWeek = [];

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
      {/* <div className="service-dialog-container"> */}
      {/* <h4 className="text-center">Добавить врача</h4> */}
      <div className="contact-media-s30" />
      <GridRow style={{ paddingLeft: '20px' }} gutter={{ mobile: 24, tablet: 24, desktop: 24 }}>
        <GridCol
          width={{ mobile: 12, tablet: 6, desktop: 6 }} 
          className=""
        >

          <input  
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите ФИО"
            className="admin-select"
            style={{ textAlign: 'left' }}
          />
        </GridCol>
        <GridCol
          width={{ mobile: 12, tablet: 6, desktop: 6 }} 
          className=""
        >
        
          <select
            name="specId"
            id="spec"
            className="admin-select"
            value={specId}
            onChange={(e) => {
              const id = +e.target.value;
              setSpec(id);
            }}
          >
            <option value="-1">Все специализации</option>
            {specList
            && specList.map((spec) => (
              // <option key={spec.id} value={spec.id}>
              <option key={spec.id} value={spec.id}>
                {spec.specName}
              </option>
            ))}
          </select>
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
