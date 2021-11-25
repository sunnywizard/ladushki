import { types } from '../actions/notification';

const initialState = {
  open: false,
  message: '',
  type: 'done', // done || error
  duration: 3,
};

export default (state = initialState, action) => {
  switch (action.type) {

    /** Open */
    case types.NOTIFICATION_ACTION_OPEN:
      return {
        ...state,
        open: true,
        message: action.payload.message,
        type: action.payload.type,
        duration: action.payload.duration,
      };

    /** Close */
    case types.NOTIFICATION_ACTION_CLOSE:
      return {
        ...state,
        open: false,
        message: '',
      };

    /** default */
    default:
      return state;
  }
};
