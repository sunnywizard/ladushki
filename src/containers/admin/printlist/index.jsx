import React, { useEffect, useState, useCallback } from 'react';
import UseFilial from '../../../core/connectors/filial';
import './style.scss';
import moment from 'moment';

const PrintList = ({ match, ...props }) => {
  const { doc, date } = match.params;

  const doctor = props.filial.doctors.find(item => item.id === +doc);
  const records = props.filial.records.filter(rec => rec.doctorId === +doc);

  const filterRecords = () => {
    const dt = moment(date, 'DD MMMM YYYY').startOf('day');
    const list = records.filter(item =>
      moment(item.start, 'DD.MM.YYYY HH:mm')
        .startOf('day')
        .isSame(dt, 'day')
    );

    setRecordList(list);
  };

  const [recordList, setRecordList] = useState([]);

  useEffect(() => {
    filterRecords();
    setTimeout(() => {
      window.print();
    }, 300);
  }, []);

  return (
    <div className="print-wrapper">
      <div className="print-header">
        <span>
          Специалист: <b>{doctor.name}</b>
        </span>
        <span>{date}</span>
      </div>
      <table className="tbl-done">
        <thead>
          <tr className="head-row">
            <th>Время</th>
            <th>Услуга</th>
            <th>ФИО пациента</th>
            <th>Телефон</th>
          </tr>
        </thead>
        <tbody>
          {recordList &&
            recordList.map(s => {
              return (
                <tr key={s.id}>
                  <td className="cell-date">{moment(s.start, "DD.MM.YYYY HH:mm").format("HH:mm")}</td>
                  <td className="cell-service">{s.service}</td>
                  <td className="cell-name">{s.name}</td>
                  <td className="cell-phone">{s.phone}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UseFilial(PrintList);
