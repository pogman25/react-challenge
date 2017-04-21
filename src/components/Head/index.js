import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Input from './Input/Input';
import SortBtn from './SortBtn/SortBtn'

const App = ({sortBy, pageActions}) => {

        const { search, sort, setId, sortByPicture } = pageActions;
        return (
            <div>
                <Header/>
                <Input setId={setId} search={search}/>
                <SortBtn setId={setId} sortBy={sortBy} sort={sort} sortByPicture={sortByPicture}/>
            </div>
        )
};

App.PropTypes = {
    sortBy: PropTypes.bool.isRequired,
    sorted:PropTypes.string.isRequired
};

export default App;