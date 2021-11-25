import request from './request';

/** Message from site contact-form */
const sendEmail = data => request({ method: 'post', url: '/email', data });

export default {
  sendEmail
};
