/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import Helmet from 'react-helmet';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import { Link, NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';
import UpButton from '../../../components/common/upbutton';
import PubReview from '../../../components/site/pubreview';
import Breadcrumbs from '../../../components/common/breadcrumbs';
import { aboutBreadcrumbs, reportReview, doctorBlock } from '../../../core/utils/testdata';
import Android1 from '../../../theme/images/setupladamed/addaptive_android1.jpg';
import Android2 from '../../../theme/images/setupladamed/addaptive_android2.jpg';
import Android from '../../../theme/images/setupladamed/addaptive_android.jpg';
import AaddGoogle from '../../../theme/images/setupladamed/addGoogle.jpg';
import AaddGoogle1 from '../../../theme/images/setupladamed/addGoogle1.jpg';
import AaddGoogle2 from '../../../theme/images/setupladamed/addGoogle2.jpg';
import Apple from '../../../theme/images/setupladamed/addaptive-apple.jpg';
import Apple1 from '../../../theme/images/setupladamed/addaptive-apple1.jpg';
import Pointe from '../../../theme/images/thumbs/1.jpg';
import PointeFull from '../../../theme/images/full/1.jpg';
import Bras from '../../../theme/images/thumbs/2.jpg';
import BrasFull from '../../../theme/images/full/2.jpg';
import Plie from '../../../theme/images/thumbs/3.jpg';
import PlieFull from '../../../theme/images/full/3.jpg';
import Adagio from '../../../theme/images/thumbs/4.jpg';
import AdagioFull from '../../../theme/images/full/4.jpg';
import Frappe from '../../../theme/images/thumbs/5.jpg';
import FrappeFull from '../../../theme/images/full/5.jpg';
import Glissade from '../../../theme/images/thumbs/6.jpg';
import GlissadeFull from '../../../theme/images/full/6.jpg';
import Jete from '../../../theme/images/thumbs/7.jpg';
import JeteFull from '../../../theme/images/full/7.jpg';
import Pique from '../../../theme/images/thumbs/8.jpg';
import PiqueFull from '../../../theme/images/full/8.jpg';
import Arabesque from '../../../theme/images/thumbs/9.jpg';
import ArabesqueFull from '../../../theme/images/full/9.jpg';
import Ballerina from '../../../theme/images/thumbs/10.jpg';
import BallerinaFull from '../../../theme/images/full/10.jpg';
import CloseButton from '../../../theme/images/account/сlose.svg';
import Hit from '../../../theme/images/home/main/gallery/hit.png';
import './style.scss';

export default function NormLadaMed() {
  // Cookies.remove('lang', { path: '' });
  // const [step, setStep] = useState(8);
  const [step, setStep] = useState(4);
  const outputReview = reportReview.length > 0 ? reportReview.slice(0, step) : [];
  const isoutputReview = outputReview.length > 0;
  const isGetMore = isoutputReview && reportReview.length > step;
  return (
    <>
      <Helmet>
        <title>МЦ «Ладушки» &ndash; О нас</title>
        <meta name="description" content="МЦ «Ладушки»" />
        <meta name="keywords" content="МЦ «Ладушки»" />
      </Helmet>
      <UpButton />
      <section className="section section_fullwidth1 breadcrumbs">
        <Breadcrumbs items={aboutBreadcrumbs} />
      </section>
      <section className="section section_fullwidth1">
        <h1>О нас</h1>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }}>
            <GridRow style={{ fontSize: '14px' }}>
              <GridCol width={{ mobile: 6, tablet: 4, desktop: 4 }}>
                
                <a 
                  style={{ textDecoration: 'none' }}
                  target="_blank" 
                  rel="noreferrer" 
                  href="https://www.google.com/search?q=%D0%BB%D0%B0%D0%B4%D1%83%D1%88%D0%BA%D0%B8+%D1%81%D1%8B%D0%BA%D1%82%D1%8B%D0%B2%D0%BA%D0%B0%D1%80&source=lmns&bih=625&biw=1366&hl=ru&sa=X&ved=2ahUKEwiC4d_EoqHxAhVxposKHWleA0sQ_AUoAHoECAEQAA" 
                  alt="2ГИС"
                >
                  <u className="our-advantages-item-description">
                    Google
                  </u>
                </a>                
              </GridCol>
              <GridCol width={{ mobile: 2, tablet: 4, desktop: 4 }}>
                <a 
                  style={{ textDecoration: 'none' }}
                  target="_blank" 
                  rel="noreferrer" 
                  href="https://2gis.ru/syktyvkar/firm/70000001006679012/tab/reviews" 
                  alt="2ГИС"
                >
                  <u className="our-advantages-item-description">
                    2ГИС
                  </u>
                </a>
              </GridCol>
              <GridCol width={{ mobile: 4, tablet: 4, desktop: 4 }}>
                <a 
                  style={{ textDecoration: 'none' }}
                  target="_blank" 
                  rel="noreferrer" 
                  href="https://prodoctorov.ru/syktyvkar/lpu/61487-medicinskiy-centr-ladushki/" 
                  alt="ПроДокторов"
                >
                  <u className="our-advantages-item-description">
                    ПроДокторов
                  </u>
                </a>
              </GridCol>
              <GridCol width={{ mobile: 6, tablet: 4, desktop: 4 }}>
                <div>
                  4.8
                  &nbsp;
                  <b style={{ fontSize: '18px', color: '#f8c008' }}>
                    &#9733;
                    &#9733;
                    &#9733;
                    &#9733;
                    &#9733;
                  </b>
                </div>
              </GridCol>
              <GridCol width={{ mobile: 2, tablet: 4, desktop: 4 }}>
                <div>
                  5 / 5
                </div>
              </GridCol>
              <GridCol width={{ mobile: 4, tablet: 4, desktop: 4 }}>
                <div>
                  44%
                </div>
              </GridCol>
            </GridRow>
            <div className="contact-media" />
            <div className="hr3_0" />
            <div className="contact-media-s30" />
            <div className="">
              <h3 className="course-h3">МЦ «Ладушки»</h3>
              <p>
                {/* Медицинский центр «Ладушки» расположен в жилом комплексе «Столичные высоты», на территории города Сыктывкара. Компания 
                занимается оказанием медико-санитарной помощи: первичной, врачебной и специализированной. Пациентами клиники являются 
                представители взрослого поколения. */}
                Медицинский центр «Ладушки» расположен в жилом комплексе «Столичные высоты», на территории города Сыктывкара. 
                Медицинский центр имеет два отделения : Детское и Взрослое  . В детском отделении ведут приемы педиатры, отоларингологи, 
                аллерголог, неонатолог и другие детские специалисты. Взрослое отделение представлено специализацией Акушерство -Гинекология, и 
                имеет Экспертный УЗИ VOLUSON E8 аппарат для проведения исследований на всех этапах подготовки и наблюдения беременности, и других систем и 
                органов. 
              </p>
              <div className="contact-media-s20" />
              <GridRow className="colum_prog text-block-1" gutter={{ mobile: 24, tablet: 24, desktop: 24 }}>
                <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }} className="">
                  <img width="60px" height="60px" src={Hit} alt="Хит" />
                </GridCol>
                <GridCol width={{ mobile: 11, tablet: 11, desktop: 11 }} className="">

                  <p style={{ paddingTop: '5px' }}>
                    1. «Встреча с малышом на УЗИ» ( Совместное посещение приема с папой или родственниками )
                    <br />
                    2. «Первое ВИДЕО /УЗИ» - очень востребованная услуга записи 3D УЗИ. Фото и видео останутся у Вас на память .
                  </p>
                </GridCol>

              </GridRow>
            </div>
            <h4 className="course-h3">Фотоальбом</h4>
            {/* <div className="container"> */}
            <div className="">
              <section className="section1 section1_fullwidth2">
                <div style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }} className="">
                  <GridRow>
                    <ul className="lb-album">
                      <li>
                        <a href="#image-1">
                          <img src={Pointe} alt="МЦ «Ладушки»" />
                          <span>МЦ «Ладушки»</span>
                        </a>
                        <div className="lb-overlay" id="image-1">
                          <img src={PointeFull} alt="МЦ «Ладушки»" />
                          <div>
                            <h3>
                              {/* <a href="/новости-и-статьи"> */}
                              МЦ «Ладушки»
                              {/* </a> */}
                              {/* <span>/point/</span> */}
                            </h3>
                            {/* <p style={{ top: '20px' }}> */}
                            <p style={{ top: '20px' }}>
                              Экспертные консультации по направлениям: 
                              акушерство-гинекология, неврология, кардиология, терапия
                            </p>
                            <a href="#image-10" className="lb-prev">Prev</a>
                            <a href="#image-2" className="lb-next">Next</a>
                          </div>
                          {/* <GridRow>
                            <GridCol width={{ mobile: 6, tablet: 6, desktop: 6 }}>
                              <div>
                                <h3>
                                  pointe
                                  <span>/point/</span>
                                </h3>
                              </div>
                            </GridCol>
                            <GridCol width={{ mobile: 6, tablet: 6, desktop: 6 }}>
                              <p>Dance performed on the tips of the toes</p>
                            </GridCol>

                          </GridRow> */}
                          <a href="#page" className="lb-close">                            
                            {' '}
                            <img 
                              className="lb-close"
                              // width="50px"
                              // height="auto" 
                              src={CloseButton}
                              alt="Автор публикации"
                            /> 
                            {/* x Close */}
                          </a>
                        </div>
                      </li>

                      <li>
                        <a href="#image-2">
                          <img src={Bras} alt="Port de bras" />
                          <span>Рецепция</span>
                        </a>
                        <div className="lb-overlay" id="image-2">
                          <img src={BrasFull} alt="Port de bras" />
                          <div>
                            <h3>
                              Рецепция
                              <span>/&nbsp;взгляд изнутри&nbsp;/</span>
                            </h3>
                            <p>Рецепция взрослого отделения</p>
                            <a href="#image-1" className="lb-prev">Prev</a>
                            <a href="#image-3" className="lb-next">Next</a>
                          </div>
                          <a href="#page" className="lb-close">                            
                            {' '}
                            <img 
                              className="lb-close"
                              width="50px"
                              height="auto" 
                              src={CloseButton}
                              alt="Автор публикации"
                            /> 
                            {/* x Close */}
                          </a>
                        </div>
                      </li>

                      <li>
                        <a href="#image-3">
                          <img src={Plie} alt="Plie" />
                          <span>УЗИ</span>
                        </a>
                        <div className="lb-overlay" id="image-3">
                          <img src={PlieFull} alt="Plie" />
                          <div>
                            <h3>
                              УЗИ
                              {/* <span>/&nbsp;на входе&nbsp;/</span> */}
                            </h3>
                            <p>УЗИ исследования для  детей и взрослых</p>
                            <a href="#image-2" className="lb-prev">Prev</a>
                            <a href="#image-4" className="lb-next">Next</a>
                          </div>
                          <a href="#page" className="lb-close">                            
                            {' '}
                            <img 
                              className="lb-close"
                              width="50px"
                              height="auto" 
                              src={CloseButton}
                              alt="Автор публикации"
                            /> 
                            {/* x Close */}
                          </a>
                        </div>
                      </li>

                      <li>
                        <a href="#image-4">
                          <img src={Adagio} alt="Adagio" />
                          <span>Кабинет №1</span>
                        </a>
                        <div className="lb-overlay" id="image-4">
                          <img src={AdagioFull} alt="Adagio" />
                          <div>
                            <h3>
                              Кабинет №1
                              {/* <span>/&nbsp;внутри&nbsp;/</span> */}
                            </h3>
                            <p>Оснащение процедурного кабинета</p>
                            <a href="#image-3" className="lb-prev">Prev</a>
                            <a href="#image-5" className="lb-next">Next</a>
                          </div>
                          <a href="#page" className="lb-close">                            
                            {' '}
                            <img 
                              className="lb-close"
                              width="50px"
                              height="auto" 
                              src={CloseButton}
                              alt="Автор публикации"
                            /> 
                            {/* x Close */}
                          </a>
                        </div>
                      </li>

                      <li>
                        <a href="#image-5">
                          <img src={Frappe} alt="Frappe" />
                          <span>Кабинет №2</span>
                        </a>
                        <div className="lb-overlay" id="image-5">
                          <img src={FrappeFull} alt="Frappe" />
                          <div>
                            <h3>
                              Кабинет №2
                              <span>/&nbsp;часть 2&nbsp;/</span>
                            </h3>
                            <p>Кольпоскопия -  безболезненное видео исследование .</p>
                            <a href="#image-4" className="lb-prev">Prev</a>
                            <a href="#image-6" className="lb-next">Next</a>
                          </div>
                          <a href="#page" className="lb-close">                            
                            {' '}
                            <img 
                              className="lb-close"
                              width="50px"
                              height="auto" 
                              src={CloseButton}
                              alt="Автор публикации"
                            /> 
                            {/* x Close */}
                          </a>
                        </div>
                      </li>

                      <li>
                        <a href="#image-6">
                          <img src={Glissade} alt="Glissade" />
                          <span>Кабинет №2</span>
                        </a>
                        <div className="lb-overlay" id="image-6">
                          <img src={GlissadeFull} alt="Glissade" />
                          <div>
                            <h3>
                              Кабинет №2
                              {/* <span>/&nbsp;часть 1&nbsp;/</span> */}
                            </h3>
                            <p>Кабинет приема врача гинеколога</p>
                            <a href="#image-5" className="lb-prev">Prev</a>
                            <a href="#image-7" className="lb-next">Next</a>
                          </div>
                          <a href="#page" className="lb-close">
                            <img 
                              className="lb-close"
                              width="50px"
                              height="auto" 
                              src={CloseButton}
                              alt="Автор публикации"
                            /> 
                            {/* x Close */}
                          </a>
                        </div>
                      </li>

                      <li>
                        <a href="#image-7">
                          <img src={Jete} alt="Jete" />
                          <span>Кабинет №1</span>
                        </a>
                        <div className="lb-overlay" id="image-7">
                          <img src={JeteFull} alt="Jete" />
                          <div>
                            <h3>
                              Кабинет №1 ч2
                              <span>/&nbsp;часть 2&nbsp;/</span>
                            </h3>
                            <p>Весь расходный материал для взятия крови одноразовый , с вакуумными пробирками.</p>
                            <a href="#image-6" className="lb-prev">Prev</a>
                            <a href="#image-8" className="lb-next">Next</a>
                          </div>
                          <a href="#page" className="lb-close">                            
                            {' '}
                            <img 
                              className="lb-close"
                              width="50px"
                              height="auto" 
                              src={CloseButton}
                              alt="Автор публикации"
                            /> 
                            {/* x Close */}
                          </a>
                        </div>
                      </li>

                      <li>
                        <a href="#image-8">
                          <img src={Pique} alt="Pique" />
                          <span>МЦ «Ладушки»</span>
                        </a>
                        <div className="lb-overlay" id="image-8">
                          <img src={PiqueFull} alt="Pique" />
                          <div>
                            <h3>
                              МЦ «Ладушки» 
                              <span>/&nbsp;Вид №2&nbsp;/</span>
                            </h3>
                            <p>МЦ «Ладушки» (ООО «Ладамед») является независимым агентом ИНВИТРО СПБ.</p>
                            <a href="#image-7" className="lb-prev">Prev</a>
                            <a href="#image-9" className="lb-next">Next</a>
                          </div>
                          <a href="#page" className="lb-close">                            
                            {' '}
                            <img 
                              className="lb-close"
                              width="50px"
                              height="auto" 
                              src={CloseButton}
                              alt="Автор публикации"
                            /> 
                            {/* x Close */}
                          </a>
                        </div>
                      </li>

                      <li>
                        <a href="#image-9">
                          <img src={Arabesque} alt="Arabesque" />
                          <span>Анализы</span>
                        </a>
                        <div className="lb-overlay" id="image-9">
                          <img src={ArabesqueFull} alt="Arabesque" />
                          <div>
                            <h3>
                              Анализы
                              <span>/&nbsp;забор крови&nbsp;/</span>
                            </h3>
                            <p>Ваша безопасность - наш приоритет.</p>
                            <a href="#image-8" className="lb-prev">Prev</a>
                            <a href="#image-10" className="lb-next">Next</a>
                          </div>
                          <a href="#page" className="lb-close">                            
                            {' '}
                            <img 
                              className="lb-close"
                              width="50px"
                              height="auto" 
                              src={CloseButton}
                              alt="Автор публикации"
                            /> 
                            {/* x Close */}
                          </a>
                        </div>
                      </li>

                      <li>
                        <a href="#image-10">
                          <img src={Ballerina} alt="Ballerina" />
                          <span>Рецепция</span>
                        </a>
                        <div className="lb-overlay" id="image-10">
                          <img src={BallerinaFull} alt="Ballerina" />
                          <div>
                            <h3>
                              Рецепция вид 2
                              <span>/&nbsp;детское отделение&nbsp;/</span>
                            </h3>
                            <p>Радушие и помощь во всем.</p>
                            <a href="#image-9" className="lb-prev">Prev</a>
                            <a href="#image-1" className="lb-next">Next</a>
                          </div>
                          <a href="#page" className="lb-close">                            
                            {' '}
                            <img 
                              className="lb-close"
                              width="50px"
                              height="auto" 
                              src={CloseButton}
                              alt="Автор публикации"
                            /> 
                            {/* x Close */}
                          </a>
                        </div>
                      </li>

                    </ul>
                  </GridRow>
                </div>
              </section>
            </div>
            <div>
              <h3 className="course-h3">Услуги</h3>
              <p>
                {/* В медицинском центре «Ладушки» можно получить экспертные консультации по таким направлениям, как акушерство-гинекология, 
                неврология, кардиология и терапия. Здесь проводится широкий спектр диагностических процедур: ЭКГ, кольпоскопия, нейросонография, 
                допплерометрия, фолликулометрия, ЭхоКГ, УЗИ органов брюшной полости и малого таза. Клиника имеет партнерские связи с 
                лабораторией «ИНВИТРО». Это позволяет проходить все виды анализов в самые короткие сроки. */}
                1999997777Проба Услуги. В медицинском центре «Ладушки» можно получить квалифицированную медицинскую помощь по таким направлениям, как педиатрия, 
                акушерство-гинекология, неврология, кардиология и терапия. Здесь проводится широкий спектр диагностических процедур: ЭКГ, кольпоскопия, 
                допплерометрия, фолликулометрия, ЭхоКГ, УЗИ всех  органов. МЫ являемся агентом Лаборатории «ИНВИТРО СПБ » в 
                Республике КОМИ . Партнерство помогает предоставить нашим пациентам более 
                2500 медицинских анализов, и выполнить их в кратчайшие сроки в лабораторных центрах Инвитро , на самом современном оборудовании
              </p>
            </div>
            <GridRow>
              <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }}>
                <NavLink className="link link_toplink" to="/педиатр">
                  <div className="text-center">
                    <Button 
                      style={{ paddingBottom: '15px', paddingTop: '-45px' }} 
                      className="button button_settings-lada"
                      // onClick={() => history.push('/онлайн-запись')}
                    >
                      &lt; Побробнее об услугах &gt;
                    </Button>
                  </div>
                </NavLink>
                <div className="contact-media-s20" />
              </GridCol>
            </GridRow>
            <div>
              <h3 className="course-h3">Отзывы</h3>
              <p>
                В медицинском центре «Ладушки» можно получить экспертные консультации по таким направлениям, как акушерство-гинекология, 
                неврология, кардиология и терапия. Здесь проводится широкий спектр диагностических процедур: ЭКГ, кольпоскопия, 
                допплерометрия, фолликулометрия, ЭхоКГ, УЗИ органов брюшной полости и малого таза. Клиника имеет партнерские связи с 
                лабораторией «ИНВИТРО». Это позволяет проходить все виды анализов в самые короткие сроки.
              </p>
            </div>
            <GridRow>
              <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }}>
                <NavLink className="link link_toplink" to="/отзывы">
                  <div className="text-center">
                    <Button 
                      style={{ paddingBottom: '15px', paddingTop: '-45px' }} 
                      className="button button_settings-lada"
                      // onClick={() => history.push('/онлайн-запись')}
                    >
                      &lt; Посмотреть отзывы &gt;
                    </Button>
                  </div>
                </NavLink>
                <div className="contact-media-s20" />
              </GridCol>
            </GridRow>
 
          </GridCol>
        </GridRow>
        <br />
      </section>
    </>
  );
}
