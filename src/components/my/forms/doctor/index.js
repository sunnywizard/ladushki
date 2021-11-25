/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { withRouter } from 'react-router';
import FormData from 'form-data';
import { withFormik } from 'formik';
import DoctorForm from './doctorform';
import ProfileServices from '../../../../core/services/profile';
import config from '../../../../config';
import { files, doctorBlock } from '../../../../core/utils/testdata';

export default withRouter(
  withFormik({
    /* mapping props and set default values  */
    mapPropsToValues: ({ data, doctorf }) => {
      return {
        docname: doctorBlock[doctorf.doctor.id - 1].titleDeclare,
        docspec: doctorBlock[doctorf.doctor.id - 1].wayDeclare,
        docbase: doctorBlock[doctorf.doctor.id - 1].baseEducation,
        docscill: doctorBlock[doctorf.doctor.id - 1].scillDeclare,
        docexp: doctorBlock[doctorf.doctor.id - 1].expDeclare,
        docyear: doctorBlock[doctorf.doctor.id - 1].yearEducation,
        docyearexp: doctorBlock[doctorf.doctor.id - 1].yearExpirions[0],
        docexpedu: doctorBlock[doctorf.doctor.id - 1].expEducation[0],
        docyearexp1: doctorBlock[doctorf.doctor.id - 1].yearExpirions[1],
        docexpedu1: doctorBlock[doctorf.doctor.id - 1].expEducation[1],
        docyearexp2: doctorBlock[doctorf.doctor.id - 1].yearExpirions[2],
        docexpedu2: doctorBlock[doctorf.doctor.id - 1].expEducation[2],   
        docyearexp3: doctorBlock[doctorf.doctor.id - 1].yearExpirions[3],
        docexpedu3: doctorBlock[doctorf.doctor.id - 1].expEducation[3],              
        docmedia: doctorBlock[doctorf.doctor.id - 1].mediaDoctor,
        docmedname: doctorBlock[doctorf.doctor.id - 1].mediaName,
        docpub: doctorBlock[doctorf.doctor.id - 1].pubDoctor,
        docpubname: doctorBlock[doctorf.doctor.id - 1].pubName,
        docdatapub: doctorBlock[doctorf.doctor.id - 1].dataPub,
        name: data.name,
        phone: data.phone,
        initialPhone: data.phone,
        image: data.image
          ? `${config.baseUrl}/avatars/${data.image}?${Date.now().toString()}`
          : files[0],
      };
    },

    /* form data validation  */
    validate: (values, props) => {
      const errors = {};
      if (!values.name) errors.name = '753Введите ФИО';

      values.phone = values.phone.replace(/[-+]/g, '');
      if (!values.phone || values.phone.length !== 11)
        errors.phone = 'Введите номер телефона';

      if (values.pwd && values.pwd.length < 6)
        errors.pwd = 'Пароль не менее 6 символов';
      if (values.pwd && values.pwd !== values.pwd1)
        errors.pwd1 = 'Пароли не совпадают';

      return errors;
    },

    /* form submission processing */
    handleSubmit: (values, { setErrors }) => {
      const newData = {
        name: values.name,
      };
      if (values.initialPhone !== values.phone) {
        newData.phone = values.phone;
      }

      if (values.pwd) {
        newData.password = values.pwd;
      }

      ProfileServices.update(newData)
        .then(() => {
          if (values.image && typeof values.image !== 'string') {
            const image = new FormData();
            image.append('image', values.image);
            ProfileServices.updateAvatar(image).catch(() => {
              setErrors({ global: 'Не удалось изменить аватар' });
            });
          }
        })
        .catch(() => {
          setErrors({ global: 'Не удалось изменить профиль' });
        });
    },
    displayName: 'DoctorForm',
  })(DoctorForm)
);
