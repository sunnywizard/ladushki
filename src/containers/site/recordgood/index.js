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
import RecordsWrite from '../../admin/recordswrite';
// import Doctors from '../doctors';
// import Services from '../services';
// import Specialization from '../specialization';
// import { getFilial } from '../../../core/actions/filial';
// import FilialServices from '../../../core/services/filial';
// import Loader from '../../../components/common/loader';
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

  const inactivityTime = function foo() {
    let time;
    function logout() {
      document.location.href = '/';
    }
    function resetTimer() {
      clearTimeout(time);
      time = setTimeout(logout, 60000);
      // 1000 milliseconds = 1 second
      // console.log('120 сек хорошо*****');
    }

    window.onload = resetTimer;
    // DOM Events
    document.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onmousedown = resetTimer; // touchscreen presses
    document.ontouchstart = resetTimer;
    document.onclick = resetTimer; // touchpad clicks
    document.onkeypress = resetTimer;
    document.addEventListener('scroll', resetTimer, true); // improved; see comments
  };

  function onPageLoad() {
    inactivityTime(); 
    // console.log('120 сек onPageLoad*****');
  }
  // window.onload = onPageLoad();
  document.onload = onPageLoad();
  
  return (

    <>
      <Helmet>
        <title>МЦ «Ладушки» - Запись на прием</title>
        <meta name="description" content="МЦ «Ладушки»" />
        <meta name="keywords" content="МЦ «Ладушки»" />
      </Helmet>

      {props.filial.data && (
        <>
          <div className="contact-media-s20" />
          <section className="section section_fullwidth1">
            <GridRow style={{ border: '1px solid #93b995' }}>
              <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }}>
                <h1 className="">Талон приема</h1>

                <div className="admin__subheader">
                  <span className="admin__breadcrumb">
                    <span style={{ color: '#57AE47', fontSize: '16px', fontWeight: 'normal', paddingLeft: '20px' }} className="">
                      Офис:	&ensp;
                    </span>
                    {props.filial.data.name}
                  </span>
                  <span className="admin__breadcrumb">
                    {props.filial.data.address}
                  </span>
                  {activePage === 'records' && (
                  <span className="admin__breadcrumb">Запись</span>
                  )}
                </div>

                {activePage === 'records' && (
                <RecordsWrite
                  records={props.filial.records}
                  // onOk={Record}
                  // data={{
                  //   date: this.state.dateTime.format('DD.MM.YYYY HH:mm'),
                  //   doctor: this.getDoctorName(this.state.doctorId),
                  //   service: this.getService(
                  //     this.state.doctorId,
                  //     this.state.serviceId
                  //   ).name,
                  //   address: this.getAddress(this.state.filialId),
                  // }}
                />
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
