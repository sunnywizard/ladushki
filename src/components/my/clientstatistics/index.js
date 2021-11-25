import React, { useEffect, useState } from 'react';
import Link from 'arui-feather/link';
import Button from 'arui-feather/button';
import GridRow from 'arui-feather/grid-row/grid-row';
import GridCol from 'arui-feather/grid-col/grid-col';
import { useDispatch, useSelector } from 'react-redux';
import Type from 'prop-types';
import config from '../../../config';
import UseProfile from '../../../core/connectors/profile';
import Loader from '../../common/loader';
import CourseRequest from '../courserequest';
import { getRequestsByOptions, changeDataRequests, changeRequestsOptions } from '../../../core/actions/profile';

const StudentStatistics = ({ data = '' }) => {
const profile = useSelector(state => state.profile);
const [listCount, setListCount] = useState(10);
const [clickCount, setClickCount] = useState(1);
const [options, setOptions] = useState({
        options: data.options,
        offset: 0,
        limit: 10,
        dateRange: data.dateRange,
        changed: data.changedData,
      },
    );
const dispatch = useDispatch();
const addData = () => {
      setClickCount(clickCount + 1);
      options.offset = options.limit * clickCount;
      options.options = data.options;
      setListCount(listCount + 10);
      dispatch(changeDataRequests(false));
      dispatch(getRequestsByOptions(options));
    };

    if (profile.changedData) {
      setClickCount(1);
      setListCount(10);
      options.offset = 0;
      dispatch(changeDataRequests(false));
      options.dateRange = data.dateRange;
      dispatch(getRequestsByOptions(options));

    }

    useEffect(() => {
      if (!profile.requests) {
        dispatch(getRequestsByOptions(options));
      }
    }, []);

    while (profile.requestsFetching) {
      return <Loader />;
    }
    let filteredRequests = [];
    if (profile.changedOption) {
      setClickCount(1);
      options.offset = 0;
      setListCount(10);
      console.log(options);
      options.options = data.options;
      dispatch(changeRequestsOptions(false));
      dispatch(getRequestsByOptions(options));
    }
    if (profile.requests) {
      filteredRequests = profile.requests.filter(function(el) {
        return el != null;
      });
      options.options = data.options;
    }
    let req;
    if (filteredRequests) {
      req = filteredRequests.slice(0, listCount);
      console.log(req);
    }
    const renderRequests = () => {
      if (req) {
        return (
          <div>
            {req &&
            req.map(r => (
              <div key={r ? r.id : ''}>
                <GridRow>
                  <GridCol width={{ mobile: 12, tablet: 1, desktop:1 }}>
                    {r.id}
                  </GridCol>
                  <GridCol width={{ mobile: 12, tablet: 2, desktop:1 }} style={{ fontSize: '10px' }}>
                    {r.requested_date}
                  </GridCol>
                  <GridCol width={{ mobile: 12, tablet: 3, desktop:3 }}>
                    <img
                      className="academ-lesson-detail-avatar"
                      src={`${config.baseUrl}/avatars/${r.teacher.image}`}
                      alt={r.teacher.name}
                    />
                    {r.teacher.name}
                  </GridCol>
                  <GridCol width={{ mobile: 12, tablet: 4, desktop:4 }}>
                    <img
                      className="academ-lesson-detail-avatar"
                      src={`${config.baseUrl}/courses/${r.course.image}`}
                      alt="r.user.name"
                    />
                    {r.course.title}
                  </GridCol>
                  <GridCol width={{ mobile: 12, tablet: 1, desktop:1 }}>
                    {r.price}
                  </GridCol>
                  <GridCol width={{ mobile: 12, tablet: 1, desktop:2 }}>
                    <CourseRequest param={r} />
                  </GridCol>
                </GridRow>
              </div>
            ))}
            {profile.requests && listCount <= profile.requests.length && (
              <Link pseudo>
                <div className="academ-lessons-button">
                  <Button
                    className="button button_settings-form"
                    onClick={() => addData()}
                  >
                    Показать ещё
                  </Button>
                </div>
              </Link>
            )}
          </div>
        );
      }
    };
    return (
      <div className="academ-request-detail">
        <br />
        <GridRow className="academ-lesson-detail-title">
          <GridCol width={{ mobile: 12, tablet: 1, desktop:1 }}>
            №
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 2, desktop:1 }}>
            Дата
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 3, desktop:3 }}>
            Продавец
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop:4 }}>
            Товар
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 1, desktop:1 }}>
            Сумма
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 1, desktop:2 }}>
            Статус
          </GridCol>
        </GridRow>
        <div className="hr2" />
        <br />
        {renderRequests()}
      </div>
    );
  }
;
StudentStatistics.propTypes = {
  data: Type.object.isRequired,
};
export default UseProfile(StudentStatistics);
