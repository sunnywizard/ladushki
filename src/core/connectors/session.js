import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SessionActions from '../actions/session';

const mapStateToProps = state => ({ session: state.session });
const mapDispatchToProps = dispatch => ({ ...bindActionCreators(SessionActions, dispatch) });

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component);
