import { types } from '../actions/filial';

const initialState = {
  fetching: false,
  data: null,
  list: null,
  records: null,
  doctors: null,
  services: null,
  specs: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FILIAL_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case types.FILIAL_FAILURE:
      return {
        ...state,
        fetching: false,
        data: null,
        error: action.payload.error,
      };

    case types.FILIAL_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        data: { ...action.payload.data },
      };

    case types.FILIALS_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case types.FILIALS_FAILURE:
      return {
        ...state,
        fetching: false,
        list: null,
        error: action.payload.error,
      };

    case types.FILIALS_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: [...action.payload.data],
      };
    case types.RECORDS_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case types.RECORDS_FAILURE:
      return {
        ...state,
        fetching: false,
        records: null,
        error: action.payload.error,
      };

    case types.RECORDS_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        records: [...action.payload.data],
      };
    case types.DOCTORS_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case types.DOCTORS_FAILURE:
      return {
        ...state,
        fetching: false,
        doctors: null,
        error: action.payload.error,
      };

    case types.DOCTORS_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        doctors: [...action.payload.data],
      };

    case types.CREATE_DOCTOR_REQUEST:
      return {
        ...state,
        error: null,
      };

    case types.CREATE_DOCTOR_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    case types.CREATE_DOCTOR_SUCCESS:
      return {
        ...state,
        error: null,
        doctors: [...state.doctors, action.payload],
      };

    case types.CREATE_RECORD_REQUEST:
      return {
        ...state,
        error: null,
      };

    case types.CREATE_RECORD_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    case types.CREATE_RECORD_SUCCESS:
      return {
        ...state,
        error: null,
        records: [...state.records, action.payload],
      };

    case types.UPDATE_DOCTOR_REQUEST:
      return {
        ...state,
        error: null,
      };

    case types.UPDATE_DOCTOR_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    case types.UPDATE_DOCTOR_SUCCESS:
      const doc = state.doctors.find((doctor) => doctor.id === action.payload.id);
      doc.status = action.payload.status;
      return {
        ...state,
        error: null,
      };

    case types.STORE_SCHEDULE_REQUEST:
      return {
        ...state,
        error: null,
      };
    case types.STORE_SCHEDULE_SUCCESS:
      const newDoctors = [...state.doctors];
      newDoctors.forEach((doctor) => {
        if (doctor.id === action.payload.doctorId) {
          doctor.specs.data.forEach((spec) => {
            if (spec.id === action.payload.specId) {
              spec.businessHours = JSON.stringify(action.payload.businessHours);
            }
          });
        }
      });

      return {
        ...state,
        doctors: [...newDoctors],
        error: null,
      };
    case types.STORE_SCHEDULE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    case types.STORE_SPEC_REQUEST:
      return {
        ...state,
        error: null,
      };
    case types.STORE_SPEC_SUCCESS:
      const storeSpecs = [...state.data.specs.data];
      const copySpecs = storeSpecs.map((a) => ({ ...a }));
      copySpecs.push({
        id: action.payload.id,
        specName: action.payload.name,
        doctors: { data: [] },
      });

      return {
        ...state,
        data: {
          ...state.data,
          specs: { ...state.data.specs, data: copySpecs },
        },
        error: null,
      };
    case types.STORE_SPEC_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    case types.UPDATE_SPEC_REQUEST:
      return {
        ...state,
        error: null,
      };
    case types.UPDATE_SPEC_SUCCESS:
      const newSpecs = [...state.data.specs.data];
      const copySpec = newSpecs.map((a) => ({ ...a }));
      copySpec.forEach((spec) => {
        if (spec.id === action.payload.specId) {
          spec.specName = action.payload.name;
        }
      });

      return {
        ...state,
        data: { ...state.data, specs: { ...state.data.specs, data: copySpec } },
        error: null,
      };
    case types.UPDATE_SPEC_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    case types.DELETE_RECORD_REQUEST:
      return {
        ...state,
        error: null,
      };
    case types.DELETE_RECORD_SUCCESS:
      const records = [
        ...state.records.filter((record) => record.id !== action.payload),
      ];

      return {
        ...state,
        records,
        error: null,
      };
    case types.DELETE_RECORD_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    case types.SERVICES_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case types.SERVICES_FAILURE:
      return {
        ...state,
        fetching: false,
        services: null,
        error: action.payload.error,
      };

    case types.SERVICES_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        services: [...action.payload.data],
      };

      case types.DELETE_SERVICE_REQUEST:
        return {
          ...state,
          error: null,
        };
      case types.DELETE_SERVICE_SUCCESS:
        const service = [
          ...state.services.filter((service) => service.id !== action.payload),
        ];
  
        return {
          ...state,
          services,
          error: null,
        };
      case types.DELETE_SERVICE_FAILURE:
        return {
          ...state,
          error: action.payload.error,
        };
    case types.SPECS_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case types.SPECS_FAILURE:
      return {
        ...state,
        fetching: false,
        specs: null,
        error: action.payload.error,
      };

    case types.SPECS_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        specs: [...action.payload.data],
      };

      case types.DELETE_SPEC_REQUEST:
        return {
          ...state,
          error: null,
        };
      case types.DELETE_SPEC_SUCCESS:
        const specs = [
          ...state.specs.filter((spec) => spec.id !== action.payload),
        ];
  
        return {
          ...state,
          specs,
          error: null,
        };
      case types.DELETE_SPEC_FAILURE:
        return {
          ...state,
          error: action.payload.error,
        };

    case types.CREATE_SERVICE_REQUEST:
      return {
        ...state,
        error: null,
      };

    case types.CREATE_SERVICE_SUCCESS:
      return {
        ...state,
        services: [...state.services, action.payload.data],
        error: null,
      };

    case types.CREATE_SERVICE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    case types.ASSIGN_SERVICE_DOCTOR_REQUEST:
      return {
        ...state,
        error: null,
      };

    case types.ASSIGN_SERVICE_DOCTOR_SUCCESS:
      return {
        ...state,
        error: null,
      };

    case types.ASSIGN_SERVICE_DOCTOR_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    case types.UPDATE_SERVICE_REQUEST:
      return {
        ...state,
        error: null,
      };
    case types.UPDATE_SERVICE_SUCCESS:
      const newService = [...state.data.service.data];
      const copyService = newService.map((a) => ({ ...a }));
      console.log('reduce FILIAL====', copyService);
      copyService.forEach((service) => {
        if (service.id === action.payload.serviceId) {
          service.serviceName = action.payload.name;
        }
      });
  
      return {
        ...state,
        data: { ...state.data, service: { ...state.data.service, data: copyService } },
        error: null,
      };
    case types.UPDATE_SERVICE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
