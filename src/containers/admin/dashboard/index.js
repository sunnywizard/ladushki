/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import UseSession from '../../../core/connectors/session';
import UseFilial from '../../../core/connectors/filial';
import AuthService from '../../../core/services/auth';
import RecordsList from '../recordsList';
import Doctors from '../doctors';
import './style.scss';
import Services from '../services';
import Specialization from '../specialization';
import { getFilial } from '../../../core/actions/filial';
import FilialServices from '../../../core/services/filial';
import Loader from '../../../components/common/loader';

/**
 * Admin dashboard
 */
function AdminDashboard(props) {

  const [activePage, setActivePage] = useState('records');
  const [records, setRecords] = useState('');
  const [filial, setFilial] = useState('');

  // console.log('Dashboard PROPS=', props);
  useEffect(() => {

    setRecords(props.getRecords(1));
    setFilial(props.getFilial(1));
  }, []);

  return (

    <>
      <Helmet>
        <title>Панель администратора</title>
      </Helmet>
      {/* <nav className="admin-nav"> */}
      <GridRow>
        <GridCol
          width={{ mobile: 6, tablet: 3, desktop: 3 }} 
          className=""
        >
          <button
          // className="button button_secondary"
            className="button button_settings-lada"
            onClick={() => setActivePage('records')}
            type="button"
          >
            Записи
          </button>
          <div className="contact-media" />
        </GridCol>
        <GridCol
          width={{ mobile: 6, tablet: 3, desktop: 3 }} 
          className=""
        >
          <button
          // className="button button_secondary"
            className="button button_settings-lada"
            onClick={() => setActivePage('doctors')}
            type="button"
          >
            Врачи
          </button>
          <div className="contact-media" />
        </GridCol>
        <GridCol
          width={{ mobile: 6, tablet: 3, desktop: 3 }} 
          className=""
        >
          <button
          // className="button button_secondary"
            className="button button_settings-lada"
            onClick={() => setActivePage('services')}
            type="button"
          >
            Услуги
          </button>
          <div className="contact-media" />
        </GridCol>
        <GridCol
          width={{ mobile: 6, tablet: 3, desktop: 3 }} 
          className=""
        >
          {/* <button
            className="button button_settings-lada-cancel"
            onClick={() => AuthService.signOut().then(props.logOut())}
            type="button"
          >
            Выход
          </button>
          <div className="contact-media" /> */}

          <button
          // className="button button_secondary"
            className="button button_settings-lada"
            onClick={() => setActivePage('specialization')}
            type="button"
          >
            Специализации
          </button>
          <div className="contact-media" />

        </GridCol>
      </GridRow>

      {props.filial.data && (
        <>
          <div className="admin__subheader">
            <span className="admin__breadcrumb">
              <span style={{ color: '#57AE47', fontSize: '16px', fontWeight: 'normal' }} className="">
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
            {activePage === 'doctors' && (
              <span className="admin__breadcrumb">Врачи</span>
            )}
            {activePage === 'services' && (
              <span className="admin__breadcrumb">Услуги</span>
            )}
            {activePage === 'specialization' && (
              <span className="admin__breadcrumb">Специализации</span>
            )}
          </div>

          {activePage === 'records' && (
            <RecordsList
              records={props.filial.records}
              filialId={props.session.user.filialId}
            />
          )}
          {activePage === 'doctors' && (
            <Doctors filialId={props.session.user.filialId} />
          )}
          {activePage === 'services' && (
            <Services filialId={props.session.user.filialId} />
            // <Services filialId={props.session.user.filialId} specIdAA={6} />
          )}
          {activePage === 'specialization' && (
            <Specialization filialId={props.session.user.filialId} />
            // <Services filialId={props.session.user.filialId} specIdAA={6} />
          )}
        </>
      )}
    </>
  );
}

export default UseSession(UseFilial(AdminDashboard));
