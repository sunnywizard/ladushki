import { types } from '../actions/locale';

export default function locale(state = { lang: 'en' }, action = {}) {
  switch (action.type) {
    case types.LOCALE_SET:
      return { lang: action.lang };
    default:
      return state;
  }
}
