/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import HomePage from './home';
import Program from './programall/program';
import ProgramOne from './programall/programone';
import ProgramTwo from './programall/programtwo';
import News from './newsall/news';
import NewsOne from './newsall/newsone';
import NewsTwo from './newsall/newstwo';
import NewsThree from './newsall/newsthree';
import NewsFour from './newsall/newsfour';
import NewsFive from './newsall/newsfive';
import NewsSix from './newsall/newssix';
import NewsSeven from './newsall/newsseven';

import About from './about';
import Review from './review';
import ReviewAll from './reviewall';
import Answers from './answers';
import NotFoundPage from './notfound';
import Header from '../../components/common/header';
import TopLinks from '../../components/common/toplinks';
import Footer from '../../components/common/footer';
import Unitpoll from './unitpoll';
// import UnitpollMain from './unitpollmain';
import Attachment from './attachment';
import Winmessage from './winmessage';
import Terms from './termsall/terms';
import Terms01 from './termsall/terms01';
import Terms02 from './termsall/terms02';
import Terms03 from './termsall/terms03';
import Terms04 from './termsall/terms04';
import Terms05 from './termsall/terms05';
import Terms06 from './termsall/terms06';
import Terms07 from './termsall/terms07';
import Terms08 from './termsall/terms08';

import Examp from './exampall/examp';
import Examp1 from './exampall/examp1';
import Examp2 from './exampall/examp2';
// import Examp3 from './exampall/examp3';
import Petrov from './petrovall/petrov';
// import Petrov01 from './petrovall/petrov01';
import Petrov02 from './petrovall/petrov02';
import Petrov03 from './petrovall/petrov03';
import Petrov04 from './petrovall/petrov04';
import Petrov05 from './petrovall/petrov05';
import Petrov06 from './petrovall/petrov06';
import Petrov07 from './petrovall/petrov07';
import Petrov08 from './petrovall/petrov08';
import Petrov09 from './petrovall/petrov09';

import Doctor from './doctorall/doctor';
import Doctor01 from './doctorall/doctor';
import Doctor02 from './doctorall/doctor';
import Doctor03 from './doctorall/doctor';
import Doctor04 from './doctorall/doctor';
import Doctor05 from './doctorall/doctor';
import Doctor06 from './doctorall/doctor';
import Doctor07 from './doctorall/doctor';
import Doctor08 from './doctorall/doctor';
import Doctor09 from './doctorall/doctor';
import Doctor10 from './doctorall/doctor';
import Doctor11 from './doctorall/doctor';
import Doctor12 from './doctorall/doctor';
import Doctor13 from './doctorall/doctor';
import PetrovNotFound from './petrovall/petrovnotfound';
import Contacts from './contacts';
import Privacy from './pravila/privacy';
import NewsLada from './ladanews';
import Soglasie152Fz from './pravila/soglasie152fz';
import CookiePolicy from './pravila/cookiepolicy';
import CookieAbout from './pravila/cookieabout';
import Record from './record';
// import Record01 from './record01';
import RecordFail from '../../components/my/recordfail';
import RecordGood from '../../components/my/recordgood';
import Chat from '../../components/my/chatsupport';

