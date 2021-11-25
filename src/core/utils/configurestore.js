import { createBrowserHistory, createMemoryHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import createRootReducer from '../reducers';

export default ({ initialState, url }) => {
  const isServer = typeof window === 'undefined';
  const history = isServer ? createMemoryHistory({ initialEntries: [url || '/'] }) : createBrowserHistory();
  const middlewares = [thunk, routerMiddleware(history)];
  const composeEnhancers = (__DEV__ && !isServer && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const enhancers = composeEnhancers(applyMiddleware(...middlewares));
  const store = createStore(createRootReducer(history), initialState || {}, enhancers);
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      try {
        const createNextReducer = require('../reducers').default;
        store.replaceReducer(createNextReducer(history));
      } catch (error) {
        console.error(`==> 😭  Reducer hot reloading error ${error}`);
      }
    });
  }
  return { store, history };
};
