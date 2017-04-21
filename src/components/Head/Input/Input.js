import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({search, setId}) => {
    const name = (e) => {
        search(e.target.value);
        setId();
    };

        return (
            <div className="input-search">
                <input type="text" placeholder="Search people by name..." onChange={e => name(e)}/>
            </div>
        )
};

Input.propTypes = {
  search: PropTypes.func.isRequired,
  setId: PropTypes.func.isRequired
};

export default Input;