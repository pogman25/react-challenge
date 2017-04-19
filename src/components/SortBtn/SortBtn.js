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
                this.props.sortByPicture('');
                return this.props.sort('', false);
        }
    }

    sortByPic (e) {
        this.props.sortByPicture(e.target.alt);
    }

    render() {
        const picks = ['cat', 'dog', 'fox', 'koala', 'lion', 'owl', 'penguin', 'pig', 'raccoon', 'sheep'];
        return (
            <div className="btnSort">
                <button className="sortByName" onClick={this.sort.bind(this)}>Sort by Name</button>
                <button className="sortByAge" onClick={this.sort.bind(this)}>Sort by age</button>
                <button className="btnReset" onClick={this.sort.bind(this)}>Reset</button>
                <div className="sortByPic">
                    {picks.map(i => (
                        <img onClick={this.sortByPic.bind(this)} src={require(`../../images/${i}.svg`)} alt={i} />
                    ))}
                </div>
            </div>
        )
    }
}

SortBtn.propTypes = {
    sort: PropTypes.func.isRequired,
    setId: PropTypes.func.isRequired,
    sortBy: PropTypes.bool.isRequired,
    sortByPicture: PropTypes.func.isRequired
};

export default SortBtn;