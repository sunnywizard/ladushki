import React, { useState, useRef, useEffect } from 'react';
import Popup from 'arui-feather/popup';
import PicChecked from '../../../theme/images/account/pic-checked.svg';
import './styles.scss'

const CheckedPopup = ({ message }) => {
  const [isOpen, setIsOpen] = useState(false);
  let refPopup = useRef(null);
  let refTarget = useRef(null);

  useEffect(() => {
    refPopup.setTarget(refTarget.current);
  }, []);

  return (
    <span className="checked-popup">
      <button
        onMouseEnter={ () => setIsOpen(true) }
        onMouseLeave={ () => setIsOpen(false) }
        ref={refTarget}
      >
        <img src={PicChecked} alt="" />
      </button>
      <Popup
        ref={(popup) => { refPopup = popup; }}
        visible={isOpen}
        onClickOutside={() => setIsOpen(false)}
        mainOffset={ 10 }
      >
        {message}
      </Popup>
    </span>
  )
};

export default CheckedPopup;
