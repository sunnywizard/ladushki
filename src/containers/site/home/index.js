/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import Helmet from 'react-helmet';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import Markdown from 'react-markdown/with-html';
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';
import UpButton from '../../../components/common/upbutton';
import CarouselHome from '../../../components/site/carousel/carouselhome';
// import DeleteCookie from '../../../components/site/cookiedelete';
import AboutBox from '../../../components/site/aboutbox';
import uslugi01 from '../../../theme/images/home/main/uslugi/uslugi01.jpg';
import uslugi01c from '../../../theme/images/home/main/uslugi/uslugi01c.jpg';
import uslugi02c from '../../../theme/images/home/main/uslugi/uslugi02c.jpg';
import uslugi02 from '../../../theme/images/home/main/uslugi/uslugi02.jpg';
import uslugi03c from '../../../theme/images/home/main/uslugi/uslugi03c.jpg';
import uslugi03 from '../../../theme/images/home/main/uslugi/uslugi03.jpg';
import uslugi04c from '../../../theme/images/home/main/uslugi/uslugi04c.jpg';
import uslugi04 from '../../../theme/images/home/main/uslugi/uslugi04.jpg';
import uslhome01c from '../../../theme/images/home/main/uslugi/uslhome01c.jpg';
import uslhome01 from '../../../theme/images/home/main/uslugi/uslhome01.jpg';
import uslhome03c from '../../../theme/images/home/main/uslugi/uslhome03c.jpg';
import uslhome03 from '../../../theme/images/home/main/uslugi/uslhome03.jpg';
import uslhome04c from '../../../theme/images/home/main/uslugi/uslhome04c.jpg';
import uslhome04 from '../../../theme/images/home/main/uslugi/uslhome04.jpg';
import './styles.scss';
import { doctorBlock, reportAnswer } from '../../../core/utils/testdata';
import '../../../theme/styles/settings.scss';

