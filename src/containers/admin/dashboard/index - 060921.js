import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import UseSession from '../../../core/connectors/session';
import UseFilial from '../../../core/connectors/filial';
import AuthService from '../../../core/services/auth';
import RecordsList from '../recordsList';
import Doctors from '../doctors';
import './style.scss';
import Services from '../services';
import { getFilial } from '../../../core/actions/filial'
import FilialServices from '../../../core/services/filial'
import Loader from '../../../components/common/loader';

/**
 * Admin dashboard
 */
function AdminDashboard(props) {


  const [activePage, setActivePage] = useState('records');
  const [records, setRecords] = useState('');
  const [filial, setFilial] = useState('');

  console.log(props);
  useEffect(() => {

    setRecords(props.getRecords(1));
    setFilial(props.getFilial(1));
  }, []);


  return (

    <>
      <Helmet>
        <title>Панель администратора</title>
      </Helmet>
      <nav className="admin-nav">
        <button
          className="button button_secondary"
          onClick={() => setActivePage('records')}
        >
          Записи
        </button>
        <button
          className="button button_secondary"
          onClick={() => setActivePage('doctors')}
        >
          Врачи
        </button>
        <button
          className="button button_secondary"
          onClick={() => setActivePage('services')}
        >
          Услуги
        </button>
        <button
          className="button fc-button-primary"
          onClick={() => AuthService.signOut().then(props.logOut())}
        >
          Выход
        </button>
      </nav>

      {props.filial.data && (
        <>
          <div className="admin__subheader">
            <span className="admin__breadcrumb">{props.filial.data.name}</span>
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
            <Services filialId={props.session.user.filialId}/>
          )}
        </>
          )}
    </>
  );
}

export default UseSession(UseFilial(AdminDashboard));
