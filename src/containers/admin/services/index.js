/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import UseFilial from '../../../core/connectors/filial';
import Modal from '../../../components/common/modal';
import './style.scss';
import ServiceDialog from '../serviceDialog';
import ServiceAssignDoctorDialog from '../serviceAssignDoctorDialog';
import ServiceAssignPriceDialog from '../serviceAssignPriceDialog';
import ServiceAssignCodeDialog from '../../admin/serviceAssignCodeDialog';
import edit from '../../../theme/images/account/pencil.svg';
import doctorIcon from '../../../theme/images/admin/doctor.png';
import closeBtn from '../../../theme/images/closeButtonRed.svg';

const Services = ({ filialId, ...props }) => {
  useEffect(() => {
    props.getDoctors(filialId);
    props.getServices();
    props.getSpecs();
  }, []);

  useEffect(() => {
    setSpecList(props.filial.specs);
  }, [props.filial.specs]);

  const { doctors, specs, services } = props.filial;
  const [specId, setSpec] = useState(-1);
  const [specList, setSpecList] = useState(specs);
  const [showDialog, setShowDialog] = useState(false);
  const [showAssignDoctorsDialog, setShowAssignDoctorsDialog] = useState(false);
  const [showAssignPriceDialog, setShowAssignPriceDialog] = useState(false);
  const [showAssignCodeDialog, setShowAssignCodeDialog] = useState(false);
  const [title, setTitle] = useState(''); '';
  const [serviceForAssign, setServiceForAssign] = useState(undefined);
  const [allow, setAllow] = useState(false);
  const [showAllow, setShowAllow] = useState(false);

  const handleCancelPressed = () => {
    setShowDialog(false);
    setShowAssignDoctorsDialog(false);
    setShowAssignPriceDialog(false);
    setShowAssignCodeDialog(false);
    setShowAllow(false);
  };

  const handleDelete = () => {
    setShowAllow(true);
  };

  const deleteService = () => {
    if (allow) {
      props.deleteService(serviceForAssign.id);
      setTimeout(() => { props.getServices(filialId); }, 300);
      setAllow(false);
      setShowAllow(false);
    }
  };

  let filteredBySpecServices = services;
  if (specList && specList.length > 1 && specId !== -1) {
    filteredBySpecServices = services.filter(
      (item) => +item.specId === +specId
    );
  }
  console.log('props FOR service=', props);
  return (
    <>
      <GridRow>
        {/* <div className="record-list-actions"> */}
        <GridCol
          width={{ mobile: 6 }}
          className=""
        >
          {/* <div className="actions"> */}
          <button
            // className="actions__btn"
            className="actions__btn1"
            onClick={() => {
              setShowDialog(true);
              setTitle('Добавить услугу');
            }}
            type="button"
          >
            Добавить услугу
          </button>
          <div className="contact-media-s20" />
        </GridCol>

        <GridCol
          width={{ mobile: 6 }}
          className=""
        >
          <select
            name="specId"
            id="spec"
            className="admin-select"
            value={specId}
            onChange={(e) => {
              const id = +e.target.value;
              setSpec(id);
            }}
          >
            <option value="-1">Все специализации</option>
            {specList
            && specList.map((spec) => (
              <option key={spec.id} value={spec.id}>
                {spec.specName}
              </option>
            ))}
          </select>
          <div className="contact-media-s20" />
        </GridCol>

        <GridCol
          width={{ mobile: 6 }}
          className=""
        >
          <button
            // className="actions__btn"
            className="actions__btn1"
            onClick={() => {
              setSpec(-1);
              setSpecList(specs);
            }}
            type="button"
          >
            Сбросить фильтры
          </button>
          <div className="contact-media-s20" />
        </GridCol>

        {/* </div> */}
      </GridRow>

      <table className="tbl rtable">
        <thead>
          <tr className="head-row">
            <th>#</th>
            <th>Услуга</th>
            <th>Код</th>
            <th>Время</th>
            <th>Стоимость</th>
            <th>Управление</th>
          </tr>
        </thead>
        <tbody>
          {filteredBySpecServices
            && filteredBySpecServices.map((service, index) => (
              <tr key={`service-${service.id}`}>
                <td className="centered">{index + 1}</td>
                {/* <td style={{ width: '200px' }}>{service.name}</td> */}
                <td className="shirina">{service.name}</td>
                <td className="cell-name">
                  <div className="">
                    {service.code}
                  </div>
                </td>
                <td className="cell-name">{`${service.duration} мин.`}</td>
                {/* <td className="centered"> */}
                <td className="cell-name">
                  <div className="service__buttons">

                    {`${service.price} руб.`}
                  </div>
                </td>
                <td>
                  <div className="service__buttons">
                    {/* <img
                      src={edit}
                      alt="edit"
                      title="Редактировать цену услуги"
                      onClick={() => {
                        setServiceForAssign(service);
                        setShowAssignPriceDialog(true);
                      }}
                      className="column-icon"
                    /> */}
                    <img
                      src={edit}
                      alt="edit"
                      title="Редактировать цену услуги"
                      onClick={() => {
                        setServiceForAssign(service);
                        setShowAssignPriceDialog(true);
                      }}
                      className="column-icon"
                    />
                    &ensp;
                    <img
                      src={doctorIcon}
                      alt="doctor"
                      title="Присвоить услуге врача"
                      onClick={() => {
                        setServiceForAssign(service);
                        setShowAssignDoctorsDialog(true);
                      }}
                      className="column-icon"
                    />
                    &ensp;
                    <a href="#">
                      <img
                        onClick={() => {
                          setAllow(true);
                          setServiceForAssign(service);
                          handleDelete();
                        }}
                        src={closeBtn}
                        alt="Delete"
                        title="Удалить"
                      />
                    </a>
                  </div>
                  &ensp;
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <Modal
        open={showDialog}
        // closeBtn={false}
        closeBtn
        title={title}
        classNames={{ modal: 'record-list-dialog' }}
        onClose={() => handleCancelPressed()}
      >
        <ServiceDialog
          onCancel={() => handleCancelPressed()}
          doctors={doctors}
          specs={specs}
          onSave={(data) => {
            console.log('---ServiceDialog for service---', data);
            props.storeService(data);
            setShowDialog(false);
          }}
        />
      </Modal>

      <Modal
        open={showAssignDoctorsDialog}
        // closeBtn={false}
        closeBtn
        title="Назначение докторов на услугу"
        classNames={{ modal: 'record-list-dialog' }}
        onClose={() => handleCancelPressed()}
      >
        <ServiceAssignDoctorDialog
          onCancel={() => handleCancelPressed()}
          doctors={doctors}
          service={serviceForAssign}
          onSave={(data) => {
            console.log('Назначение', data);
            console.log('DOCTOR', doctors);
            setShowAssignDoctorsDialog(false);
            setServiceForAssign(undefined);
            props.assignService(data);
            // props.updateDoctor(data);
            // setTimeout(() => { props.getDoctors(filialId); }, 300);
          }}
        />
      </Modal>
      <Modal
        open={showAssignPriceDialog}
        // closeBtn={false}
        closeBtn
        title="Изменение цены услуги"
        classNames={{ modal: 'record-list-dialog' }}
        onClose={() => handleCancelPressed()}
      >
        <ServiceAssignPriceDialog
          onCancel={() => handleCancelPressed()}
          doctors={doctors}
          service={serviceForAssign}
          onSave={(data) => {
            console.log('data FOR price===', data);
            setShowAssignPriceDialog(false);
            setServiceForAssign(undefined);
            props.updateService(data);
            console.log('updateService===', props);
            setTimeout(() => { props.getServices(filialId); }, 300);
          }}
        />
      </Modal>

      <Modal
        open={showAssignCodeDialog}
        // closeBtn={false}
        closeBtn
        title="Изменение кода услуги"
        classNames={{ modal: 'record-list-dialog' }}
        onClose={() => handleCancelPressed()}
      >
        <ServiceAssignCodeDialog
          onCancel={() => handleCancelPressed()}
          doctors={doctors}
          service={serviceForAssign}
          onSave={(data) => {
            console.log('data SERVICE===', data);
            setShowAssignCodeDialog(false);
            setServiceForAssign(undefined);
            props.updateService(data);
            // props.storeService(data);
            console.log('update CODE===', props);

            setTimeout(() => { props.getServices(filialId); }, 300);
          }}
        />
      </Modal>
      <Modal
        open={showAllow}
        // closeBtn={false}
        closeBtn
        title="Удаление услуги"
        // classNames={{ modal: 'record-list-dialog' }}
        classNames={{
          overlay: 'dialog-overlay',
          modal: 'dialog-modal dialog_small',
          closeButton: 'dialog-close-button',
        }}
        onClose={() => handleCancelPressed()}
      >
        <div className="contact-media-s30" />
        <div style={{ textAlign: 'center' }}>
          <p className="dialog-header1">Удалить услугу?</p>
        </div>
        <GridRow style={{ paddingTop: '20px', paddingLeft: '20px' }} gutter={{ mobile: 24, tablet: 24, desktop: 24 }}>
          <GridCol
            width={{ mobile: 12, tablet: 6, desktop: 6 }} 
            className="text-center"
          >
            <button
              className="button button_secondary"
              onClick={() => deleteService()}
              type="button"
            >
              Удалить
            </button>
          </GridCol>
          <GridCol
            width={{ mobile: 12, tablet: 6, desktop: 6 }} 
            className="text-center"
          >
            <button 
              className="button button_cancel" 
              style={{ fontSize: '18px' }}
              type="button" 
              onClick={() => setShowAllow(false)}
            >
              Отмена
            </button>
          </GridCol>
        </GridRow>
        <div className="contact-media-s30" />
      </Modal>
    </>
  );
};

export default UseFilial(Services);
