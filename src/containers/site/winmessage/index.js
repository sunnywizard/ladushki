/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Helmet from 'react-helmet';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Titul from '../../../theme/images/titul.jpg';
import './styles.scss';
import '../../../theme/styles/settings.scss';

export default function Home() {
 
  return (
    <>
      <Helmet>
        <title>Unit Help - Бриф отправлен</title>
        <meta name="description" content="Бриф отправлен" />
        <meta name="keywords" content="Бриф отправлен" />
      </Helmet>
      <section className="section section_fullwidth">
        <div>
          <img className="section section_fullwidth1 TitulSize" src={Titul} alt="МЦ «Ладушки»" />
        </div>
      </section>  
      <section className="section section_fullwidth1">
        <GridRow>
          <GridCol className="text-center" width={{ mobile: 12, tablet: 12, desktop: 12 }}>
            {/* <iframe title="UnitForm1" id="hidden_iframe" name="hidden_iframe" onLoad={'submitted&amp;&amp;(window.location=&quot;https://stplab.ru/contacts/&quot;)'} style={{ display: 'none' }} /> */}
            <iframe title="UnitForm1" id="hidden_iframe" name="hidden_iframe" style={{ display: 'none' }} />
          </GridCol>
          <GridCol className="text-center" width={{ mobile: 12, tablet: 12, desktop: 12 }}>
            <h2 className="text-center">Отзыв отправлен</h2>
            <p className="text-center form-space-l0" style={{ fontSize: '3vh' }}>
              Спасибо, что вы написали отзыв. Нам важно ваше мнение о нашей работе. 
              <br />

            </p>
            <br />
          </GridCol>
        </GridRow> 
      </section>
    </>
  );
}

// Home.propTypes = {
//   navigationTo: Type.func.isRequired,
// };
