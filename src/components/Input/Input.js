import React, { PropTypes, Component } from 'react';
import './Input.scss';

class Input extends Component {
    name (e) {
        this.props.search(e.target.value);
        this.props.setId();
    }

    render() {
        return (
            <div className="input-search"><input type="text" placeholder="Search people by name..." onChange={this.name.bind(this)}/></div>
        )
    }
}

Input.propTypes = {
  search: PropTypes.func.isRequired
};

export default Input;