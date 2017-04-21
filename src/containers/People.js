import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PeopleList from '../components/People'

import * as pageActions from '../actions/actions';


function mapStateProps(state) {
    return {
        people: state.people,
        search: state.search,
        sortBy: state.sort.sort,
        single: state.single,
        sortByPic: state.sortByPicture
    }
}

function mapDispatchProps (dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateProps, mapDispatchProps)(PeopleList);
