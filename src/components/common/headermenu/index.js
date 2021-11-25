/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import Type from 'prop-types';
import mail from '../../../theme/images/account/mail.svg';
import mailc from '../../../theme/images/account/mailc.svg';
import writer from '../../../theme/images/account/writer.svg';
import writerc from '../../../theme/images/account/writerc.svg';
import medic from '../../../theme/images/account/medic.svg';
import medicc from '../../../theme/images/account/medicc.svg';
import doc from '../../../theme/images/account/doc.svg';
import docc from '../../../theme/images/account/docc.svg';
import map from '../../../theme/images/account/map.svg';
import mapc from '../../../theme/images/account/mapc.svg';
import law from '../../../theme/images/account/law.svg';
import lawc from '../../../theme/images/account/lawc.svg';
import sale from '../../../theme/images/account/sale.svg';
import salec from '../../../theme/images/account/salecolor.svg';
import news from '../../../theme/images/account/news.svg';
import newsc from '../../../theme/images/account/newsc.svg';
import serv from '../../../theme/images/account/serv.svg';
import servc from '../../../theme/images/account/servc.svg';
import home from '../../../theme/images/account/home.svg';
import homec from '../../../theme/images/account/homec.svg';
import review from '../../../theme/images/account/review.svg';
import reviewc from '../../../theme/images/account/reviewc.svg';
import ladalogo from '../../../theme/images/account/ladalogo.svg';
import ladalogoc from '../../../theme/images/account/ladalogo.svg';
import answer from '../../../theme/images/account/answer.svg';
import answercolor from '../../../theme/images/account/answercolor.svg';
import './styles.scss';

export default function HeaderMenu({ handleClick }) {
  return (
    <div className="han-menu" id="menu" onClick={() => handleClick()}>

      <ul>
        <li>
          <Link to="/о-нас">
            <img 
              className=""
              width="30vw"
              height="auto"
              src={home} 
              alt="О нас"
              onMouseEnter={(e) => e.currentTarget.src = homec}
              onMouseLeave={(e) => e.currentTarget.src = home}
            /> 
            &ensp;
            <u>О нас</u>
          </Link>
        </li>

        <li>
          {/* <Link to="/мц-«ладушки»"> */}
          <a href="https://ladamed.ru/" target="_blank" rel="noreferrer" className="">
            <img 
              className=""
              width="30vw"
              height="auto"
              src={ladalogo} 
              alt="«Ладамед»"
              onMouseEnter={(e) => e.currentTarget.src = ladalogoc}
              onMouseLeave={(e) => e.currentTarget.src = ladalogo}
            /> 
            &ensp;
            <u>«Ладамед»</u>
          </a>
          {/* </Link> */}
        </li>

        <li>
          <Link to="/doctor">
            <img 
              className=""
              width="30vw"
              height="auto"
              src={medic} 
              alt="Наши специалисты"
              onMouseEnter={(e) => e.currentTarget.src = medicc}
              onMouseLeave={(e) => e.currentTarget.src = medic}
            /> 
            &ensp;
            <u>Наши специалисты</u>
          </Link>
        </li>
        {/* <li>
          <Link to="/филиалы">Наши клиники</Link>
        </li> */}



        <li>
          <Link to="/педиатр">
            <img 
              className=""
              width="30vw"
              height="auto"
              src={serv} 
              alt="Услуги"
              onMouseEnter={(e) => e.currentTarget.src = servc}
              onMouseLeave={(e) => e.currentTarget.src = serv}
            /> 
            &ensp;
            <u>Услуги</u>
          </Link>
            
        </li>
        <li>
          <Link to="/контакты">
            <img 
              className=""
              width="30vw"
              height="auto"
              src={map} 
              alt="Контакты"
              onMouseEnter={(e) => e.currentTarget.src = mapc}
              onMouseLeave={(e) => e.currentTarget.src = map}
            /> 
            &ensp;
            <u>Контакты</u>
          </Link>
        </li>



        <li>
          <Link to="/акции">
            <img 
              className=""
              width="30vw"
              height="auto"
              src={sale} 
              alt="Обратная связь"
              onMouseEnter={(e) => e.currentTarget.src = salec}
              onMouseLeave={(e) => e.currentTarget.src = sale}
            /> 
            &ensp;
            <u>Акции</u>
          </Link>
        </li>
        <li>
          <Link to="/новости-и-статьи">
            <img 
              className=""
              width="30vw"
              height="auto"
              src={news} 
              alt="Новости и статьи"
              onMouseEnter={(e) => e.currentTarget.src = newsc}
              onMouseLeave={(e) => e.currentTarget.src = news}
            /> 
            &ensp;
            <u>Новости и статьи</u>
          </Link>
        </li>
        <li>
          <Link to="/отзывы">
            <img 
              className=""
              width="30vw"
              height="auto"
              src={review} 
              alt="Отзывы"
              onMouseEnter={(e) => e.currentTarget.src = reviewc}
              onMouseLeave={(e) => e.currentTarget.src = review}
            /> 
            &ensp;
            <u>Отзывы</u>
          </Link>
        </li>    



        {/* <li>
          <Link to="/наши-правила">
            <img 
              className=""
              width="30vw"
              height="auto"
              src={law} 
              // title="Записаться на прием"
              alt="Наши правила"
              onMouseEnter={(e) => e.currentTarget.src = lawc}
              onMouseLeave={(e) => e.currentTarget.src = law}
            /> 
            &ensp;
            <u>Наши правила</u>
          </Link>
        </li> */}
        <li>
          <Link to="/документы-правила/лицензии/орджоникидзе">
            <img 
              className=""
              width="30vw"
              height="auto"
              src={doc} 
              alt="Документы и правила"
              onMouseEnter={(e) => e.currentTarget.src = docc}
              onMouseLeave={(e) => e.currentTarget.src = doc}
            /> 
            &ensp;
            <u>Документы и правила</u>
          </Link>
        </li> 
        <li>
          <Link to="/обратная-связь">
            <img 
              className=""
              width="30vw"
              height="auto"
              src={mail} 
              alt="Обратная связь"
              onMouseEnter={(e) => e.currentTarget.src = mailc}
              onMouseLeave={(e) => e.currentTarget.src = mail}
            /> 
            &ensp;
            <u>Обратная связь</u>
          </Link>
        </li>
        <li>
          <Link to="/онлайн-запись">
            <img 
              className=""
              width="30vw"
              height="auto"
              src={writer} 
              // title="Записаться на прием"
              alt="Записаться на прием"
              onMouseEnter={(e) => e.currentTarget.src = writerc}
              onMouseLeave={(e) => e.currentTarget.src = writer}
            /> 
            &ensp;
            <u>Онлайн-запись</u>
          </Link>
        </li>           
        <li>
          <Link to="/вопросы-ответы">
            <img 
              className=""
              width="30vw"
              height="auto"
              src={answer} 
              alt="Вопросы и ответы"
              onMouseEnter={(e) => e.currentTarget.src = answercolor}
              onMouseLeave={(e) => e.currentTarget.src = answer}
            /> 
            &ensp;
            <u>Вопросы и ответы</u>
          </Link>
        </li>               
      </ul>
    </div>
  );
}

HeaderMenu.propTypes = {
  handleClick: Type.func.isRequired,
};
