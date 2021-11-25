import FilialServices from '../services/filial';

export const types = {
  FILIAL_REQUEST: 'FILIAL_REQUEST',
  FILIAL_FAILURE: 'FILIAL_FAILURE',
  FILIAL_SUCCESS: 'FILIAL_SUCCESS',

  FILIALS_REQUEST: 'FILIALS_REQUEST',
  FILIALS_FAILURE: 'FILIALS_FAILURE',
  FILIALS_SUCCESS: 'FILIALS_SUCCESS',

  RECORDS_REQUEST: 'RECORDS_REQUEST',
  RECORDS_FAILURE: 'RECORDS_FAILURE',
  RECORDS_SUCCESS: 'RECORDS_SUCCESS',

  CREATE_RECORD_REQUEST: 'CREATE_RECORD_REQUEST',
  CREATE_RECORD_FAILURE: 'CREATE_RECORD_FAILURE',
  CREATE_RECORD_SUCCESS: 'CREATE_RECORD_SUCCESS',

  DELETE_RECORD_REQUEST: 'DELETE_RECORD_REQUEST',
  DELETE_RECORD_FAILURE: 'DELETE_RECORD_FAILURE',
  DELETE_RECORD_SUCCESS: 'DELETE_RECORD_SUCCESS',

  DOCTORS_REQUEST: 'DOCTORS_REQUEST',
  DOCTORS_FAILURE: 'DOCTORS_FAILURE',
  DOCTORS_SUCCESS: 'DOCTORS_SUCCESS',

  CREATE_DOCTOR_REQUEST: 'CREATE_DOCTOR_REQUEST',
  CREATE_DOCTOR_FAILURE: 'CREATE_DOCTOR_FAILURE',
  CREATE_DOCTOR_SUCCESS: 'CREATE_DOCTOR_SUCCESS',

  UPDATE_DOCTOR_REQUEST: 'UPDATE_DOCTOR_REQUEST',
  UPDATE_DOCTOR_FAILURE: 'UPDATE_DOCTOR_FAILURE',
  UPDATE_DOCTOR_SUCCESS: 'UPDATE_DOCTOR_SUCCESS',

  STORE_SCHEDULE_REQUEST: 'STORE_SCHEDULE_REQUEST',
  STORE_SCHEDULE_FAILURE: 'STORE_SCHEDULE_FAILURE',
  STORE_SCHEDULE_SUCCESS: 'STORE_SCHEDULE_SUCCESS',

  STORE_SPEC_REQUEST: 'STORE_SPEC_REQUEST',
  STORE_SPEC_FAILURE: 'STORE_SPEC_FAILURE',
  STORE_SPEC_SUCCESS: 'STORE_SPEC_SUCCESS',

  SPECS_REQUEST: 'SPEC_REQUEST',
  SPECS_FAILURE: 'SPEC_FAILURE',
  SPECS_SUCCESS: 'SPEC_SUCCESS',

  UPDATE_SPEC_REQUEST: 'UPDATE_SPEC_REQUEST',
  UPDATE_SPEC_FAILURE: 'UPDATE_SPEC_FAILURE',
  UPDATE_SPEC_SUCCESS: 'UPDATE_SPEC_SUCCESS',

  DELETE_SPEC_REQUEST: 'DELETE_SPEC_REQUEST',
  DELETE_SPEC_SUCCESS: 'DELETE_SPEC_SUCCESS',
  DELETE_SPEC_FAILURE: 'DELETE_SPEC_FAILURE',

  UPDATE_SERVICE_REQUEST: 'UPDATE_SERVICE_REQUEST',
  UPDATE_SERVICE_FAILURE: 'UPDATE_SERVICE_FAILURE',
  UPDATE_SERVICE_SUCCESS: 'UPDATE_SERVICE_SUCCESS',

  SERVICES_REQUEST: 'SERVICES_REQUEST',
  SERVICES_FAILURE: 'SERVICES_FAILURE',
  SERVICES_SUCCESS: 'SERVICES_SUCCESS',

  ASSIGN_SERVICE_DOCTOR_REQUEST: 'ASSIGN_SERVICE_DOCTOR_REQUEST',
  ASSIGN_SERVICE_DOCTOR_FAILURE: 'ASSIGN_SERVICE_DOCTOR_FAILURE',
  ASSIGN_SERVICE_DOCTOR_SUCCESS: 'ASSIGN_SERVICE_DOCTOR_SUCCESS',

  CREATE_SERVICE_REQUEST: 'STORE_SERVICE_REQUEST',
  CREATE_SERVICE_FAILURE: 'STORE_SERVICE_FAILURE',
  CREATE_SERVICE_SUCCESS: 'STORE_SERVICE_SUCCESS',

  DELETE_DOCTOR_REQUEST: 'DELETE_DOCTOR_REQUEST',
  DELETE_DOCTOR_SUCCESS: 'DELETE_DOCTOR_SUCCESS',
  DELETE_DOCTOR_FAILURE: 'DELETE_DOCTOR_FAILURE',

  DELETE_SERVICE_REQUEST: 'DELETE_SERVICE_REQUEST',
  DELETE_SERVICE_SUCCESS: 'DELETE_SERVICE_SUCCESS',
  DELETE_SERVICE_FAILURE: 'DELETE_SERVICE_FAILURE',
};

