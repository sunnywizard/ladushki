/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState, Component } from 'react';
import Helmet from 'react-helmet';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import Markdown from 'react-markdown/with-html';
// import { renderers } from 'react-markdown';
import UpButton from '../../../../components/common/upbutton';
// import PubReview from '../../../../components/site/pubreview';
import Breadcrumbs from '../../../../components/common/breadcrumbs';
import Submenu from '../../../../components/common/submenu';
import { doctorBlock, reportReview, reportAnswer } from '../../../../core/utils/testdata';
import '../../petrovall/styles.scss';
import './styles.scss';

/**
 * Doctors
 * 
 */
export default function doctorfunc0() {
  Cookies.remove('lang', { path: '' });
  let inD = 0;
  const location = useLocation();
  const locDoc = location.pathname;
  if (locDoc === '/doctor') {
    inD = 0;
  } 
  if (locDoc === '/doctor1') {
    inD = 1;
  }
  if (locDoc === '/doctor2') {
    inD = 2;
  }
  if (locDoc === '/doctor3') {
    inD = 3;
  }
  if (locDoc === '/doctor4') {
    inD = 4;
  }
  if (locDoc === '/doctor5') {
    inD = 5;
  }
  if (locDoc === '/doctor6') {
    inD = 6;
  }
  if (locDoc === '/doctor7') {
    inD = 7;
  }
  if (locDoc === '/doctor8') {
    inD = 8;
  }
  if (locDoc === '/doctor9') {
    inD = 9;
  }
  if (locDoc === '/doctor10') {
    inD = 10;
  }
  if (locDoc === '/doctor11') {
    inD = 11;
  }
  function IndTip() {
    const inDx = inD + 1;
    const docReview2 = [];
    const lineRev2 = reportReview.length;
    for (let i = 0; i < lineRev2; i += 1) {
      if (reportReview[i].id === inDx) {        
        docReview2.push(reportReview[i]);
      }
    }   
    const [step, setStep] = useState(2);
    const outputReview = reportReview.length > 0 ? docReview2.slice(0, step) : [];
    const isoutputReview = outputReview.length > 0;
    const isGetMore = isoutputReview && docReview2.length > step;

    const reviewLeg = outputReview.length;
    let minusReview = 0;
    let plusReview = 0;
    let middleReview = 0;
    for (let i = 0; i < reviewLeg; i += 1) {
      if (outputReview[i].experiensReview < 1.7) {
        minusReview += 1;
      }
      if (outputReview[i].experiensReview > 4) {
        plusReview += 1;
      }
      if (outputReview[i].experiensReview > 1.7) {
        if (outputReview[i].experiensReview < 4) {
          middleReview += 1;
        }
      }    
    }
    return (
      <GridRow>
        <GridCol
          width={{ mobile: 12, tablet: 4, desktop: 4 }} 
          className=""
        >
          <Submenu />
        </GridCol>
        <GridCol 
          style={{ borderLeft: '1px solid #aad7ac', height: 'auto' }}
          width={{ mobile: 12, tablet: 8, desktop: 8 }} 
          className="online-learning"
        >
          <h3>{doctorBlock[inD].titleDeclare}</h3>
          <GridRow>
            <GridCol className="animate2" width={{ mobile: 5, tablet: 5, desktop: 5 }}>
              {/* <NavLink className="link link_toplink" to="/learnmore"> */}
              {/* <div className="">
                  <img 
                    className="photo123 opa nontouch"
                    width="180vw"
                    height="auto"
                    src={doctorBlock[inD].photo} 
                    alt={doctorBlock[inD].titleDeclare}
                    onMouseEnter={(e) => e.currentTarget.src = doctorBlock[inD].photo1}
                    onMouseLeave={(e) => e.currentTarget.src = doctorBlock[inD].photo}
                  />  
                </div> */}
              <img 
                className="photo123 opa"
                // width="180vw"
                // height="auto"
                src={doctorBlock[inD].photo1} 
                alt={doctorBlock[inD].titleDeclare}
              />  

              {/* <img 
                className="photo123 opa first"
                width="180vw"
                height="auto"
                src={doctorBlock[inD].photo1} 
                alt={doctorBlock[inD].titleDeclare}
              />  
              <img 
                className="photo123 opa second"
                width="180vw"
                height="auto"
                src={doctorBlock[inD].photo1} 
                alt={doctorBlock[inD].titleDeclare}
              />   */}

              {/* </NavLink> */}
            </GridCol>
            <GridCol width={{ mobile: 7, tablet: 7, desktop: 7 }}>
              <p className="our-advantages-item-heading" style={{ color: '#78ad5e' }}>??????????????????????????:</p>
              <Markdown source={doctorBlock[inD].wayDeclare} escapeHtml={false} />
              <p className="our-advantages-item-heading" style={{ color: '#78ad5e' }}>??????????????????????:</p>
              <p className="where-to-begin-item-description">
                {doctorBlock[inD].scillDeclare}                    
              </p>
              <p className="our-advantages-item-heading" style={{ color: '#78ad5e' }}>????????:</p>
              <p className="where-to-begin-item-description">
                {doctorBlock[inD].expDeclare}                    
              </p>
            </GridCol>
            <GridCol>
              <NavLink className="link link_toplink" to="/????????????-????????????">
                <div className="text-center">
                  <Button 
                    style={{ paddingBottom: '15px', paddingTop: '-45px' }} 
                    className="button button_settings-lada"
                  >
                    &lt; ???????????????????? &gt;
                  </Button>
                </div>
              </NavLink>
            </GridCol>
          </GridRow>
          {/* <Markdown className="where-to-begin-item-description" source={doctorBlock[0].contentDeclare} escapeHtml={false} /> */}
          <p className="our-advantages-item-heading doctor">??????????????????????: </p>
          <p>
            <li><b>??????????????:</b></li>
            <b>
              {doctorBlock[inD].yearEducation}
            </b>
&emsp;
            {doctorBlock[inD].baseEducation}
          </p>
          <p>
            <li><b>?????????????????? ????????????????????????:</b></li>
            <b>
              {doctorBlock[inD].yearExpirions[0]}
&emsp;
            </b>
            {doctorBlock[inD].expEducation[0]}
            {doctorBlock[inD].yearExpirions[1] === '' ? doctorBlock[inD].yearExpirions[1] 
              : (
                <span>
                  <br />
                  <b>
                    {doctorBlock[inD].yearExpirions[1]}
&emsp;
                  </b>
                  {doctorBlock[inD].expEducation[1]}           
                </span>
              )}

            {doctorBlock[inD].yearExpirions[2] === '' ? doctorBlock[inD].yearExpirions[2]
              : (
                <span>
                  <br />
                  <b>
                    {doctorBlock[inD].yearExpirions[2]}
&emsp;
                  </b>
                  {doctorBlock[inD].expEducation[2]}           
                </span>
              )}
            {doctorBlock[inD].yearExpirions[3] === '' ? doctorBlock[inD].yearExpirions[3] 
              : (
                <span>
                  <br />
                  <b>
                    {doctorBlock[inD].yearExpirions[3]}
&emsp;
                  </b>
                  {doctorBlock[inD].expEducation[3]}           
                </span>
              )}
          </p>
          <div className="contact-media-space" />
          <p className="our-advantages-item-heading doctor">????????-?????????? ?? ??????????: </p>
          <p>
            {' '}
&emsp;
            <a className="link_quest phone" href={doctorBlock[inD].mediaDoctor[0]} target="_blank" rel="noreferrer">
              <u>{doctorBlock[inD].mediaName[0]}</u>
            </a>
            {' '}
          </p>          
          <div className="contact-media-space" />
          <p className="our-advantages-item-heading doctor">???????????????????? ??????????:</p>
          <p>
            {' '}
&emsp;
            <a className="link_quest phone" href={doctorBlock[inD].pubDoctor[0]} target="_blank" rel="noreferrer">
              <u>{doctorBlock[inD].pubName[0]}</u>
            </a>
            {' '}
            {doctorBlock[inD].dataPub[0]}
          </p>    
          <div className="contact-media-space" />
          <Demo2 />
          {/* <p className="our-advantages-item-heading doctor">
            ????????????:&emsp;&ensp;
            <NavLink className="link link_toplink" to="/????????????????-??????????">
              <button 

                className="button button_settings-lada" 
                type="submit" 
                value="Send"
              >
                ???????????????? ??????????
              </button>
            </NavLink>
          </p>
          <div className="section section_fullwidth1">
            <div>
              <p>
                <b className="cycle" style={{ fontSize: ' 14px' }}>??????????:</b>
                {' '}
                    &ensp;
                <b className="cycle" style={{ fontSize: ' 14px' }}>{reviewLeg}</b>
                &emsp;&emsp; 
                <b className="cycle-plus" style={{ fontSize: ' 14px' }}>??????????????????????????:</b>
                {' '}
                    &ensp;
                <b className="cycle-plus" style={{ fontSize: ' 14px' }}>{plusReview}</b>
                &emsp;&emsp; 
                <b className="cycle-none" style={{ fontSize: ' 14px' }}>??????????????????????:</b>
                {' '}
                    &ensp;
                <b className="cycle-none" style={{ fontSize: ' 14px' }}>{middleReview}</b>
                &emsp;&emsp;         
                <b className="cycle-minus" style={{ fontSize: ' 14px' }}>??????????????????????????:</b>
                {' '}
                    &ensp;
                <b className="cycle-minus" style={{ fontSize: ' 14px' }}>{minusReview}</b>
              </p>
            </div>
          </div>

          <GridRow justify="left">
            {isoutputReview
            && outputReview.map((review) => (
              <GridCol
                key={`${reportReview.id}${Math.random()}`}
                width={{ mobile: 12, tablet: 12, desktop: 12 }}
              >
                <div className="hr2" />
                <br />
                <GridRow key={Math.random()}>
                  <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
                    <div>
                      <p>

                        <b style={review.experiensReview < 1.7 ? { color: '#EF3124' } : review.experiensReview < 3 ? { color: '#9c9c9c' } : { color: '#fd6b0d' }}>{review.experiensReview}</b>
&ensp;
                        <progress className={review.experiensReview < 1.7 ? 'progressunit1' : review.experiensReview < 3 ? 'progressunit2' : 'progressunit'} value={review.experiensReview} max="5">
                          <span>{review.experiensReview}</span>
                        </progress>
                      </p>
                    </div>
                    <p>
                      <b>??????????????:</b>
                      <br />
                      {review.autorReview}
                      <br />
                      {review.phoneReview}
                      <br />
                    </p>
                    <p>
                      <b>???????????? ????????????:</b>
                      <br />
                      {review.dataReception}
                    </p>
                  </GridCol>
                  <GridCol width={{ mobile: 12, tablet: 8, desktop: 8 }}>
                    <p>{review.textReview}</p>
                    <p className="datareview">{review.dataReview}</p>
                  </GridCol>
                </GridRow>

              </GridCol>
            ))}
          </GridRow>
          
          {isGetMore && (
          <div className="button-center button-center-1">
            <Button
              className="button button_settings-lada"
              onClick={() => setStep(step + 2)}
            >
              ???????????????? ??????
            </Button>
          </div>
          )}
          <div className="" align="center">
            <p>?????????? .. </p>
            <div className="hr1_1" />
            <div className="contact-media-s20" />
            <p>
              <Link className="link_quest" to={doctorBlock[inD].id === doctorBlock.length ? '/doctor' : `/doctor${doctorBlock[inD].id}`}>
                <u>
                  {doctorBlock[inD].id === doctorBlock.length ? doctorBlock[0].titleDeclare : doctorBlock[inD + 1].titleDeclare}
                </u>
              </Link>
            </p>
          </div> */}
        </GridCol>
      </GridRow>
      
    );
  }

  function IndTip1() {
    const inDx = inD + 1;
    const docReview2 = [];
    const lineRev2 = reportReview.length;
    for (let i = 0; i < lineRev2; i += 1) {
      if (reportReview[i].id === inDx) {        
        docReview2.push(reportReview[i]);
      }
    }   
    const [step, setStep] = useState(2);
    const outputReview = reportReview.length > 0 ? docReview2.slice(0, step) : [];
    const isoutputReview = outputReview.length > 0;
    const isGetMore = isoutputReview && docReview2.length > step;

    const reviewLeg = outputReview.length;
    let minusReview = 0;
    let plusReview = 0;
    let middleReview = 0;
    for (let i = 0; i < reviewLeg; i += 1) {
      if (outputReview[i].experiensReview < 1.7) {
        minusReview += 1;
      }
      if (outputReview[i].experiensReview > 4) {
        plusReview += 1;
      }
      if (outputReview[i].experiensReview > 1.7) {
        if (outputReview[i].experiensReview < 4) {
          middleReview += 1;
        }
      }    
    }
    return (
      <GridRow>
        {/* <GridCol
          width={{ mobile: 12, tablet: 4, desktop: 4 }} 
          className=""
        >
          <Submenu />
        </GridCol> */}
        <GridCol 
          // style={{ borderLeft: '1px solid #aad7ac', height: 'auto' }}
          width={{ mobile: 12, tablet: 12, desktop: 12 }} 
          className="online-learning"
        >
          {/* <h3>{doctorBlock[inD].titleDeclare}</h3> */}
          {/* <GridRow>
            <GridCol className="animate2" width={{ mobile: 5, tablet: 5, desktop: 5 }}>
              <img 
                className="photo123 opa"
                // width="180vw"
                // height="auto"
                src={doctorBlock[inD].photo1} 
                alt={doctorBlock[inD].titleDeclare}
              />  
            </GridCol>
            <GridCol width={{ mobile: 7, tablet: 7, desktop: 7 }}>
              <p className="our-advantages-item-heading" style={{ color: '#78ad5e' }}>7777??????????????????????:</p>
              <Markdown source={doctorBlock[inD].wayDeclare} escapeHtml={false} />
              <p className="our-advantages-item-heading" style={{ color: '#78ad5e' }}>77777??????????????????????????:</p>
              <p className="where-to-begin-item-description">
                {doctorBlock[inD].scillDeclare}                    
              </p>
              <p className="our-advantages-item-heading" style={{ color: '#78ad5e' }}>????????:</p>
              <p className="where-to-begin-item-description">
                {doctorBlock[inD].expDeclare}                    
              </p>
            </GridCol>
            <GridCol>
              <NavLink className="link link_toplink" to="/????????????-????????????">
                <div className="text-center">
                  <Button 
                    style={{ paddingBottom: '15px', paddingTop: '-45px' }} 
                    className="button button_settings-lada"
                  >
                    &lt; ???????????????????? &gt;
                  </Button>
                </div>
              </NavLink>
            </GridCol>
          </GridRow> */}

          {/* <p className="our-advantages-item-heading doctor">??????????????????????: </p>
          <p>
            <li><b>??????????????:</b></li>
            <b>
              {doctorBlock[inD].yearEducation}
            </b>
&emsp;
            {doctorBlock[inD].baseEducation}
          </p>
          <p>
            <li><b>?????????????????? ????????????????????????:</b></li>
            <b>
              {doctorBlock[inD].yearExpirions[0]}
&emsp;
            </b>
            {doctorBlock[inD].expEducation[0]}
            <br />
            <b>
              {doctorBlock[inD].yearExpirions[1]}
&emsp;
            </b>
            {doctorBlock[inD].expEducation[1]}
          </p>
          <div className="contact-media-space" />
          <p className="our-advantages-item-heading doctor">????????-?????????? ?? ??????????: </p>
          <p>
            {' '}
&emsp;
            <a className="link_quest phone" href={doctorBlock[inD].mediaDoctor[0]} target="_blank" rel="noreferrer">
              <u>{doctorBlock[inD].mediaName[0]}</u>
            </a>
            {' '}
          </p>          
          <div className="contact-media-space" />
          <p className="our-advantages-item-heading doctor">???????????????????? ??????????:</p>
          <p>
            {' '}
&emsp;
            <a className="link_quest phone" href={doctorBlock[inD].pubDoctor[0]} target="_blank" rel="noreferrer">
              <u>{doctorBlock[inD].pubName[0]}</u>
            </a>
            {' '}
            {doctorBlock[inD].dataPub[0]}
          </p>     */}

          <div className="section section_fullwidth1">
            <div>
              <p>
                <b className="cycle" style={{ fontSize: ' 14px' }}>??????????:</b>
                {' '}
                    &ensp;
                <b className="cycle" style={{ fontSize: ' 14px' }}>{reviewLeg}</b>
                &emsp;&emsp; 
                <b className="cycle-plus" style={{ fontSize: ' 14px' }}>??????????????????????????:</b>
                {' '}
                    &ensp;
                <b className="cycle-plus" style={{ fontSize: ' 14px' }}>{plusReview}</b>
                &emsp;&emsp; 
                <b className="cycle-none" style={{ fontSize: ' 14px' }}>??????????????????????:</b>
                {' '}
                    &ensp;
                <b className="cycle-none" style={{ fontSize: ' 14px' }}>{middleReview}</b>
                &emsp;&emsp;         
                <b className="cycle-minus" style={{ fontSize: ' 14px' }}>??????????????????????????:</b>
                {' '}
                    &ensp;
                <b className="cycle-minus" style={{ fontSize: ' 14px' }}>{minusReview}</b>
              </p>
            </div>
            <div className="contact-media-space" />
            {/* <p className="our-advantages-item-heading doctor">
            ????????????:&emsp;&ensp; */}
            <NavLink className="link link_toplink" to="/????????????????-??????????">
              <button 
                className="button button_settings-lada" 
                type="submit" 
                value="Send"
              >
                ???????????????? ??????????
              </button>
            </NavLink>
            {/* </p> */}
          </div>
          <GridRow justify="left">
            {isoutputReview
            && outputReview.map((review) => (
              <GridCol
                key={`${reportReview.id}${Math.random()}`}
                width={{ mobile: 12, tablet: 12, desktop: 12 }}
              >
                <div className="hr2" />
                <br />
                <GridRow key={Math.random()}>
                  <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
                    <div>
                      <p>
                        <b style={review.experiensReview < 1.7 ? { color: '#EF3124' } : review.experiensReview < 3 ? { color: '#9c9c9c' } : { color: '#fd6b0d' }}>{review.experiensReview}</b>
&ensp;
                        <progress className={review.experiensReview < 1.7 ? 'progressunit1' : review.experiensReview < 3 ? 'progressunit2' : 'progressunit'} value={review.experiensReview} max="5">
                          <span>{review.experiensReview}</span>
                        </progress>
                      </p>
                    </div>
                    <p>
                      <b>??????????????:</b>
                      <br />
                      {review.autorReview}
                      <br />
                      {review.phoneReview}
                      <br />
                    </p>
                    <p>
                      <b>???????????? ????????????:</b>
                      <br />
                      {review.dataReception}
                    </p>
                  </GridCol>
                  <GridCol width={{ mobile: 12, tablet: 8, desktop: 8 }}>
                    <p>{review.textReview}</p>
                    <p className="datareview">{review.dataReview}</p>
                  </GridCol>
                </GridRow>

              </GridCol>
            ))}
          </GridRow>
          
          {isGetMore && (
          <div className="button-center button-center-1">
            <Button
              className="button button_settings-lada"
              onClick={() => setStep(step + 2)}
            >
              ???????????????? ??????
            </Button>
          </div>
          )}
          {/* <div className="" align="center">
            <p>77777?????????? .. </p>
            <div className="hr1_1" />
            <div className="contact-media-s20" />
            <p>
              <Link className="link_quest" to={doctorBlock[inD].id === doctorBlock.length ? '/doctor' : `/doctor${doctorBlock[inD].id}`}>
                <u>
                  {doctorBlock[inD].id === doctorBlock.length ? doctorBlock[0].titleDeclare : doctorBlock[inD + 1].titleDeclare}
                </u>
              </Link>
            </p>
          </div> */}
        </GridCol>
      </GridRow>
    );
  }

  function IndTip2() {
    const inDx = inD + 1;
    const docReview2 = [];
    const lineRev2 = reportAnswer.length;
    for (let i = 0; i < lineRev2; i += 1) {
      if (reportAnswer[i].id === inDx) {        
        docReview2.push(reportAnswer[i]);
      }
    }   

    const allAnswer = docReview2.length;
    console.log('===allAnswer==', allAnswer);
    const [step, setStep] = useState(2);
    const outputReview = reportReview.length > 0 ? docReview2.slice(0, step) : [];
    const isoutputReview = outputReview.length > 0;
    const isGetMore = isoutputReview && docReview2.length > step;
    const reviewLeg = outputReview.length;

    return (
      <GridRow>
        <div className="">
          <div className="section section_fullwidth1">
            <p>
              <b className="cycle" style={{ fontSize: ' 14px' }}>?????????? ??????????????:</b>
              {' '}
                    &ensp;
              {/* <b className="cycle" style={{ fontSize: ' 14px' }}>{reviewLeg}</b> */}
              <b className="cycle" style={{ fontSize: ' 14px' }}>{allAnswer}</b>
                &emsp;&emsp; 
            </p>
            <div className="contact-media-space" />
            <NavLink className="link link_toplink" to="/????????????????-??????????">
              <button 
                className="button button_settings-lada" 
                type="submit" 
                value="Send"
              >
                ???????????? ????????????
              </button>
            </NavLink>
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
                    <p>
                      <b>????????????:</b>
                      <br />
                      {review.autorReview}
                      <br />
                      {review.phoneReview}
                      <br />
                      {review.dataReception}
                      &nbsp;??.
                    </p>
                    <p>
                      <b>??????????:</b>
                      <br />
                      {/* <div> */}
                      <Link style={{ textDecoration: 'none' }} to={+review.id === 1 ? '/doctor' : `/doctor0${review.id - 1}`}>
                        <img 
                          className=""
                          width="30vw"
                          height="auto" 
                          src={+review.id === 1 ? doctorBlock[0].photo1 : doctorBlock[review.id - 1].photo1}
                          alt="?????????? ?? ??????????"
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
&nbsp;??.
                    </p>
                  </GridCol>
                </GridRow>

              </GridCol>
            ))}
          </GridRow>
          
          {isGetMore && (
          <div className="button-center button-center-1">
            <Button
              className="button button_settings-lada"
              onClick={() => setStep(step + 2)}
            >
              ???????????????? ??????
            </Button>
          </div>
          )}
          {/* <div className="" align="center">
            <p>?????????? .. </p>
            <div className="hr1_1" />
            <div className="contact-media-s20" />
            <p>
              <Link className="link_quest" to={doctorBlock[inD].id === doctorBlock.length ? '/doctor' : `/doctor${doctorBlock[inD].id}`}>
                <u>
                  {doctorBlock[inD].id === doctorBlock.length ? doctorBlock[0].titleDeclare : doctorBlock[inD + 1].titleDeclare}
                </u>
              </Link>
            </p>
          </div> */}
        </div>
        {/* </GridCol> */}
      </GridRow>
    );
  }

  class Demo2 extends Component {
    constructor() {
      super();
      this.state = {
        selectedOption: '????????????'
      };
      this.onValueChange = this.onValueChange.bind(this);
      this.formSubmit = this.formSubmit.bind(this);
    }
  
    onValueChange(event) {
      this.setState({
        selectedOption: event.target.value
      });
    }
  
    formSubmit(event) {
      event.preventDefault();
      console.log(this.state.selectedOption);
    }

    render() {
      return (
        <form onSubmit={this.formSubmit}>
          <GridRow className="">
            <GridCol className={this.state.selectedOption === '????????????' ? 'tumba' : 'tumba1'} width={{ mobile: 4, tablet: 4, desktop: 2 }}>
              <div className="tabs2">
                <label className="tabs2">
                  <p style={{ paddingTop: '10px' }} className={this.state.selectedOption === '????????????' ? 'doctor phone' : 'link_quest phone'}>
                    <u>????????????</u>
                  </p>
                  <input
                    className=""
                    type="radio"
                    value="????????????"
                    checked={this.state.selectedOption === '????????????'}
                    onChange={this.onValueChange}
                  />
                </label>
              </div>
            </GridCol>
            <GridCol className={this.state.selectedOption === '????????????' ? 'tumba' : 'tumba1'} width={{ mobile: 4, tablet: 4, desktop: 2 }}>
              <div className="tabs1">
                <label className="">
                  {/* <p style={{ paddingTop: '10px' }} className="link_quest phone"> */}
                  <p style={{ paddingTop: '10px' }} className={this.state.selectedOption === '????????????' ? 'doctor phone' : 'link_quest phone'}>
                    <u>????????????</u>
                  </p>
                  <input
                    type="radio"
                    value="????????????"
                    checked={this.state.selectedOption === '????????????'}
                    onChange={this.onValueChange}
                  />
                </label>
              </div>
            </GridCol>
            <GridCol style={{ borderBottom: '1px solid #aad7ac' }} width={{ mobile: 4, tablet: 4, desktop: 8 }} />
            <div className="clear-shadow" />
          </GridRow>
          <div>
            <div className="contact-media-s20" />
            {this.state.selectedOption === '????????????' ? <IndTip1 /> : <IndTip2 />}
          </div>
          <div className="" align="center">
            <p>?????????? .. </p>
            <div className="hr1_1" />
            <div className="contact-media-s20" />
            <p>
              <Link className="link_quest" to={doctorBlock[inD].id === doctorBlock.length ? '/doctor' : `/doctor${doctorBlock[inD].id}`}>
                <u>
                  {doctorBlock[inD].id === doctorBlock.length ? doctorBlock[0].titleDeclare : doctorBlock[inD + 1].titleDeclare}
                </u>
              </Link>
            </p>
          </div>
        </form>
      );
    }
  }

  const list111 = [{
    title: '??????????????',
    link: '/',
  }, {
    title: '???????? ??????????????????????',
    link: '',
  },
  ];   
  return (
    <>
      <Helmet>
        <title>???? ?????????????????? - ???????? ??????????????????????</title>
        <meta name="description" content="???? ??????????????????" />
        <meta name="keywords" content="???? ??????????????????" />
      </Helmet>
      <UpButton />
      <section className="section section_fullwidth1 breadcrumbs">
        <Breadcrumbs items={list111} />
      </section>
      <div className="online-learning">
        <section className="section section_fullwidth1">

          <h1 className="">???????? ??????????????????????</h1>
          <IndTip />
        </section>
      </div>
    </>
  );
}
