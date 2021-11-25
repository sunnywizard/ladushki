/* eslint-disable react/no-did-update-set-state */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { CheckBox } from 'arui-feather/checkbox';
import { PhoneInput } from 'arui-feather/phone-input';
import { Input } from 'arui-feather/input';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import IconError from 'arui-feather/icon/ui/error';
import Type from 'prop-types';
import UseFilial from '../../../core/connectors/filial';
import UseMessage from '../../../core/connectors/message';
import './styles.scss';
import { recordBreadcrumbs, important } from '../../../core/utils/testdata.js';
import Breadcrumbs from '../../../components/common/breadcrumbs';
// import RecordComment from './recordcomment';
import RecordListDialog from '../recordlistdialog';
import Modal from '../../../components/common/modal';
import Loader from '../../../components/common/loader';
import RecordDateDialog from '../recorddatedialog';
import RecordDoneDialog from '../recorddonedialog';
import UpButton from '../../../components/common/upbutton';
// import RecordOk from '../recordok';
// import ym from 'react-yandex-metrika';

class Record extends Component {
  
  // state = {
  //   showDialog: false,
  //   showDateDialog: false,
  //   showDoneDialog: false,
  //   filialId: undefined,
  //   doctorId: undefined,
  //   specId: undefined,
  //   serviceId: undefined,
  //   servicePrice: undefined,
  //   dateTime: undefined,
  //   filialFetched: false,
  //   doctorFetched: false,
  //   recordsFetched: false,
  //   clientName: undefined,
  //   clientPhone: undefined,
  //   agreement: false,
  //   paymentMethod: undefined,

  //   title: 'Выбор филиала',
  //   list: undefined,
  //   type: 'filial',
  // };

  constructor(props) {
    super(props);
    this.state = { 
      showDialog: false,
      showDateDialog: false,
      showDoneDialog: false,
      filialId: undefined,
      doctorId: undefined,
      specId: undefined,
      serviceId: undefined,
      servicePrice: undefined,
      dateTime: undefined,
      filialFetched: false,
      doctorFetched: false,
      recordsFetched: false,
      clientName: undefined,
      clientPhone: undefined,
      agreement: false,
      paymentMethod: undefined,
  
      title: 'Выбор филиала',
      list: undefined,
      type: 'filial',
    };
  }

  componentDidMount() {
    //    try {
    //      ym('reachGoal', 'zapis');
    //    } catch (e) {
    //      console.warn("ym exception ", e);
    //    }

    console.log('reachGoal');
  }

  componentDidUpdate() {
    if (this.props.filial.fetching) return;
    if (
      this.state.type === 'filial'
      && this.props.filial.list
      && !this.state.filialFetched
    ) {
      const list = this.props.filial.list.map((item) => ({
        id: item.id,
        name: item.address,
      }));
      this.setState({ list, showDialog: true, filialFetched: true });
    } else if (
      this.state.type === 'doctor'
      && this.props.filial.doctors
      && !this.state.doctorFetched
    ) {
      const list = this.props.filial.doctors.filter(
        (item) => +item.status === 1
      );
      this.setState({ list, doctorFetched: true }, this.showDialogFn);
    } else if (
      this.state.type === 'dateTime'
      && this.props.filial.records
      && !this.state.recordsFetched
    ) {
      const list = this.props.filial.records.filter(
        (item) => +item.doctorId === this.state.doctorId
      );
      this.setState({ list, recordsFetched: true }, this.showDateDialogFn);
    }
  }

  showDialogFn = () => {
    this.setState({ showDialog: true });
  };

  showDateDialogFn = () => {
    this.setState({ showDateDialog: true });
  };

  handleCreateRecord = () => {
    const record = {
      filialId: this.state.filialId,
      doctorId: this.state.doctorId,
      serviceId: this.state.serviceId,
      start: this.state.dateTime.format('DD.MM.YYYY HH:mm'),
      name: this.state.clientName,
      phone: this.state.clientPhone.replace(/[ ]/g, ''),
      paymentType: this.state.paymentMethod === 'visit' ? 0 : 1,
    };
    this.props.storeRecord(record);
  };

