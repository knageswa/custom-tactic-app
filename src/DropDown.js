import React, { Component } from 'react';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';






class DropDown extends Component {
    
    

    render() {
        const {data} = this.props;

        
        return (
            <Dropdown options={data} onChange={this._onSelect} value={data[0]} placeholder="Select an option" />
        );
    }
}

export default DropDown;