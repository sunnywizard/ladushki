import React, { useState } from 'react';
import Type from 'prop-types';
import SlideDown from 'arui-feather/slide-down';
import GridCol from 'arui-feather/grid-col';
import GridRow from 'arui-feather/grid-row';
import Button from 'arui-feather/button';
import { Link, NavLink } from 'react-router-dom';
import RequestForm from '../../site/forms/requestform_reg/index_cw';
import FaChevronRight from '../../../theme/images/icons/fachevronright.svg';
import FaTelegramPlane from '../../../theme/images/icons/fatelegramplane.svg';
import FaViber from '../../../theme/images/icons/faviber.svg';
import FaWhatsapp from '../../../theme/images/icons/fawhatsapp.svg';
import FaApple from '../../../theme/images/icons/faapple.svg';
import FaAndroid from '../../../theme/images/icons/faandroid.svg';
import AiOutlineMail from '../../../theme/images/icons/aioutlinemail.svg';
import './styles.scss';

/**
 * Footer for home page MOBILE
 */
// export default function Footermobile( { navigationTo, isExpanded } ) {
export default function Footermobile( ) {
const [openPanelNumber, setOpenPanelNumber] = useState(0);
const handleClickExpand = (panelNumber) => {
const newOpenPanelNumber = openPanelNumber !== panelNumber ? panelNumber : 0;
  setOpenPanelNumber(newOpenPanelNumber);
};
  return (
    <footer className="footer-main">
      <section className="">
        <div className="">
          <svg className="" viewBox="0 0 1920 106" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1920 53.42C1865.69 55.67 1803.65 57 1730.37 57C1250.37 57 1250.37 -7.62939e-06 770.37 -7.62939e-06C363.645 -7.62939e-06 301.5 40.91 0 53.4V105.18L1920 105.18V53.42Z" fill="#24AFEF" fillOpacity="0.2" />
            <path d="M1920 80.87C1854.81 86.56 1778.16 90.12 1682.37 90.12C1202.37 90.12 1202.37 0.87999 722.37 0.87999C338.175 0.87999 261.45 58.04 0 80.88V105.18L1920 105.18V80.87Z" fill="#24AFEF" fillOpacity="0.6" />
            <path d="M1920 105.18V101.78C1877.7 103.58 1830.9 104.59 1778.37 104.59C1298.37 104.59 1298.37 20.29 818.37 20.29C390.87 20.29 344.115 87.14 0 101.78V105.18L1920 105.18Z" fill="#24AFEF" />
          </svg>
        </div>
        <div className="footer_wrapper  footer__content__disclaimer">
          <div className="online-learning">
            <p className="warn-footer text-center" style={{ margintop:'-0px' }}>
              Получайте информацию о новостях, акциях, бонусах прямо на ваш почтовый ящик
            </p>
            <RequestForm formType="teacher" />
            <GridRow />
          </div>


          <section className="section section_fullwidth">
            <GridRow>
              <GridCol width={{ mobile: 12, tablet: 3, desktop:3 }}>
                <Button
                  className="buttonmenu-small buttonmenu-small_menu-mobile1"
                  onClick={() => handleClickExpand(1)}
                >
                  <u>Пользователям</u>
                  {'        '}
                  <img className="chevron-footer" width="14" height="auto" src={FaChevronRight} alt="Open menu" />
                </Button>
                <div className='row'>
                  <SlideDown isExpanded={openPanelNumber === 1}>
                    <div className="contact-media-footermobile" />
                    <Link to="/how-buy">Как купить товар?</Link>
                    <div className="contact-media-footermobile" />
                    <Link to="/how-sell">Как разместить товар?</Link>
                    <div className="contact-media-footermobile" />
                    <Link to="/сooperation">Как начать сотрудничество?</Link>
                    <div className="contact-media-footermobile" />
                    <Link to="/questions_answers">Вопросы и ответы</Link>
                    <div className="contact-media-footermobile" />
                    <Link to="/sale_rules">Правила продажи</Link>
                    <div className="contact-media" />
                    <div className="hr1" />
                  </SlideDown>
                </div>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 2, desktop:2 }}>
                <Button
                  className="buttonmenu-small buttonmenu-small_menu-mobile1"
                  onClick={() => handleClickExpand(2)}
                >
                  <u>Компания</u>
                  <img className="chevron-footer" width="14" height="auto" src={FaChevronRight} alt="Open menu" />
                </Button>
                <div className='row'>
                  <SlideDown isExpanded={openPanelNumber === 2}>
                    <div className="contact-media-footermobile" />
                    <Link to="/about">О нас</Link>
                    <div className="contact-media-footermobile" />
                    <Link to="/pressa">Пресс-центр</Link>
                    <div className="contact-media-footermobile" />
                    <Link to="/contacts">Контакты</Link>
                    <div className="contact-media-footermobile" />
                    <Link to="/carier">Карьера</Link>
                    <div className="contact-media" />
                    <div className="hr1" />
                  </SlideDown>
                </div>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 3, desktop:3 }}>
                <Button
                  className="buttonmenu-small buttonmenu-small_menu-mobile1"
                  onClick={() => handleClickExpand(3)}
                >
                  <u>Политика</u>
                  <img className="chevron-footer" width="12" height="auto" src={FaChevronRight} alt="Open menu" />
                </Button>
                <div className='row'>
                  <SlideDown isExpanded={openPanelNumber === 3}>
                    <div className="contact-media-footermobile" />
                    <Link to="/pravila-of-our-house">Политика Нашего Дома</Link>
                    <div className="contact-media-footermobile" />
                    <Link to="/terms-of-use">Правила использования</Link>
                    <div className="contact-media-footermobile" />
                    <Link to="/privacy-policy">Политика конфиденциальности</Link>
                    <div className="contact-media" />
                    <div className="hr1" />
                  </SlideDown>
                </div>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 2, desktop:2 }}>
                <Button
                  className="buttonmenu-small buttonmenu-small_menu-mobile1"
                  onClick={() => handleClickExpand(4)}
                >
                  <u>Партнерам</u>
                  <img className="chevron-footer" width="12" height="auto" src={FaChevronRight} alt="Open menu" />
                </Button>
                <div className='row'>
                  <SlideDown isExpanded={openPanelNumber === 4}>
                    <div className="contact-media-footermobile" />
                    <Link to="/third-party-policies">Политика партнера</Link>
                    <div className="contact-media-footermobile" />
                    <Link to="/partneritem">Условия программы</Link>
                    <div className="contact-media" />
                    <div className="hr1" />
                  </SlideDown>
                </div>
              </GridCol>
              <div className="contact-media" />
              <GridCol width={{ mobile: 12, tablet: 2, desktop:2 }}>
                <div className="footer-main-first" style={{ textDecoration: 'none' }}>Свяжитесь с нами</div>
                <a href="mailto:info@alcom.ru">
                  <img className="icon-color" width="12" height="12" src={AiOutlineMail} alt="Email" />                     
                  &nbsp;                
                  info@alcom.ru
                </a>
                <div className="footer-soc">
                  <div className="footer-soc-title" style={{ textDecoration: 'none' }}>Мы в соцсетях</div>
                  <a title="Viber" href="viber://chat?number=%2B79063342207">
                    <img className="" width="12" height="auto" src={FaViber} alt="Viber" />  
                  </a>
                  <a title="Telegram" href="tg://resolve?domain=palermolaih">
                    <img className="" width="12" height="auto" src={FaTelegramPlane} alt="Telegram" />
                  </a>
                  <a title="WhatsApp" href="https://wa.me/79063342207">
                    <img className="" width="12" height="auto" src={FaWhatsapp} alt="WhatsApp" />
                  </a>
                </div>
              </GridCol>
            </GridRow>


            
            <GridRow>
              <GridCol width={{ mobile: 12, tablet: 5, desktop:4}}>
                <div style={{ height:'10px' }} />
                ®
                {' '}
                {' '}
                © 2020 ООО «АЛ-ком» Все права защищены.
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 7, desktop:8 }}>
                <Link to="/attachment">
                  <Button
                    className="button button_settings-footer"
                  >
                    Установить
                    &nbsp;
                    <img className="footer_button" width="15" height="auto" src={FaApple} alt="Apple" />
                    &nbsp;
                    <img className="footer_button" width="15" height="auto" src={FaAndroid} alt="Android" />
                  </Button>
                </Link>
                <div style={{ height:'10px' }} />
              </GridCol>
            </GridRow>
            <div className="hr1" />
            <GridRow>
              <GridCol className="footer-main-cookies" width={{ mobile: 12, tablet: 12, desktop:12 }}>
                Для повышения удобства работы с сайтом «Море»
                {' '}
                <NavLink
                  to="/about-cookie"
                  className="footer_cookies_link"
                >
                  используются файлы cookie.
                </NavLink>
                {' '}
                В cookie содержатся данные о прошлых посещениях сайта. Если вы не хотите, чтобы эти данные
                обрабатывались, отключите cookie в настройках браузера. С полной информацией о политике
                в применении «Файлов Cookie и аналогичных технологий» можно ознакомиться
                {' '}
                <a className="footer_cookies_link" href="/policy-cookie">здесь.</a>
              </GridCol>
            </GridRow>
          </section>
        </div>
      </section>
    </footer>
  );
}
Footermobile.propTypes={
  isExpanded: Type.bool,
};