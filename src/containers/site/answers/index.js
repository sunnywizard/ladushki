/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import Helmet from 'react-helmet';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import Markdown from 'react-markdown/with-html';
import { Link } from 'react-router-dom';
import UpButton from '../../../components/common/upbutton';
import Breadcrumbs from '../../../components/common/breadcrumbs';
import { answerBreadcrumbs, reportAnswer, doctorBlock } from '../../../core/utils/testdata';
import './style.scss';

export default function AnswerLadaMed1() {
  // const [step, setStep] = useState(8);
  const [step, setStep] = useState(4);
  const outputReview = reportAnswer.length > 0 ? reportAnswer.slice(0, step) : [];
  const isoutputReview = outputReview.length > 0;
  const isGetMore = isoutputReview && reportAnswer.length > step;
  const reviewLeg = reportAnswer.length;
  // let minusReview = 0;
  // let plusReview = 0;
  // let middleReview = 0;
  // for (let i = 0; i < reviewLeg; i += 1) {
  //   if (reportAnswer[i].experiensReview < 1.7) {
  //     minusReview += 1;
  //   }
  //   if (reportAnswer[i].experiensReview > 4) {
  //     plusReview += 1;
  //   }
  //   if (reportAnswer[i].experiensReview > 1.7) {
  //     if (reportAnswer[i].experiensReview < 4) {
  //       middleReview += 1;
  //     }
  //   }    
  // }

  return (
    <>
      <Helmet>
        <title>МЦ «Ладушки» &ndash; Вопросы и ответы</title>
        <meta name="description" content="МЦ «Ладушки»" />
        <meta name="keywords" content="МЦ «Ладушки»" />
      </Helmet>
      <UpButton />
      <section className="section section_fullwidth1 breadcrumbs">
        <Breadcrumbs items={answerBreadcrumbs} />
      </section>
      <section className="section section_fullwidth1">
        <h1>Вопросы и ответы</h1>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }}>
            <div className="">
              <p>
                Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст
                Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст
                <br />
                Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст
                Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст Какой-то текст
              </p>
              <div className="section section_fullwidth1">

                <p>
                  <b className="cycle-plus">Всего вопросов:</b>
                  {' '}
                    &ensp;
                  <b className="cycle-plus">{reviewLeg}</b>
                &emsp;&emsp; 
                </p>

              </div>
            </div>

            <GridRow justify="left">
              {isoutputReview
            && outputReview.map((review) => (
              <GridCol
                key={`${reportAnswer.id}${Math.random()}`}
                width={{ mobile: 12, tablet: 12, desktop: 12 }}
              >
                <div className="hr2" />
                <div className="contact-media" />

                <GridRow key={Math.random()}>
                  <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
                    {/* <div>
                      <p>
                        <b style={review.experiensReview < 1.7 ? { color: '#EF3124' } : review.experiensReview < 3 ? { color: '#9c9c9c' } : { color: '#fd6b0d' }}>{review.experiensReview}</b>
&ensp;
                        <progress className={review.experiensReview < 1.7 ? 'progressunit1' : review.experiensReview < 3 ? 'progressunit2' : 'progressunit'} value={review.experiensReview} max="5">
                          <span>{review.experiensReview}</span>
                        </progress>
                      </p>
                    </div> */}
                    <p>
                      <b>Вопрос:</b>
                      <br />
                      {review.autorReview}
                      <br />
                      {review.phoneReview}
                      <br />
                      {/* <b>Задан:</b> */}
                      {/* <br /> */}
                      {review.dataReception}
                      &nbsp;г.
                    </p>
                    <p>
                      <b>Ответ:</b>
                      <br />
                      {/* <div> */}
                      <Link style={{ textDecoration: 'none' }} to={+review.id === 1 ? '/doctor' : `/doctor0${review.id - 1}`}>
                        <img 
                          className=""
                          width="30vw"
                          height="auto" 
                          src={+review.id === 1 ? doctorBlock[0].photo1 : doctorBlock[review.id - 1].photo1}
                          alt="Отзыв о враче"
                        /> 
                      &emsp;
                        <u>{review.titleDeclare}</u>
                      </Link>
                      {/* </div> */}
                      <br />
                    </p>

                  </GridCol>
                  <GridCol width={{ mobile: 12, tablet: 8, desktop: 8 }}>
                    <h5>
                      {review.blockAnswer}
                    </h5>
                    {/* <p> */}
                      <Markdown source={review.textReview} escapeHtml={false} />
                    {/* </p> */}
                    <p className="datareview">
                      {review.dataReview}
                      {' '}
&nbsp;г.
                    </p>
                  </GridCol>
                </GridRow>

              </GridCol>
            ))}
            </GridRow>
            <div className="hr2" />
            {isGetMore && (
            <div className="button-center">
              <Button
                // className="button button_settings-form"
                className="button button_settings-lada"
                // onClick={() => setStep(step + 6)}
                onClick={() => setStep(step + 4)}
              >
                Показать ещё
              </Button>
            </div>
            )}
            <br />
          </GridCol>
        </GridRow>
        <br />
      </section>
    </>
  );
}
