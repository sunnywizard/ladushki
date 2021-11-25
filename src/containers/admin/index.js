import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from './dashboard';
import Header from '../../components/common/header';
import LoginPage from './login';
import NotFound from '../site/notfound';
import PrintList from './printlist';
import UseSession from '../../core/connectors/session';
import Enter from './enter';

/**
 * Admin
 */
const Admin = props => {
  const { authenticated } = props.session;
  return (
    <>
      {props.location.pathname &&
      props.location.pathname.includes('/admin/print-list') ? (
        <Route path="/admin/print-list/:doc/:date" component={PrintList} />
      ) : (
        <>
          <Header />
          <main className="layout__main">
            <section className="section">
              <Switch>
                <Route exact path="/admin" component={Enter} />
                <Route
                  path="/admin/dashboard"
                  render={() => {
                    if (authenticated) {
                      return <Dashboard />;
                    } else {
                      return <Redirect to="/admin" />;
                    }
                  }}
                />
                <Route exact path="/admin/login" component={LoginPage} />
                <Route component={NotFound} />
              </Switch>
            </section>
          </main>
        </>
      )}
    </>
  );
};

export default UseSession(Admin);
