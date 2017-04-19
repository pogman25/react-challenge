import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as pageActions from '../../actions/actions';
import List from '../../components/PeopleList/PeopleList';

class PeopleList extends Component {

    componentWillMount() {
        if(!this.props.people.people.length) {
            this.props.pageActions.getPeople();
        }
    }

    getSearch(array, filter) {
        if (filter) {
            return array.filter( i => i.name.toLowerCase().includes(filter.toLowerCase()));
        } else {
            return array;
        }
    }

    sortBy(array, by) {
        const sortPeople = [...array];
        if (by === 'old')  sortPeople.sort((a, b) => (a.age - b.age));
        if (by === 'yang') sortPeople.sort((a, b) => (b.age - a.age));
        if (by === 'asc')  sortPeople.sort((a, b) => (b.name < a.name) ? 1 : -1);
        if (by === 'dec')  sortPeople.sort((a, b) => (a.name < b.name) ? 1 : -1);

        return this.getSearch(sortPeople, this.props.search)
    }

    render() {
        const { people, fetching } = this.props.people;
        const sortBy = this.props.sortBy;
        const setId = this.props.pageActions.setId;
        return (
            <div>
                {fetching && <span>Загружаю людей...</span>}
                {!fetching && <List action={setId} single={this.props.single} people={this.sortBy(people, sortBy)}/>}
            </div>
        )
    }
}

function mapStateProps(state) {
    return {
        people: state.people,
        search: state.search,
        sortBy: state.sort.sort,
        single: state.single
    }
}

function mapDispatchProps (dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateProps, mapDispatchProps)(PeopleList);
