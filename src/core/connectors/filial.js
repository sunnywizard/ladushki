import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FilialActions from '../actions/filial';

const mapStateToProps = state => ({ filial: state.filial });
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(FilialActions, dispatch),
});

export default Component =>
  connect(mapStateToProps, mapDispatchToProps)(Component);
