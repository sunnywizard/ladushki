/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import Helmet from 'react-helmet';
import { NavLink } from 'react-router-dom';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import IconError from 'arui-feather/icon/ui/error';
import UpButton from '../../../../components/common/upbutton';
import Breadcrumbs from '../../../../components/common/breadcrumbs';
import { doctorBlock, newsitem } from '../../../../core/utils/testdata';
import Cab from '../../../../theme/images/home/main/news/vjazovapub.jpg';
import '../../programall/programone/styles.scss';

/**
 *  NEWS
 */
export default function Program() {
  const list111 = [{
    title: 'Главная',
    link: '/',
  }, {
    title: 'Новости и статьи',
    link: '/новости-и-статьи',
  }, {
    title: 'Яркая жизнь без аллергии!!',
    link: '',
  },
  ];
  return (
    <>
      <Helmet>
        <title>МЦ «Ладушки» &ndash; Яркая жизнь без аллергии!!</title>
        <meta name="description" content="МЦ «Ладушки»" />
        <meta name="keywords" content="МЦ «Ладушки»" />
      </Helmet>
      <UpButton />
      <section className="section section_fullwidth1 breadcrumbs">
        <Breadcrumbs items={list111} />
      </section>
      <section className="section section_fullwidth1">
        <h1>Яркая жизнь без аллергии!!</h1>
        <div className="our-advantages-item-description">
          <p>
            Источник публикации:&nbsp;
            <a style={{ textDecoration: 'none' }} href="https://ladamed.ru/%D0%BC%D1%86-%C2%AB%D0%BB%D0%B0%D0%B4%D1%83%D1%88%D0%BA%D0%B8%C2%BB" target="_blank" rel="noreferrer"><u>https://ladamed.ru/</u></a>
          </p>
        </div>
      </section>
      <section className="viewmedia">
        <img 
          className="opa viewmedia"
          style={{ border: '1px solid #e2e2e2' }}
          width="100%"
          height="auto"
          src={Cab} 
          alt="Простой недосып"
        />  
      </section>
      <section className="section section_fullwidth1">
        <div className="contact-media-s20" />
        <GridRow>
          {/* <GridCol className="animate2" width={{ mobile: 12, tablet: 3, desktop: 3 }}> */}
          <GridCol className="" width={{ mobile: 12, tablet: 3, desktop: 3 }}>
            <NavLink className="link link_toplink" to="/doctor">
              {/* <div className="">
                <img 
                  className="photo123 opa"
                  width="180vw"
                  height="auto"
                  src={doctorBlock[0].photo} 
                  alt={doctorBlock[0].titleDeclare}
                  onMouseEnter={(e) => e.currentTarget.src = doctorBlock[0].photo1}
                  onMouseLeave={(e) => e.currentTarget.src = doctorBlock[0].photo}
                />  
              </div> */}
              <img 
                className="photo123 opa first"
                width="180vw"
                height="auto"
                src={doctorBlock[0].photo1} 
                alt={doctorBlock[0].titleDeclare}
              />  
              {/* <img 
                className="photo123 opa second"
                width="180vw"
                height="auto"
                src={doctorBlock[0].photo} 
                alt={doctorBlock[0].titleDeclare}
              />   */}

            </NavLink>
          </GridCol>
          <GridCol className="" width={{ mobile: 12, tablet: 9, desktop: 9 }}>
            <h4>{newsitem[0].autor}</h4>
            Клиника: 
            {' '}
            <b>«Ладушки»</b>
            <p>практикующий врач педиатр, аллерголог-иммунолог.. Стаж работы - 17 лет.</p>
            <div className="hr3_0" />
            <div className="contact-media-s20" />
            <div>
              <p>
                Завершение зимы. Пробуждение природы. Уставшие от холодной погоды люди празднично встречают первые, тёплые, 
                солнечные дни, радуются приходу расцветающей весны. Однако, некоторые из них испытывают гнетущее состояние — 
                скоро сезонное обострение аллергии на пыльцу растений.
              </p>
            </div>
          </GridCol>
        </GridRow>
        <GridRow>

          <p>
            Сложнее всего тем, кто впервые столкнулся с аллергией и не сможет отличить ее от ОРЗ. На помощь придут 
            специалисты аллергологи, которые проведут исследования в лаборатории «Инвитро» с применением технологии 
            имуннокап, помогут разобраться и верно поставят диагноз, назначат соответствующее дообследование и 
            правильную схему лечения.
          </p>
          <p>
            Поллиноз — один из видов болезней, причиной которого является реакция на пыльцу. Проявляется в виде 
            аллергического ринита, конъюнктивита, дерматита, обострения астмы или иных смешанных форм заболеваний.
          </p>
          <p>
            Самым распространенным аллергеном считается пыльца березы. У некоторых аллергия проявляется только на 
            один вид пыльцы, однако многие люди страдают с весны до осени, от цветения деревьев, луговых и сорных трав до плесневых грибов и высохшей травы.
          </p>
          <p>
            Для склонных к аллергии нужно усвоить три простых правила, облегчающие жизнь в периоды проявления заболевания:
          </p>
        </GridRow>
        <div className="contact-media-s20" />
        <GridRow gutter={{ mobile: 0, tablet: 16, desktop: { m: 24 } }}>
          <GridCol className="colum_prog  text-block-2" width={{ mobile: 12, tablet: 4, desktop: 4 }}>
            <b>Во-первых,</b>
            <p>
              не выходить на улицу в сухую или ветреную погоду, закрыть и занавесить проемы окон сырыми простынями, 
              проводить влажную уборку в квартире и машине. При контакте с пыльцой рекомендуется смена одежды, умывание лица 
              и открытых участков тела, смыв цветни с волосистой части головы мокрыми руками.
            </p>
          </GridCol>
          <GridCol className="colum_prog" width={{ mobile: 12, tablet: 4, desktop: 4 }}>
            <b>Во-вторых,</b>
            <p>
              исключить из питания продукты с перекрёстной аллергией², так называемую большую восьмёрку: коровье молоко, 
              рыбу и морепродукты, арахис, орехи, шоколад, куриное яйцо, сою, пшеницу.
            </p>
          </GridCol>
          <GridCol className="colum_prog text-block-1" width={{ mobile: 12, tablet: 4, desktop: 4 }}>
            <b>В-третьих,</b>
            <p>
              применять лекарственную и симптоматическую терапию: антигистаминные препараты, местные глюкокортикостероиды или 
              кромогексал, а при более тяжёлых состояниях — общие гормоны.            
            </p>
          </GridCol>
        </GridRow>
        <div className="contact-media-s30" />
        <GridRow className="colum_prog text-block-3">
          <p className="where-to-begin-item-heading">
            <IconError
              colored
            />
            {' '}
            &nbsp;
            Атопикам¹ необходимо помнить!!! 
          </p>
          <p>
            Своевременное обращение к врачам медицинского центра «Ладамед» поможет снизить аллергические реакции, 
            получить консультации, назначить персональный курс лечения и восстановления, сопроводить пациента в 
            период обострения. Соблюдение простых правил и рекомендаций врача позволят нашим клиентам в полной мере 
            соприкоснуться с красотой окружающей природы и внешнего мира.
          </p>
        </GridRow>
        <div className="contact-media-s30" />
        <GridRow>
          <p style={{ textAlign: 'left' }}>
            ¹Атопики — хроническое воспалительное заболевание кожи аллергической природы.
          </p>
          <p>
            ²Перекрёстная аллергия — это аллергия, когда белки одного вещества, обычно пыльцы, похожи на белки 
            содержащиеся в другом веществе, чаще всего в пище.
          </p>
        </GridRow>
      </section>
      <p className="text-center" style={{ fontSize: '22px' }}>
        ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ.
        НЕОБХОДИМА КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА
      </p>
      <div className="contact-media-s20" />
    </>
  );
}
