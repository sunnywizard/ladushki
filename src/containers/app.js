import React from 'react';
import Type from 'prop-types';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Helmet from 'react-helmet';
import { hot } from 'react-hot-loader';
import config from '../config';
/**
 * Application component
 */
function App({ route: { routes } }) {
  return (
    <>
      <Helmet {...config.app}>
        <link rel="apple-touch-icon" href={require('../theme/images/apple-touch-icon.png')} />
        <link rel="apple-touch-icon-precomposed" href={require('../theme/images/apple-touch-icon.png')} />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Helmet>
      <Switch>
        {renderRoutes(routes)}
      </Switch>
    </>
  );
}
App.propTypes = {
  route: Type.object.isRequired,
};
export default hot(module)(App);

