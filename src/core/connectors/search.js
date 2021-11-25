import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SearchActions from '../actions/teachers';

const mapStateToProps = state => ({ search: state.search });
const mapDispatchToProps = dispatch => ({ ...bindActionCreators(SearchActions, dispatch) });

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component);