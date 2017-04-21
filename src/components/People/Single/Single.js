import React from 'react';
import PropTypes from 'prop-types';
import './single.scss';

export const Single = ({people, id}) => (
            <div className="single">
                <div className="singlePic"><img className="singleAnimal" src={require(`../../../images/${people[id].image}.svg`)} alt={people[id].image} /></div>
                <div className="singleName"><h2>{people[id].name}</h2></div>
                <hr/>
                <div className="singleAge">
                    <div className="col-6"><span>Age:</span></div>
                    <div className="col-6"><span>{people[id].age}</span></div>
                </div>
                <hr/>
                <div className="singleAnimal">
                    <div className="col-6"><span>Favorite Animal:</span></div>
                    <div className="col-6"><span>{people[id].image}</span></div>
                </div>
                <hr/>
                <div className="singlePhone">
                    <div className="col-6"><span>Phone:</span></div>
                    <div className="col-6"><span>{`8 ${people[id].phone}`}</span></div>
                </div>
                <div className="singlePhrase"><strong>Favorite phrase: </strong><span>{people[id].phrase}</span></div>
            </div>
        );

Single.propTypes = {
    people: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired
};
