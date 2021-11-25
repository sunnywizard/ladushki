import {types} from '../actions/search';

const initialState = {
  search: false,
  searchText: ''
};

export default (state = initialState, action) => {
  switch (action.type) {

    case types.SEARCH:
      return {
        ...state,
        search: action.payload.bool,
        searchText: action.payload.searchText
      };

    default:
      return state;
  }
}