/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
// import Faphone from '../../../theme/images/account/fa-phone.png';
// import Telegram from '../../../theme/images/account/telegram.svg';
// import WhatsApp from '../../../theme/images/account/whatsapp.svg';
// import Viber from '../../../theme/images/account/viber.svg';
// import Faemail from '../../../theme/images/account/fa-email.svg';
import LogoTouch from '../../../theme/images/touch-icon1.png';
// import Apple from '../../../theme/images/account/apple56_72.png';
import Apple from '../../../theme/images/account/apple.svg';
import Applec from '../../../theme/images/account/applec.svg';
// import Android from '../../../theme/images/account/android_icon_35_35.svg';
import Android from '../../../theme/images/account/android.png';
import Androidc from '../../../theme/images/account/androidc.png';
import mir from '../../../theme/images/home/main/footer/logo-mir.png';
import visa from '../../../theme/images/home/main/footer/logo-visa.png';
import mastercard from '../../../theme/images/home/main/footer/mastercard.png';
import './styles.scss';

export default function Footer() {
  return (
    <div className="footer_wrapper">
      <footer className="footer-main">

        <section className="section section_fullwidth">
          {/* <GridRow style={{ border: '1px solid violet' }}> */}
          <GridRow>
            <GridCol width={{ mobile: 3, tablet: 1, desktop: 1 }}>
              {/* <img width="70px" height="auto" src={LogoTouch} className="" alt="Логотип" />  */}
              <img width="60vw" height="auto" src={LogoTouch} className="" alt="Логотип" /> 
            </GridCol>
            <GridCol style={{ borderRight: '2px solid #676767' }} width={{ mobile: 9, tablet: 3, desktop: 3 }}>
              <div>

                <p style={{ fontSize: '10px', paddingLeft: '12px' }}>
                  Лицензия ЛО-11-01-002258. Выдана Министерством Здравоохранения Республики Коми от 01.10.2019г.
                </p>
                {/* <div className="contact-media-s30" />
              <br /> */}
                <div style={{ paddingLeft: '5px' }}>
                  {/* <img width="80vw" height="16vh" src={mir} alt="mir" />
                <img width="80vw" height="18vh" src={visa} alt="Visa" />
                <img width="60vw" height="auto" src={mastercard} alt="Mastercard" />   */}
                  <img width="auto" height="13vh" src={mir} alt="mir" />
                  <img width="auto" height="15vh" src={visa} alt="Visa" />
                  <img width="auto" height="17vh" src={mastercard} alt="Mastercard" />
                </div>
              </div>

              {/* <a title="Telegram" href="tg://resolve?domain=МЦ «Ладушки»er">
                <img src={Telegram} className="fa-pic-social" alt="" /> 
              </a>
              <a title="WhatsApp" href="https://wa.me/79024343669">
                <img src={WhatsApp} className="fa-pic-whatsapp" alt="" /> 
              </a>
              <a title="Viber" href="viber://chat?number=%2B79024343669">
                <img src={Viber} className="fa-pic-social" alt="" /> 
              </a> */}

            </GridCol>

            <GridCol width={{ mobile: 11, tablet: 5, desktop: 5 }}>
              <GridRow>
                <GridCol width={{ mobile: 6, tablet: 6, desktop: 6 }}>
                  <a href="/о-нас"><u>О нас</u></a>
                  <div className="contact-media-space" />
                  <a href="https://ladamed.ru/" target="_blank" rel="noreferrer"><u>«Ладамед»</u></a>
                  <div className="contact-media-space" />
                  {/* <a href="/doctor"><u>Врачи</u></a>   */}
                  <Link to="/doctor"><u>Наши специалисты</u></Link>

                  <div className="contact-media-space" />
                  <a href="/педиатр"><u>Услуги</u></a>
                  <div className="contact-media-space" />
                  <a href="/контакты"><u>Контакты</u></a>
                  <br />
                  <div className="contact-media-s20" />
                </GridCol>
                <GridCol width={{ mobile: 6, tablet: 6, desktop: 6 }}>
                  <a href="/акции"><u>Акции</u></a>
                  <div className="contact-media-space" />
                  <a href="/новости-и-статьи"><u>Новости и статьи</u></a>
                  <div className="contact-media-space" />
                  <a href="/отзывы"><u>Отзывы</u></a>
                  <div className="contact-media-space" />
                  {/* <a href="/наши-правила"><u>Наши правила</u></a> */}
                  <a href="/вопросы-ответы"><u>Вопросы и ответы</u></a>
                  <div className="contact-media-space" />
                  <a href="/документы-правила/лицензии/орджоникидзе"><u>Документы и правила</u></a>

                </GridCol>
                {/* <GridCol width={{ mobile: 11, tablet: 4, desktop: 4 }}>
                  <a href="/педиатр"><u>Услуги</u></a>
                  <div className="contact-media-space" />
                  <a href="/soglasie-na-obrabotku-dannyh-152-fz"><u>Отзывы</u></a>
                  <div className="contact-media-space" />
                  <a href="/unitpollmain"><u>Бриф Партнерам</u></a>              
                  <div className="contact-media-space" />
                  <a href="/контакты"><u>Контакты</u></a>
                  <br />
                  <div className="contact-media-s20" />
                </GridCol> */}

                <Link to="/attachment" style={{ textDecoration: 'none' }}>
                  <Button
                // type="button"
                    className="button2 button2_settings-footer"
                  >
                    <p style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                      Установить
                      &nbsp;
                      <img 
                        src={Android} 
                        width="16px" 
                        height="16px" 
                        alt="Android"
                        onMouseEnter={(e) => e.currentTarget.src = Androidc}
                        onMouseLeave={(e) => e.currentTarget.src = Android} 
                      />
                        &nbsp;&nbsp;
                      <img 
                        src={Apple} 
                        width="13px" 
                        height="16px" 
                        alt="Apple" 
                        onMouseEnter={(e) => e.currentTarget.src = Applec}
                        onMouseLeave={(e) => e.currentTarget.src = Apple} 
                      />
                    </p>
                  </Button>
                </Link>
              </GridRow>
            </GridCol>
            <GridCol width={{ mobile: 11, tablet: 3, desktop: 3 }}>
              <div>
                <p style={{ fontSize: '14px', textDecoration: 'underline' }}>Свяжитесь с нами:</p>
                <p style={{ fontSize: '12px' }}>
                  МЦ «Ладушки»,  
                  <br />
                  г.Сыктывкар, ул. Карла Маркса, д. 117
                  <br />
                  тел. 8(8212) 30-24-30, 30-24-84
                  <br />
                  email: 
                  {' '}
                  {''}
                  {/* <a href="mailto:invitro2020@yandex.ru">
                    <u>invitro2020@yandex.ru</u>
                  </a> */}
                  <Link to="/обратная-связь" className=""><u>invitro2020@yandex.ru</u></Link>
                </p>
              </div>

            </GridCol>

          </GridRow>
 
          {/* <GridRow>
            <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }}>
              Мы в соцсетях /
            </GridCol>
            <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>

              <a href=""><img src={Vk} title="ВКонтакте" alt="ВКонтакте" /></a>
            </GridCol>
            <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
              <a href=""><img src={Facebook} title="Facebook" alt="Facebook" /></a>
            </GridCol>
            <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
              <a href=""><img src={Odnoklassniki} title="Одноклассники" alt="Одноклассники" /></a>
            </GridCol>
            <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
              <a href=""><img src={Insta} title="Instagram" alt="Instagram" /></a>
            </GridCol>
            <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
              <a href=""><img src={Twitter} title="Twitter" alt="Twitter" /></a>
            </GridCol>
            <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
              <a href=""><img src={YouTube} title="YouTube" alt="YouTube" /></a>
            </GridCol>
            <GridCol width={{ mobile: 2, tablet: 2, desktop: 2 }} />
          </GridRow> */}

          <div className="contact-media-s20" />
          <GridRow>
            <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }}>
              ®
              {' '}
              {' '}
              © 2021 ООО «Ладамед» Все права защищены. При использовании материалов сайта ссылка на сайт обязательна.
            </GridCol>
          </GridRow>
          <div className="hr1" />       
          <GridRow>
            <GridCol className="link" width={{ mobile: 12, tablet: 12, desktop: 12 }}>
              {/* <p style={{ fontSize: '12px' }}> */}
              Информация сайта не может применяться для постановки диагнозов, назначения курса лечения и не подменяет 
              врачебный прием.
              <br />
              {/* </p> */}
              Для повышения удобства работы с сайтом «Ладушки»
              {' '} 
              <a href="/документы-правила/правила/файлы-cookie"><u>используются файлы Cookie.</u></a>
              {' '}
              В cookie содержатся данные о прошлых посещениях сайта. Если вы не хотите, чтобы эти данные 
              обрабатывались, отключите cookie в настройках браузера. С полной информацией о политике «МЦ «Ладушки»»
              в применении «Файлов Cookie и аналогичных технологий» можно ознакомиться
              {' '} 
              <a href="/policy-cookie"><u>здесь.</u></a>
            </GridCol>
          </GridRow>
        </section>
      </footer>
    </div>
  );
}