export default function Site() {

  // self.addEventListener('fetch', (event) => {
  //   event.respondWith(
  //     caches.match(event.request).then((resp) => {
  //       return resp || fetch(event.request).then((response) => {
  //         return caches.open('v1').then((cache) => {
  //           cache.put(event.request, response.clone());
  //           return response;
  //         });
  //       });
  //     })
  //   );
  // });

  // self.addEventListener('activate', (event) => {
  //   event.waitUntil(
  //     caches.keys().then((cacheNames) => {
  //       cacheNames.forEach((cacheName) => {
  //         caches.delete(cacheName);
  //       });
  //     })
  //   );
  // });

  // self.addEventListener('fetch', (event) => {
  //   event.respondWith(
  //     fetch(event.request).catch(() => caches.match(event.request))
  //   );
  // });
  Cookies.remove('lang', { path: '' });
  function HeaderView() {
    const location = useLocation();
    const loc3 = location.pathname;
    if (loc3 === '/') {
      return (
        <TopLinks />
      );
    } 
    if (loc3 === '/о-нас') {
      return (
        <TopLinks />
      );
    }
    if (loc3 === '/goods') {
      return (
        <TopLinks />
      );
    }
    if (loc3 === '/searchpage') {
      return (
        <TopLinks />
      );
    }
    return (
      <div />
    );
  }

  return (
    <>
      <HeaderView />
      <Header />
      <main className="main">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/обратная-связь" component={Chat} />
          <Route path="/unitpoll" component={Unitpoll} />
          {/* <Route path="/unitpollmain" component={UnitpollMain} /> */}
          <Route path="/attachment" component={Attachment} />
          <Route path="/winmessage" component={Winmessage} />
          <Route path="/документы-правила/лицензии/орджоникидзе" component={Terms} />
          <Route path="/документы-правила/лицензии/маркса" component={Terms01} />
          <Route path="/документы-правила/лицензии/мира" component={Terms02} />
          <Route path="/документы-правила/лицензии/первомайская" component={Terms03} />
          <Route path="/документы-правила/лицензии/ленина" component={Terms04} />
          <Route path="/документы-правила/нормативные-документы" component={Terms05} />
          <Route path="/документы-правила/правила/файлы-cookie" component={Terms06} />
          <Route path="/документы-правила/правила/политика-обработки-персональных-данных" component={Terms07} />
          <Route path="/документы-правила/надзорные-органы" component={Terms08} />

          <Route path="/о-нас" component={About} />
          <Route path="/оставить-отзыв" component={Review} />
          <Route path="/отзывы" component={ReviewAll} />
          <Route path="/вопросы-ответы" component={Answers} />

          <Route path="/вакцинация" component={Examp} />
          {/* <Route path="/вакцинация-во" component={Examp} /> */}
          <Route path="/акушерство-гинекология" component={Examp1} />
          <Route path="/узи" component={Examp2} />
          {/* <Route path="/дополнительные-услуги-во" component={Examp3} /> */}
          <Route path="/педиатр" component={Petrov} />
          {/* <Route path="/патронаж" component={Petrov01} /> */}
          <Route path="/гастроэнтеролог" component={Petrov02} />
          <Route path="/аллерголог-иммунолог" component={Petrov03} />
          <Route path="/травматолог-ортопед" component={Petrov04} />          
          <Route path="/хирург" component={Petrov05} />
          <Route path="/кардиолог" component={Petrov06} />
          <Route path="/невролог" component={Petrov07} />
          <Route path="/неонатолог" component={Petrov08} />
          <Route path="/дополнительные-услуги" component={Petrov09} />
          <Route path="/doctor" component={Doctor} />
          <Route path="/doctor1" component={Doctor01} />
          <Route path="/doctor2" component={Doctor02} />
          <Route path="/doctor3" component={Doctor03} />
          <Route path="/doctor4" component={Doctor04} />          
          <Route path="/doctor5" component={Doctor05} />
          <Route path="/doctor6" component={Doctor06} />
          <Route path="/doctor7" component={Doctor07} />
          <Route path="/doctor8" component={Doctor08} />
          <Route path="/doctor9" component={Doctor09} />
          <Route path="/doctor10" component={Doctor10} />
          <Route path="/doctor11" component={Doctor11} />
          <Route path="/doctor12" component={Doctor12} />
          <Route path="/doctor13" component={Doctor13} />
          <Route path="/программа" component={Program} />
          <Route path="/программа1" component={ProgramOne} />
          <Route path="/программа2" component={ProgramTwo} />
          <Route path="/новости-и-статьи/яркая-жизнь-без-аллергии" component={News} />
          <Route path="/новости-и-статьи/простой-недосып" component={NewsOne} />
          <Route path="/новости-и-статьи/одни-из-лучших-условий" component={NewsTwo} />
          <Route path="/новости-и-статьи/клиника-для-детей" component={NewsThree} />
          <Route path="/новости-и-статьи/летние-весенние-недуги" component={NewsFour} />
          <Route path="/новости-и-статьи/лабораторная-диагностика" component={NewsFive} />
          <Route path="/новости-и-статьи/что-делат-при-частых-простудах" component={NewsSix} />
          <Route path="/новости-и-статьи/не-все-болезни-от-нервов" component={NewsSeven} />
          <Route path="/petrovnotfound" component={PetrovNotFound} />
          <Route path="/контакты" component={Contacts} />
          <Route path="/soglasie-na-obrabotku-dannyh-152-fz" component={Soglasie152Fz} exact />
          <Route path="/наши-правила" component={Privacy} />
          <Route path="/новости-и-статьи" component={NewsLada} />
          <Route path="/about-cookie" component={CookieAbout} />
          <Route path="/policy-cookie" component={CookiePolicy} />
          <Route path="/онлайн-запись" component={Record} />
          <Route path="/rec" component={RecordGood} />
          {/* <Route path="/запись-не-осуществена" component={Record01} /> */}
          <Route path="/notrec" component={RecordFail} />

          <Route path="*" component={NotFoundPage} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}
