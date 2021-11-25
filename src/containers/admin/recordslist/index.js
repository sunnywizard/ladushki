/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.scss';
import { Link } from 'react-router-dom';
import ru from 'date-fns/locale/ru';
import Modal from '../../../components/common/modal';
import closeBtn from '../../../theme/images/closeButtonRed.svg';
import ConfirmDialog from '../confirmDialog';
import UseFilial from '../../../core/connectors/filial';
import recordswrite from '../recordswrite';

const RecordsList = ({
  filialId,
  records,
  getRecords,
  deleteRecord,
  history,
  ...props
}) => {
  const [doctorId, setDoctorId] = useState(-1);
  const [recordDate, setRecordDate] = useState(undefined);
  const [recordList, setRecordList] = useState(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [recordToDelete, setRecordToDelete] = useState(null);
  const [isActiveRecords, setIsActiveRecords] = useState(true);

  useEffect(() => {
    props.getDoctors(filialId);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getRecords(filialId, true);
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    getFilteredRecords();
  }, [records, doctorId, recordDate, isActiveRecords]);

  const getFilteredByDateRecords = () => {
    let result = [];
    if (records) {
      result = records.filter((record) => {
        const recordTime = moment(record.start, 'DD.MM.YYYY HH:mm');

        const yesterday = moment()
          .subtract(1, 'day')
          .endOf('day');

        if (isActiveRecords) {
          return recordTime.isAfter(yesterday);
        } 
        return recordTime.isBefore(moment().startOf('day'));
        
      });
    }
    return result;
  };

  const getFilteredRecords = () => {
    let list = getFilteredByDateRecords();
    if (doctorId !== -1) {
      list = list.filter((item) => item.doctorId === doctorId);
    }
    if (recordDate) {
      const dt = moment(recordDate).startOf('day');
      list = list.filter((item) => moment(item.start, 'DD.MM.YYYY HH:mm')
        .startOf('day')
        .isSame(dt, 'day')
      );
    }
    setRecordList(list);
  };

  const startDeleteRecord = (e, record) => {
    record.deleted = true;
    e.preventDefault();
    setRecordToDelete(record);
    setIsOpen(true);
  };

  const deleteEventRecord = () => {
    deleteRecord(recordToDelete.id);
    setIsOpen(false);
  };

  return (
    <>
      <GridRow>
        {/* <div className="record-list-actions"> */}
        <GridCol
          width={{ mobile: 6 }} 
          className=""
        >
          <div className="record-list-actions">
            <span style={{ fontSize: '13px' }}>
              Дата&ensp;
            </span>
            <DatePicker
              selected={recordDate}
              todayButton="Сегодня"
              onChange={(date) => {
                setRecordDate(date);
              }}
              dateFormat="dd.MM.yyyy"
              locale={ru}
              className="actions-datepicker"
            />
          </div>
          <div className="contact-media-s20" />
        </GridCol>

        <GridCol
          width={{ mobile: 6 }} 
          className=""
        > 
          <select
            className="admin-select"
            value={doctorId}
            onChange={(e) => {
              const id = +e.target.value;
              setDoctorId(id);
            }}
          >
            <option value="-1">Все специалисты</option>
            {props.filial.doctors
            && props.filial.doctors.map((spec) => (
              <option key={spec.id} value={spec.id}>
                {spec.name}
              </option>
            ))}
          </select>
          <div className="contact-media-s20" />
        </GridCol>

        <GridCol
          width={{ mobile: 6 }} 
          className=""
        > 
          <button
            className="actions__btn1"
          // className="button actions__btn button_settings-lada"          
            onClick={() => {
              setDoctorId(-1);
              setRecordDate(undefined);
            }}
            type="button"
          >
            Сбросить фильтры
          </button>
          <div className="contact-media" />
          {doctorId !== -1 && recordDate && (
          <Link
            // className="actions__btn"
            className="actions__btn1"
            style={{ padding: '7px 15px' }}
            to={`/admin/print-list/${doctorId}/${moment(recordDate).format(
              'DD MMMM YYYY'
            )}`}
          >
            Печать
          </Link>
          )}
          <div className="contact-media-s20" />
        </GridCol>

        <GridCol
          width={{ mobile: 6 }} 
          className="record-list-actions"
          style={{ paddingLeft: '25px' }}
        > 
          <span
            className="switch-link"
            onClick={() => setIsActiveRecords(!isActiveRecords)}
          >
            <u>{isActiveRecords ? 'Архив' : 'Запись'}</u>
          </span>
          <div className="contact-media-s20" />
        </GridCol>

        {/* </div> */}
      </GridRow>
      <div className="contact-media" />
      {/* <table className="tbl"> */}
      <table className="tbl rtable">
        <thead>
          <tr className="head-row">
            <th>#</th>
            <th>Дата/время</th>
            <th>Специалист</th>
            <th>ФИО пациента</th>
            <th>Телефон</th>
            <th>Услуга</th>
            {/* <th className="cell-action" /> */}
          </tr>
        </thead>
        <tbody>

          {recordList
            && recordList.map((s, index) => (
                <tr key={s.id} style={s.deleted ? { textDecoration: 'line-through' } : {}}>
                  {/* <td className="cell-action action"> */}
                  <td className="cell-name">
                    {isActiveRecords && !s.deleted && (
                    <a href="#">
                      <img
                        onClick={(e) => startDeleteRecord(e, s)}
                        src={closeBtn}
                        alt="Delete"
                      />
                    </a>
                    )}
                  </td>                  
                  <td className="cell-date">{s.start}</td>
                  <td className="cell-name">
                    <div>{s.doctor}</div>
                  </td>
                  <td className="cell-name">{s.name}</td>
                  <td className="cell-phone">{s.phone}</td>
                  <td className="cell-service">{s.service}</td>
                  {/* <td className="cell-action action">
                    {isActiveRecords && !s.deleted&& (
                      <a href="#">
                        <img
                          onClick={e => startDeleteRecord(e, s)}
                          src={closeBtn}
                          alt="Delete"
                        />
                      </a>
                    )}
                  </td> */}
                </tr>
            ))}
        </tbody>
      </table>

      <Modal
        open={isOpen}
        // title={<div style={{ color: 'red', textAlign: 'center' }}><p>"Удаление записи врача"</p></div>}
        title="Удаление записи на прием"
        onClose={() => setIsOpen(false)}
        // closeBtn={false}
        closeBtn
        style={{ textAlign: 'center' }}
        // classNames={{ modal: 'modal-form' }}
        // classNames={{ modal: 'record-list-dialog' }}
        classNames={{
          overlay: 'dialog-overlay',
          modal: 'dialog-modal dialog_small',
          closeButton: 'dialog-close-button',
        }}
      >
        <ConfirmDialog
          onOk={() => deleteEventRecord()}
          onCancel={() => setIsOpen(false)}
          style={{ textAlign: 'center' }}
        />
      </Modal>
    </>
  );
};

export default UseFilial(RecordsList);
