import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CategoriesActions from '../actions/categories';

const mapStateToProps = state => ({
    categories: state.categories
});
const mapDispatchToProps = dispatch => ({...bindActionCreators(CategoriesActions, dispatch)});

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component);
