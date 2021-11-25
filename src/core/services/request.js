import axios from 'axios';
import config from '../../config';

axios.defaults.timeout = config.connectTimeout;

const request = ({ method = 'get', url = '', data = null, contentType = 'application/json', baseURL = config.apiBaseUrl }) => {

  const options = { method, baseURL, url, headers: { 'content-type': contentType } };

  if (!__SERVER__) {
    const token = localStorage.getItem('token');
    if (token) options.headers.Authorization = `Bearer ${token}`;
  }

  if (data && method === 'get') {
    options.params = data;
  } else if (data) {
    options.data = data;
  }

  const errorHandler = ({ response }) => {
    let error = { status: 0, message: '' };
    if (response) {
      error.status = response.status;
      if (response.status >= 500) {
        error.message = config.serverErrorMessage;
      } else {
        error = { ...error, ...response.data };
      }
    } else {
      error.status = 600;
      error.message = config.connectErrorMessage;
    }
    return error;
  };

  return new Promise((resolve, reject) => {
    axios(options)
      .then(response => resolve(response.data))
      .catch(error => reject(errorHandler(error)));
  });
};

export default request;
