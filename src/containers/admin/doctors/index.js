/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Link from 'arui-feather/grid-row';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import UseFilial from '../../../core/connectors/filial';
import pencil from '../../../theme/images/account/pencil2.svg';
import './style.scss';
import Modal from '../../../components/common/modal';
import CreateDoctorDialog from '../createDoctorDialog';
import Schedule from '../schedule';
import ChangeDoctorDialog from '../changeDoctorDialog';
import DoctorForm from '../doctorForm';
// import DoctorFormEdit from '../doctorFormEdit';
import DoctorFormEdit from '../../my/doctorprof';
import closeBtn from '../../../theme/images/closeButtonRed.svg';
import doctorIcon from '../../../theme/images/admin/doctor.png';
import writer from '../../../theme/images/account/writer.svg';

const Doctors = ({ filialId, ...props }) => {

  useEffect(() => {
    // props.getDoctors(filialId);
    // props.getServices();
    props.getSpecs();
  }, []);
  useEffect(() => {
    setSpecList(props.filial.specs);
  }, [props.filial.specs]);

  const { doctors, specs, services } = props.filial;
  const [specId, setSpec] = useState(-1);
  const [specList, setSpecList] = useState(specs);

  const [doctorId, setDoctorId] = useState(-1);
  const [recordList, setRecordList] = useState(undefined);

  const [showDialog, setShowDialog] = useState(false);
  const [doctorForm, setDoctorForm] = useState(false);
  const [showAssignDoctorsDialog, setShowAssignDoctorsDialog] = useState(false);
  const [title, setTitle] = useState('');  

  const [currentDoctor, setDoctor] = useState(null);
  const [modalName, setModalName] = useState('');

  // console.log('doctors+++++', doctors);

  useEffect(() => {
    props.getDoctors(filialId);
  }, []);

  const compact = (arr, res) => {
    let start; let 
      end;
    let i = 0;
    // находим первую не пустую запись
    while (arr[i].startTime === '' || arr[i].endTime === '') {
      i++;
    }
    start = arr[i].startTime;
    end = arr[i].endTime;
    const founded = arr.filter(
      (item) => item.startTime === start && item.endTime === end
    );
    const last = arr.filter(
      (item) => (item.startTime !== start || item.endTime !== end)
        && item.startTime !== ''
        && item.endTime !== ''
    );

    //  сохраняем найденный уникальный набор
    const daysOfWeek = [];
    founded.forEach((item) => {
      daysOfWeek.push(item.index);
    });

    res.push({ daysOfWeek, startTime: start, endTime: end });

    if (last.length) {
      compact(last, res);
    }
  };

  const handleStoreSchedule = (businessHours) => {
    const result = [];
    compact(businessHours, result);
    const payload = {
      doctorId: currentDoctor.doctor.id,
      specId: currentDoctor.spec.id,
      businessHours: result,
    };
    props.storeSchedule(payload);
    setModalName('');
  };

  const handleStoreDoctor = (name) => {
    const data = { filialId, name };
    props.storeDoctor(data);
    setModalName('');
  };
  const handleGreateDoctor = (data) => {
    console.log('greate врач DATA===', data);
    props.storeDoctor(data);
    setTimeout(() => { props.getDoctors(filialId); }, 300);
    setModalName('');
  };

  // const handleGreateDoctorEdit = (data) => {
  //   console.log('edit врач DATA===', data);
  //   props.storeDoctor(data.name);
  //   setTimeout(() => { props.getDoctors(filialId); }, 300);
  //   setModalName('');
  // };

  const handleUpdateDoctorEdit = (doctor) => (status) => {
    console.log('***ghj Doctor ===', doctor);
    // doctor.doctor.name = 'ПЕТРОВ';
    // status = 0;
    const data = { doctorId: doctor.doctor.id, doctorName: doctor.doctor.name, status: status ? 1 : 0 };
    console.log('handleUpdateDoctor ===', data);
    props.updateDoctor(data);
    setTimeout(() => { props.getDoctors(filialId); }, 300);
    setModalName('');
  };

  const handleUpdateDoctor = (doctor) => (status) => {
    const data = { doctorId: doctor.doctor.id, doctorName: doctor.doctor.name, status: status ? 1 : 0 };
    console.log('handleUpdateDoctor ===', data);
    props.updateDoctor(data);
    setTimeout(() => { props.getDoctors(filialId); }, 300);
    setModalName('');
  };

  const deleteDoctor = (doctor) => {
    // console.log('doctor.currentDoctor.id======', doctor.currentDoctor.id);
    props.deleteDoctor(doctor.currentDoctor.id);
    setTimeout(() => { props.getDoctors(filialId); }, 300);
    setModalName('');
  };

  let bbb1 = [];
  if (specList && specList.length > 1 && specId !== -1) {
    // console.log('7777SPEC+++++', specId, spec.name);
    for (let i = 0; i < doctors.length; i++) {
      for (let j = 0; j < doctors[i].specs.data.length; j++) {
        if (doctors[i].specs.data[j].id === specId) {
          bbb1.push(doctors[i]);
        } 
      } 
    } 
  } else { bbb1 = doctors; }

  return (
    <>
      {/* <div className="admin__section doctors-section"> */}
      <GridRow>
        <GridCol
          width={{ mobile: 6 }} 
          className=""
        >
          <button
            className="actions__btn1"
            onClick={() => {
              setDoctorForm(true);
              setModalName('doctorform');
            }}
            // onClick={() => {
            //   setDoctor({ doctor, spec });
            //   setModalName('schedule');
            // }}
            type="button"
          >
            Добавить врача
          </button>
          <div className="contact-media-s20" />          
        </GridCol>

        {/* <GridCol
          width={{ mobile: 6 }} 
          className=""
        > 
          <select
            className="admin-select"
            value={doctorId}
            onChange={(e) => {
              const id = +e.target.value;
              setDoctorId(id);
            }}
          >
            <option value="-1">Все специалисты</option>
            {props.filial.doctors
            && props.filial.doctors.map((spec) => (
              <option key={spec.id} value={spec.id}>
                {spec.name}
              </option>
            ))}
          </select>
          <div className="contact-media-s20" />
        </GridCol> */}

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
      </GridRow>

      <table className="tbl rtable">
        <thead>
          <tr>
            <th>#</th>
            <th>Врач</th>
            <th>Специализация</th>
            <th>Статус</th>
            <th>Управление</th>
          </tr>
        </thead>
        <tbody>
          {bbb1
              && bbb1.map((doctor, index1) => (       
                // recordList
                //   && recordList.map((s, index) => (
                <tr key={`doctor-${doctor.id}`} className="doctors-row">
                  {/* // <tr key={doctor.id} className="doctors-row"> */}
                  <td className="centered">{index1 + 1}</td>
                  <td>{doctor.name}</td>
                  <td className="cell-change">
                    {doctor.specs
                      && doctor.specs.data.map((spec) => (
                        <span
                          key={spec.id}
                          onClick={() => {
                            console.log('SPEC+++++', spec);
                            setDoctor({ doctor, spec });
                            setModalName('schedule');
                          }}
                          className="doctors__spec"
                        >
                          {/* {console.log('SPEC+++++', spec.id, spec.name)} */}
                          <img 
                            className=""
                            width="24vw"
                            height="auto"
                            src={writer} 
                            title="Изменить график"
                            alt="Изменить график"
                          /> 
&emsp;
                          {spec.name}
                          <br />
                        </span>
                      ))}
                  </td>
                  <td
                    className="cell-change"
                    onClick={() => {
                      setDoctor({ ...currentDoctor, doctor });
                      setModalName('updateDoctor');
                    }}
                  >
                    <span>
                      <img 
                        src={pencil} 
                        alt="Изменить"
                        title="Изменить статус приема"
                      />
&emsp;
                      {+doctor.status ? 'Ведет прием' : 'Не принимает'}
                    </span>
                  </td>
                  {/* <td
                    className="cell-change"
                    onClick={() => {
                      setDoctor(doctor);
                      setModalName('deleteDoctor');
                    }}
                  >
                    удалить
                  </td> */}

                  <td className="">
                    <div className="service__buttons">
                      {/* {isActiveRecords && !s.deleted && ( */}
                      <a href="#">
                        <img
                        // onClick={(e) => startDeleteRecord(e, s)}
                          onClick={() => {
                            setDoctor(doctor);
                            setModalName('deleteDoctor');
                          }}
                          src={closeBtn}
                          alt="Delete"
                          title="Удалить"
                        />
                      </a>
                      &emsp;
                      <img
                            src={doctorIcon}
                            alt="doctor"
                            title="Редактировать"
                            onClick={() => {
                              setDoctor({ ...currentDoctor, doctor });
                              setDoctorForm(true);
                              setModalName('doctorformedit');
                            }}
                            className="column-icon"
                          />
{/* 
                      <NavLink
                        onClick={() => {
                          setDoctor({ ...currentDoctor, doctor });
                          setDoctorForm(true);
                          console.log('---+++currentDoctor', currentDoctor);
                        }}
                        doctorq={currentDoctor}
                        className="link link_third" 
                        to="/my/doctorprof"
                      >
                        <img
                          src={doctorIcon}
                          alt="doctor"
                          title="Редактировать"
                          className="column-icon"
                        />
                      </NavLink> */}

                      {/* )} */}
                    </div>
                  </td> 

                  {/* <td
                    className="cell-change"
                    onClick={() => {
                      setDoctor({ ...currentDoctor, doctor });
                      setModalName('updateDoctor');
                    }}
                  >
                    <img src={pencil} alt="Изменить" />
                  </td> */}
                </tr>
                // ))
                // ))))}
              ))}
        </tbody>
      </table>
      <br />

      {/* <button
        className="button button_secondary"
        style={{ display: 'block', margin: '0 auto' }}
        onClick={() => setModalName('createDoctor')}
      >
        Добавить специалиста
      </button> */}
      {/* <Modal
        open={modalName === 'createDoctor'}
        onClose={() => setModalName('')}
        closeBtn={false}
        classNames={{ modal: 'modal-form' }}
      >
        <CreateDoctorDialog
          onOk={handleStoreDoctor}
          onCancel={() => setModalName('')}
        />
      </Modal> */}

      {/* UpdateDoctor */}
      <Modal
        open={modalName === 'updateDoctor'}
        title="Изменить статус приема"
        onClose={() => setModalName('')}
        closeBtn
        // classNames={{ modal: 'modal-form' }}
        classNames={{
          overlay: 'dialog-overlay',
          modal: 'dialog-modal dialog_small',
          closeButton: 'dialog-close-button',
        }}        
      >
        <ChangeDoctorDialog
          doctor={currentDoctor}
          onOk={handleUpdateDoctor(currentDoctor)}
          onCancel={() => setModalName('')}
        />
      </Modal>

      {/* Schedule */}
      <Modal
        open={modalName === 'schedule'}
        title="Редактирование рабочего графика"
        onClose={() => setModalName('')}
        closeBtn
        // classNames={{ modal: 'modal-form' }}
        style={{ borderRadius: '10px' }}
        classNames={{
          overlay: 'dialog-overlay',
          modal: 'dialog-modal dialog_small',
          closeButton: 'dialog-close-button',
        }}
        
      >
        <Schedule
          schedule={currentDoctor}
          handleClose={() => setModalName('')}
          handleStore={handleStoreSchedule}
        />
      </Modal>

      {/* Doctor Form Добавить врача */}
      <Modal
        // open={doctorForm}
        open={modalName === 'doctorform'}
        // onClose={() => setDoctorForm(false)}
        title="Добавить врача"
        onClose={() => setModalName('')}
        closeBtn
        // classNames={{ modal: 'modal-form' }}
        classNames={{
          overlay: 'dialog-overlay',
          modal: 'dialog-modal dialog_small',
          closeButton: 'dialog-close-button',
        }}
      >

        <DoctorForm
          specList={specList}
          // onSave={(data) => props.storeDoctor(data)}
          onSave={handleGreateDoctor}
          // onClose={() => setDoctorForm(false)}
          handleClose={() => setModalName('')}
        />
      </Modal>

      {/* Doctor Form Edit Редактировать врача */}
      <Modal
        open={modalName === 'doctorformedit'}
        title="Редактировать ФИО"
        onClose={() => setModalName('')}
        closeBtn
        classNames={{
          overlay: 'dialog-overlay',
          // modal: 'dialog-modal dialog_small',
          // modal: 'dialog-modal dialog_full',
          modal: 'dialog_full',
          // modal: 'dialog-modal',
          closeButton: 'dialog-close-button',
        }}
      >
        <DoctorFormEdit
          specList={specList}
          schedule={currentDoctor}
          // onSave={handleGreateDoctorEdit}
          // onSave={handleUpdateDoctor}
          // onSave={handleStoreDoctor}
          // onSave={handleUpdateDoctor(currentDoctor)}
          onSave={handleUpdateDoctorEdit(currentDoctor)}
          handleClose={() => setModalName('')}
        />
      </Modal>

      <Modal
        title="Удаление записи врача"      
        open={modalName === 'deleteDoctor'}
        // onClose={() => setDoctorForm(false)}
        closeBtn
        onClose={() => setModalName('')}
        classNames={{
          overlay: 'dialog-overlay',
          modal: 'dialog-modal dialog_small',
          closeButton: 'dialog-close-button',
        }}
      >
        <div className="contact-media-s30" />
        <div style={{ textAlign: 'center' }}>
          <p className="dialog-header1">Удалить врача?</p>
        </div>
        {/* <button 
          type="button" 
          onClick={() => deleteDoctor({ currentDoctor })}
        >
          Удалить
        </button> */}

        <GridRow style={{ paddingTop: '20px', paddingLeft: '20px' }} gutter={{ mobile: 24, tablet: 24, desktop: 24 }}>
          <GridCol
            width={{ mobile: 12, tablet: 6, desktop: 6 }} 
            className="text-center"
          >
            <button
              className="button button_secondary"
              onClick={() => deleteDoctor({ currentDoctor })}
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
              // onClick={handleClose}
              onClick={() => setModalName('')}
            >
              Отмена
            </button>
          </GridCol>
        </GridRow>
        <div className="contact-media-s30" />

      </Modal>
      {/* </div> */}
    </>
  );
};

export default UseFilial(Doctors);
