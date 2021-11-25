import React, { useState } from 'react';
import Button from 'arui-feather/button';
import Input from 'arui-feather/input';
import Textarea from 'arui-feather/textarea';
import './styles.scss';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import IntlPhoneInput from 'arui-feather/intl-phone-input';
import EmailInput from 'arui-feather/email-input';
import Select from 'arui-feather/select';
import ModalTeacherCard from '../../../components/my/forms/modalteachercard';
import Dialog from '../../../components/common/dialog';

/**
 * Student course request form
 */
export default function ModalStudentCourseRequest({
  values,
  errors,
  touched,
  setFieldValue,
  handleSubmit,
  handleBlur,
  isSubmitting,
  onClose,
}) {
  const sizes = ['m'];
  const options = [
    { value: '00', text: 'г. Москва' },
    { value: '01', text: 'Республика Адыгея' },
    { value: '02', text: 'Республика Башкортостан' },
    { value: '03', text: 'Республика Бурятия' },
    { value: '04', text: 'Республика Алтай' },
    { value: '05', text: 'Республика Дагестан' },
    { value: '06', text: 'Республика Ингушетия' },
    { value: '07', text: 'Кабардино-Балкарская Республика' },
    { value: '08', text: 'Республика Калмыкия' },
    { value: '09', text: 'Карачаево-Черкесская Республика' },
    { value: '10', text: 'Республика Карелия' },
    { value: '11', text: 'Республика Коми' },
    { value: '12', text: 'Республика Марий Эл' },
    { value: '13', text: 'Республика Мордовия' },
    { value: '14', text: 'Республика Саха-Якутия' },
    { value: '15', text: 'Республика Северная Осетия - Алания' },
    { value: '16', text: 'Республика Татарстан' },
    { value: '17', text: 'Республика Тыва' },
    { value: '18', text: 'Удмуртская Республика' },
    { value: '19', text: 'Республика Хакасия' },
  ];

  const [idOpenModal, setIdOpenModal] = useState('');
  return (
    <form onSubmit={handleSubmit} className="">
      <h2>489Оформление заказа</h2>
      <GridRow>
        <GridCol width={{ mobile: 12, tablet: 8, desktop:8 }}>
          <h4 style={{ color:'#000', textAlign: 'left' }}>{values.title}</h4>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 4, desktop:4 }}>
          <h6 style={{ color:'#FC8A15', textAlign: 'right' }}>
            {`Цена: ${values.price} руб.`}
          </h6>
        </GridCol>
      </GridRow>
      <div className="">
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 6 }}>
            <div className="tel-number">
              {['m'].map(size => (
                <div key={size}>
                  <Input
                    id="name"
                    size={size}
                    placeholder="Введите Ф.И.О"
                    width="available"
                    clear
                    autocomplete="on"
                  />
                </div>
              ))}
            </div>
            <div
              className="form-field form-text text-left"
              style={{ color:'#979797' }}
            >
              Пожалуйста, заполните это поле в правильном порядке. Например,
              «Иванов Сергей Петрович» или «Петрова Екатерина»
            </div>
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 6 }}>
            <div className="tel-number">
              {['m'].map(size => (
                <div key={size}>
                  <Input
                    id="adress"
                    size={size}
                    placeholder="Введите адрес"
                    defaultValue=""
                    width="available"
                    clear
                    autocomplete="on"
                  />
                </div>
              ))}
            </div>
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 6 }}>
            <div className="">
              {sizes.map(size => (
                <div className="row" key={size}>
                  <div className="column">
                    <Select
                      id="region"
                      label="Выберите регион доставки"
                      size={size}
                      mode="radio-check"
                      options={options}
                      width="available"
                      mobileMenuMode="popup"
                      mobileTitle="Очень длинный заголовок на мобильном устройстве"
                      nativeOptionPlaceholder="Всего регионов: 85"
                    />
                  </div>
                </div>
              ))}
            </div>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6 }}>
            <div className="tel-number">
              {['m'].map(size => (
                <div key={size}>
                  <Input
                    id="codeWord"
                    size={size}
                    placeholder="Введите кодовое слово"
                    width="available"
                    clear
                    autocomplete="on"
                  />
                </div>
              ))}
            </div>
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 6 }}>
            <div className="tel-number">
              {sizes.map(size => (
                <div key={size} className="row">
                  <IntlPhoneInput id="phone" size={size} width="available" />
                </div>
              ))}
            </div>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6 }}>
            <div className="tel-number">
              <EmailInput
                id="email"
                placeholder="Введите e-mail"
                autocomplete="on"
                width="available"
              />
            </div>
          </GridCol>
        </GridRow>
      </div>
      <div className="StudentCourseRequest-modal">
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 6, desktop:6 }}>
            <div className="divDateTime">
              <label htmlFor="dt">Дата</label>
              <Input
                type="date"
                id="dt"
                name="date"
                value={values.date}
                onChange={value => setFieldValue('date', value)}
                onBlur={handleBlur}
                error={
                  errors.date && touched.date && <span>{errors.date}</span>
                }
              />
            </div>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop:6 }}>
            <div className="divDateTime">
              <label htmlFor="tm">Время</label>
              <Input
                type="time"
                id="tm"
                name="time"
                value={values.time}
                onChange={value => setFieldValue('time', value)}
                onBlur={handleBlur}
                error={
                  errors.time && touched.time && <span>{errors.time}</span>
                }
              />
            </div>
          </GridCol>
        </GridRow>
        <div className="msg">
          <label>Сообщение владельцу</label>
          <Textarea
            minRows={3}
            name="message"
            value={values.message}
            onChange={value => setFieldValue('message', value)}
            id="info"
            label="Дополнительные сведения (не более 300 символов)"
            placeholder="Введите информацию"
            maxLength={300}
          />
        </div>
      </div>
      <div className="button-center">
        <GridRow>
          <GridCol width={{ mobile: 6, tablet: 6 }}>
            <Button
              type="submit"
              className="button button_settings-form"
              onClick={() => setIdOpenModal('TeacherCard')}
            >
              Купить
            </Button>
            <Dialog
              isOpen={idOpenModal === 'TeacherCard'}
              onClose={() => setIdOpenModal('')}
              title=""
            >
              <ModalTeacherCard />
            </Dialog>
          </GridCol>
          <GridCol width={{ mobile: 6, tablet: 6 }}>
            <Button className="button button_settings-cancel" onClick={onClose}>
              Отменить
            </Button>
          </GridCol>
        </GridRow>
      </div>
    </form>
  );
}