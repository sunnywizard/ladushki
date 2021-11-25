import React from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import { NavLink } from 'react-router-dom';
import Type from 'prop-types';
import ImgSettings from '../../../theme/images/account/img-settings.svg';
import Hat from '../../../theme/images/account/hat.svg';
import config from '../../../config';
import Loader from '../../common/loader';
import '../../../theme/styles/settings.scss';

const StudentHeader = ({ profile }) => {
const name = profile.user ? profile.user.name : '';
const fio = name.split(' ');
  return (
    <>
      <section className="section section_fullwidth">
        <div className="student-settings">
          <GridRow>
            <GridCol width={{ mobile: 0, tablet: 6, desktop:2 }}>
              <div className="">
                {profile.fetching ? (
                  <Loader />
                ) : profile.user ? (
                  <img
                    style={{ width:'144px' }}
                    src={`${config.baseUrl}/avatars/${
                      profile.user.image
                    }?${Date.now().toString()}`}
                    alt={profile.user.name}
                  />
                ) : null}
              </div>
            </GridCol>
            <GridCol
              className=""
              width={{ mobile: 12, tablet: 12, desktop:5 }}
            >
              <div className="">
                <div className="">
                  <NavLink className="link link_third" to="/my/student">
                    <img
                      src={ImgSettings}
                      style={{ margin:'0 6px -6px 0' }}
                      alt=""
                    />
                    Настройки
                  </NavLink>
                </div>
                {name !== '' && (
                  <h1 className="about-h1">
                    {fio[0]}
                    <br />
                    {`${fio[1] ? fio[1] : ''} ${fio[2] ? fio[2] : ''}`}
                  </h1>
                )}
                <img className="starsize" src={Hat} alt="" />
                <img className="starsize" src={Hat} alt="" />
                <img className="starsize" src={Hat} alt="" />
                <img className="starsize" src={Hat} alt="" />
                <img className="starsize" src={Hat} alt="" />
              </div>
            </GridCol>
            <GridCol width={{ mobile: 12, tablet: 12, desktop:5 }}>
              <div className="info-lk">
                <div className="info-lk-contact">
                  <div className="info-lk-contact-title">Личные данные</div>
                  {profile.user && (
                    <ul>
                      <li>{profile.user.email}</li>
                      <li>
                        {profile.user.phone.replace(
                          /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
                          '+$1-$2-$3-$4-$5'
                        )}
                      </li>
                    </ul>
                  )}
                </div>
                <div className="info-lk-soc">
                  <div className="info-lk-soc-title">В соцсетях</div>
                </div>
              </div>
            </GridCol>
          </GridRow>
        </div>
        <br />
        <div className="hr2" />
      </section>
    </>
  );
};
StudentHeader.propTypes = {
  profile: Type.object.isRequired,
};
export default StudentHeader;
