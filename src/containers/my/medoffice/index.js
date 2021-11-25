/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import Helmet from 'react-helmet';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import Modal from '../../../components/common/modal';
import UpButton from '../../../components/common/upbutton';
import StudentForm from '../../../components/my/forms/student';
import DocsBrowser from '../../../components/common/docsbrowser';
import { files } from '../../../core/utils/testdata';
import teacherUpdateModel from '../../../theme/images/teacherupdatemodel.png';
import useProfile from '../../../core/connectors/profile';
import './styles.scss';
/**
 * student
 */
const Student = ({ profile }) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const prof = { ...profile.profile };
  const data = prof ? prof.user : null;
  return (
    <>
      <Helmet>
        <title>Изменение профиля офиса</title>
        <meta name="description" content="Море" />
        <meta name="keywords" content="Море" />
      </Helmet>
      <UpButton /> 
      <section className="section">
        <GridRow align="middle">
          <GridCol width={{ mobile: 12, tablet: 9, desktop:9 }} className="form-field">
            <h1 className="student-title">Изменение профиля офиса</h1>
          </GridCol>
          <GridCol align="middle" width={{ mobile: 12, tablet: 3, desktop:3 }} className="form-field right-poz">
            {/* <div className="student-refresh">
              <Button type="button" className="button button_default button_modal" onClick={() => setIsOpenPopup(true)}>
                Образец
              </Button>
              <Modal open={isOpenPopup} onClose={() => setIsOpenPopup(false)} title="Образец">
                <img style={{ maxwidth:'765px' }} src={teacherUpdateModel} alt="Образец" />
              </Modal>
            </div> */}
          </GridCol>
        </GridRow>
        {data ? (
          <StudentForm formType="student" data={data} />
        ) : (
          <StudentForm formType="student" data={{}} />
        )}
        {/* <hr className="student-hr" /> */}
      </section>
      {/* <section className="section">
        <DocsBrowser title="Галерея покупок" files={files} />
        <DocsBrowser title="Интересные товары" files={files} />
      </section> */}
    </>
  );
};
export default useProfile(Student);
