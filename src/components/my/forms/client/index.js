/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { withRouter } from 'react-router';
import FormData from 'form-data';
import { withFormik } from 'formik';
import StudentForm from './studentform';
import ProfileServices from '../../../../core/services/profile';
import config from '../../../../config';
import { files } from '../../../../core/utils/testdata';

export default withRouter(
  withFormik({
    /* mapping props and set default values  */
    mapPropsToValues: ({ data }) => {
      return {
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
      if (!values.name) errors.name = 'Введите ФИО';

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
    displayName: 'StudentForm',
  })(StudentForm)
);
