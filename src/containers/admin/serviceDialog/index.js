import React, { useState } from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import './style.scss';

const ServiceDialog = ({ onSave, onCancel, specs, doctors }) => {
  let serviceName1 = [];
  const [specId, setSpec] = useState(-1);
  let [serviceName, setServiceName] = useState('');
  const [doctorName] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [serviceCode, setServiceCode] = useState('');
  const [serviceDuration, setServiceDuration] = useState('20');
  const [servicePrice, setServicePrice] = useState(1);

  const handleSave = () => {
    let errors = 0;

    if (specId === -1) {
      alert('Выберите специализацию');
      errors++;
    }
    if (!serviceName) {
      alert('Укажите название услуги');
      errors++;
    }
    if (!serviceCode) {
      alert('Укажите код услуги');
      errors++;
    }

    if (errors === 0) {
      for (let i = 0; i < doctors.length; i += 1) { 
        if (doctors[i].id === doctorId) {
          serviceName1 = doctors[i].name;
          serviceName = `врач ${serviceName1}: ${serviceName}`;
        }
      }

      const data = {
        specId,
        serviceName,
        serviceCode,
        serviceDuration,
        servicePrice,
        doctorName,
        doctorId,
      };
      onSave(data);
    }
  };

  return (
    <>
      <div className="contact-media-s30" />  
      <GridRow>
        <GridCol
          width={{ mobile: 12, tablet: 4, desktop: 4 }} 
          style={{ padding: '5px 10px' }}
          className=""
        >
          <span style={{ fontSize: '14px' }}>по</span>
&ensp;
          <select
            className="admin-select"
            onChange={(e) => {
              const id = +e.target.value;
              setSpec(id);
            }}
            value={specId}
          >
            <option value="-1">Все специализации</option>
            {specs
            && specs.map((spec) => (
              <option key={spec.id} value={spec.id}>
                {spec.specName}
              </option>
            ))}
          </select>
        </GridCol>
        <GridCol
          width={{ mobile: 12, tablet: 5, desktop: 5 }} 
          style={{ padding: '5px 10px' }}
          className=""
        >
          <span style={{ fontSize: '14px' }}>для врача:</span>
&ensp;
          <select
            className="admin-select"
            onChange={(e) => {
              const id = +e.target.value;
              setDoctorId(id);
            }}
            value={doctorId}
          >
            <option value="-1">Все врачи</option>
            {doctors
            && doctors.map((doctor) => (
              <option
                key={doctor.id}
                value={doctor.id}
                onChange={(e) => {
                  const id = +e.target.value;
                  setDoctorId(id);
                }}
              >
                {doctor.name}
              </option>
            ))}

          </select>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }} style={{ padding: '5px 10px' }} />
      </GridRow>

      <div className="service-dialog-container">
        <div className="contact-media-s20" />  

        <div className="fields" style={{ textAlign: 'left' }}>
          <div className="contact-media-s20" />  
          <div className="service__input">
            <label htmlFor="serviceName" style={{ textAlign: 'left' }}>Название услуги</label>
            {console.log(`fdsfsfsdfsdf==${doctorId}`)}
            {/* {console.log(`8979459459==${doctorName}`)} */}
            <input
              type="text"
              id="serviceName"
              value={serviceName}
              autoComplete="off"
              onChange={(e) => setServiceName(e.target.value)}
            />
          </div>

          <div className="service__input">
            <label htmlFor="serviceCode" style={{ textAlign: 'left' }}>Код</label>
            <input
              type="text"
              id="serviceCode"
              value={serviceCode}
              autoComplete="off"
              onChange={(e) => setServiceCode(e.target.value)}
            />
          </div>
          <div className="service__input">
            <label htmlFor="serviceDuration" style={{ textAlign: 'left' }}>Время</label>
            <input
              type="number"
              step="1"
              min="10"
              id="serviceDuration"
              value={serviceDuration}
              onChange={(e) => setServiceDuration(e.target.value)}
            />
          </div>
          <div className="service__input">
            <label htmlFor="servicePrice" style={{ textAlign: 'left' }}>Стоимость</label>
            <input
              type="number"
              min="1"
              id="servicePrice"
              value={servicePrice}
              onChange={(e) => setServicePrice(e.target.value)}
            />
          </div>
        </div>
        <div className="contact-media-s30" />  

        {/* {serviceName = serviceName + '777'} */}
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
    </>
  );
};

export default ServiceDialog;
