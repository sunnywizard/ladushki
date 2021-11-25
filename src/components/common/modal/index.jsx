import React, { useEffect } from 'react';
import Type from 'prop-types';
import './styles.scss';

const Modal = ({
  open,
  children,
  title,
  onClose,
  classNames = {},
  closeBtn = true,
}) => {

  return (
    <>
      {open && (
        <div
          className={`modal-overlay ${
            classNames.overlay ? classNames.overlay : ''
          }`}
        >
          <div
            className={`modal-window ${
              classNames.modal ? classNames.modal : ''
            }`}
          >
            {closeBtn && (
              <span className={`close-btn `} onClick={() => onClose()}>
                &times;
              </span>
            )}

            <div className="modal-sign">
              <div className="modal-header">
                <div className="modal-title">{title}</div>
              </div>
              <div className="modal-body">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  open: Type.bool.isRequired,
  title: Type.string,
  onClose: Type.func,
  children: Type.node.isRequired,
};

Modal.defaultProps = {
  title: '',
};

export default Modal;
