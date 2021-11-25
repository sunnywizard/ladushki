import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MessageActions from '../actions/message';

const mapStateToProps = state => ({ message: state.message });
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(MessageActions, dispatch),
});

export default Component =>
  connect(mapStateToProps, mapDispatchToProps)(Component);
