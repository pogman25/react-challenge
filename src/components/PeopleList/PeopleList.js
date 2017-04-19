import React, { Component, PropTypes } from 'react';
import { Single, ListPeople } from './parts';
import './poepleList.scss';

class PeopleList extends Component {
    getId (e) {
        e.preventDefault();
        this.props.action(+e.target.getAttribute('data-id'));
    }

    render() {
        const { people, single } = this.props;
        let length = !!people.length;
        return (
            <div className='content'>
                <div className='human col-sm-4 col-md-3 col-lg-2'>
                    {length && <Single people={people} id={single}/>}
                    {!length && <div>Noting</div>}
                </div>
                <div className='list col-sm-8 col-md-9 col-lg-10'>
                    {length && <ListPeople getId={this.getId.bind(this)} people={people}/>}
                    {!length && <div>Noting</div>}
                </div>
            </div>
        )
    }
}

PeopleList.propTypes = {
    people: PropTypes.array.isRequired,
    action: PropTypes.func.isRequired,
    single: PropTypes.string.isRequired
};

export default PeopleList;