import React from 'react';
import PropTypes from 'prop-types';
import './SortBtn.scss';

const SortBtn = ({sort, setId, sortBy, sortByPicture}) => {

    const picks = ['cat', 'dog', 'fox', 'koala', 'lion', 'owl', 'penguin', 'pig', 'raccoon', 'sheep'];

    const sorting = (e) => {
        let by = sortBy;
        setId();
        switch (e.target.className) {
            case 'sortByName':
                return by ? sort('asc', by): sort('dec', by);
            case 'sortByAge':
                return by ? sort('yang', by): sort('old', by);
            default:
                sortByPicture('');
                return sort('', false);
        }
    };

    const sortByPic = (e) => {
        setId();
        let { target } = e;
        target.classList.add('rotate');
        sortByPicture(target.alt);
        setTimeout(() => {
            target.classList.remove('rotate');
        }, 1000);
    };

        return (
            <div className="btnSort">
                <button className="sortByName" onClick={e => sorting(e)}>Sort by Name</button>
                <button className="sortByAge" onClick={e => sorting(e)}>Sort by age</button>
                <button className="btnReset" onClick={e => sorting(e)}>Reset</button>
                <div className="sortByPic">
                    {picks.map((i, num) => (
                        <img key={num} onClick={e => sortByPic(e)} src={require(`../../../images/${i}.svg`)} alt={i} />
                    ))}
                </div>
            </div>
        )
};

SortBtn.propTypes = {
    sort: PropTypes.func.isRequired,
    setId: PropTypes.func.isRequired,
    sortBy: PropTypes.bool.isRequired,
    sortByPicture: PropTypes.func.isRequired
};

export default SortBtn;