import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import './style.scss';

const dayOfWeek = (dt) => {
  return moment(dt).format('d');
};

const RecordDateDialog = ({ onCancel, onSelect, spec, records, service }) => {
  const bh = JSON.parse(spec.businessHours);
  const [startDate, setStartDate] = useState(moment());
  const [schedule, setSchedule] = useState(undefined);
  const [fin, setFin] = useState(undefined);

  useEffect(() => {
    handleDateSelect(startDate);
  }, [records]);

  const selectTime = (time) => {
    const hour = time.start.split(':')[0];
    const minute = time.start.split(':')[1];
    const selectedTime = moment(startDate)
      .set('hour', hour)
      .set('minute', minute);

    const secondTimePart = selectedTime
      .clone()
      .add(+spec.interval + 4, 'minute');

    if (
      +service.duration > +spec.interval &&
      (!isVacant(secondTimePart) || secondTimePart.isAfter(fin))
    ) {
      alert(`Процедура длится дольше чем ${spec.interval} минут`);
    } else {
      onSelect(selectedTime);
    }
  };

  const isVacant = (dateTime) => {
    if (records) {
      //сначала ищем записи начинающиеся точно в проверяемое время
      let filtered = records.filter(
        (item) => dateTime.format('DD.MM.YYYY HH:mm') === item.start
      );
      if (filtered.length) {
        return false;
      }

      //теперь ищем записи, начинающиеся раньше проверяемого времени и заканчивающиеся позже проверяемого времени
      filtered = records.filter(
        (item) =>
          dateTime.isAfter(moment(item.start, 'DD.MM.YYYY HH:mm')) &&
          dateTime.isBefore(
            moment(item.start, 'DD.MM.YYYY HH:mm').add(item.duration, 'minute')
          )
      );
      if (filtered.length) {
        return false;
      }
    }
    return true;
  };

  const generateSchedule = (date, time) => {
    const startHour = +time.startTime.split(':')[0];
    const startMinute = +time.startTime.split(':')[1];
    const endHour = +time.endTime.split(':')[0];
    const endMinute = +time.endTime.split(':')[1];

    const dt = moment(date).set('hour', startHour).set('minute', startMinute);
    const finish = moment(date)
      .set('hour', endHour)
      .set('minute', endMinute)
      .add(1, 'minute');
    setFin(finish);

    const sched = [];

    let dtStart = dt;
    let dtEnd = dt.clone().add(+spec.interval, 'minute');

    while (dtEnd.isBefore(finish)) {
      const scheduleItem = {
        start: dtStart.format('HH:mm'),
        end: dtEnd.format('HH:mm'),
        vacant: isVacant(dtStart),
      };
      sched.push(scheduleItem);
      dtStart = dtEnd.clone();
      dtEnd.add(+spec.interval, 'minute');
    }

    setSchedule(sched);
  };

  const handleDateSelect = (date) => {
    let found = false;
    bh.forEach((line) => {
      if (line.daysOfWeek.includes(+dayOfWeek(date))) {
        found = true;
        generateSchedule(date, line);
      }
    });
    if (!found) {
      setSchedule([]);
    }
  };

  let scheduleItems;
  if (schedule) {
    scheduleItems = schedule.map((item) => (
      <span
        className={item.vacant ? 'schedule__item vacant' : 'schedule__item'}
        key={item.start}
        onClick={() => selectTime(item)}
      >
        {`с ${item.start} до ${item.end} ${
          item.vacant ? '' : '- Время занято'
        }`}
      </span>
    ));
  }

  return (
    <div className="schedule-dialog-container">
      <div className="record-date-selector">
        <button
          className="date-btn date-left"
          type="button"
          onClick={() => {
            const today = moment();
            if (startDate.isAfter(today)) {
              const dt = startDate.clone().subtract(1, 'day');
              handleDateSelect(dt);
              setStartDate(dt);
            }
          }}
        >
          {'<<'}
        </button>
        <span className="date">{startDate.format('DD.MM.YYYY dddd')}</span>
        <button
          className="date-btn date-right"
          type="button"
          onClick={() => {
            const maxDate = moment().add(7, 'day');

            if (startDate.isBefore(maxDate)) {
              const dt = startDate.clone().add(1, 'day');
              handleDateSelect(dt);
              setStartDate(dt);
            }
          }}
        >
          {'>>'}
        </button>
      </div>

      {scheduleItems && scheduleItems.length ? (
        scheduleItems
      ) : (
        <p style={{ color: '#EF3124', fontSize: '16px' }}>На эту дату записи нет</p>
      )}

      <div className="confirm-buttons record-list-buttons">
        {/* <button className="record-list-button" onClick={onCancel}> */}
        {/* <button className="button button_secondary button_med record__btn" onClick={onCancel} type="button"> */}
        <button className="button button_secondary button_med" onClick={onCancel} type="button">
          Отмена
        </button>
      </div>
    </div>
  );
};

export default RecordDateDialog;
