import React, { useEffect, useRef, useState } from 'react';
import Popup from 'arui-feather/popup';
import OkIcon from 'arui-feather/icon/ui/ok';
import './styles.scss';

const SelectPopup = ({ onChange, value, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  let refPopup = useRef(null);
  const refTarget = useRef(null);

  useEffect(() => {
    refPopup.setTarget(refTarget.current);
  }, []);

  const handleChange = (value) => {
    setIsOpen(false);
    if (onChange) onChange(value);
  };

  const selected = options.find(item => item.type === value);

  return (
    <span className="select-popup">
      <span
        ref={refTarget}
        className="select-popup-title"
        onClick={() => setIsOpen(true)}
      >
        <OkIcon size='s'/>
        {' '}
        {/* {selected.name} */}
      </span>
      <Popup
        ref={(popup) => {
          refPopup = popup;
        }}
        visible={isOpen}
        onClickOutside={() => setIsOpen(false)}
        mainOffset={10}
      >
        <div className="teacher-online-list">
          <ul>
            {options.map(item => (
              <li key={item.type}
                  className={item.type === value ? 'active' : ''}
                  onClick={() => handleChange(item.type)}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </Popup>
    </span>
  );
};

export default SelectPopup;
