import { push } from 'connected-react-router';
import ProfileServices from '../services/profile';
import AuthServices from '../services/auth';
import { calculateExpirationDate } from '../utils/common';

export const types = {
  AUTH_SELF_REQUEST: 'AUTH_SELF_REQUEST',
  AUTH_SELF_FAILURE: 'AUTH_SELF_FAILURE',
  AUTH_SELF_SUCCESS: 'AUTH_SELF_SUCCESS',
  AUTH_LOGOUT: 'AUTH_LOGOUT',
  AUTH_SHOW_DIALOG: 'AUTH_SHOW_DIALOG',
  AUTH_REFRESH_TOKEN_INTERVAL: 'AUTH_REFRESH_TOKEN_INTERVAL',
  AUTH_REFRESH_TOKEN_INTERVAL_CLEAR: 'AUTH_REFRESH_TOKEN_INTERVAL_CLEAR',
  AUTH_REFRESH_TOKEN_FAILURE: 'AUTH_REFRESH_TOKEN_FAILURE',
};

const getRefreshedToken = (dispatch) => {
  const rToken = localStorage.getItem('refresh_token');
  AuthServices.refreshToken({ refresh_token: rToken })
    .then(response => {
      localStorage.setItem('token', response.access_token);
      localStorage.setItem('expiresIn', response.expires_in);
      localStorage.setItem(
        'expDate',
        calculateExpirationDate(response.expires_in).toString()
      );
      localStorage.setItem('refresh_token', response.refresh_token);
    })
    .catch(err => {
      localStorage.removeItem('token');
      localStorage.removeItem('expiresIn');
      localStorage.removeItem('expDate');
      localStorage.removeItem('refresh_token');
      dispatch({
        type: types.AUTH_REFRESH_TOKEN_FAILURE,
        payload: { err },
      });
    });
};

const startTimer = (expiresIn, dispatch) => {
  const tokenInterval = setInterval(() => {
    const currentDate = new Date().toString();
    console.log('Refresh time: ', currentDate);

    getRefreshedToken(dispatch);
  }, (expiresIn - 60) * 1000);

  dispatch({ type: types.AUTH_REFRESH_TOKEN_INTERVAL, payload: tokenInterval });
};

const stopTimer = dispatch => {
  dispatch({ type: types.AUTH_REFRESH_TOKEN_INTERVAL_CLEAR });
};

export const logout = () => dispatch => {
  localStorage.removeItem('token');
  localStorage.removeItem('expiresIn');
  localStorage.removeItem('expDate');
  localStorage.removeItem('authInfo');
  localStorage.removeItem('refresh_token');
  dispatch({ type: types.AUTH_LOGOUT });
  stopTimer(dispatch);
  dispatch(push('/'));
};

export const getSelf = (source = '') => dispatch => {
  let token = localStorage.getItem('token');

  if (source === 'Init') {
    console.log('Init token');
    if (token) {
      const expiresIn = localStorage.getItem('expiresIn');
      const expDate = localStorage.getItem('expDate');
      const currentDate = new Date();
      if (currentDate < new Date(expDate)) {
        console.log('Token is alive, setting timeout');
        const diffTime = new Date(expDate) - currentDate;
        setTimeout(() => {
          console.log('time out', new Date().toString());
          getRefreshedToken(dispatch);
          startTimer(expiresIn, dispatch);
        }, diffTime - 60000);
      }else{
        console.log('Token expired');
        token = undefined
        localStorage.removeItem('token');
        localStorage.removeItem('expiresIn');
        localStorage.removeItem('expDate');
        localStorage.removeItem('authInfo');
        localStorage.removeItem('refresh_token');
        dispatch({ type: types.AUTH_LOGOUT });
        dispatch(push('/'));
      }
    }
  }

  if (token) {
    dispatch({ type: types.AUTH_SELF_REQUEST });
    ProfileServices.getProfile()
      .then(response => {
        dispatch({
          type: types.AUTH_SELF_SUCCESS,
          payload: { data: response.user },
        });
        dispatch({ type: 'AUTH_SHOW_DIALOG', payload: false });
      })
      .catch(error => {
        console.log('Auth error', error);
        if (error.status === 500) {
          //  trying to refresh token
          const rToken = localStorage.getItem('refresh_token');
          if (rToken) {
            AuthServices.refreshToken({ refresh_token: rToken })
              .then(response => {
                localStorage.setItem('token', response.access_token);
                localStorage.setItem('refresh_token', response.refresh_token);
                dispatch(getSelf('refreshToken'));
              })
              .catch(err => {
                localStorage.removeItem('refresh_token');
                dispatch({
                  type: types.AUTH_SELF_FAILURE,
                  payload: { err },
                });
                console.log('sourse', source);
                if (source !== 'Init') {
                  dispatch({ type: 'AUTH_SHOW_DIALOG', payload: true });
                }
              });
          }
        } else {
          localStorage.removeItem('token');
          dispatch({
            type: types.AUTH_SELF_FAILURE,
            payload: { error },
          });
        }
      });
  } else if (source !== 'Init') {
    dispatch({ type: 'AUTH_SHOW_DIALOG', payload: true });
  }
};

export const loginSuccess = ({
  token,
  expiresIn,
  expDate,
  refreshToken,
  authInfo,
  source = '',
}) => dispatch => {
  localStorage.setItem('token', token);
  localStorage.setItem('expiresIn', expiresIn);
  localStorage.setItem('expDate', expDate);
  localStorage.setItem('authInfo', authInfo);
  localStorage.setItem('refresh_token', refreshToken);
  dispatch({ type: 'AUTH_SHOW_DIALOG', payload: false });

  startTimer(expiresIn, dispatch);

  dispatch(getSelf(source));
};



export const updateSelf = (cb = null) => dispatch => {
  ProfileServices.getProfile()
    .then(response => {
      dispatch({
        type: types.AUTH_SELF_SUCCESS,
        payload: { data: response },
      });
      if (cb) cb();
    })
    .catch(error => {
      localStorage.removeItem('token');
      dispatch({
        type: types.AUTH_SELF_FAILURE,
        payload: { error },
      });
    });
};
