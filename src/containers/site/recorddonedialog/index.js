import React, { useState } from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Loader from '../../../components/common/loader';
import './style.scss';
import { CheckBox } from 'arui-feather/checkbox';

const RecordDoneDialog = ({ onOk, data }) => {
  const [sendEmail, setSendEmail] = useState(false);
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [touchedEmail, setTouchedEmail] = useState(false);
  const { date, doctor, service, address } = data;

  const validateEmail = (email) => {
    setValidEmail(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email));
  };
  
  return (
    <>
      {/* {this.props.filial.fetching && <Loader />} */}
      <section className="section section_fullwidth1">

        <h1 className="">Талон приема</h1>
        <GridRow>
          <GridCol
            width={{ mobile: 6, tablet: 4, desktop: 4 }} 
            className=""
          >
            <p style={{ color: '#57AE47', fontSize: '16px' }}>Дата/Время</p>
            
            {/* &ensp; */}
          </GridCol>
          <GridCol
            width={{ mobile: 6, tablet: 8, desktop: 8 }} 
            className=""
          >
            {date}
          </GridCol>
          <GridCol
            width={{ mobile: 6, tablet: 4, desktop: 4 }} 
            className=""
          >
            <p style={{ color: '#57AE47', fontSize: '16px' }}>ФИО специалиста</p>            
            
          </GridCol>
          <GridCol
            width={{ mobile: 6, tablet: 8, desktop: 8 }} 
            className=""
          >
            {doctor}
          </GridCol>
          <GridCol
            width={{ mobile: 6, tablet: 4, desktop: 4 }} 
            className=""
          >
            <p style={{ color: '#57AE47', fontSize: '16px' }}>Услуга</p>            
            
          </GridCol>
          <GridCol
            width={{ mobile: 6, tablet: 8, desktop: 8 }} 
            className=""
          >
            {service}
          </GridCol>
          <GridCol
            width={{ mobile: 6, tablet: 4, desktop: 4 }} 
            className=""
          >
            
            <p style={{ color: '#57AE47', fontSize: '16px' }}>Филиал</p>            
          </GridCol>
          <GridCol
            width={{ mobile: 6, tablet: 8, desktop: 8 }} 
            className=""
          >
            {address}
          </GridCol>                                
        </GridRow>

        <div className="contact-media-s20" />
        {/* <div className="done-container">
        <table className="tbl-done">
          <thead className="head-row">
            <tr>
              <th>Дата/Время</th>
              <th>ФИО специалиста</th>
              <th>Услуга</th>
              <th>Филиал</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="centered">{date}</td>
              <td>{doctor}</td>
              <td>{service}</td>
              <td>{address}</td>
            </tr>
          </tbody>
        </table> */}
        <GridRow>
          <div className="done-email">
            <CheckBox
              className="done-checkbox"
              text="Отправить на Email"
              size="m"
              checked={sendEmail}
              onChange={(isChecked) => setSendEmail(isChecked)}
              theme="alfa-on-white"
            />
            <input
              type="text"
              className={
            touchedEmail
              ? validEmail
                ? 'done-email-input'
                : 'done-email-input done-email-error'
              : 'done-email-input'
          }
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setTouchedEmail(true);
                validateEmail(e.target.value);
              }}
            />
          </div>

          {/* <button className="done-print">Распечатать</button> */}

          <p className="done-comment">
            В ближайшее время с вами свяжется наш специалист для подтверждения
            записи
          </p>
        </GridRow>
        <div className="done-buttons">
          <button
          // className="done-btn"
            className="button button_secondary button_med done-btn"
            type="button"
            onClick={() => {
              if (sendEmail) {
                onOk(email);
              } else {
                onOk();
              }
            }}
          >
            ОK
          </button>
        </div>
        <div className="contact-media-s20" />
      </section>        
      {/* </div> */}
    </>
  );
};

export default RecordDoneDialog;
