import MessageServices from '../services/message';

export const types = {
  MESSAGE_SENDING: 'MESSAGE_SENDING',
  MESSAGE_SENT: 'MESSAGE_SENT',
  MESSAGE_SEND_FAILURE: 'MESSAGE_SEND_FAILURE',
};

export const sendMessage = payload => dispatch => {
  dispatch({ type: types.MESSAGE_SENDING });
  MessageServices.sendEmail(payload)
    .then(() => {
      dispatch({ type: types.MESSAGE_SENT });
    })
    .catch(error => {
      dispatch({
        type: types.MESSAGE_SEND_FAILURE,
        payload: { error },
      });
    });
};

