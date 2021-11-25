import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import session from './session';
import locale from './locale';
import notification from './notification';
import teachers from './teachers';
import courses from './courses';
import categories from './categories';
import profile from './profile';
import search from './search';
import message from './message';
import filial from './filial';


const reducers = {
  session,
  locale,
  notification,
  teachers,
  courses,
  categories,
  profile,
  search,
  message,
  filial,
};

export default history => combineReducers({ router: connectRouter(history), ...reducers });
