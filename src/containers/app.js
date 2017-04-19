import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Header, Input, SortBtn } from '../components';
import PeopleList from './app/peopleList';
import * as pageActions from '../actions/actions'

class App extends Component {

    render() {
        const { sortBy } = this.props;
        const { search, sort, setId } = this.props.pageActions;
        return (
            <div>
                <Header/>
                <Input setId={setId} search={search}/>
                <SortBtn setId={setId} sortBy={sortBy} sort={sort} />
                <PeopleList/>
            </div>
        )
    }
}

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

export default connect(mapStateProps, mapDispatchProps)(App);