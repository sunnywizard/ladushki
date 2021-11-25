import request from './request';

/** Get profile */
const getProfile = () => request({ method: 'get', url: '/profile' });

/** Update profile */
const update = data => request({ method: 'put', url: '/profile', data });

/** Update Avatar */
const updateAvatar = data =>
  request({
    method: 'post',
    url: '/profile/image',
    data,
    'content-type': 'multipart/form-data',
  });

/** Delete avatar */
const deleteAvatar = () =>
  request({ method: 'delete', url: '/profile/avatar' });

/** Get requests from students */
const getRequests = () => request({
  method: 'get',
  url: '/requests' });

const getRequestsByOptions = ( options = '' ) => request({
  method: 'get',
  url: '/requests' + options
});

// +'&option=' + options.options
export default {
  getProfile,
  deleteAvatar,
  updateAvatar,
  update,
  getRequests,
  getRequestsByOptions
};
