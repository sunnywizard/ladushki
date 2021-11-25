import React, { useState } from 'react';
import Type from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';
import { useSelector } from 'react-redux';
import ExpansionPanelR from '../../common/expansionpanelr';
import ModalTeacherCard from '../forms/modalteachercard';
import Dialog from '../../common/dialog';
import SelectOperation from '../../common/selectoperation';
import SelectDateRange from '../../common/selectdaterange';
import '../../../theme/styles/settings.scss';
import StudentStatistics from '../studentstatistics';
/**
 * Student finance
 */
const StudentFinance = () => {
  const [openPanelNumber, setOpenPanelNumber] = useState(0);
  const [idOpenModal, setIdOpenModal] = useState('');
  const [options, selectOperations] = useState( 'all');

  const dayStart = new Date();
  dayStart.setMonth(dayStart.getMonth() - 1);
  const [dateRange, setDateRange] = useState({
    startDate: dayStart,
    endDate: new Date(),
  });
  const handleClickExpand = panelNumber => {
    const newOpenPanelNumber =
      openPanelNumber !== panelNumber ? panelNumber : 0;
    setOpenPanelNumber(newOpenPanelNumber);
  };
  const profile = useSelector(state => state.profile);
  const profData = {
    profileData: profile.profile,
    options,
    dateRange,
    changedData: profile.changedData,
  };
  return (
    <div className="finance">
      <ExpansionPanelR
        className="finance-item"
        title={
          <div className="finance-block">
            <div className="finance-block-balance">Расход</div>
            <div className="finance-block-price">15 000₽</div>
            <div className="finance-block-date">
              за
              { ' ' }
              {moment().format('dddd, D MMMM YYYY г.')}
            </div>
            <div className="finance-block-pic" />
            <Dialog
              isOpen={idOpenModal === 'TeacherCard'}
              onClose={() => setIdOpenModal('')}
              title=""
            >
              <ModalTeacherCard />
            </Dialog>
          </div>
        }
        isExpanded={openPanelNumber === 1}
        onClickExpand={() => handleClickExpand(1)}
        content={
          <div>
            <div className="finance-stat">
              <div className="finance-stat-operation">Сортировка</div>
              {/* <div className="finance-stat-action">Действия</div> */}
              <span>
                <SelectOperation onChange={options => selectOperations(options)} />
              </span>
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              {/* </div>
            <div className="finance-stat"> */}
              <div className="finance-stat-operation">Календарный период</div>
              {/* <div className="finance-stat-action">Период</div> */}
              <span>
                <SelectDateRange
                  dateRange={dateRange}
                  onChange={dateRange => setDateRange(dateRange)}
                />
              </span>
            </div>
            {/* <img className="" src={StatStudent} alt="" /> */}
            <StudentStatistics data={profData} />
          </div>
        }
      />
    </div>
  );
};
StudentFinance.propTypes = {
  items: Type.array.isRequired,
};
export default StudentFinance;
