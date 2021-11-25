/* eslint-disable import/no-unresolved */
import React from 'react';
import Helmet from 'react-helmet';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import cry from '../../../theme/images/problems.png';
import './styles.scss';

export default function Coursenf() {
   return (
    <>
      <Helmet>
        <title>МЦ «Ладушки» - Неудачная запись на прием</title>
        <meta name="description" content="МЦ «Ладушки»" />
        <meta name="keywords" content="МЦ «Ладушки»" />
      </Helmet>
      {/* <section className="section section_fullwidth"> */}
      <section className="section section_fullwidth1">
        <GridRow>
          <GridCol className="text-center" width={{ mobile: 12, tablet: 12, desktop: 12 }}>
            <h1 className="text-center">Запись на приём не осуществлена</h1>
            <img src={cry} alt="Сбой" /> 
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }} />
          <GridCol className="colum_prog text-block-2" width={{ mobile: 12, tablet: 8, desktop: 8 }}>
            <p className="text-center" style={{ fontSize: '16px' }}>
              Возможно отсутствует связь с сервером. Проверьте ваше интернет соединение.
            </p>            
            <p className="text-center" style={{ fontSize: '16px' }}>
              Благодарим вас за использование сервиса онлайн записи на прием к специалистам МЦ «Ладушки».
            </p>
            <p className="text-center" style={{ fontSize: '16px' }}>
              Повторите запись через некоторое время.
            </p>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }} />
        </GridRow>
        <div className="contact-media-s30" />
      </section>
    </>
  );
}
