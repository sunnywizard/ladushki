import React, { useState } from 'react';
import AuthService from '../../../core/services/auth';
import UseSession from '../../../core/connectors/session';
import Loader from '../../../components/common/loader';

const LoginPage = props => {
  const [auth, setAuth] = useState({
    email: '',
    password: '',
  });

  const [showLoader, setShowLoader] = useState(false);

  const sendAuth = () => {
    setShowLoader(true);
    AuthService.getCsfr()
      .then(() => {
        AuthService.signIn(auth).then(
          setTimeout(() => {
            props.loginSuccess('loginPage');
            setShowLoader(false);
          }, 1000)
        );
      })
      .catch(e => console.log(e));
  };

  if (showLoader) {
    return <Loader />;
  }

  return (
    <>
      <h3>Пожалуйста авторизуйтесь</h3>
      <label htmlFor="email">Email</label>
      <input
        className="textbox"
        type="email"
        value={auth.email}
        id="email"
        onChange={e => setAuth({ ...auth, email: e.target.value })}
      />

      <label htmlFor="passw">Пароль</label>
      <input
        className="textbox"
        type="password"
        value={auth.passw}
        id="password"
        onChange={e => setAuth({ ...auth, password: e.target.value })}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            sendAuth();
          }
        }}
      />

      <button className="button button_secondary" onClick={() => sendAuth()}>
        Авторизоваться
      </button>
    </>
  );
};

export default UseSession(LoginPage);
