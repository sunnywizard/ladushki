/* eslint-disable import/no-unresolved */
import React from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import './style.scss';

const ConfirmDialog = ({ onOk, onCancel }) => (
  // <div className="container">
  <div className="service-dialog-container">    
    <GridRow>
      <span className="dialog-header1">Вы точно хотите удалить запись?</span>
    </GridRow>
    <GridRow>
      <span className="">
        В календаре появится свободное место для записи
      </span>
    </GridRow>    
    <div className="contact-media-s20" />
    {/* <div className="confirm-buttons"> */}
    <GridRow style={{ paddingLeft: '20px' }} gutter={{ mobile: 24, tablet: 24, desktop: 24 }}>
      <GridCol
        width={{ mobile: 6, tablet: 6, desktop: 6 }} 
        className="text-center"
      >      
        <button 
          className="button button_secondary button_med" 
          onClick={onOk}
          type="button"
        >
          Ок
        </button>
      </GridCol>
      <GridCol
        width={{ mobile: 6, tablet: 6, desktop: 6 }} 
        className="text-center"
      >
        <button 
          className="button button_cancel" 
          style={{ fontSize: '18px' }}
          type="button" 
          onClick={onCancel}
        >            
          Отмена
        </button>
        {/* </div> */}
      </GridCol>
    </GridRow>
    <div className="contact-media-s20" />    
  </div>
);

export default ConfirmDialog;
