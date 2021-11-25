import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProfileActions from '../actions/profile';

const mapStateToProps = state => ({ profile: state.profile });
const mapDispatchToProps = dispatch => ({ ...bindActionCreators(ProfileActions, dispatch) });

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component);
