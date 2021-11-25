/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
// import { closestIndexTo } from 'date-fns';
import React, { useEffect, useState } from 'react';
import CheckBox from '../../../components/common/checkbox/checkbox';
import closeBtn from '../../../theme/images/closeButtonRed.svg';

const Schedule = ({ schedule, handleClose, handleStore }) => {
  const [statusValue, setStatusValue] = useState();
  const [edit, setEdit] = useState({});
  const { spec } = schedule;
  const empty = [
    { day: 'Воскресенье', start: '', end: '' },
    { day: 'Понедельник', start: '', end: '' },
    { day: 'Вторник', start: '', end: '' },
    { day: 'Среда', start: '', end: '' },
    { day: 'Четверг', start: '', end: '' },
    { day: 'Пятница', start: '', end: '' },
    { day: 'Суббота', start: '', end: '' },
  ];

  const loadTable = () => {
    const tmp = empty.map((a) => ({ ...a }));
    let bh = '';
    if (spec.businessHours) {
      bh = JSON.parse(spec.businessHours);
      tmp.forEach((row, index) => {
        bh.forEach((b) => {
          if (b.daysOfWeek.filter((item) => item === index).length > 0) {
            row.start = b.startTime;
            row.end = b.endTime;
          }
        });
      });
    }
    return tmp;
  };

  let inputRef;

  useEffect(() => {
    if (inputRef) {
      inputRef.focus();
    }
  }, [edit]);

  useEffect(() => {
    setTable([...loadTable()]);
    setInitialTable([...loadTable()]);
  }, [spec]);

  const [table, setTable] = useState(null);
  const [initialTable, setInitialTable] = useState(null);

  const [touched, setTouched] = useState(false);

  const compareArrays = (arr1, arr2) => {
    let res = false;
    if (arr1.length !== arr2.length) {
      console.log('length different');
      return false;
    }
    arr1.forEach((item, index) => {
      if (item.start !== arr2[index].start || item.end !== arr2[index].end) {
        res = true;
      }
    });
    return res;
  };

  const updateTable = (val, index, col) => {
    const tbl = [...table];
    tbl[index][col] = val;
    setTable(tbl);
    setTouched(compareArrays(initialTable, tbl));
  };

  const handleSave = () => {
    const res = table.map((row, index) => ({ index, startTime: row.start, endTime: row.end }));
    handleStore(res);
  };
  const handlesliceDoctor = () => {
    const res = empty.map((a) => ({ ...a }));
    handleStore(res);
  };

  const handlesliceDoctorOne = (index) => {
    const irow = index.row;
    const res = table.map((row, index) => ({ index, startTime: row.start, endTime: row.end }));
    res[irow].startTime = '';
    res[irow].endTime = '';
    handleStore(res);
  };

  return (
    <div className="schedule">
      <div className="contact-media" />
      {/* <h3 className="text-center">График приема</h3> */}
      <div style={{ textAlign: 'center' }}>
        <span className="schedule__header" style={{ textAlign: 'center', color: '#57AE47' }}>
          {/* График приема: 
        &emsp; */}
          {/* <strong>{spec.name}</strong> */}
          {/* <br /> */}
          <strong>{schedule.doctor.name}</strong>
        </span>
        {/* <span>
      <strong>{schedule.doctor.name}</strong>

      </span> */}

        <button 
          type="button"
        // onClick={(e) => startDeleteRecord(e, s)}          
        >
          <img
            onClick={handlesliceDoctor}
            src={closeBtn}
            alt="Delete"
            title="Удалить"
          />
        </button>

      </div>
      <div className="contact-media" />
      <table className="schedule__table">
        <thead>
          <tr>
            <th>День недели</th>
            <th>с</th>
            <th>по</th>
            <th>Активно</th>            
          </tr>
        </thead>
        <tbody>
          {table
            && table.map((row, index) => (
              <tr
                key={row.day}
                style={
                  row.start === '' && row.end === ''
                    ? { backgroundColor: '#FF9D99' }
                    : {}
                }
              >
                {/* <td>{row.day}</td> */}
                <td
                  onDoubleClick={() => setEdit({ row: index, start: true })}
                  // onDoubleClick={() => splice( index, 1 )}
                  style={
                    edit.row === index && edit.start ? { padding: '0' } : {}
                  }
                  onKeyPress={(e) => {
                    e.key === 'Enter' && setEdit({});
                  }}
                >
                  {row.day}
                </td>
                <td
                  onDoubleClick={() => setEdit({ row: index, start: true })}
                  style={
                    edit.row === index && edit.start ? { padding: '0' } : {}
                  }
                  onKeyPress={(e) => {
                    e.key === 'Enter' && setEdit({});
                  }}
                >
                  {edit.row === index && edit.start ? (
                    <input
                      ref={(input) => {
                        inputRef = input;
                      }}
                      style={{ border: 'none' }}
                      type="time"
                      min="08:00"
                      max="18:00"
                      value={table[index].start || '08:00'}
                      onChange={(e) => updateTable(e.target.value, index, 'start')}
                      onFocus={(e) => updateTable(e.target.value, index, 'start')}
                      className="time-input"
                    />
                  ) : (
                    row.start
                  )}
                </td>
                <td
                  onDoubleClick={() => setEdit({ row: index, end: true })}
                  style={edit.row === index && edit.end ? { padding: '0' } : {}}
                  onKeyPress={(e) => {
                    e.key === 'Enter' && setEdit({});
                  }}
                >
                  {edit.row === index && edit.end ? (
                    <input
                      ref={(input) => {
                        inputRef = input;
                      }}
                      style={{ border: 'none' }}
                      type="time"
                      min="08:00"
                      max="18:00"
                      value={table[index].end || '18:00'}
                      onChange={(e) => updateTable(e.target.value, index, 'end')}
                      onFocus={(e) => updateTable(e.target.value, index, 'end')}
                      className="time-input"
                    />
                  ) : (
                    row.end
                  )}
                </td>
                <td>
                  {/* <CheckBox */}
                  {/* label="  Ведет прием" */}
                  {/* checked={statusValue} */}
                  {/* onChange={(e) => setStatusValue(e.target.checked)} */}
                  {/* /> */}

                  <button 
                    type="button"
                  >
                    <img
                      // onClick={(e) => handlesliceDoctorOne(e.target.click, index )}
                      // onChange={(e) => updateTable(e.target.value, index)}
                      // onChange={(e) => updateTable(e.target.value, index, 'end')}
                      onClick={() => handlesliceDoctorOne({ row: index, start: true })}
                      src={closeBtn}
                      alt="Delete"
                      title="Удалить"
                    />
                  </button>

                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <br />

      <div className="buttons">
        <button
          className={
            touched ? 'button button_secondary' : 'button button_disabled'
            // touched ? 'button button_secondary button_med record__btn' : 'button button_disabled'
          }
          onClick={handleSave}
          disabled={!touched}
          type="button" 
        >
          Сохранить
        </button>
        
        {/* <button className="button fc-button-primary" type="button" onClick={handleClose}> */}
        <button className="button button_cancel" style={{ fontSize: '18px' }} type="button" onClick={handleClose}>
          Закрыть
        </button>
      </div>
      <div className="contact-media-s30" />
    </div>
  );
};

export default Schedule;
