import React, { useEffect, useState, getState } from 'react';
import dayjs from 'dayjs';
import { DateRange } from 'react-date-range';
import { ru } from 'react-date-range/dist/locale';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import Button from 'arui-feather/button';
import GridCol from 'arui-feather/grid-col';
import GridRow from 'arui-feather/grid-row';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '../dialog';
import { changeDataRequests } from '../../../core/actions/profile';

const SelectDateRange = ({ dateRange, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const profile = useSelector(state => state.profile);
  const dayStart = new Date();

  dayStart.setMonth(dayStart.getMonth() - 1);
  const [selectedRange, setSelectedRange] = useState({
    startDate: dayStart,
    endDate: new Date(),
    key: 'selection', ...dateRange,
  });
  const dispatch = useDispatch();
  const handleChange = (value) => {
    setSelectedRange(value.selection);
    onChange(value.selection);
  };

  const startDate = dayjs(selectedRange.startDate).format('DD-MM-YYYY');
  const endDate = dayjs(selectedRange.endDate).format('DD-MM-YYYY');

  const handleSubmit = (value) => {
    // selectCounterValue(store.getState())
    // dispatch(changeDataRequests(getState(selectedRange)));
    dispatch(changeDataRequests(selectedRange));
    // dispatch(changeDataRequests(false));
    setSelectedRange(selectedRange);
    profile.changedData = true;
    setIsOpen(false);
    // console.log('*****changeDataRequests*****', changeDataRequests);
    // alert('*****changeDataRequests*****', changeDataRequests);    
  };

  return (
    <>
      <span className="select-operation1" onClick={() => setIsOpen(true)}>
        <span
          className="select-operation1-title">{startDate === endDate ? startDate : `с ${startDate} по ${endDate}`}</span>
      </span>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} title="Веберете дату или период">
        <DateRange
          locale={ru}
          onChange={handleChange}
          months={2}
          ranges={[selectedRange]}
          direction="horizontal"
        />
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 6, desktop:6 }}>
            <div className="text-center studentmessage-modal-button">
              <Button className="button button_settings-form" onClick={handleSubmit}>Применить</Button>
            </div>
          </GridCol>
          <GridCol width={{ mobile: 12, table: 6, desktop:6 }}>
            <div className="text-center studentmessage-modal-button">
              <Button className="button button_settings-cancel" onClick={() => setIsOpen(false)}>Закрыть</Button>
            </div>
          </GridCol>
        </GridRow>
      </Dialog>
    </>
  );
};

export default SelectDateRange;
