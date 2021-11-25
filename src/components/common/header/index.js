/* eslint-disable import/extensions */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import Link from 'arui-feather/link';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../../theme/images/logo-unit.png';
import writer from '../../../theme/images/account/writer.svg';
import writerc from '../../../theme/images/account/writerc.svg';
import person from '../../../theme/images/account/person.svg';
import personcolor from '../../../theme/images/account/personcolor.svg';
import door from '../../../theme/images/account/door.svg';
import doorcolor from '../../../theme/images/account/doorcolor.svg';
import cart from '../../../theme/images/account/cart.svg';
import cartcolor from '../../../theme/images/account/cartcolor.svg';
import HeaderMenu from '../headermenu';
import SignInOrSignUpDialog from '../../site/dialogs/signinorsignup';
import { getSelf, logout } from '../../../core/actions/session';
import AiOutlineShoppingCart from '../../../theme/images/icons/aioutlineshoppingcart.svg';
import './styles.scss';
import config from '../../../config';

const HeaderBody = () => {
  const toggleMenu = () => {
    document.querySelector('.burger-line').classList.toggle('burger-active');
    document.querySelector('#menu').classList.toggle('open_menu');
  };

  const profile = useSelector((state) => state.profile.profile);
  let purchases = '';
  if (profile !== null) {
    const { requests } = profile;
    purchases = requests;
  }

  const columnStyle = {
    justifyContent: 'center',
    display: 'flex',
    width: '50%',
  };

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const session = useSelector((state) => state.session);

  const navTo = (to) => () => {
    dispatch(getCoursesByTitle());
    dispatch(getTeachersByTitle());
    dispatch(getCategoriesByTitle());
    setIsOpenMenu(false);
    setIsOpenMenuMobile(false);
    document.body.style.overflow = '';
    navigationTo(to);
  };

  const handleCloseDialog = () => {
    dispatch({ type: 'AUTH_SHOW_DIALOG', payload: false });
    setIsOpen(false);
  };

  const handleAuth = () => {
    dispatch(getSelf('self'));
  };

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <section style={{ backgroundColor: '#aad7ac' }}>
      <header className="han-header">
        <div className="subheader">
          <a href="/">
            <img width="120px" src={logo} alt="Ladamed" className="logo" />
          </a>

        </div>

        <div className="subheader flex-g">

          <NavLink to="/онлайн-запись">
            <span className="record">
              <img 
                className=""
                width="50vw"
                height="auto"
                src={writer} 
                title="Записаться на прием"
                alt="Записаться на прием"
                onMouseEnter={(e) => e.currentTarget.src = writerc}
                onMouseLeave={(e) => e.currentTarget.src = writer}
              /> 

            </span>
          </NavLink>

          <div className="login">
            { session.authenticated ? (
              location.pathname === '/my/lk'
              || location.pathname === '/my/student1' ? (
                <div className="cont-ainer" style={{ textAlign: 'end' }}>
                  <span className="email1 link1">
                    <Link className="linkicon linkicon_toplinklk" onClick={navTo('/my/lk')}>
                      <span className="tooltip tooltip-effect-2" title="Корзина">
                        <img 
                          className="search-pic1g" 
                          style={{ top: '5px' }}
                          width="40" 
                          height="40"
                          src={cart} 
                          alt="Корзина"
                          onMouseEnter={(e) => e.currentTarget.src = cartcolor}
                          onMouseLeave={(e) => e.currentTarget.src = cart}
                        />
                        {purchases !== 0 ? (
                          <span className="blackNews2 blackNews2-1">
                            {purchases}
                          </span>
                        )
                          : <span />}
                      </span>
                    </Link>

                    <Link onClick={handleLogout}>
                      <img 
                        className="interval" 
                        width="50" 
                        height="50" 
                        src={door} 
                        alt="Выход" 
                        title="Выход"
                        onMouseEnter={(e) => e.currentTarget.src = doorcolor}
                        onMouseLeave={(e) => e.currentTarget.src = door}
                      />
                    </Link>
                  </span>
                </div>
                ) : (
                  <>
                    {session.user.type === 'admin' 
                      ? (
                        <div className="" style={{ textAlign: 'end' }}>
                          <span className="email1 link1" title="Личный кабинет">
                            {session.user.type === 'admin' ? console.log('ADMIN auth===', session.user) : console.log('Добро пожаловать ===', session.user) }
                  
                            <NavLink
                              to="/my/lk1"
                              className="linkhead linkhead_toplinklk"
                            >
                              <span className="tooltip tooltip-effect-2">
                                <img
                                  className="avatar-pic_g"
                                  style={{ top: '5px' }}
                                  title={session.user.name}
                                  src={`${config.siteBaseUrl}/avatars/${session.user.image}`}
                                  alt="Личный кабинет"
                                />
                                <span className="tooltip-content1">
                                  <img
                                    className="avatar-pic_g"
                                    style={{ }}
                                    title={session.user.name}
                                    src={`${config.siteBaseUrl}/avatars/${session.user.image}`}
                                    alt="Личный кабинет"
                                  />
                                  <span className="tooltip-text1">
                                    <strong>321Аккаунт «LADUSHKI»</strong>
                                    <br />
                                    {session.user.name}
                                    <br />
                                    {session.user.email}
                                  </span>
                                </span>
                              </span>
                            </NavLink>
                 
                            <Link onClick={handleLogout}>
                              <img 
                                className="interval" 
                                width="50" 
                                height="50" 
                                src={door} 
                                alt="Выход" 
                                onMouseEnter={(e) => e.currentTarget.src = doorcolor}
                                onMouseLeave={(e) => e.currentTarget.src = door}
                              />
                            </Link>
                          </span>
                        </div>
                      )
                      : session.user && session.user.type && session.user.type === 'teacher' ? (
                     
                        <div className="" style={{ textAlign: 'end' }}>
                          <span className="email1 link1" title="Личный кабинет">
                            {session.user.type === 'admin' ? console.log('ADMIN===', session.user) : console.log('Добро пожаловать ===', session.user) }

                            <NavLink
                              to="/my/lk"
                              className="linkhead linkhead_toplinklk"
                            >
                              <span className="tooltip tooltip-effect-2">
                                <img
                                  className="avatar-pic_g"
                                  style={{ top: '5px' }}
                                  title={session.user.name}
                                  src={`${config.siteBaseUrl}/avatars/${session.user.image}`}
                                  alt="Личный кабинет"
                                />
                                <span className="tooltip-content1">
                                  <img
                                    className="avatar-pic_g"
                                    style={{ }}
                                    title={session.user.name}
                                    src={`${config.siteBaseUrl}/avatars/${session.user.image}`}
                                    alt="Личный кабинет"
                                  />
                                  <span className="tooltip-text1">
                                    <strong>Аккаунт «LADUSHKI»</strong>
                                    <br />
                                    {session.user.name}
                                    <br />
                                    {session.user.email}
                                  </span>
                                </span>
                              </span>
                            </NavLink>

                            <Link onClick={handleLogout}>
                              <img 
                                className="interval" 
                                width="50" 
                                height="50" 
                                src={door} 
                                alt="Выход" 
                                onMouseEnter={(e) => e.currentTarget.src = doorcolor}
                                onMouseLeave={(e) => e.currentTarget.src = door}
                              />
                            </Link>
                          </span>
                        </div>
                      ) : (
                        <div className="" style={{ textAlign: 'end' }}>
                          <span className="email1 link1" title="Личный кабинет">
                            <NavLink
                              to="/my/lk"
                              className="linkhead linkhead_toplinklk"
                            >
                              <span className="tooltip tooltip-effect-2">
                                <img
                                  className="avatar-pic_g"
                                  style={{ top: '5px' }}
                                  title={session.user.name}
                                  src={`${config.siteBaseUrl}/avatars/${session.user.image}`}
                                  alt="Личный кабинет"
                                />
                                <span className="tooltip-content1">
                                  <img
                                    className="avatar-pic_g"
                                    style={{ }}
                                    title={session.user.name}
                                    src={`${config.siteBaseUrl}/avatars/${session.user.image}`}
                                    alt="Личный кабинет"
                                  />
                                  <span className="tooltip-text1">
                                    <strong>Аккаунт «LADUSHKI»</strong>
                                    <br />
                                    {session.user.name}
                                    <br />
                                    {session.user.email}
                                  </span>
                                </span>
                              </span>
                            </NavLink>
                            <Link onClick={handleLogout}>
                              <img 
                                className="interval" 
                                width="50" 
                                height="50" 
                                src={door} 
                                alt="Выход" 
                                onMouseEnter={(e) => e.currentTarget.src = doorcolor}
                                onMouseLeave={(e) => e.currentTarget.src = door}
                              />
                            </Link>
                          </span>
                        </div>
                      )}
                  </>
                )
            ) : (
              <div className="" style={{ textAlign: 'end' }}>
                <Link className="linkopen linkopen_start" onClick={handleAuth}>            
                  <span className="email link1" title="Личный кабинет">
                    <img 
                      className=""
                      width="50vw"
                      height="auto"
                      src={person} 
                      alt="Личный кабинет"
                      onMouseEnter={(e) => e.currentTarget.src = personcolor}
                      onMouseLeave={(e) => e.currentTarget.src = person}
                    /> 
                  </span>
                </Link>
              </div>
            )}

            <HeaderMenu handleClick={toggleMenu} />
            <SignInOrSignUpDialog
              open={session.showDialog}
              onClose={handleCloseDialog}
            />
          </div>
          <div className="burger" onClick={() => toggleMenu()}>
            <div className="burger-line" />
          </div>

        </div>

      </header>
    </section>    
  );
};

export default HeaderBody;
