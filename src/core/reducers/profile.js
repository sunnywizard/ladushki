import { types } from '../actions/profile';

const initialState = {
    fetching: false,
    requestsFetching: false,
    changedData: false,
    changedOption: false,
    error: null,
    profile: null,
    requestsOption: 'all',
    //requestsDate: null,
};


export default (state = initialState, action) => {
  let requests;
  if (state.profile) {
    requests = state.requests;
  }

  switch (action.type) {
    case types.PROFILE_INITIAL:
      return {
        ...initialState,
      };

    case types.PROFILE_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case types.PROFILE_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload.error,
      };

    case types.PROFILE_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        profile: { ...action.payload.data },
      };

    case types.REQUESTS_REQUEST:
      return {
        ...state,
        requestsFetching: true,
        error: null,
      };

    case types.REQUESTS_PAGINATE:
      return {
        ...state,
        requestsFetching: true,
        error: null,
      };

    case types.REQUESTS_FAILURE:
      return {
        ...state,
        requestsFetching: false,
        error: action.payload.error,
      };

    case types.REQUESTS_SUCCESS:
      return {
        ...state,
        requestsFetching: false,
        error: null,
        requests: [...action.payload.data],
      };

    case types.REQUESTS_PAGINATE_SUCCESS:
      return {
        ...state,
        requestsFetching: false,
        error: null,
        requests: action.payload.data.concat(requests),
      };

    case types.REQUESTS_DATE_CHANGED:
      return {
        ...state,
        changedData: true,
        requestsDate: action.payload.data,
        requests: null,
      };

    case types.REQUESTS_DATE_UNCHANGED:
      return {
        ...state,
        changedData: false,
      };

    case types.REQUESTS_OPTION_CHANGED:
      return {
        ...state,
        changedOption: true,
        requests: null,
      };
    case types.REQUESTS_OPTION_UNCHANGED:
      return {
        ...state,
        changedOption: false,
      };

    default:
      return state;
  }
};
