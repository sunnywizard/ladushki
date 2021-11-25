/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import Select from 'arui-feather/select';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import './style.scss';

const ServiceAssignDoctorDialog = ({ onSave, onCancel, doctors, service }) => {
  const [selectedDoctorIds, setSelectedDoctorIds] = useState([]);

  const handleSave = () => {
    const result = {
      serviceId: service.id,
      doctors: selectedDoctorIds,
    };
    onSave(result);
  };

  const filteredDoctors = doctors.filter(
    (doc) => doc.specs.data.find((spec) => +spec.id === +service.specId) !== undefined,
  );

  const selectedDoctors = filteredDoctors.filter(
    (doc) => doc.services.data.find((svc) => svc.id === +service.id) !== undefined,
  );

  if (selectedDoctors.length > 0 && selectedDoctorIds.length === 0) {
    const ids = selectedDoctors.map((item) => item.id);
    setSelectedDoctorIds(ids);
  }

  const options = filteredDoctors.map((doc) => ({
    value: doc.id,
    text: doc.name,
  }));

  return (
    <div className="service-dialog-container" style={{ textAlign: 'center' }}>
      {/* <p>{service.name}</p> */}
      <span className="schedule__header" style={{ color: '#57AE47' }}>
        <strong>{service.name}</strong>
      </span>
      <div className="contact-media" />
      <Select
        placeholder="Выберите одного или несколько докторов"
        mode="check"
        options={options}
        onChange={(values) => setSelectedDoctorIds(values)}
        value={selectedDoctorIds}
      />

      <GridRow style={{ paddingTop: '20px', paddingLeft: '20px' }} gutter={{ mobile: 24, tablet: 24, desktop: 24 }}>
        <GridCol
          width={{ mobile: 12, tablet: 6, desktop: 6 }} 
          className="text-center"
        >
          {/* <div className="confirm-buttons record-list-buttons"> */}
          <button
          // className="record-list-button"
            className="button button_secondary"
            onClick={handleSave}
            type="button"          
            disabled={selectedDoctorIds.length === 0}
          >
            Сохранить
          </button>
          {/* &nbsp;&nbsp; */}
        </GridCol>
        <GridCol
          width={{ mobile: 12, tablet: 6, desktop: 6 }} 
          className="text-center"
        >
          <button 
          // className="record-list-button" 
            className="button button_cancel" 
            style={{ fontSize: '18px' }}
            type="button" 
            onClick={onCancel}
          >
            Отмена
          </button>
          {/* </div> */}
        </GridCol>
      </GridRow>
      <div className="contact-media-s20" />
    </div>
  );
};

export default ServiceAssignDoctorDialog;
