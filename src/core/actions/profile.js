import dayjs from 'dayjs';
import ProfileServices from '../services/profile';


export const types = {
  PROFILE_REQUEST: 'PROFILE_REQUEST',
  PROFILE_FAILURE: 'PROFILE_FAILURE',
  PROFILE_SUCCESS: 'PROFILE_SUCCESS',
  REQUESTS_REQUEST: 'REQUESTS_REQUEST',
  REQUESTS_FAILURE: 'REQUESTS_FAILURE',
  REQUESTS_SUCCESS: 'REQUESTS_SUCCESS',
  PROFILE_INITIAL: 'PROFILE_INITIAL',
  REQUESTS_PAGINATE: 'REQUESTS_PAGINATE',
  REQUESTS_PAGINATE_SUCCESS: 'REQUESTS_PAGINATE_SUCCESS,',
  REQUESTS_DATE_CHANGED: 'REQUESTS_DATE_CHANGED',
  REQUESTS_DATE_UNCHANGED: 'REQUESTS_DATE_UNCHANGED',
  REQUESTS_OPTION_CHANGED: 'REQUESTS_OPTION_CHANGED',
  REQUESTS_OPTION_UNCHANGED: 'REQUESTS_OPTION_UNCHANGED',
};

export const getProfile = (bool = true) => dispatch => {
  if (bool) {
    dispatch({ type: types.PROFILE_REQUEST });
    ProfileServices.getProfile()
      .then(response => {
        dispatch({ type: types.PROFILE_SUCCESS, payload: { data: response } });
      })
      .catch(error => {
        dispatch({ type: types.PROFILE_FAILURE, payload: { error } });
      });
  } else {
    dispatch({ type: types.PROFILE_INITIAL });
  }
};

export const getRequestsByOptions = (options = null) => dispatch => {
  dispatch({ type: types.REQUESTS_PAGINATE });

  const startDate = dayjs(options.dateRange.startDate).format('YYYY-MM-DD');
  const endDate = dayjs(options.dateRange.endDate).add(1, 'day').format('YYYY-MM-DD');

  let dateStart = '';
  if (startDate) {
    dateStart = '&date_start=' + startDate;
  }
  let dateEnd = '';
  if (endDate) {
    dateEnd = '&date_end=' + endDate;
  }
  let urlOffset = '?offset=0';
  if (options.offset) {
    urlOffset = '?offset=' + options.offset;
  }
  let urlLimit = '&limit=0';
  if (options.limit) {
    urlLimit = '&limit=' + options.limit;
  }
  let option = '';

  if (options.options != 'all' && options.options != null) {
    option = '&option=' + options.options;
  }

  const url = urlOffset + urlLimit + dateStart + dateEnd + option;
  ProfileServices.getRequestsByOptions(url)
    .then(response => {
      dispatch({ type: types.REQUESTS_PAGINATE_SUCCESS, payload: { data: response } });
    })
    .catch(error => {
      dispatch({ type: types.REQUESTS_FAILURE, payload: { error } });
    });
};
export const getRequests = () => dispatch => {
  dispatch({ type: types.REQUESTS_REQUEST });
  ProfileServices.getRequests()
    .then(response => {
      dispatch({ type: types.REQUESTS_SUCCESS, payload: { data: response } });
    })
    .catch(error => {
      dispatch({ type: types.REQUESTS_FAILURE, payload: { error } });
    });
};

export const changeDataRequests = (param) => dispatch => {
  if (param) {
    dispatch({ type: types.REQUESTS_DATE_CHANGED, payload: { data: param } });
  } else {
    dispatch({ type: types.REQUESTS_DATE_UNCHANGED });
  }
};

export const changeRequestsOptions = (param) => dispatch => {
  if (param) {
    dispatch({ type: types.REQUESTS_OPTION_CHANGED });
  } else {
    dispatch({ type: types.REQUESTS_OPTION_UNCHANGED });
  }
};
