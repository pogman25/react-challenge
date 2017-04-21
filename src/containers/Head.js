import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Head from '../components/Head';
import * as pageActions from '../actions/actions'


function mapStateProps(state) {
    return {
        sortBy: state.sort.by,
        sorted: state.sort.sort
    }
}

function mapDispatchProps (dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateProps, mapDispatchProps)(Head);