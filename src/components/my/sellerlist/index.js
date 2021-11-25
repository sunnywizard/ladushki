/* eslint-disable import/no-unresolved */
import React from 'react';
import { useHistory } from 'react-router-dom';
import Type from 'prop-types';
import 'moment/locale/ru';
import Button from 'arui-feather/button';
import FaPencilAlt from '../../../theme/images/icons/fapencilalt.svg';
import './styles.scss';
/**
 * Seller List
 */
const SellerList = ({ name, nameID, items = [] }) => {
  const history = useHistory();
  const doSeller = (nameID) => {
    history.push(`/list/${nameID}`);
  };
  return (
    <div className="">
      <Button
        onClick={() => {
          doSeller(nameID);
        }}
      >
        <img className="seller-icon" width="45" height="auto" src={FaPencilAlt} alt="Редактирование" />  
      </Button>
    </div>
  );
};
SellerList.propTypes = {
  items: Type.array.isRequired,
};
export default SellerList;
