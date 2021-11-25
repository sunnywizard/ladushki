/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import Type from 'prop-types';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import { CheckBox } from 'arui-feather/checkbox';
import moment from 'moment';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import './style.scss';
// import { Link } from 'react-router-dom';
// import ru from 'date-fns/locale/ru';
// import Modal from '../../../components/common/modal';
// import closeBtn from '../../../theme/images/closeButtonRed.svg';
// import ConfirmDialog from '../confirmDialog';
import UseFilial from '../../../core/connectors/filial';
import UseMessage from '../../../core/connectors/message';
// import Loader from '../../../components/common/loader';


const RecordsWrite = ({
  // filialId,
  // onOk,
  records,
  name01,
  address01,
  // getRecords,
  // deleteRecord,
  // history,
  // ...props
}) => {
  // const [doctorId, setDoctorId] = useState(-1);
  // const [recordDate, setRecordDate] = useState(undefined);
  // const [recordList, setRecordList] = useState(undefined);
  // const [isOpen, setIsOpen] = useState(false);
  // const [recordToDelete, setRecordToDelete] = useState(null);
  // const [isActiveRecords, setIsActiveRecords] = useState(true);

  // useEffect(() => {
  //   props.getDoctors(filialId);
  // }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     getRecords(filialId, true);
  //   }, 60000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  // useEffect(() => {
  //   getFilteredRecords();
  // }, [records, doctorId, recordDate, isActiveRecords]);

  // const getFilteredByDateRecords = () => {
  //   let result = [];
  //   if (records) {
  //     result = records.filter((record) => {
  //       const recordTime = moment(record.start, 'DD.MM.YYYY HH:mm');

  //       const yesterday = moment()
  //         .subtract(1, 'day')
  //         .endOf('day');

  //       if (isActiveRecords) {
  //         return recordTime.isAfter(yesterday);
  //       } 
  //       return recordTime.isBefore(moment().startOf('day'));
        
  //     });
  //   }
  //   return result;
  // };

  // const getFilteredRecords = () => {
  //   let list = getFilteredByDateRecords();
  //   if (doctorId !== -1) {
  //     list = list.filter((item) => item.doctorId === doctorId);
  //   }
  //   if (recordDate) {
  //     const dt = moment(recordDate).startOf('day');
  //     list = list.filter((item) => moment(item.start, 'DD.MM.YYYY HH:mm')
  //       .startOf('day')
  //       .isSame(dt, 'day')
  //     );
  //   }
  //   setRecordList(list);
  // };

  // const startDeleteRecord = (e, record) => {
  //   record.deleted = true;
  //   e.preventDefault();
  //   setRecordToDelete(record);
  //   setIsOpen(true);
  // };

  // const deleteEventRecord = () => {
  //   deleteRecord(recordToDelete.id);
  //   setIsOpen(false);
  // };

  const [sendEmail, setSendEmail] = useState(false);
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [touchedEmail, setTouchedEmail] = useState(false);
  
  const validateEmail = (email) => {
    setValidEmail(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email));
  };
  const [sendRecordMessage] = useState(undefined);
  const onOk = (data) => {
    console.log('----onOK=====');
    if (data) {
      console.log('----IF  onOK=====');
      const record = {
        date: records[records.length - 1].start,
        doctor: records[records.length - 1].doctor,
        service: records[records.length - 1].service,
        // price: this.state.servicePrice,
        name: name01,
        address: address01,
        email: data,
      };
      // this.props.sendRecordMessage(record);

      sendRecordMessage(record);

    }
    // this.setState({
    //   showDoneDialog: false,
    // });
    // document.body.style.overflowY = '';
    // document.body.style.paddingRight = '';
    // this.props.history.push('/');
  };

    console.log('----props.filial.records=====', records);
  return (
    <>
      {/* {console.log('RECORD=====', records[records.length - 1])} */}
      
      <section className="section section_fullwidth1">
        <GridRow>
          <GridCol
            width={{ mobile: 6, tablet: 4, desktop: 4 }} 
            className=""
          >
            <p style={{ color: '#57AE47', fontSize: '16px' }}>Дата/Время</p>
          </GridCol>
          <GridCol
            width={{ mobile: 6, tablet: 8, desktop: 8 }} 
            className=""
          >
            {records[records.length - 1].start}
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
            {records[records.length - 1].doctor}
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
            {records[records.length - 1].service}
          </GridCol>
        </GridRow>

        <div className="contact-media-s20" />
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} style={{ padding: '5px 0px' }}>
            <div className="done-email">
              <CheckBox
                className="done-checkbox"
                text="Отправить на Email"
                size="m"
                checked={sendEmail}
                onChange={(isChecked) => setSendEmail(isChecked)}
                theme="alfa-on-white"
              />
            </div>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 8, desktop: 8 }} style={{ padding: '5px 0px' }}>
            {/* <div className="done-email"> */}
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
            {/* </div> */}
          </GridCol>
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
              console.log('----onClick=====');
              if (sendEmail) {
                console.log('----IF onClick=====');
                onOk(email);
              } else {
                // onOk();
                document.location.assign('/');
              }
            }}
          >
            ОK
          </button>
        </div>
        <div className="contact-media-s20" />
      </section>  

      {/* <p className="cell-date">{records[records.length - 1].start}</p>
      <p className="cell-name">
        <div>{records[records.length - 1].doctor}</div>
      </p>
      <p className="cell-name">{records[records.length - 1].name}</p>
      <p className="cell-phone">{records[records.length - 1].phone}</p>
      <p className="cell-service">{records[records.length - 1].service}</p> */}
    </>
  );
};

// export default UseFilial(RecordsWrite);

RecordsWrite.propTypes = {
  // filial: Type.func.isRequired,
  // history: Type.oneOfType([Type.func, Type.object, Type.string]).isRequired,
  name01: Type.string.isRequired,
  address01: Type.string.isRequired,
  // getRecords: Type.func.isRequired,
  // sendRecordMessage: Type.func.isRequired,
  // sendRecordMessage: Type.oneOfType([Type.string, Type.object]).isRequired,
  // storeRecord: Type.func.isRequired,
  records: Type.oneOfType([Type.string, Type.array]).isRequired,
};

export default UseMessage(UseFilial(RecordsWrite));
