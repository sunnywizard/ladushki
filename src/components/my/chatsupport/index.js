/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Helmet from 'react-helmet';
// import { NavLink } from 'react-router-dom';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Input from 'arui-feather/input';
import Button from 'arui-feather/button';
import UpButton from '../../../components/common/upbutton';
import Breadcrumbs from '../../../components/common/breadcrumbs';
// import Titul from '../../../theme/images/titul01.jpg';
import '../../../containers/site/review/styles.scss';
import '../../../theme/styles/settings.scss';

export default function ReviewList({ handleSubmit, handleChange }) {
  // document.getElementById('today').value = moment().format('YYYY-MM-DD');
  // console.log('TODAY -----', #today)
  // state = {
  //   handleChange: false,
  // };
  const list111 = [{
    title: 'Главная',
    link: '/',
  }, {
    title: 'Обратная связь',
    link: '',
  },
  ];    
  let windowObjectReference;

  class NameForm extends React.Component {
    constructor(props) {
      super(props);
      // this.state = { value: '' };
      this.state = { 
        value: '', 
        // Telegram: true
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({ value: event.target.value });
    }

    handleSubmit() {
      windowObjectReference = window.open('/winmessage', '_self');
    }
  
    handleInputChange(event) {
      const { target } = event;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const { name } = target;
  
      this.setState({
        [name]: value
      });
    }

    render() {
      return (
        // <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSegT0rkUpm_qAKAxOzHZliQGNCKgGDX1PfujExHCg8Pv_qXtQ/formResponse" onSubmit={this.handleSubmit} method="post" target="hidden_iframe">
        <form action="" onSubmit={this.handleSubmit} method="post" target="hidden_iframe">
          <div className="where-to-begin-item-space form-space">
            <p>
              1. Фамилия
              <b style={{ color: 'red' }}>*</b>   
            </p>               
          </div>
          <div>
            <input
              maxLength="40" 
              name="lname" 
              placeholder="Введите фамилию" 
              required 
              type="text" 
              onChange={this.handleChange}
            />
            <div className="hr2_1" />
          </div>

          <div className="where-to-begin-item-space form-space">
            <p>
              2. Имя
              <b style={{ color: 'red' }}>*</b>   
            </p>               
          </div>
          <div>
            <input
              maxLength="40" 
              name="fname" 
              placeholder="Введите имя" 
              required 
              type="text" 
              onChange={this.handleChange}
            />
            <div className="hr2_1" />
          </div>

          <div className="where-to-begin-item-space form-space">
            <p>
              3. Отчество
              <b style={{ color: 'red' }}>*</b>   
            </p>               
          </div>
          <div>
            <input
              maxLength="40" 
              name="mname" 
              placeholder="Введите отчество" 
              required 
              type="text" 
              onChange={this.handleChange}
            />
            <div className="hr2_1" />
          </div>

          <div className="where-to-begin-item-space form-space form-space-t1">
            <p>
              2. Электронная почта
              <b style={{ color: 'red' }}>*</b>
            </p>
            {/* &nbsp;
          </div>
          <div> */}
            <input 
              border="1" 
              style={{ width: '' }} 
              id="email"  
              maxLength="40" 
              name="e-mail" 
              placeholder="111@Ffgh.com" 
              required 
              type="email" 
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
              onChange={this.handleChange} 
            />
            <div className="hr2_1" />
            <div className="requirements">
              <p style={{ lineHeight: '1' }}>Введите корректный адрес Email.</p>
            </div>
          </div>    

          <div className="where-to-begin-item-space form-space form-space-t1">
            <p>
              3. Телефон
              <b style={{ color: 'red' }}>*</b>
            </p>
            {/* &nbsp;
          </div>
          <div> */}
            <input 
              style={{ width: '' }} 
              id="phone" 
              maxLength="16" 
              name="telephone" 
              placeholder="+7H8889992233 " 
              required 
              type="tel" 
              // mask="+7 111 111 11 11"
              pattern="^\+7\d{3}\d{7}$" 
              // pattern="\+7\-[0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}"
              // pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
              onChange={this.handleChange}
            />
            <div className="hr2_1" />            
            <div className="requirements">
              <p>Введите номер телефона в следующем формате: +79998887766</p>
            </div>
          </div>

          <div className="where-to-begin-item-space form-space form-space-t1">
            <p>
              6. Сообщение
              <b style={{ color: 'red' }}>*</b>
            </p>                  
          </div>
          <div className="img-size">
            <textarea
              maxLength="200" 
              // cols="60"
              rows="4"
              name="mess" 
              placeholder="Введите текст сообщения:" 
              required
              type="text" 
              onChange={this.handleChange}
              style={{ width: '92%', border: '1px solid #ccc' }}
            />
          </div>
          <div className="contact-media-s30" />
        </form>

      );
    }
  }

  // ***************

  return (
    <>
      <Helmet>
        <title>МЦ «Ладушки» - Обратная связь</title>
        <meta name="description" content="МЦ «Ладушки»" />
        <meta name="keywords" content="МЦ «Ладушки»" />        
      </Helmet>
      <UpButton />      
      <section className="section section_fullwidth1 breadcrumbs">
        <Breadcrumbs items={list111} />
      </section>
      <section className="section section_fullwidth1">
        <h1>Обратная связь</h1>
        <GridRow>
          <GridCol className="text-center" width={{ mobile: 12, tablet: 12, desktop: 12 }}>

            <p className="our-advantages-item form-space-l0">
              Нажимая кнопку  «ОТПРАВИТЬ», вы принимаете условия соглашения и даете своё 
              {' '}
              
              <a style={{ textDecoration: 'none' }} href="/документы-правила/правила/политика-обработки-персональных-данных">
                <u>согласие на обработку ваших персональных данных</u>
              </a>
              , в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ 
              «О персональных данных».
            </p>
            <div className="contact-media-s20" />
            <p className="our-advantages-item form-space-l0">
              Категории помеченные красным значком  
              &nbsp;           
              <b style={{ color: 'red' }}>*</b>
              &nbsp;
              обязательны для заполнения.
            </p>
            <br />
            <NameForm />
            <GridRow>
              <p style={{ textAlign: 'left' }}>
                Номер телефона и адрес электронной почты позволит нам убедиться, что отзыв написан клиентом МЦ «Ладушки», а
                не третьим лицом. 
                <br />
                {/* В письме отправленным на Ваш e-mail перейдите по ссылке, подтверждая написанный отзыв. */}
              </p>
              <div className="checkbox">
                <p>
                  <input 
                    id="color-1" 
                    name="622273596" 
                    value="Соглашение" 
                    required="" 
                    type="checkbox"
                    className="custom-checkbox"
                  />
                  <label htmlFor="color-1">
&nbsp;
                    Мною были внимательно изучены условия
                    <a style={{ textDecoration: 'none' }} className="link_agree1" href="/policy-useragreement">
                &nbsp;
                      <u>Соглашения</u>
                    </a>
                  </label>
                </p>
              </div>
            </GridRow>
            <GridRow>
              <div className="checkbox">
                <p>
                  <input 
                    id="color-2" 
                    name="622273596" 
                    value="Персональные данные" 
                    required="" 
                    type="checkbox"
                    className="custom-checkbox"
                  />
                  <label htmlFor="color-2">
                    &nbsp;
                    Нажимая на кнопку «Отправить», я принимаю условия соглашения и даю согласие на обработку 
                    персональных данных.
                  </label>
                </p>
              </div>
            </GridRow>
            <div className="text-center m-t10">
              <Button 
                // className="button button_settings-form"
                className="button button_settings-lada" 
                type="submit" 
                value="Send"
              >
                Отправить
              </Button>
            </div>
            <div className="contact-media-s40" />

          </GridCol>
        </GridRow> 
      </section>
    </>
  );
}

// ReviewList.propTypes = {
//   navigationTo: Type.func.isRequired,
// };