  prepareDialog = (type) => {
    if (type === 'filial') {
      this.props.getFilials();
      this.setState({
        type: 'filial',
        title: 'Выбор филиала',
        filialFetched: false,
      });
    } else if (type === 'doctor') {
      this.props.getDoctors(this.state.filialId);
      this.setState({
        type: 'doctor',
        title: 'Выбор врача',
        list: undefined,
        doctorFetched: false,
      });
    } else if (type === 'spec') {
      const list = this.props.filial.doctors
        .find((item) => item.id === this.state.doctorId)
        .specs.data.map((item) => ({ id: item.id, name: item.name }));
      this.setState({
        type: 'spec',
        title: 'Выбор специализации',
        list,
        showDialog: true,
      });
    } else if (type === 'service') {
      const list = this.props.filial.doctors
        .find((item) => item.id === this.state.doctorId)
        .services.data.filter((item) => +item.specId === this.state.specId);
      this.setState({
        type: 'service',
        title: '123Выбор услуги',
        list,
        showDialog: true,
      });
    } else if (type === 'dateTime') {
      this.props.getRecords(this.state.filialId);
      this.setState({
        type: 'dateTime',
        title: 'Выбор даты и времени',
        list: undefined,
        recordsFetched: false,
        showDateDialog: true,
      });
    }
  };

  handleOkPressed = () => {
    this.setState({
      showDialog: false,
      showDateDialog: false,
    });
    document.body.style.overflowY = '';
    document.body.style.paddingRight = '';
  };

  handleDoneOk = (data) => {
    if (data) {
      const record = {
        date: this.state.dateTime.format('DD.MM.YYYY HH:mm'),
        doctor: this.getDoctorName(this.state.doctorId),
        service: this.getService(this.state.doctorId, this.state.serviceId)
          .name,
        price: this.state.servicePrice,
        address: this.getAddress(this.state.filialId),
        email: data,
      };
      this.props.sendRecordMessage(record);
    }

    this.setState({
      showDoneDialog: false,
    });
    document.body.style.overflowY = '';
    document.body.style.paddingRight = '';
    this.props.history.push('/');
  };

  handleSelect = (id) => {
    if (this.state.type === 'filial') {
      this.setState({
        filialId: id,
        doctorId: undefined,
        specId: undefined,
        serviceId: undefined,
        dateTime: undefined,
        showDialog: false,
      });
    } else if (this.state.type === 'doctor') {
      /*
       * Если у врача всего одна специализация, выбираем ее автоматически
       *
       *  */
      const specsByDoctor = this.state.list.find((item) => item.id === id).specs
        .data;
      const newState = {
        doctorId: id,
        specId: undefined,
        serviceId: undefined,
        dateTime: undefined,
        showDialog: false,
      };
      if (specsByDoctor.length === 1) {
        newState.specId = specsByDoctor[0].id;
      }

      this.setState(newState);
    } else if (this.state.type === 'spec') {
      this.setState({
        specId: id,
        serviceId: undefined,
        dateTime: undefined,
        showDialog: false,
      });
    } else if (this.state.type === 'service') {
      const servicePrice = this.getService(this.state.doctorId, id).price;
      this.setState({
        serviceId: id,
        dateTime: undefined,
        showDialog: false,
        servicePrice,
      });
    } else if (this.state.type === 'dateTime') {
      this.setState({
        dateTime: id,
        showDateDialog: false,
      });
    }
  };

  getAddress = (id) => this.props.filial.list.find((item) => item.id === id).address;

  getDoctorName = (id) => this.props.filial.doctors.find((item) => item.id === id).name;

  getSpecName = (docId, specId) => this.props.filial.doctors
    .find((item) => item.id === docId)
    .specs.data.find((item) => item.id === specId).name;

  getService = (docId, serviceId) => this.props.filial.doctors
    .find((item) => item.id === docId)
    .services.data.find((item) => item.id === serviceId);

  handleNameChanged = (value) => {
    this.setState({ clientName: value });
  };

  handlePhoneChanged = (value) => {
    this.setState({ clientPhone: value });
  };

  render() {

    const inactivityTime = function foo() {
      let time;
      function logout() {
        document.location.href = '/doctor';
      }
      function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, 60000);
        // 1000 milliseconds = 1 second
        // console.log('120 сек хорошо*****');
      }
  
