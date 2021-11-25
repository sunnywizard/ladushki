/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import UseFilial from '../../../core/connectors/filial';
import Modal from '../../../components/common/modal';
import './style.scss';
import SpecializationDialog from '../specializationdialog';
// import ServiceAssignDoctorDialog from '../serviceAssignDoctorDialog';
// import ServiceAssignPriceDialog from '../serviceAssignPriceDialog';
// import ServiceAssignCodeDialog from '../../admin/serviceAssignCodeDialog';
import edit from '../../../theme/images/account/pencil.svg';
// import doctorIcon from '../../../theme/images/admin/doctor.png';
import closeBtn from '../../../theme/images/closeButtonRed.svg';

const Specialization = ({ filialId, ...props }) => {
  useEffect(() => {
    props.getSpecs();
  }, []);

  useEffect(() => {
    setSpecList(props.filial.specs);
  }, [props.filial.specs]);

  const { doctors, specs, services } = props.filial;
  // const [specId, setSpec] = useState(-1);
  const [specList, setSpecList] = useState(specs);
  const [showDialog, setShowDialog] = useState(false);

  const [title, setTitle] = useState('');
  const [serviceForAssign, setServiceForAssign] = useState(undefined);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [showAllow, setShowAllow] = useState(false);
  const [modalName, setModalName] = useState('');

  // const handleCancelPressed = () => {
  //   setShowDialog(false);
  //   setShowAssignDoctorsDialog(false);
  //   setShowAssignPriceDialog(false);
  //   setShowAssignCodeDialog(false);
  //   setShowAllow(false);
  // };

  const handleDelete = () => {
    setShowAllow(true);
  };

  const deleteService = () => {
    // if (allow) {
    props.deleteSpec(serviceForAssign.id);
    setTimeout(() => { props.getSpecs(filialId); }, 300);
    setModalName('');
    // setDeleteDialog(false);
    // }
  };

  // let filteredBySpecServices = services;
  // if (specList && specList.length > 1 && specId !== -1) {
  //   filteredBySpecServices = services.filter(
  //     (item) => +item.specId === +specId
  //   );
  // }

  return (
    <>
      <GridRow>
        <GridCol
          width={{ mobile: 6 }}
          className=""
        >
          <button
            className="actions__btn1"
            onClick={() => {
              setShowDialog(true);
              setTitle('Добавить специализацию');
              setModalName('specform');
            }}
            type="button"
          >
            Добавить специализацию
          </button>
          <div className="contact-media-s20" />
        </GridCol>

      </GridRow>

      <table className="tbl rtable">
        <thead>
          <tr className="head-row">
            <th>#</th>
            <th>Специализация</th>
            <th>Управление</th>
          </tr>
        </thead>
        <tbody>
          {specList
            && specList.map((spec, index) => (
              <tr key={`spec-${spec.id}`}>
                <td className="centered">{index + 1}</td>
                <td className="shirina">{spec.specName}</td>
                <td>
                  <div className="service__buttons">
                    <img
                      src={edit}
                      alt="edit"
                      title="Редактировать специализацию"
                      onClick={() => {
                        setServiceForAssign(spec);
                        //   setShowAssignPriceDialog(true);
                      }}
                      className="column-icon"
                    />
                    &ensp;
                    <a href="#">
                      <img
                        onClick={() => {
                          setDeleteDialog(true);
                          setServiceForAssign(spec);
                          handleDelete();
                          setModalName('deleteSpec')
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
        // open={showDialog}
        open={modalName === 'specform'}        
        closeBtn
        title={title}
        // classNames={{ modal: 'record-list-dialog' }}
        classNames={{
          overlay: 'dialog-overlay',
          modal: 'dialog_full',
          closeButton: 'dialog-close-button',
        }}        
        // onClose={() => handleCancelPressed()}
        onClose={() => setModalName('')}
      >
        <SpecializationDialog
          // onCancel={() => handleCancelPressed()}
          onCancel={() => setModalName('')}
          doctors={doctors}
          specs={specs}
          filial={filialId}
          onSave={(data) => {
            // console.log('---SpecializationDialog---', data);
            props.storeSpec(data);
            setTimeout(() => { props.getSpecs(filialId); }, 300);
            // setShowDialog(false);
            setModalName('');
          }}
        />
      </Modal>

      {/* <Modal
        open={showAssignDoctorsDialog}
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
          }}
        />
      </Modal> */}
      {/* <Modal
        open={showAssignPriceDialog}
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
      </Modal> */}

      {/* <Modal
        open={showAssignCodeDialog}
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
      </Modal> */}
      <Modal
        title="Удаление услуги"
        // open={deleteDialog}
        open={modalName === 'deleteSpec'}
        closeBtn
        onClose={() => setModalName('')}
        classNames={{
          overlay: 'dialog-overlay',
          modal: 'dialog-modal dialog_small',
          closeButton: 'dialog-close-button',
        }}
        // onClose={() => handleCancelPressed()}

      >
        <div className="contact-media-s30" />
        <div style={{ textAlign: 'center' }}>
          <p className="dialog-header1">Удалить специализацию?</p>
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
              // onClick={() => setShowAllow(false)}
              // onClose={() => setModalName('')}    
              onClick={() => setModalName('')}          
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

export default UseFilial(Specialization);
