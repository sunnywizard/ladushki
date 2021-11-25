import request from './request';

const getFilial = code => request({ method: 'get', url: `/filial/${code}` });
const getFilials = () => request({ method: 'get', url: '/filials' });

const getEvents = code => request({ method: 'get', url: `/events/${code}` });
const getAdminEvents = code => request({ method: 'get', url: `/admin-events/${code}` });
const getDoctors = code => request({ method: 'get', url: `/doctors/${code}` });

const storeEvent = data => request({ method: 'post', url: '/event', data });

const storeSchedule = data =>
  request({ method: 'post', url: '/schedule', data });
const storeSpec = data => request({ method: 'post', url: '/spec', data });
const getSpecs = () => request({ method: 'get', url: '/specs' });

const getServices = () => request({ method: 'get', url: '/services' });
const storeService = data => request({ method: 'post', url: '/service', data });
const assignService = data => request({ method: 'post', url: '/assign-service', data });

const storeDoctor = data =>
  request({ method: 'post', url: `/doctors/${data.filialId}`, data });

const deleteDoctor = data =>
  request({ method: 'delete', url: `/doctor/${data}`});

const updateDoctor = data =>
  request({ method: 'put', url: `/doctor/${data.doctorId}`, data });

const updateSpecService = data =>
  request({ method: 'put', url: `/spec/${data.specId}`, data });

const deleteEvent = id => request({ method: 'delete', url: `event/${id}` });

const deleteService = id => request({ method: 'delete', url: `service/${id}` });

const updateService = data => request({ method: 'put', url: `/service/${data.serviceId}`, data });

const deleteSpec = id => request({ method: 'delete', url: `spec/${id}` });

/**
 * Export
 */
export default {
  getFilial,
  getFilials,

  getEvents,
  getAdminEvents,
  storeEvent,
  deleteEvent,

  getDoctors,
  storeDoctor,
  updateDoctor,
  storeSchedule,

  getSpecs,
  storeSpec,

  getServices,
  storeService,
  assignService,

  updateSpecService,
  updateService,

  deleteDoctor,
  deleteService,
  deleteSpec,
};
