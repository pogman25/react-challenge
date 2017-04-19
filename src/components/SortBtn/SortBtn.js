import React, { Component, PropTypes } from 'react';
import './SortBtn.scss';

class SortBtn extends Component {

    sort(e) {
        let by = this.props.sortBy;
        this.props.setId();
        switch (e.target.className) {
            case 'sortByName':
                return by ? this.props.sort('asc', by): this.props.sort('dec', by);
            case 'sortByAge':
                return by ? this.props.sort('yang', by): this.props.sort('old', by);
            default:
                return this.props.sort('', false);
        }
    }

    render() {
        return (
            <div className="btnSort">
                <button className="sortByName" onClick={this.sort.bind(this)}>Sort by Name</button>
                <button className="sortByAge" onClick={this.sort.bind(this)}>Sort by age</button>
                <button className="btnReset" onClick={this.sort.bind(this)}>Reset</button>
            </div>
        )
    }
}

SortBtn.propTypes = {
    sort: PropTypes.func.isRequired
};

export default SortBtn;