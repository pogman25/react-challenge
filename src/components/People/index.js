import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { UlList } from './UlList/UlList';
import {Single} from './Single/Single';

import './index.scss';


class PeopleList extends Component {

    componentWillMount() {
        if(!this.props.people.people.length) {
            this.props.pageActions.getPeople();
        }
    }

    sortByPicture(array, picture) {
        if (picture) {
            return array.filter( i => i.image === picture);
        } else {
            return array;
        }
    }

    getSearch(array, filter) {
        let sortByPicture = this.sortByPicture(array, this.props.sortByPic);
        if (filter) {
            return sortByPicture.filter( i => i.name.toLowerCase().includes(filter.toLowerCase()));
        } else {
            return sortByPicture;
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
        const single = this.props.single;

        let length = !!this.sortBy(people, sortBy).length;

        return (
            <div className='content'>
                <div className='human col-sm-4 col-md-3 col-lg-2'>
                    {length && <Single people={this.sortBy(people, sortBy)} id={single}/>}
                    {!length && <div>Nobody here</div>}
                </div>
                <div className='list col-sm-8 col-md-9 col-lg-10'>
                    {fetching && <span>Загружаю людей...</span>}
                    {!fetching && length && <UlList action={setId} people={this.sortBy(people, sortBy)}/>}
                </div>
            </div>
        )
    }
}

PeopleList.PropTypes = {
    people: PropTypes.array.isRequired,
    search: PropTypes.string.isRequired,
    sortBy: PropTypes.bool.isRequired,
    single: PropTypes.number.isRequired,
    sortByPic: PropTypes.string.isRequired
};

export default PeopleList;