export default function Home() {
  // Cookies.remove('lang');
  Cookies.remove('lang', { path: '' });
  const popularIds = [];
  function shuffle() {
    for (let i = popularIds.length - 1; i > 1; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [popularIds[i], popularIds[j]] = [popularIds[j], popularIds[i]];
    }
  }
  let i101 = 1;
  while (i101 <= doctorBlock.length) {
    popularIds.push(i101);
    i101 += 1;
  }
  shuffle(popularIds);
  const alfa = popularIds[0];
  const beta = popularIds[1];
  return (
    <>
      <Helmet>
        <title>МЦ «Ладушки»</title>
        <meta name="description" content="МЦ «Ладушки»" />
        <meta name="keywords" content="МЦ «Ладушки»" />
        <meta name="yandex-verification" content="7cfb9181f66a4fc6" />
        <meta name="wmail-verification" content="fa9eaba2333dadbf58134cdc959c29f9" />
        <meta name="google-site-verification" content="_0Xn9DlFtGE-iKq7JD4OR2bjvxW-FmX1FgsrS2SEuUI" />
      </Helmet>
      {/* <DeleteCookie /> */}
      <UpButton />
      <section className="section section_fullwidth1">
        {/* <section className="section section_home_carousel"> */}
        <CarouselHome />
      </section>
      <section className="section section_fullwidth1">
        <br />
        <br />
        <GridRow gutter={{ mobile: 24, tablet: 24, desktop: 24 }}>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="our-advantages-item">

            {/* <img src={HomeLogo7} alt="" /> */}
            <h2 className="">
              263 тыс. +
              <p className="where-to-begin-item-heading" style={{ color: '#000' }}>Обращений</p>
            </h2>

            <p className="our-advantages-item-description">
              Формируем ответы на вопросы выбора условий образовывания прибыли, продвижения,
              удержания клиента, этапов и динамики развития бизнеса. 
            </p>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="our-advantages-item">

            {/* <img src={HomeLogo5} alt="" /> */}
            <h2 className="">
              2014
              <p className="where-to-begin-item-heading" style={{ color: '#000' }}>Год основания</p>
            </h2>

            <p className="our-advantages-item-description">
              Юнит расчеты позволят спрогнозировать способы, решения и действия влияющие на развитие бизнеса,
              проводить работы по увеличению конверсии и продлению «срока жизни» клиента.
            </p>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="our-advantages-item">

            {/* <img src={HomeLogo6} alt="" /> */}
            <h2 className="">
              12 +
              <p className="where-to-begin-item-heading" style={{ color: '#000' }}>Специализаций</p>
            </h2>

            <p className="our-advantages-item-description">
              Более 12 специализаций. клинических исследований, врачей, современное премиальное 
              оборудование
            </p>
          </GridCol>
        </GridRow> 

        <div className="">
          <h3 className="">Программа «Дома лучше»</h3>
          <p>
            Индивидуальный расчет Юнит показателей создаст возможность максимально зарабатывать на каждой оказанной 
            услуге, на каждом проданном товаре, расширить когорту пользователей, проводить успешные промоактивности, 
            Знание внутренней экономики проекта обспечит фундамент устойчивого убеждения в вашей способности решать возникшие у клиента проблемы и 
            создаст группы лояльности к предлагаемым продуктам.
          </p>
          {/* <br />
          <br /> */}
        </div>
        <div className="contact-media-s40" />
        <GridRow gutter={{ mobile: 24, tablet: 24, desktop: 24 }}>
          <GridCol>
            {/* <div style={{ background: '#ff5c5c', border: '2px solid #aad7ac', borderTop: '2px solid #ffffff' }}> */}
            <div style={{ width: '100%', height: '100%', border: '2px solid #aad7ac', borderTop: '2px solid #ffffff' }}>
              <NavLink
                to="/программа"
                className="link link_toplink"
              >
                <div className="">
                  <span className="tooltip tooltip-effect-2">
                    <img 
                      className="photo125 opa"
                      // width="180vw"
                      // height="auto"
                      src={uslhome01} 
                      alt="Содержание программы"
                    /> 
                    <h5 className="text-center title-lada"><u>Содержание программы</u></h5>
                    <span className="tooltip-content">
                      <div style={{ height: '75%' }}>
                        <img 
                          className="opa"
                          width="140vw"
                          height="auto"
                          src={uslhome01c} 
                          alt="Содержание программы"
                        /> 
                        <span className="tooltip-text">
                          Программа действует с 7 апреля по 18 июля 2020 года. ООО «Ладамед» МЦ «Ладушки» заключает 
                          депозитную программу сопровождения малышей от 0 до 6 месяцев с выездом ...
                        </span>
                      </div>
                      <div className="" style={{ marginLeft: 'auto', marginRight: 'auto', width: '30%' }}>
                        <hr className="lineone1" />
                      </div>
                      <div className="contact-media-s20" />
                      <p className="text-center our-advantages-item-description title-lada">
                        <b><u>Подробнее...</u></b>
                      </p>
                    </span>
                  </span>
                </div>
              </NavLink>
            </div>
          </GridCol>
          <GridCol>
            {/* <div style={{ width: '100%', height: '100%', background: '#ff5c5c', border: '2px solid #aad7ac', borderTop: '2px solid #ffffff' }}> */}
            <div style={{ width: '100%', height: '100%', border: '2px solid #aad7ac', borderTop: '2px solid #ffffff' }}>
              <NavLink
                to="/программа2"
                className="link link_toplink"
              >
                <div className="">
                  <span className="tooltip tooltip-effect-2">
                    <img 
                      className="photo125 opa"
                      width="180vw"
                      height="auto"
                      src={uslhome03} 
                      alt="Все для здоровья детей"
                    /> 
                    <h5 className="text-center title-lada"><u>Все для здоровья детей</u></h5>
                    <span className="tooltip-content">
                      <div style={{ height: '75%' }}>
                        <img 
                          className="opa"
                          width="140vw"
                          height="auto"
                          src={uslhome03c} 
                          alt="Все для здоровья детей"
                        /> 
                        <span className="tooltip-text">
                          В детском медицинском центре «ЛадаМед» проводится лечение детей и подростков. Наши специалисты 
                          пристально следят за тенденциями фармацевтического рынка и ...
                        </span>
                      </div>
                      <div className="" style={{ marginLeft: 'auto', marginRight: 'auto', width: '30%' }}>
                        <hr className="lineone1" />
                      </div>
                      <div className="contact-media-s20" />
                      <p className="text-center our-advantages-item-description title-lada">
                        <b><u>Подробнее...</u></b>
                      </p>
                    </span>
                  </span>
                </div>
              </NavLink>
            </div>
          </GridCol>
          <GridCol>
            {/* <div style={{ background: '#ff5c5c', border: '2px solid #aad7ac', borderTop: '2px solid #ffffff' }}> */}
            <div style={{ width: '100%', height: '100%', border: '2px solid #aad7ac', borderTop: '2px solid #ffffff' }}>
              <NavLink
                to="/программа1"
                className="link link_toplink"
              >
                <div className="">
                  <span className="tooltip tooltip-effect-2">
                    <img 
                      className="photo125 opa"
                      width="180vw"
                      height="auto"
                      src={uslhome04}
                      alt="Наблюдаем за малышом"
                    /> 
                    <h5 className="text-center title-lada"><u>Наблюдаем за малышом</u></h5>
                    <span className="tooltip-content">
                      <div style={{ height: '75%' }}>
                        <img 
                          className="opa"
                          width="140vw"
                          height="auto"
                          src={uslhome04c}
                          alt="Наблюдаем за малышом"
                        /> 
                        <span className="tooltip-text">
                          ДОРОГИЕ РОДИТЕЛИ! Поздравляем вас с рождением ребенка! Пусть ваш малыш растет здоровым, 
                          сильным, умным, благополучным, на радость вам! ООО «ЛадаМед» МЦ «Ладушки» ...

                        </span>
                      </div>
                      <div className="" style={{ marginLeft: 'auto', marginRight: 'auto', width: '30%' }}>
                        <hr className="lineone1" />
                      </div>
                      <div className="contact-media-s20" />
                      <p className="text-center our-advantages-item-description title-lada">
                        <b><u>Подробнее...</u></b>
                      </p>
                    </span>
                  </span>
                </div>
              </NavLink>              
            </div>
          </GridCol>
        </GridRow>

        {/* <GridRow>
          <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }}>           */}

        {/* </GridCol>
        </GridRow> */}
        
      </section>
      <section className="section section_fullwidth1">
        <h3 className="course-h3">Вопросы и ответы</h3>
        <section className="section">
          {/* <AboutBox items={[]} /> */}
          <AboutBox items={popularIds} />
          <div className="text-center m-t10">
            <NavLink className="link link_toplink" to="/вопросы-ответы">
              <Button className="button button_settings-lada">&lt; Узнать больше &gt;</Button>
            </NavLink>
          </div>
        </section>
      </section>
      <section className="section section_fullwidth1">
        {/* <div className="contact-media-s40" /> */}
        <div className="">
          <h3 className="course-h3">
            Ведут прием
            <p style={{ color: '#000' }}>
              Сегодня:
              { ' ' } 
              <b style={{ color: '#fd6b0d' }}>
                {moment().format('dddd, D MMMM YYYY г.')}
              </b>
            </p>
          </h3>
        </div>
        <div className="contact-media-s40" />
        <GridRow gutter={{ mobile: 24, tablet: 24, desktop: 24 }}>
          {/* <GridCol 
            style={{ height: '30px', border: '1px solid black', backgroundColor: 'blue' }} 
            width={{ mobile: 12, tablet: 1, desktop: 1 }} 
          />          
          <GridCol width={{ mobile: 12, tablet: 5, desktop: 5 }} style={{ borderLeft: '2px solid #aad7ac' }}> */}
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
            {/* <div style={{ background: '#ff5c5c', border: '2px solid #aad7ac', borderTop: '2px solid #ffffff' }}> */}
            <div style={{ border: '2px solid #aad7ac', borderTop: '2px solid #ffffff' }}>
              <GridRow>
                {/* <GridCol style={{ border: '1px solid red' }} className="animate2" width={{ mobile: 6, tablet: 6, desktop: 6 }}> */}
                <GridCol className="animate2" width={{ mobile: 6, tablet: 6, desktop: 6 }}>
                  <NavLink className="link link_toplink" to={(alfa - 1) === 0 ? '/doctor' : `/doctor${alfa - 1}`}>
                    {/* <div className="">
                    <img 
                      className="photo123 opa"
                    // style={{margin: '0 auto 0px auto', border: '2px solid red', borderRadius: '50%' }}
                      // width="180vw"
                      width="180vw"
                      height="auto"
                      src={doctorBlock[0].photo} 
                      alt={doctorBlock[0].titleDeclare}
                      onMouseEnter={(e) => e.currentTarget.src = doctorBlock[0].photo1}
                      onMouseLeave={(e) => e.currentTarget.src = doctorBlock[0].photo}
                    />  
                  </div> */}
                    <img 
                      className="photo123 opa"
                      width="180vw"
                      height="auto"
                      // src={doctorBlock[0].photo1} 
                      // alt={doctorBlock[0].titleDeclare}
                      src={doctorBlock[alfa - 1].photo1} 
                      alt={doctorBlock[alfa - 1].titleDeclare}
                    />  

                    {/* <img 
                      className="photo123 opa first"
                      width="180vw"
                      height="auto"
                      src={doctorBlock[0].photo1} 
                      alt={doctorBlock[0].titleDeclare}
                    />  
                    <img 
                      className="photo123 opa second"
                      width="180vw"
                      height="auto"
                      src={doctorBlock[0].photo1} 
                      alt={doctorBlock[0].titleDeclare}
                    />   */}

                  </NavLink>
                </GridCol>
                {/* <GridCol style={{ border: '1px solid green' }} width={{ mobile: 6, tablet: 6, desktop: 6 }}> */}
                <GridCol width={{ mobile: 6, tablet: 6, desktop: 6 }}>
                  {/* <p className="our-advantages-item-heading" style={{ color: '#78ad5e' }}>Направление:</p> */}
                  <p className="our-advantages-item-description" style={{ color: '#78ad5e' }}>Направление:</p>
                  <div className="where-to-begin-item-description toplink_hm">
                    <Markdown className="toplink_hm" source={doctorBlock[alfa - 1].wayDeclare} escapeHtml={false} />
                  </div>
                  {/* <p className="our-advantages-item-heading" style={{ color: '#78ad5e' }}>Специализация:</p> */}
                  <p className="our-advantages-item-description" style={{ color: '#78ad5e' }}>Специализация:</p>
                  <p className="where-to-begin-item-description toplink_hm">
                    {doctorBlock[alfa - 1].scillDeclare}
                  </p>
                </GridCol>
              </GridRow>
              <GridRow>
                <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }}>
                  <NavLink className="link link_toplink" to="/онлайн-запись">
                    <p className="our-advantages-item-heading title-lada">
                      <b><u>{doctorBlock[alfa - 1].titleDeclare}</u></b>
                    </p>
                    <div className="text-center">
                      <Button 
                        style={{ paddingBottom: '15px', paddingTop: '-45px' }} 
                        className="button button_settings-lada"
                      >
                        &lt; Записаться &gt;
                      </Button>
                    </div>
                  </NavLink>
                  <div className="contact-media-s20" />
                </GridCol>
              </GridRow>
            </div>
          </GridCol>

          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
            <div style={{ border: '2px solid #aad7ac', borderTop: '2px solid #ffffff' }}>
              {/* <div style={{  width: '100%', height: '100%', background: '#ff5c5c', border: '2px solid #aad7ac', borderTop: '2px solid #ffffff' }}> */}
              <GridRow>
                {/* <GridCol style={{ border: '1px solid green' }} className="animate2" width={{ mobile: 6, tablet: 6, desktop: 6 }}> */}
                <GridCol className="animate2" width={{ mobile: 6, tablet: 6, desktop: 6 }}>
                  <NavLink className="link link_toplink" to={(beta - 1) === 0 ? '/doctor' : `/doctor${beta - 1}`}>
                    {/* <div className="">
                    <img 
                      className="photo123 opa"
                      width="180vw"
                      height="auto"
                      src={doctorBlock1[0].photo} 
                      alt={doctorBlock1[0].titleDeclare}
                      onMouseEnter={(e) => e.currentTarget.src = doctorBlock1[0].photo1}
                      onMouseLeave={(e) => e.currentTarget.src = doctorBlock1[0].photo}
                    />  
                  </div> */}

                    <img 
                      className="photo123 opa"
                      width="180vw"
                      height="auto"
                      // src={doctorBlock[3].photo1} 
                      // alt={doctorBlock[3].titleDeclare}
                      src={doctorBlock[beta - 1].photo1} 
                      alt={doctorBlock[beta - 1].titleDeclare}
                    />  

                    {/* <img 
                      className="photo123 opa first"
                      width="180vw"
                      height="auto"
                      src={doctorBlock[3].photo1} 
                      alt={doctorBlock[3].titleDeclare}
                    />  
                    <img 
                      className="photo123 opa second"
                      width="180vw"
                      height="auto"
                      src={doctorBlock[3].photo1} 
                      alt={doctorBlock[3].titleDeclare}
                    />   */}
                  
                  </NavLink>
                </GridCol>
                {/* <GridCol style={{ border: '1px solid red' }} width={{ mobile: 6, tablet: 6, desktop: 6 }}> */}
                <GridCol width={{ mobile: 6, tablet: 6, desktop: 6 }}>
                  {/* <p className="our-advantages-item-heading" style={{ color: '#78ad5e' }}>Направление:</p> */}
                  <p className="our-advantages-item-description" style={{ color: '#78ad5e' }}>Направление:</p>
                  <div className="where-to-begin-item-description toplink_hm">
                    <Markdown className="toplink_hm" source={doctorBlock[beta - 1].wayDeclare} escapeHtml={false} />
                  </div>
                  {/* <p className="our-advantages-item-heading" style={{ color: '#78ad5e' }}>Специализация:</p> */}
                  <p className="our-advantages-item-description" style={{ color: '#78ad5e' }}>Специализация:</p>
                  <p className="where-to-begin-item-description toplink_hm">
                    {/* Консультация и лечение пациентов */}
                    {doctorBlock[beta - 1].scillDeclare}                  
                  </p>
                </GridCol>
              </GridRow>
              <GridRow>
                <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }}>
                  <NavLink className="link link_toplink" to="/онлайн-запись">
                    <p className="our-advantages-item-heading title-lada">
                      <b>
                        <u>
                          {doctorBlock[beta - 1].titleDeclare}
                        </u>
                      </b>
                    </p>
                    <div className="text-center">
                      <Button 
                        style={{ paddingBottom: '15px', paddingTop: '-45px' }} 
                        className="button button_settings-lada"
                      >
                        &lt; Записаться &gt;
                      </Button>
                    </div>
                  </NavLink>
                  <div className="contact-media-s20" />
                </GridCol>
              </GridRow>
            </div>
          </GridCol>
        </GridRow>
        {/* <br />
        <div className="doctors">
          <div className="doctors__cards">
            <div className="card__info">
              <img src={doc4} alt="Заузолкова" />
              <div className="card__text">
                <h3 className="name">Заузолкова Марина Евгеньевна</h3>
                <p className="spec-name">Врач ультразвуковой диагностики</p>
              </div>
            </div>
            <button
              className="han-button btn-primary"
              type="button"
              onClick={() => history.push('/онлайн-запись')}
            >
              Записаться
            </button>
          </div>
        </div> */}

        {/* <BecomePartner1 /> */}
        <div className="contact-media-s40" />
        <div className="">
          <h3 className="course-h3">Услуги</h3>
          {/* <br /> */}
          <p>
            Индивидуальный расчет Юнит показателей создаст возможность максимально зарабатывать на каждой оказанной 
            услуге, на каждом проданном товаре, расширить когорту пользователей, проводить успешные промоактивности, 
            Знание внутренней экономики проекта обспечит фундамент устойчивого убеждения в вашей способности решать возникшие у клиента проблемы и 
            создаст группы лояльности к предлагаемым продуктам.
          </p>
          {/* <br />
          <br /> */}
        </div>
        <div className="contact-media-s40" />
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 5, desktop: 5 }} style={{ border: '2px solid #aad7ac', borderTop: '2px solid #ffffff' }}>
            <NavLink className="link link_toplink title-lada" to="/педиатр">
              <GridRow>
                <GridCol width={{ mobile: 6, tablet: 6, desktop: 6 }}>
                  {/* <div className="">
                    <img 
                      className="photo124 opa"
                      width="180vw"
                      height="auto"
                      src={uslugi01} 
                      alt="Педиатр"
                      onMouseEnter={(e) => e.currentTarget.src = uslugi01c}
                      onMouseLeave={(e) => e.currentTarget.src = uslugi01}
                    />  
                  </div> */}
                  <div className="animate2">
                    <img
                      className="photo124 opa first"
                    // width="180vw"
                    // height="180vw"
                      src={uslugi04c} 
                      alt="Педиатр монохром"
                    />  
                    <img 
                      className="photo124 opa second"
                    // width="180vw"
                    // height="180vw"
                      src={uslugi04} 
                      alt="Педиатр цвет"
                    /> 
                  </div>
                </GridCol>
                <GridCol width={{ mobile: 6, tablet: 6, desktop: 6 }}>
                  <h4 className="hfeed_child title-lada"><u>Педиатр</u></h4>
                </GridCol>
              </GridRow>
            </NavLink>
          </GridCol>
          {/* <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }} style={{ height: '30px', border: '1px solid black', backgroundColor: 'red' }} /> */}
          <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }} />
          <GridCol width={{ mobile: 12, tablet: 5, desktop: 5 }} style={{ border: '2px solid #aad7ac', borderTop: '2px solid #ffffff' }}>
            <NavLink className="link link_toplink title-lada" to="/вакцинация">            
              <GridRow>
                <GridCol width={{ mobile: 6, tablet: 6, desktop: 6 }}>
                  {/* <img 
                    className="photo124 opa"                  
                    width="180vw"
                    height="auto"
                    src={uslugi01} 
                    alt="Вакцинация"
                    onMouseEnter={(e) => e.currentTarget.src = uslugi01c}
                    onMouseLeave={(e) => e.currentTarget.src = uslugi01}
                  /> */}
                  <div className="animate2">
                    <img
                      className="photo124 opa first"
                    // width="180vw"
                    // height="auto"
                      src={uslugi01c} 
                      alt="Вакцинация монохром"
                    />  
                    <img 
                      className="photo124 opa second"
                    // width="180vw"
                    // height="auto"
                      src={uslugi01} 
                      alt="Вакцинация цвет"
                    /> 
                  </div>
                </GridCol>
                <GridCol width={{ mobile: 6, tablet: 6, desktop: 6 }}>
                  {/* <div className="hfeed_parent"> */}
                  {/* <div className="hfeed_child"> */}
                  <h4 className="hfeed_child title-lada"><u>Вакцинация</u></h4>
                  {/* <h4 className="course-h3 text-center">Вакцинация</h4> */}
                  {/* <h4 className="">Вакцинация</h4> */}
                  {/* </div> */}
                  {/* </div> */}
                </GridCol>
              </GridRow>
            </NavLink> 
          </GridCol>
          {/* <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }} style={{ border: '1px solid black', backgroundColor: 'yellow' }}> */}
          <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }}>
            <div className="contact-media-s30" />
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 5, desktop: 5 }} style={{ border: '2px solid #aad7ac', borderTop: '2px solid #ffffff' }}>
            <NavLink className="link link_toplink" to="/невролог">
              <GridRow>
                {/* <GridCol className="animate2" width={{ mobile: 6, tablet: 6, desktop: 6 }}> */}
                <GridCol width={{ mobile: 6, tablet: 6, desktop: 6 }}>
                  {/* <div className="">
                    <img 
                      className="photo124 opa"
                      width="180vw"
                      height="auto"
                      src={uslugi01} 
                      alt="Невролог"
                      onMouseEnter={(e) => e.currentTarget.src = uslugi01c}
                      onMouseLeave={(e) => e.currentTarget.src = uslugi01}
                    />  
                  </div> */}
                  <div className="animate2">
                    <img
                      className="photo124 opa first"
                      // width="180vw"
                      // height="auto"
                      src={uslugi03c} 
                      alt="Невролог монохром"
                    />  
                    <img 
                      className="photo124 opa second"
                      // width="180vw"
                      // height="auto"
                      src={uslugi03} 
                      alt="Невролог цвет"
                    /> 
                  </div>
                </GridCol>
                <GridCol width={{ mobile: 6, tablet: 6, desktop: 6 }}>
                  <h4 className="hfeed_child title-lada"><u>Невролог</u></h4>
                </GridCol>
              </GridRow>
            </NavLink>
          </GridCol>
          {/* <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }} style={{ height: '30px', border: '1px solid black', backgroundColor: 'red' }} /> */}
          <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }} />
          {/* <GridCol width={{ mobile: 6, tablet: 6, desktop: 2 }} /> */}
          <GridCol width={{ mobile: 12, tablet: 5, desktop: 5 }} style={{ border: '2px solid #aad7ac', borderTop: '2px solid #ffffff' }}>
            <NavLink className="link link_toplink" to="/дополнительные-услуги">            
              <GridRow>
                {/* <GridCol className="animate2" width={{ mobile: 6, tablet: 6, desktop: 6 }}> */}
                <GridCol width={{ mobile: 6, tablet: 6, desktop: 6 }}>
                  {/* <div className="">
                    <img
                      className="photo124 opa"                  
                      width="180vw"
                      height="auto"
                      src={uslugi01} 
                      alt="Анализы"
                      onMouseEnter={(e) => e.currentTarget.src = uslugi01c}
                      onMouseLeave={(e) => e.currentTarget.src = uslugi01}
                    />  
                  </div> */}
                  <div className="animate2">
                    <img
                      className="photo124 opa first"
                      width="180vw"
                      height="auto"
                      src={uslugi02c} 
                      alt="Анализы монохром"
                    />  
                    <img 
                      className="photo124 opa second"
                      width="180vw"
                      height="auto"
                      src={uslugi02} 
                      alt="Анализы цвет"
                    /> 
                  </div>
                </GridCol>
                <GridCol width={{ mobile: 6, tablet: 6, desktop: 6 }}>
                  <h4 className="hfeed_child title-lada"><u>Анализы</u></h4>
                </GridCol>
              </GridRow>
            </NavLink>
          </GridCol>    
          <div className="contact-media-s20" />
        </GridRow>
        <GridRow className="text-center">
          <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }}>
            <NavLink className="link link_toplink" to="/педиатр">
              <div className="text-center">
                <Button 
                  style={{ paddingBottom: '15px', paddingTop: '-45px' }} 
                  className="button button_settings-lada"
                >
                  &lt; Подробнее... &gt;
                </Button>

              </div>
            </NavLink>
          </GridCol>
        </GridRow>  
        <div className="">
          <h3 className="course-h3">Поделитесь свои мнением</h3>
          <p>
            Заполнение формы позволит сформировать представление о насущных потребностях и спланировать 
            мероприятия с учетом актуальных тенденций и ваших пожеланий, обеспечив с нашей стороны качественное 
            меицинское обслуживание.
            <br />
            Нажимая кнопку  «ОТПРАВИТЬ», вы принимаете условия соглашения и даете своё согласие на обработку ваших персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных».
          </p>
          {/* <br />
          Категории помеченные красным значком  
          &nbsp;           
          <b style={{ color: 'red' }}>*</b>
          &nbsp;
          обязательны для заполнения. */}
        </div>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }}>
            <NavLink className="link link_toplink" to="/оставить-отзыв">
              <div className="text-center">
                <Button 
                  style={{ paddingBottom: '15px', paddingTop: '-45px' }} 
                  className="button button_settings-lada"
                >
                  &lt; Написать отзыв &gt;
                </Button>
              </div>
            </NavLink>
            <div className="contact-media-s20" />
          </GridCol>
        </GridRow>
        <div className="contact-media-space" />

        {/* <GridRow>
          <GridCol className="" width={{ mobile: 12, tablet: 5, desktop: 5 }}>
            <h4>О ком пишем отзыв?</h4>
          </GridCol>
          <GridCol className="" width={{ mobile: 12, tablet: 7, desktop: 7 }}>
            <div className="">
              <textarea
                maxLength="2000" 
              // cols="60"
                rows="10"
                name="entry.962491913" 
                placeholder="Опишите целевую аудиторию" 
                required
                type="text" 
              // onChange={this.handleChange}
                style={{ width: '92%', border: '1px solid #ccc' }}
              />
            </div>  
          </GridCol>
        </GridRow> */}

        <GridRow>  
          <GridCol className="text-center" width={{ mobile: 12, tablet: 12, desktop: 12 }}>
            <h4>
              Для дополнительных запросов свяжитесь с нами по адресу
              {' '}
              {/* <a href="mailto:invitro2020@yandex.ru" className="link_six">invitro2020@yandex.ru</a> */}
              <NavLink to="/обратная-связь" className="link_six">invitro2020@yandex.ru</NavLink>
              {' '}
              <br />
              <br />
            </h4>
          </GridCol>
        </GridRow>
      </section>
    </>
  );
}

// Home.propTypes = {
//   navigationTo: Type.func.isRequired,
// };
