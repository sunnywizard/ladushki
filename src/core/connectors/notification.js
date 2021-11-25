import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as NotificationActions from '../actions/notification';

const mapStateToProps = state => ({ notification: state.notification });
const mapDispatchToProps = dispatch => ({ ...bindActionCreators(NotificationActions, dispatch) });

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component);
