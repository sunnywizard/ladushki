import { types } from '../actions/message';

const initialState = {
  sending: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.MESSAGE_SENDING:
      return {
        ...state,
        sending: true,
        error: null,
      };

    case types.MESSAGE_SENT:
      return {
        ...state,
        sending: false,
        error: null,
      };

    case types.MESSAGE_SEND_FAILURE:
      return {
        ...state,
        sending: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
