/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Helmet from 'react-helmet';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Markdown from 'react-markdown/with-html';
import UpButton from '../../../../components/common/upbutton';
import Breadcrumbs from '../../../../components/common/breadcrumbs';
import Subsale from '../../../../components/common/subsale';
import { exampText } from '../../../../core/utils/testdata';
import '../../../../containers/site/petrovall/styles.scss';

/**
 * Расчет 1
 */
export default function Exampfunc() {
  const list111 = [{
    title: 'Главная',
    link: '/',
  }, {
    title: 'Прайс-лист для физических и юридических лиц',
    link: '',
  },
  ];   
  return (
    <>
      <Helmet>
        <title>МЦ «Ладушки» - Вакцинация</title>
        <meta name="description" content="МЦ «Ладушки»" />
        <meta name="keywords" content="МЦ «Ладушки»" />
      </Helmet>
      <UpButton />
      <section className="section section_fullwidth1 breadcrumbs">
        <Breadcrumbs items={list111} />
      </section>
      <div className="online-learning">
        <section className="section section_fullwidth1">
          <h1 className="">Прайс-лист для физических и юридических лиц</h1>

          <GridRow>
            <GridCol
              width={{ mobile: 12, tablet: 3, desktop: 3 }} 
              className=""
              // style={{ borderRight: '1px solid #aad7ac', height: '450px' }}
            >
              <Subsale />
            </GridCol>

            <GridCol 
              width={{ mobile: 12, tablet: 9, desktop: 9 }} 
              className=""
              style={{ borderLeft: '1px solid #aad7ac', height: 'auto' }}
            >
              <h3>{exampText[0].titleDeclare}</h3>
              <GridRow>
                <GridCol 
                  width={{ mobile: 10, tablet: 10, desktop: 10 }} 
                  className=""
                >
                  <Markdown source={exampText[0].contentDeclare} escapeHtml={false} />
                </GridCol>
                <GridCol 
                  width={{ mobile: 2, tablet: 2, desktop: 2 }} 
                  className=""
                >
                  <Markdown source={exampText[0].priceDeclare} escapeHtml={false} />
                </GridCol>
              </GridRow>
            </GridCol>
          </GridRow>
        </section>
      </div>

      {/* <Footer /> */}
    </>

  );
}
