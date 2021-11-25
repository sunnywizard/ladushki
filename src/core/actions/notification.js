export const types = {
  NOTIFICATION_ACTION_OPEN: 'NOTIFICATION_ACTION_OPEN',
  NOTIFICATION_ACTION_CLOSE: 'NOTIFICATION_ACTION_CLOSE',
};

export const openNotification = ({ type = 'done', message = null, duration = 4 }) => (dispatch) => {
  dispatch({
    type: types.NOTIFICATION_ACTION_OPEN,
    payload: { type, message, duration }
  });
};

export const closeNotification = () => (dispatch) => {
  dispatch({ type: types.NOTIFICATION_ACTION_CLOSE });
};
