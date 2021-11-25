import request from './request';

/**
 * SigIn
 * @param {object} data
 * @param {string} data.username
 * @param {string} data.password
 * @returns {Promise<any>}
 */
const signIn = data => request({ method: 'post', url: '/login', data });
/**
 * refreshToken
 * @param data
 * @returns {Promise | Promise<unknown>}
 */
const refreshToken = data => request({ method: 'post', url: '/login/refresh', data });

/**
 * SignUp
 * @param {object} data
 * @param {string} data.email
 * @param {string} data.password
 * @param {string} data.name
 * @param {string} data.phone
 * @param {string} data.type
 * @returns {Promise<any>}
 */
const signUp = data => request({ method: 'post', url: '/register', data });

/**
 * Sign up confirm
 * @param {string} code
 * @returns {Promise<any>}
 */
const signUpConfirm = code => request({ method: 'get', url: `/register/validate/${code}` });

/**
 * Export
 */
export default {
  signIn,
  refreshToken,
  signUp,
  signUpConfirm,
};
