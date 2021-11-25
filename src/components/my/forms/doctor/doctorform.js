/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import Input from 'arui-feather/input';
import Vk from '../../../../theme/images/account/vk.svg';
import Twitter from '../../../../theme/images/account/twitter.svg';
import Facebook from '../../../../theme/images/account/facebook.svg';
import Telegram from '../../../../theme/images/account/pic-telegram.svg';
import Viber from '../../../../theme/images/account/viber.svg';
import Whatsapp from '../../../../theme/images/account/whatsapp.svg';
import Instagram from '../../../../theme/images/account/instagram.svg';
import Youtube from '../../../../theme/images/account/youtube.svg';
import Ok from '../../../../theme/images/account/ok.svg';
import ImageUploadField from '../../../common/imageuploadfield';
import Modal from '../../../common/modal';
import { doctorBlock } from '../../../../core/utils/testdata';
import './styles.scss';

/**
 * Request form
 */
export default function DoctorForm({
  history,
  values,
  errors,
  touched,
  setFieldValue,
  handleSubmit,
  handleBlur,
  setSubmitting,
  isSubmitting,
  dirty,
  doctorf,
}) {
  const onModalClose = () => {
    setSubmitting(false);
    if (Object.keys(errors).length === 0) {
      history.push('/my/lk1');
    }
  };

  const handleSubmitModal = () => {
    setSubmitting(false);
    if (Object.keys(errors).length !== 0 && !errors.global) {
      const elem = document.querySelector('.input__sub');
      elem && elem.parentElement.scrollIntoView();
    } else {
      handleSubmit();
    }
  };
  // console.log('777895641doctorf==', doctorBlock[doctorf.doctor.id - 1].wayDeclare);
  // console.log('777895641doctorf88999==', values.docspec );
  // const docname = doctorf.doctor.name;
  // const docspec = doctorBlock[doctorf.doctor.id-1].wayDeclare;
  // const docspec = '145hkj';
  // const docscill = doctorBlock[doctorf.doctor.id].scillDeclare;
  // const docexp = doctorBlock[doctorf.doctor.id].expDeclare;
  // const docyear = doctorBlock[doctorf.doctor.id].yearEducation;
  // const docbase = doctorBlock[doctorf.doctor.id-1].baseEducation;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmitModal();
      }}
      className="student-form"
    >
      <div className="student-form-container">
        <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 12, desktop: 12 }}
            className="form-field"
          >
            <div className="input-title">Ф.И.О. врача</div>
            <Input
              id="fio"
              placeholder="ФИО"
              value={values.docname}
              onChange={(value) => setFieldValue('docname', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.docname && touched.docname && <span>{errors.docname}</span>}
              disabled={isSubmitting}
              style={{ border: 'none' }}
            />
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 12, desktop: 12 }}
            className="form-field"
          >
            <div className="input-title">Специализация</div>
            <Input
              id="spec"
              placeholder="Специализация"
              value={values.docspec}
              onChange={(value) => setFieldValue('docspec', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.docspec && touched.docspec && <span>{errors.docspec}</span>}
              disabled={isSubmitting}
              style={{ border: 'none' }}
            />
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 12, desktop: 12 }}
            className="form-field"
          >
            <div className="input-title">Образование</div>
            <Input
              id="base"
              placeholder="Образование"
              value={values.docbase}
              onChange={(value) => setFieldValue('docbase', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.docbase && touched.docbase && <span>{errors.docbase}</span>}
              disabled={isSubmitting}
              style={{ border: 'none' }}
            />
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol
            width={{ mobile: 6, tablet: 6, desktop: 6 }}
            className="form-field"
          >
            <div className="input-title">Год окончания</div>
            <Input
              id="year"
              placeholder="Год окончания"
              value={values.docyear}
              onChange={(value) => setFieldValue('docyear', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.docyear && touched.docyear && <span>{errors.docyear}</span>}
              disabled={isSubmitting}
              style={{ border: 'none' }}
            />
          </GridCol>
          <GridCol
            width={{ mobile: 6, tablet: 6, desktop: 6 }}
            className="form-field"
          >
            <div className="input-title">Стаж</div>
            <Input
              id="exp"
              placeholder="Стаж"
              value={values.docexp}
              onChange={(value) => setFieldValue('docexp', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.docexp && touched.docexp && <span>{errors.docexp}</span>}
              disabled={isSubmitting}
              style={{ border: 'none' }}
            />
          </GridCol>
        </GridRow>

        <GridRow>
          <GridCol
            width={{ mobile: 9, tablet: 9, desktop: 9 }}
            className="form-field"
          >
            <div className="input-title">Повышение квалификации 1</div>
            <Input
              id="expedu1"
              placeholder="Повышение квалификации 1"
              value={values.docexpedu}
              onChange={(value) => setFieldValue('docexpedu', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.docexpedu && touched.docexpedu && <span>{errors.docexpedu}</span>}
              disabled={isSubmitting}
              style={{ border: 'none' }}
            />
          </GridCol>
          <GridCol
            width={{ mobile: 3, tablet: 3, desktop: 3 }}
            className="form-field"
          >
            <div className="input-title">Год 1</div>
            <Input
              id="yearexp1"
              placeholder="Год 1"
              value={values.docyearexp}
              onChange={(value) => setFieldValue('docyearexp', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.docyearexp && touched.docyearexp && <span>{errors.docyearexp}</span>}
              disabled={isSubmitting}
              style={{ border: 'none' }}
            />
          </GridCol>          
        </GridRow>

        <GridRow>
          <GridCol
            width={{ mobile: 9, tablet: 9, desktop: 9 }}
            className="form-field"
          >
            <div className="input-title">Повышение квалификации 2</div>
            <Input
              id="expedu2"
              placeholder="Повышение квалификации 2"
              value={values.docexpedu1}
              onChange={(value) => setFieldValue('docexpedu1', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.docexpedu1 && touched.docexpedu1 && <span>{errors.docexpedu1}</span>}
              disabled={isSubmitting}
              style={{ border: 'none' }}
            />
          </GridCol>
          <GridCol
            width={{ mobile: 3, tablet: 3, desktop: 3 }}
            className="form-field"
          >
            <div className="input-title">Год 2</div>
            <Input
              id="yearexp2"
              placeholder="Год 2"
              value={values.docyearexp1}
              onChange={(value) => setFieldValue('docyearexp1', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.docyearexp1 && touched.docyearexp1 && <span>{errors.docyearexp1}</span>}
              disabled={isSubmitting}
              style={{ border: 'none' }}
            />
          </GridCol>          
        </GridRow>

        <GridRow>
          <GridCol
            width={{ mobile: 9, tablet: 9, desktop: 9 }}
            className="form-field"
          >
            <div className="input-title">Повышение квалификации 3</div>
            <Input
              id="expedu3"
              placeholder="Повышение квалификации 3"
              value={values.docexpedu2}
              onChange={(value) => setFieldValue('docexpedu2', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.docexpedu2 && touched.docexpedu2 && <span>{errors.docexpedu2}</span>}
              disabled={isSubmitting}
              style={{ border: 'none' }}
            />
          </GridCol>
          <GridCol
            width={{ mobile: 3, tablet: 3, desktop: 3 }}
            className="form-field"
          >
            <div className="input-title">Год 3</div>
            <Input
              id="yearexp3"
              placeholder="Год 3"
              value={values.docyearexp2}
              onChange={(value) => setFieldValue('docyearexp2', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.docyearexp2 && touched.docyearexp2 && <span>{errors.docyearexp2}</span>}
              disabled={isSubmitting}
              style={{ border: 'none' }}
            />
          </GridCol>          
        </GridRow>

        <GridRow>
          <GridCol
            width={{ mobile: 9, tablet: 9, desktop: 9 }}
            className="form-field"
          >
            <div className="input-title">Повышение квалификации 4</div>
            <Input
              id="expedu4"
              placeholder="Повышение квалификации 4"
              value={values.docexpedu3}
              onChange={(value) => setFieldValue('docexpedu3', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.docexpedu3 && touched.docexpedu3 && <span>{errors.docexpedu3}</span>}
              disabled={isSubmitting}
              style={{ border: 'none' }}
            />
          </GridCol>
          <GridCol
            width={{ mobile: 3, tablet: 3, desktop: 3 }}
            className="form-field"
          >
            <div className="input-title">Год 4</div>
            <Input
              id="yearexp4"
              placeholder="Год 4"
              value={values.docyearexp3}
              onChange={(value) => setFieldValue('docyearexp3', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.docyearexp3 && touched.docyearexp3 && <span>{errors.docyearexp3}</span>}
              disabled={isSubmitting}
              style={{ border: 'none' }}
            />
          </GridCol>          
        </GridRow>


        <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 12, desktop: 12 }}
            className="form-field"
          >
            <div className="input-title">Ресурс размещения статьи о враче</div>
            <Input
              id="mediadoc"
              placeholder="Ресурс размещения статьи о враче"
              value={values.docmedia}
              onChange={(value) => setFieldValue('docmedia', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.docmedia && touched.docmedia && <span>{errors.docmedia}</span>}
              disabled={isSubmitting}
              style={{ border: 'none' }}
            />
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 12, desktop: 12 }}
            className="form-field"
          >
            <div className="input-title">Название статьи</div>
            <Input
              id="medname"
              placeholder="Название статьи"
              value={values.docmedname}
              onChange={(value) => setFieldValue('docmedname', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.docmedname && touched.docmedname && <span>{errors.docmedname}</span>}
              disabled={isSubmitting}
              style={{ border: 'none' }}
            />
          </GridCol>
        </GridRow>



        <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 12, desktop: 12 }}
            className="form-field"
          >
            <div className="input-title">Публикация врача</div>
            <Input
              id="pubdoctor"
              placeholder="Публикация врача"
              value={values.docpub}
              onChange={(value) => setFieldValue('docpub', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.docpub && touched.docpub && <span>{errors.docpub}</span>}
              disabled={isSubmitting}
              style={{ border: 'none' }}
            />
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol
            width={{ mobile: 8, tablet: 8, desktop: 8 }}
            className="form-field"
          >
            <div className="input-title">Название статьи врача</div>
            <Input
              id="pubname"
              placeholder="Название статьи врача"
              value={values.docpubname}
              onChange={(value) => setFieldValue('docpubname', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.docpubname && touched.docpubname && <span>{errors.docpubname}</span>}
              disabled={isSubmitting}
              style={{ border: 'none' }}
            />
          </GridCol>
          <GridCol
            width={{ mobile: 4, tablet: 4, desktop: 4 }}
            className="form-field"
          >
            <div className="input-title">Дата</div>
            <Input
              id="datapub"
              placeholder="Дата публикации"
              value={values.docdatapub}
              onChange={(value) => setFieldValue('docdatapub', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.docdatapub && touched.docdatapub && <span>{errors.docdatapub}</span>}
              disabled={isSubmitting}
              style={{ border: 'none' }}
            />
          </GridCol>
        </GridRow>

{/* **** */}
        <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 12, desktop: 12 }}
            className="form-field"
          >
            <div className="input-title">741Название</div>
            <Input
              id="name"
              placeholder="Название"
              value={values.name}
              onChange={(value) => setFieldValue('name', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.name && touched.name && <span>{errors.name}</span>}
              disabled={isSubmitting}
              style={{ border: 'none', color: 'red' }}
            />
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 12, desktop: 12 }}
            className="form-field text-center"
          >
            <ImageUploadField
              name="student"
              descr="Фото"
              imageUrl={values.image}
              onChange={(value) => setFieldValue('image', value.file)}
            />
          </GridCol>
        </GridRow>
        {/* <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 6, desktop:6 }}
            className="form-field"
          >
            <div className="input-title">Уровень подготовки</div>
            <div className="experience-input">
              <Input
                id="experience"
                placeholder="9 классов"
                value={values.experience}
                onChange={value => setFieldValue('experience', value)}
                onBlur={handleBlur}
                width="available"
                error={
                  errors.experience &&
                  touched.experience && <span>{errors.experience}</span>
                }
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
        </GridRow> */}
        <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 4, desktop: 4 }}
            className="form-field"
          >
            <div className="input-title">Телефон</div>
            <Input
              className="input-phone"
              id="phone"
              type="tel"
              mask="+7-111-111-11-11"
              placeholder="+7-111-111-11-11"
              value={values.phone}
              onChange={(value) => setFieldValue('phone', value)}
              onBlur={handleBlur}
              width="available"
              error={
                errors.phone && touched.phone && <span>{errors.phone}</span>
              }
              disabled={isSubmitting}
            />
          </GridCol>
          <GridCol />
        </GridRow>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }} className="">
            <div className="input-title">Социальные сети</div>
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 4, desktop: 4 }}
            className="form-field"
          >
            <div className="soc-input">
              <div className="soc-pic">
                <img className="soc-pic" src={Vk} alt="" />
              </div>
              <Input
                id="vk"
                placeholder="ВКонтакте"
                value={values.vk}
                onChange={(value) => setFieldValue('vk', value)}
                onBlur={handleBlur}
                width="available"
                error={errors.vk && touched.vk && <span>{errors.vk}</span>}
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
          <GridCol
            width={{ mobile: 12, tablet: 4, desktop: 4 }}
            className="form-field"
          >
            <div className="soc-input">
              <div className="soc-pic">
                <img src={Twitter} alt="" />
              </div>
              <Input
                id="twitter"
                placeholder="Twitter"
                value={values.twitter}
                onChange={(value) => setFieldValue('twitter', value)}
                onBlur={handleBlur}
                width="available"
                error={
                  errors.twitter
                  && touched.twitter && <span>{errors.twitter}</span>
                }
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
          <GridCol
            width={{ mobile: 12, tablet: 4, desktop: 4 }}
            className="form-field"
          >
            <div className="soc-input">
              <div className="soc-pic">
                <img src={Facebook} alt="" />
              </div>
              <Input
                id="facebook"
                placeholder="Facebook"
                value={values.facebook}
                onChange={(value) => setFieldValue('facebook', value)}
                onBlur={handleBlur}
                width="available"
                error={
                  errors.facebook
                  && touched.facebook && <span>{errors.facebook}</span>
                }
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 4, desktop: 4 }}
            className="form-field"
          >
            <div className="soc-input">
              <div className="soc-pic">
                <img src={Telegram} alt="" />
              </div>
              <Input
                id="telegram"
                placeholder="Telegram"
                value={values.telegram}
                onChange={(value) => setFieldValue('telegram', value)}
                onBlur={handleBlur}
                width="available"
                error={
                  errors.telegram
                  && touched.telegram && <span>{errors.telegram}</span>
                }
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
          <GridCol
            width={{ mobile: 12, tablet: 4, desktop: 4 }}
            className="form-field"
          >
            <div className="soc-input">
              <div className="soc-pic">
                <img src={Viber} alt="" />
              </div>
              <Input
                id="viber"
                placeholder="Viber"
                value={values.viber}
                onChange={(value) => setFieldValue('viber', value)}
                onBlur={handleBlur}
                width="available"
                error={
                  errors.viber && touched.viber && <span>{errors.viber}</span>
                }
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
          <GridCol
            width={{ mobile: 12, tablet: 4, desktop: 4 }}
            className="form-field"
          >
            <div className="soc-input">
              <div className="soc-pic">
                <img src={Whatsapp} alt="" />
              </div>
              <Input
                id="whatsapp"
                placeholder="WhatsApp"
                type="tel"
                mask="+7-111-111-11-11"
                value={values.whatsapp}
                onChange={(value) => setFieldValue('whatsapp', value)}
                onBlur={handleBlur}
                width="available"
                error={
                  errors.whatsapp
                  && touched.whatsapp && <span>{errors.whatsapp}</span>
                }
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 4, desktop: 4 }}
            className="form-field"
          >
            <div className="soc-input">
              <div className="soc-pic">
                <img src={Instagram} alt="" />
              </div>
              <Input
                id="instagram"
                placeholder="Instagram"
                value={values.instagram}
                onChange={(value) => setFieldValue('instagram', value)}
                onBlur={handleBlur}
                width="available"
                error={
                  errors.instagram
                  && touched.instagram && <span>{errors.instagram}</span>
                }
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
          <GridCol
            width={{ mobile: 12, tablet: 4, desktop: 4 }}
            className="form-field"
          >
            <div className="soc-input">
              <div className="soc-pic">
                <img src={Youtube} alt="" />
              </div>
              <Input
                id="youtube"
                placeholder="YouTube"
                value={values.youtube}
                onChange={(value) => setFieldValue('youtube', value)}
                onBlur={handleBlur}
                width="available"
                error={
                  errors.youtube
                  && touched.youtube && <span>{errors.youtube}</span>
                }
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
          <GridCol
            width={{ mobile: 12, tablet: 4, desktop: 4 }}
            className="form-field"
          >
            <div className="soc-input">
              <div className="soc-pic">
                <img src={Ok} alt="" />
              </div>
              <Input
                id="ok"
                placeholder="Одноклассники"
                value={values.ok}
                onChange={(value) => setFieldValue('ok', value)}
                onBlur={handleBlur}
                width="available"
                error={errors.ok && touched.ok && <span>{errors.ok}</span>}
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 6, desktop: 6 }}
            className="form-field"
          >
            <div className="input-title">Смена пароля</div>
            <Input
              id="pwd"
              placeholder="Новый пароль"
              value={values.pwd}
              onChange={(value) => setFieldValue('pwd', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.pwd && touched.pwd && <span>{errors.pwd}</span>}
              disabled={isSubmitting}
            />
          </GridCol>
          <GridCol
            width={{ mobile: 12, tablet: 6, desktop: 6 }}
            className="form-field"
          >
            <div className="input-title">&nbsp;</div>
            <Input
              id="pwd1"
              placeholder="Подтвердите пароль"
              value={values.pwd1}
              onChange={(value) => setFieldValue('pwd1', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.pwd1 && touched.pwd1 && <span>{errors.pwd1}</span>}
              disabled={isSubmitting}
            />
          </GridCol>
        </GridRow>
        <div className="student-form-action">
          <Button
            type="submit"
            className="button button_default button_modal"
            disabled={isSubmitting || !dirty}
          >
            Сохранить
          </Button>
        </div>
      </div>
      <Modal
        open={isSubmitting}
        title={
          Object.keys(errors).length === 0
            ? 'Профиль успешно сохранен'
            : errors.global
        }
        onClose={onModalClose}
        classNames={{
          overlay: 'dialog-overlay',
          modal: 'dialog-modal dialog_small',
          closeButton: 'dialog-close-button',
        }}
      >
        <br />
        <div
          style={{
            minwidth: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            className="button button_default button_modal"
            onClick={onModalClose}
          >
            ОК
          </Button>
        </div>
        <div className="contact-media-s30" />
      </Modal>
    </form>
  );
}
