import React, { Component, PropTypes } from 'react';
import './ulList.scss';

export class ListPeople extends Component {
    render() {
        let count = 0;
        const { people, getId } = this.props;
        return (
            <ul>
                <li>
                    <div className='firstList'>
                        <span className='col-2'>Image</span>
                        <span className='col-5'>Name</span>
                        <span className='col-1'>Age</span>
                        <span className='col-4'>Phone</span>
                    </div>
                </li>
                {people.map( ({id, name, image, age, phone}) => (
                    <li data-id={count++} onClick={e => getId(e)} key={id}>
                        <div className='humanList'>
                            <div className='col-2'><img className='animal' src={require(`../../../images/${image}.svg`)} alt={image}/></div>
                            <div className='col-5'>{name}</div>
                            <div className='col-1'>{age}</div>
                            <div className='col-4'>{`8 ${phone}`}</div>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }
}

ListPeople.propTypes = {
    people: PropTypes.array.isRequired,
    getId: PropTypes.func.isRequired
};