      window.onload = resetTimer;
      // DOM Events
      document.onload = resetTimer;
      document.onmousemove = resetTimer;
      document.onmousedown = resetTimer; // touchscreen presses
      document.ontouchstart = resetTimer;
      document.onclick = resetTimer; // touchpad clicks
      document.onkeypress = resetTimer;
      document.addEventListener('scroll', resetTimer, true); // improved; see comments
    };

    const { title } = this.state;
    const { list } = this.state;

    function onPageLoad() {
      inactivityTime(); 
      // console.log('120 сек onPageLoad*****');
    }
    document.onload = onPageLoad();

    // console.log(this.props);

    return (
      <>
        <Helmet>
          <title>МЦ «Ладушки» - Онлайн запись</title>
          <meta name="description" content="МЦ «Ладушки»" />
          <meta name="keywords" content="МЦ «Ладушки»" />
        </Helmet>
        <UpButton />
        <section className="section section_fullwidth1 breadcrumbs">
          <Breadcrumbs items={recordBreadcrumbs} />
        </section>
        {/* <div className="section"> */}
        <section className="section section_fullwidth1">

          <h1 className="">Карта приема</h1>
          <GridRow>
            <GridCol
              width={{ mobile: 12, tablet: 4, desktop: 4 }} 
              className=""
            >
              {this.props.filial.fetching && <Loader />}
              <div className="record-steps">
                <button
                  className={
                `record-button-start ${ 
                  this.state.filialId ? 'value-selected' : 'active-button'}`
              }
                  onClick={() => this.prepareDialog('filial')}
                  type="button"
                >
                  {this.state.filialId
                    ? this.getAddress(this.state.filialId)
                    : '183Выберите филиал'}
                </button>
                <button
                  className={
                `record-button-start ${ 
                  this.state.doctorId
                    ? 'value-selected'
                    : this.state.filialId
                      ? 'active-button'
                      : ''}`
              }
                  disabled={!this.state.filialId}
                  onClick={() => this.prepareDialog('doctor')}
                  type="button"
                >
                  {this.state.doctorId
                    ? this.getDoctorName(this.state.doctorId)
                    : 'Выберите врача'}
                </button>
                <button
                  className={
                `record-button-start ${ 
                  this.state.specId
                    ? 'value-selected'
                    : this.state.doctorId
                      ? 'active-button'
                      : ''}`
              }
                  disabled={!this.state.doctorId}
                  onClick={() => this.prepareDialog('spec')}
                  type="button"
                >
                  {this.state.specId
                    ? this.getSpecName(this.state.doctorId, this.state.specId)
                    : 'Выберите специализацию'}
                </button>

                <button
                  className={
                `record-button-start ${ 
                  this.state.serviceId
                    ? 'value-selected'
                    : this.state.specId
                      ? 'active-button'
                      : ''}`
              }
                  disabled={!this.state.specId}
                  onClick={() => this.prepareDialog('service')}
                  type="button"
                >
                  {this.state.serviceId
                    ? this.getService(this.state.doctorId, this.state.serviceId)
                      .name
                    : 'Выберите услугу'}
                </button>

                <button
                  className={
                `record-button-start ${ 
                  this.state.dateTime
                    ? 'value-selected'
                    : this.state.serviceId
                      ? 'active-button'
                      : ''}`
              }
                  disabled={!this.state.serviceId}
                  onClick={() => this.prepareDialog('dateTime')}
                  type="button"
                >
                  159*
                  {this.state.dateTime
                    ? this.state.dateTime.locale('ru').format('DD.MM.YYYY HH:mm')
                    : 'Выберите дату и время'}
                </button>
              </div>
            </GridCol>
            <GridCol 
              style={{ borderLeft: '1px solid #aad7ac', height: 'auto' }}
              width={{ mobile: 12, tablet: 8, desktop: 8 }} 
              className="online-learning"
            >
              {this.props.filial.fetching && <Loader />}
              {this.state.dateTime && (
              <>
                <div className="service__input">
                  <label>
                    Ваше ФИО
                    <b style={{ color: '#EF3124' }}> *</b>
                  </label>
                  <Input
                    id="clientName"
                    placeholder="Укажите ваше ФИО"
                    value={this.state.clientName}
                    autoComplete="off"
                    onChange={this.handleNameChanged}
                  />
                </div>
                <div className="service__input">
                  <label>
                    Номер телефона
                    <b style={{ color: '#EF3124' }}> *</b>
                  </label>
                  <PhoneInput
                    placeholder="Укажите номер телефона для связи"
                    className="record-phone-input"
                    focused={false}
                    value={this.state.clientPhone}
                    onChange={this.handlePhoneChanged}
                  />
                </div>
                <span className="info">
                  <b style={{ color: '#EF3124' }}> *</b>
                  {' '}
                  - поля обязательны к заполнению
                </span>
                <div className="contact-media-s20" />
                <div className="colum_prog price-info">
                  <p>Стоимость выбранной вами услуги составляет:</p>
                  <span className="price">
                    {this.state.servicePrice}
                    {' '}
                    руб.
                  </span>
                </div>

                {false && (
                <>
                  <p className="payment-method">Выберите способ оплаты:</p>
                  <div className="payment-block">
                    <button
                      className={
                        this.state.paymentMethod === 'visit'
                          ? 'payment-btn payment-btn-active'
                          : 'payment-btn'
                      }
                      onClick={() => this.setState({ paymentMethod: 'visit' })}
                      type="button"
                    >
                      <svg
                        width="66"
                        height="62"
                        viewBox="0 0 66 62"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M33.0083 43.656V34.1818C33.0083 31.1072 35.3677 28.6073 38.2748 28.6073H57.6153V22.7044C57.6153 19.9049 55.9518 17.565 53.6748 16.8015V16.8056L46.8765 16.7482L46.7942 16.5101H16.2783L15.6977 16.7071L4.93417 16.6989L4.91358 16.6127C2.29476 17.1053 0.186523 19.4697 0.186523 22.5115V55.1581C0.186523 58.5734 2.85476 61.5412 5.91417 61.5412H52.0895C55.1489 61.5412 57.6195 58.7663 57.6195 55.351V49.3865H38.2789C35.3718 49.3865 33.0083 46.7306 33.0083 43.656Z" />
                        <path d="M61.8635 33.0899H41.2465C39.0682 33.0899 37.3018 35.011 37.3018 37.3796V40.7292C37.3018 43.0936 39.0682 45.0148 41.2465 45.0148H61.8635C64.0418 45.0148 65.8123 43.0936 65.8123 40.7292V37.3796C65.8123 35.0069 64.0418 33.0899 61.8635 33.0899ZM49.6547 41.1151H41.1641V36.9444H49.6547V41.1151Z" />
                        <path d="M16.283 16.5101L43.5871 7.19596L46.7989 16.5101H52.0901C52.6459 16.5101 53.173 16.6291 53.6795 16.7974L47.9601 0.209351L4.43652 14.6628L4.91829 16.6168C5.24358 16.5552 5.57711 16.5142 5.91476 16.5142H16.283V16.5101Z" />
                      </svg>
                      <span>Оплатить при посещении</span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="check-icon"
                      >
                        <path
                          d="M10 17L5 12L6.41 10.58L10 14.17L17.59 6.58L19 8L10 17ZM19 3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3Z"
                          fill="#3EB436"
                        />
                      </svg>
                    </button>
                    <button
                      className={
                        this.state.paymentMethod === 'online'
                          ? 'payment-btn payment-btn-active'
                          : 'payment-btn'
                      }
                      onClick={() => this.setState({ paymentMethod: 'online' })}
                      type="button"
                    >
                      <svg
                        width="70"
                        height="70"
                        viewBox="0 0 70 70"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M58.333 11.6667H11.6663C8.44926 11.6667 5.83301 14.2829 5.83301 17.5V52.5C5.83301 55.7171 8.44926 58.3333 11.6663 58.3333H58.333C61.5501 58.3333 64.1663 55.7171 64.1663 52.5V17.5C64.1663 14.2829 61.5501 11.6667 58.333 11.6667ZM11.6663 17.5H58.333V23.3333H11.6663V17.5ZM11.6663 52.5V35H58.3359L58.3388 52.5H11.6663Z" />
                        <path d="M17.5 40.8333H35V46.6667H17.5V40.8333Z" />
                      </svg>
                      <span>Оплата картой онлайн</span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="check-icon"
                      >
                        <path
                          d="M10 17L5 12L6.41 10.58L10 14.17L17.59 6.58L19 8L10 17ZM19 3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3Z"
                          fill="#3EB436"
                        />
                      </svg>
                    </button>
                  </div>
                </>
                )}

                <div className="agreement-wrapper">
                  <CheckBox
                    className="agreement"
                    text="Я соглашаюсь на обработку персональных данных и принимаю условия "
                    size="m"
                    checked={this.state.agreement}
                    onChange={(isChecked) => this.setState({ agreement: isChecked })}
                    theme="alfa-on-white"
                  />
                  <br />
                  <a
                    href="/политика-обработки-персональных-данных"
                    target="_blank"
                    className="agreement"
                  >
                    Пользовательского соглашения.
                  </a>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <button
                    className="button button_secondary button_med record__btn"
                    disabled={
                  !this.state.clientName
                  || !this.state.clientPhone
                  // !this.state.paymentMethod ||
                  || !this.state.agreement
                }
                    onClick={this.handleCreateRecord}
                    // type="button"
                  >
                    Записаться
                  </button>
                  {/* <RecordOk /> */}
                  {/* {this.setState({ showDoneDialog: vega })} */}
                  {/* {this.props.filial.error === null ? this.setState({ showDoneDialog: true }) : this.setState({ showDoneDialog: false })} */}

                  {/* <button
                    className="button button_secondary button_med record__btn"
                    onClick={this.failRecord}
                    type="button"
                //     disabled={
                //   !this.state.clientName
                //   || !this.state.clientPhone
                //   // !this.state.paymentMethod ||
                //   || !this.state.agreement
                // }
                  >
                    Почта
                  </button> */}

                </div>   
                             
              </>
              )}
            </GridCol>
            <div className="contact-media-s30" />
          </GridRow>
          {/* <RecordComment /> */}
          <GridRow className="colum_prog text-block-3">
            <p className="where-to-begin-item-heading">
              <IconError
                colored
              />
              {' '}
      &nbsp;
              {important[0].titleExchange}
            </p>
            <div className="comments">
              <p>
                {important[0].contentExchange}
              </p>
            </div>
            {/* <p className="comments"> */}
            <ul className="comments">
              <li type="disc">
                {important[0].contentExchange1}
              </li>
              <li type="disc">
                {important[0].contentExchange2}
              </li>
              <li type="disc">
                {important[0].contentExchange3}
              </li>     
              <li type="disc">
                {important[0].contentExchange4}
              </li>       
            </ul>
            {/* </p>     */}
          </GridRow>
          <div className="contact-media-s30" />
        </section>
        {/* </div> */}

        <Modal
          open={this.state.showDialog}
          closeBtn={false}
          title={`777${title}`}
          classNames={{ modal: 'record-list-dialog' }}
        >
          <RecordListDialog
            onCancel={() => this.handleOkPressed()}
            list={list}
            onSelect={this.handleSelect}
          />
        </Modal>
        {this.state.showDateDialog && (
          <Modal
            open={this.state.showDateDialog}
            closeBtn={false}
            title={title}
            classNames={{ modal: 'record-list-dialog' }}
          >
            <RecordDateDialog
              onCancel={() => this.handleOkPressed()}
              onSelect={this.handleSelect}
              spec={
                this.state.showDateDialog
                && this.props.filial.doctors
                  .find((item) => item.id === this.state.doctorId)
                  .specs.data.find((item) => item.id === this.state.specId)
              }
              records={this.state.list}
              service={this.getService(
                this.state.doctorId,
                this.state.serviceId
              )}
            />
          </Modal>
        )}
        {this.state.showDoneDialog && (
          <Modal
            open={this.state.showDoneDialog}
            closeBtn={false}
            title="Вы успешно записались на прием"
            classNames={{ modal: 'record-list-dialog' }}
          >
            {/* {this.props.filial.error === null
              ? ( */}
            <RecordDoneDialog
              onOk={this.handleDoneOk}
              data={{
                date: this.state.dateTime.format('DD.MM.YYYY HH:mm'),
                doctor: this.getDoctorName(this.state.doctorId),
                service: this.getService(
                  this.state.doctorId,
                  this.state.serviceId
                ).name,
                address: this.getAddress(this.state.filialId),
              }}
            />
              {/* )
              : document.location.assign('/неудачная-запись')} */}
          </Modal>
        )}
      </>
    );
  }
}

Record.propTypes = {
  // filial: Type.func.isRequired,
  history: Type.oneOfType([Type.func, Type.object]).isRequired,
  getFilials: Type.func.isRequired,
  getDoctors: Type.func.isRequired,
  getRecords: Type.func.isRequired,
  // sendRecordMessage: Type.func.isRequired,
  // sendRecordMessage: Type.oneOfType([Type.string, Type.object]).isRequired,
  // storeRecord: Type.func.isRequired,
  history: Type.oneOfType([Type.string, Type.object]).isRequired,
};

export default UseMessage(UseFilial(Record));
