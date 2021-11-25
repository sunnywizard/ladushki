import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LocaleActions from '../actions/locale';

const mapStateToProps = state => ({ locale: state.locale });
const mapDispatchToProps = dispatch => ({ ...bindActionCreators(LocaleActions, dispatch) });

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component);
