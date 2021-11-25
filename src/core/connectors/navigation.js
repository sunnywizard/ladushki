import { connect } from 'react-redux';
import { push } from 'connected-react-router';

const mapStateToProps = state => ({ router: state.router });

const mapDispatchToProps = dispatch => ({
  navigationTo: url => dispatch(push(url)),
});

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component);