export const getFilial = (id = 1) => (dispatch) => {
  dispatch({ type: types.FILIAL_REQUEST });
  FilialServices.getFilial(id)
    .then((response) => {
      dispatch({
        type: types.FILIAL_SUCCESS,
        payload: { data: response.data },
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getFilials = () => (dispatch) => {
  dispatch({ type: types.FILIALS_REQUEST });
  FilialServices.getFilials()
    .then((response) => {
      dispatch({
        type: types.FILIALS_SUCCESS,
        payload: { data: response },
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getRecords = (id = 1, forAdmin = false) => (dispatch) => {
  dispatch({ type: types.RECORDS_REQUEST });
  if (forAdmin) {
    FilialServices.getAdminEvents(id)
      .then((response) => {
        dispatch({
          type: types.RECORDS_SUCCESS,
          payload: { data: response.data },
        });
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    FilialServices.getEvents(id)
      .then((response) => {
        dispatch({
          type: types.RECORDS_SUCCESS,
          payload: { data: response.data },
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
};

export const getDoctors = (id = 1) => (dispatch) => {
  dispatch({ type: types.DOCTORS_REQUEST });
  FilialServices.getDoctors(id)
    .then((response) => {
      dispatch({
        type: types.DOCTORS_SUCCESS,
        payload: { data: response.data },
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getServices = () => (dispatch) => {
  dispatch({ type: types.SERVICES_REQUEST });
  FilialServices.getServices()
    .then((response) => {
      dispatch({
        type: types.SERVICES_SUCCESS,
        payload: { data: response.data },
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getSpecs = () => (dispatch) => {
  dispatch({ type: types.SPECS_REQUEST });
  FilialServices.getSpecs()
    .then((response) => {
      dispatch({
        type: types.SPECS_SUCCESS,
        payload: { data: response.data },
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

export const storeSchedule = (payload) => (dispatch) => {
  dispatch({ type: types.STORE_SCHEDULE_REQUEST });
  FilialServices.storeSchedule(payload)
    .then(() => {
      dispatch({
        type: types.STORE_SCHEDULE_SUCCESS,
        payload: { ...payload },
      });
    })
    .catch((error) => {
      dispatch({
        type: types.STORE_SCHEDULE_FAILURE,
        payload: { error },
      });
    });
};

export const storeSpec = (payload) => (dispatch) => {
  dispatch({ type: types.STORE_SPEC_REQUEST });
  FilialServices.storeSpec(payload)
    .then((response) => {
      dispatch({
        type: types.STORE_SPEC_SUCCESS,
        payload: { ...response },
      });
    })
    .catch((error) => {
      dispatch({
        type: types.STORE_SPEC_FAILURE,
        payload: { error },
      });
    });
};

export const storeService = (payload) => (dispatch) => {
  dispatch({ type: types.CREATE_SERVICE_REQUEST });
  FilialServices.storeService(payload)
    .then((response) => {
      dispatch({
        type: types.CREATE_SERVICE_SUCCESS,
        payload: { ...response },
      });
    })
    .catch((error) => {
      dispatch({
        type: types.CREATE_SERVICE_FAILURE,
        payload: { error },
      });
    });
};

export const storeRecord = (payload) => (dispatch) => {
  console.log('---WRITE!!!!-----');
  // alert('---alert WRITE!!!!-----');
  // let vega = true;
  dispatch({ type: types.CREATE_RECORD_REQUEST });
  console.log('---before storeEvent-----');
  FilialServices.storeEvent(payload)
  // alert('---1111alert WRITE!!!!-----');
    .then((response) => {
      // console.log('----BETA=====', vega);
      // alert('---1111alert WRITE!!!!-----', response);
      dispatch({
        type: types.CREATE_RECORD_SUCCESS,
        payload: { ...response },
      });
      console.log('---response WRITE!!!!-----', response);
      // alert('---222alert WRITE!!!!-----');
      document.location.assign('/rec');
      // document.location.href = '/успешная-запись';
    })

    // console.log('----SEEEEE=====', vega);
    .catch((error) => {
      // alert('---alert ERROR!!!!-----');
      // vega = false;
      dispatch({
        type: types.CREATE_RECORD_FAILURE,
        payload: { error },
      });

      // console.log('----ALPHA=====', vega);
      console.log('---ERROR!!!!-----', error);
      // alert('---end ERROR!!!!-----');

      // document.location.assign('/notrec');
    });
};

export const assignService = (payload) => (dispatch) => {
  dispatch({ type: types.ASSIGN_SERVICE_DOCTOR_REQUEST });
  FilialServices.assignService(payload)
    .then((response) => {
      dispatch({
        type: types.ASSIGN_SERVICE_DOCTOR_SUCCESS,
        payload: { ...response },
      });
    })
    .catch((error) => {
      dispatch({
        type: types.ASSIGN_SERVICE_DOCTOR_FAILURE,
        payload: { error },
      });
    });
};

export const storeDoctor = (payload) => (dispatch) => {
  dispatch({ type: types.CREATE_DOCTOR_REQUEST });
  FilialServices.storeDoctor(payload)
    .then((response) => {
      dispatch({
        type: types.CREATE_DOCTOR_SUCCESS,
        payload: { ...response },
      });
    })
    .catch((error) => {
      dispatch({
        type: types.CREATE_DOCTOR_FAILURE,
        payload: { error },
      });
    });
};

export const updateDoctor = (payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_DOCTOR_REQUEST });
  FilialServices.updateDoctor(payload)
    .then((response) => {
      dispatch({
        type: types.UPDATE_DOCTOR_SUCCESS,
        payload: { ...response },
      });
    })
    .catch((error) => {
      dispatch({
        type: types.UPDATE_DOCTOR_FAILURE,
        payload: { error },
      });
    });
};

export const updateSpec = (payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_SPEC_REQUEST });
  FilialServices.updateSpecService(payload)
    .then(() => {
      dispatch({
        type: types.UPDATE_SPEC_SUCCESS,
        payload: { ...payload },
      });
    })
    .catch((error) => {
      dispatch({
        type: types.UPDATE_SPEC_FAILURE,
        payload: { error },
      });
    });
};

export const updateService = (payload) => (dispatch) => {
  console.log('ACTION FILIAL====', payload);
  dispatch({ type: types.UPDATE_SERVICE_REQUEST });
  FilialServices.updateService(payload)
    .then(() => {
      dispatch({
        type: types.UPDATE_SERVICE_SUCCESS,
        payload: { ...payload },
      });
    })
    .catch((error) => {
      dispatch({
        type: types.UPDATE_SERVICE_FAILURE,
        payload: { error },
      });
    });
  console.log('2222ACTION FILIAL====', payload); 
};

export const deleteRecord = (recordId) => (dispatch) => {
  dispatch({ type: types.DELETE_RECORD_REQUEST });
  FilialServices.deleteEvent(recordId)
    .then(() => {
      dispatch({
        type: types.DELETE_RECORD_SUCCESS,
        payload: recordId,
      });
    })
    .catch((error) => {
      dispatch({
        type: types.DELETE_RECORD_FAILURE,
        payload: { error },
      });
    });
};

    export const deleteDoctor = doctorId => dispatch => {
      dispatch({ type: types.DELETE_DOCTOR_REQUEST });
      FilialServices.deleteDoctor(doctorId)
        .then(() => {
          dispatch({
            type: types.DELETE_DOCTOR_SUCCESS,
            payload: doctorId,
          });
        })
        .catch(error => {
          dispatch({
            type: types.DELETE_RECORD_FAILURE,
            payload: { error },
          });
        });
      }

        export const deleteService = serviceId => dispatch => {
          console.log(serviceId);
          dispatch({ type: types.DELETE_SERVICE_REQUEST });
          FilialServices.deleteService(serviceId)
            .then(() => {
              dispatch({
                type: types.DELETE_SERVICE_SUCCESS,
                payload: serviceId,
              });
            })
            .catch(error => {
              dispatch({
                type: types.DELETE_SERVICE_FAILURE,
                payload: { error },
              });
            });
        }

        export const deleteSpec = specId => dispatch => {
          console.log(specId);
          dispatch({ type: types.DELETE_SPEC_REQUEST });
          FilialServices.deleteSpec(specId)
            .then(() => {
              dispatch({
                type: types.DELETE_SPEC_SUCCESS,
                payload: specId,
              });
            })
            .catch(error => {
              dispatch({
                type: types.DELETE_SPEC_FAILURE,
                payload: { error },
              });
            });
        }
      
