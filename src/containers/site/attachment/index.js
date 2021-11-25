/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Helmet from 'react-helmet';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import UpButton from '../../../components/common/upbutton';
import Breadcrumbs from '../../../components/common/breadcrumbs';
import { setupBreadcrumbs } from '../../../core/utils/testdata';
import Android1 from '../../../theme/images/setupladamed/addaptive_android1.jpg';
import Android2 from '../../../theme/images/setupladamed/addaptive_android2.jpg';
import Android from '../../../theme/images/setupladamed/addaptive_android.jpg';
import AaddGoogle from '../../../theme/images/setupladamed/addGoogle.jpg';
import AaddGoogle1 from '../../../theme/images/setupladamed/addGoogle1.jpg';
import AaddGoogle2 from '../../../theme/images/setupladamed/addGoogle2.jpg';
import Apple from '../../../theme/images/setupladamed/addaptive-apple.jpg';
import Apple1 from '../../../theme/images/setupladamed/addaptive-apple1.jpg';
import '../../../theme/styles/settings.scss';

export default function NormLadaMed() {
  return (
    <>
      <Helmet>
        <title>МЦ «Ладушки» &ndash; Установка приложения</title>
        <meta name="description" content="МЦ «Ладушки»" />
        <meta name="keywords" content="МЦ «Ладушки»" />
      </Helmet>
      <UpButton />
      <section className="section section_fullwidth1 breadcrumbs">
        <Breadcrumbs items={setupBreadcrumbs} />
      </section>
      <section className="section section_fullwidth1">
        <h1>Установка приложения</h1>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }}>
            <div className="">
              <p>
                Установка приложения «МЦ Ладушки» проста и осуществляется при открытии сайта 
                {' '}
                <b>ladushki11.ru</b>
                {' '}
                в браузерах. 
                Маленький размер приложения и возможность пользоваться им при отсутствии интернета добавят достоинств
                к принятию решения к его эксплуатации.
                Последовательность действий при инталляции продукта на различных типах устройств приведена ниже. 
              </p>
            </div>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }}>
            <h3>
              Установка приложения в Chrome и Chromium браузеры?
            </h3>
            {/* <div> */}
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }}>          
            <div className="">
              <p>
                Откройте в Chrome и Chromium браузере сайт 
                {' '}
                <b>ladushki11.ru</b>
                . Дождитесь его полной загрузки. Нажмите кнопку &#8853; 
                в поле адресной строки браузера. В появившемся окне с вопросом «Установить приложение?» нажмите на кнопку
                «Установить». Приложение установиться на рабочий стол и создаст запись в «Пуск > Приложение Chrome > МЦ Ладушки».
              </p>
              <div className="contact-media-s20" />
              1
            </div>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
            <div className="contact-media" />
            <a href={AaddGoogle}>
              <img src={AaddGoogle} className="line-color" width="70%" height="auto" alt="Chrome1 setup1" />
            </a>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
            <div className="contact-media" />
            <a href={AaddGoogle1}>
              <img src={AaddGoogle1} className="line-color" width="70%" height="auto" alt="Chrome2 setup2" />
            </a>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
            <div className="contact-media" />
            <a href={AaddGoogle2}>
              <img src={AaddGoogle2} className="line-color" width="70%" height="auto" alt="Chrome setup" />
            </a>
          </GridCol>
        </GridRow>
        <br />
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }}>
            <h3>
              Установка приложения на Android?
            </h3>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }}>
            <div className="">
              <p>
                При открытии сайта автоматически в нижней части экрана появится вопрос-уведомление о добавлении 
                приложения на рабочий стол.
                Положительный ответ пользователя установит его на андроид устройство. На этом установка 
                закончиться! 
                <br />
                Не успели и сообщение закрылось, нажмите три вертикальные точки в верхнем правом углу браузера
                и выберите из выпадающего меню опцию «Добавить на главный экран».
              </p>
              <div className="contact-media-s20" />
            </div>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
            <div className="contact-media" />
            <a href={Android1}>
              <img src={Android1} className="line-color" width="70%" height="auto" alt="Android setup1" />
            </a>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
            <div className="contact-media" />
            <a href={Android2}>
              <img src={Android2} className="line-color" width="70%" height="auto" alt="Android setup2" />
            </a>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
            <div className="contact-media" />
            <a href={Android}>
              <img src={Android} className="line-color" width="70%" height="auto" alt="Android setup" />
            </a>
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }}>
            <div className="">
              <p>
                Установка приложения «МЦ Ладушки» проста и осуществляется при открытии сайта 
                {' '}
                <b>ladushki11.ru</b>
                {' '}
                в браузерах. 
                Маленький размер приложения и возможность пользоваться им при отсутствии интернета добавят достоинств
                к принятию решения к его эксплуатации.
                Последовательность действий при инталляции продукта на различных типах устройств приведена ниже. 
              </p>
              <div className="contact-media-s20" />
            </div>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }}>
            <h3>
              Установка приложения в iOS?
            </h3>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }}>          
            <div className="">
              <p>
                Откройте в браузере Safari сайт 
                {' '}
                <b>ladushki11.ru</b>
                . Дождитесь его полной загрузки. Нажмите кнопку «Поделиться», прокрутите вниз и нажмите 
                «на экран Домой». Приложение установиться на рабочий стол вашего iOS устройства и готово 
                к использованию. 
              </p>
              <div className="contact-media-s20" />
            </div>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
            <div className="contact-media" />
            <a href={Apple}>
              <img src={Apple} className="line-color" width="70%" height="auto" alt="Apple setup1" />
            </a>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
            <div className="contact-media" />
            <a href={Apple1}>
              <img src={Apple1} className="line-color" width="70%" height="auto" alt="Apple1 setup" />
            </a>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} />
        </GridRow>
      </section>
    </>
  );
}
