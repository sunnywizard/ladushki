/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
// import React from 'react';
import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import UseSession from '../../../core/connectors/session';
import UseFilial from '../../../core/connectors/filial';
// import AuthService from '../../../core/services/auth';
import RecordsWrite from '../../../containers/admin/recordswrite';
// import Doctors from '../doctors';
// import Services from '../services';
// import Specialization from '../specialization';
// import { getFilial } from '../../../core/actions/filial';
// import FilialServices from '../../../core/services/filial';
import Loader from '../../../components/common/loader';
import RecordGood from '../../../theme/images/recordgood.jpg';
import './styles.scss';

function recOK(props) {

  // export default function recOK(props) {
 
  // this.state = { 
  //   filialId: undefined,
  //   doctorId: undefined,
  //   serviceId: undefined,
  //   servicePrice: undefined,
  //   dateTime: undefined,
  // };

  const [activePage, setActivePage] = useState('records');
  const [records, setRecords] = useState('');
  const [filial, setFilial] = useState('');

  useEffect(() => {
    setRecords(props.getRecords(1));
    setFilial(props.getFilial(1));
  }, []);

  // class Record {
  //  handleDoneOk = (data) => {
  //    if (data) {
  //      const record = {
  //        date: this.state.dateTime.format('DD.MM.YYYY HH:mm'),
  //        doctor: this.getDoctorName(this.state.doctorId),
  //        service: this.getService(this.state.doctorId, this.state.serviceId)
  //          .name,
  //        price: this.state.servicePrice,
  //        address: this.getAddress(this.state.filialId),
  //        email: data,
  //      };
  //      this.props.sendRecordMessage(record);
  //    }

  //    this.setState({
  //      showDoneDialog: false,
  //    });
  //    document.body.style.overflowY = '';
  //    document.body.style.paddingRight = '';
  //    this.props.history.push('/');
  //  };  
  // }

  // const inactivityTime = function foo() {
  //   let time;
  //   function logout() {
  //     document.location.href = '/';
  //   }
  //   function resetTimer() {
  //     clearTimeout(time);
  //     time = setTimeout(logout, 60000);
  //     // 1000 milliseconds = 1 second
  //     // console.log('120 сек хорошо*****');
  //   }

  //   window.onload = resetTimer;
  //   // DOM Events
  //   document.onload = resetTimer;
  //   document.onmousemove = resetTimer;
  //   document.onmousedown = resetTimer; // touchscreen presses
  //   document.ontouchstart = resetTimer;
  //   document.onclick = resetTimer; // touchpad clicks
  //   document.onkeypress = resetTimer;
  //   document.addEventListener('scroll', resetTimer, true); // improved; see comments
  // };

  // function onPageLoad() {
  //   inactivityTime(); 
  // }
  // // window.onload = onPageLoad();
  // document.onload = onPageLoad();

  // console.log('----props.filial.records=====', props);
  console.log('----props.filial777=====', props.filial);
  // { alert('----!!!!!!!!props.filial777====='); }

  return (

    <>
      <Helmet>
        <title>77МЦ «Ладушки» - Запись на прием</title>
        <meta name="description" content="МЦ «Ладушки»" />
        <meta name="keywords" content="МЦ «Ладушки»" />
      </Helmet>
      {/* {props.filial.records === null ? props.filial.fetching && <Loader /> : console.log('----props.filial=====', props.filial)} */}
      {/* {props.filial.records === null ? props.filial.fetching && <Loader /> : ''} */}
      {/* {props.filial.records === null ? props.filial.fetching && <Loader /> : alert('---alert PROPS!!!!-----')} */}
      
      {/* {props.filial.fetching && <Loader />} */}
      {props.filial.records === null ? props.filial.fetching && <Loader /> 
        : props.filial.data && (
        // {props.filial.data && (
        <>
          <div className="contact-media-s20" />
          <section className="section section_fullwidth1">
            <GridRow style={{ border: '1px solid #93b995' }}>
              <GridCol className="text-center" width={{ mobile: 12, tablet: 12, desktop: 12 }}>
                <h1 className="text-center">Вы успешно записались на прием</h1>
                {console.log('----!!!!!!!!props.filial.records=====', props.filial.records)}
                {alert(`----!!!!!!!!props.filial.records=====${props.filial.records.length}`)}
                {/* <h1 className="text-center">Вы успешно записались на прием</h1> */}
                <img width="320px" src={RecordGood} alt="Сбой" /> 
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }}>
                <h3 className="">Талон приема</h3>

                <div className="admin__subheader">
                  <span className="admin__breadcrumb">
                    <span style={{ color: '#57AE47', fontSize: '16px', fontWeight: 'normal', paddingLeft: '20px' }} className="">
                      Офис:	&ensp;
                    </span>
                    {props.filial.data.name}
                  </span>
                  <span className="admin__breadcrumb">
                    {/* {props.filial.data.address} */}
                    {props.filial.data.address}
                  </span>
                  {activePage === 'records' && (
                  <span className="admin__breadcrumb">Запись</span>
                  )}
                </div>

                {activePage === 'records' && (
                // <RecordsWrite
                //   records={props.filial.records}
                //   address01={props.filial.data.address}
                //   name01={props.filial.data.name}
                //   // onOk={Record}
                //   // data={{
                //   //   date: this.state.dateTime.format('DD.MM.YYYY HH:mm'),
                //   //   doctor: this.getDoctorName(this.state.doctorId),
                //   //   service: this.getService(
                //   //     this.state.doctorId,
                //   //     this.state.serviceId
                //   //   ).name,
                //   //   address: this.getAddress(this.state.filialId),
                //   // }}
                // />

                <section className="section section_fullwidth1">
                  {/* {console.log('---props.filial.records!!!!-----', props.filial.records[props.filial.records.length - 1].doctor)} */}
                  {/* {console.log('---props.filial.records!!!!-----', props.filial.records.length)} */}

                  <GridRow className="colum_prog text-block-2">
                    <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }}>
                      <h3 className="text-center">Мы ждем Вас!</h3>
                    </GridCol>
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
                      {props.filial.records[props.filial.records.length - 1].start}
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
                      {props.filial.records[props.filial.records.length - 1].doctor}
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
                      {props.filial.records[props.filial.records.length - 1].service}
                    </GridCol>
                  </GridRow>

                  <div className="contact-media-s30" />

                </section>
                )}
              </GridCol>
            </GridRow>
          </section>
          <div className="contact-media-s20" />
        </>
        )}
    </>
  );
}

export default UseSession(UseFilial(recOK));
