export const types = {
    SEARCH: 'SEARCH'
  };

export const searching = (bool = false, searchText = '') => (dispatch) => {
  if (searchText !== '') {
    dispatch({ type: types.SEARCH, payload: { bool, searchText } });
  } else {
    dispatch({ type: types.SEARCH, payload: { bool: false, searchText } });
  }
};