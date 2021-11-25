/* eslint-disable import/no-unresolved */
import React from 'react';
import Type from 'prop-types';
import './style.scss';
import RecordDoneDialog from '../../../containers/site/recorddonedialog';
/**
 * Send Records Write
 */

class SendRecordsWrite extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      filialId: undefined,
      doctorId: undefined,
      serviceId: undefined,
      servicePrice: undefined,
      dateTime: undefined,
    };
  }

   handleDoneOk = (data) => {
     if (data) {
       const record = {
         date: this.state.dateTime.format('DD.MM.YYYY HH:mm'),
         doctor: this.getDoctorName(this.state.doctorId),
         service: this.getService(this.state.doctorId, this.state.serviceId)
           .name,
         price: this.state.servicePrice,
         address: this.getAddress(this.state.filialId),
         email: data,
       };
       this.props.sendRecordMessage(record);
     }

     //  this.setState({
     //    showDoneDialog: false,
     //  });
     document.body.style.overflowY = '';
     document.body.style.paddingRight = '';
     this.props.history.push('/');
   }; 

   render() {
     return (
     //  <button 
     //    role="none"
     //    onClick={this.handleClick}
     //    type="button"
     //  >
     //    {this.state.isToggleOn ? <span role="img" title="Товар неактивирован" aria-label="Флаг неактивно" style={{ fontSize: '20', color: '#000' }}>&#127937;</span>
     //      : <span role="img" title="Товар активирован" aria-label="Флаг активно" style={{ fontSize: '20', color: 'green' }}>&#127937;</span>}

     //  </button>

       <RecordDoneDialog
         onOk={this.handleDoneOk}
         data={{
           date: this.state.dateTime.format('DD.MM.YYYY HH:mm'),
           doctor: this.getDoctorName(this.state.doctorId),
           service: this.getService(
             this.state.doctorId,
             this.state.serviceId
           ).name,
           address: this.getAddress(this.state.filialId),
         }}
       />
     ); 
   }
}

SendRecordsWrite.propTypes = {
  // filial: Type.func.isRequired,
  history: Type.oneOfType([Type.func, Type.object, Type.string,]).isRequired,
  // getFilials: Type.func.isRequired,
  // getDoctors: Type.func.isRequired,
  // getRecords: Type.func.isRequired,
  // sendRecordMessage: Type.func.isRequired,
  // sendRecordMessage: Type.oneOfType([Type.string, Type.object]).isRequired,
  // storeRecord: Type.func.isRequired,
};

export default SendRecordsWrite;
