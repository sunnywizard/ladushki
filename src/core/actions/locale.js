import Cookie from 'js-cookie';

export const types = {
  LOCALE_SET: 'LOCALE_SET',
};

export const setLocale = lang => (dispatch) => {
  Cookie.set('lang', lang);
  dispatch({ type: types.LOCALE_SET, lang });
};
