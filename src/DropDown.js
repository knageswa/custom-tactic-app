import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const DropDown =(props)=> {
    
    const {values,selected} = props.data;

    const handleChange = (e) => {
        console.log(e.value);
        const index = values.indexOf(e.value);
        console.log(index);
        let newObj = {};
        newObj.selected = index;
        newObj.values = values;
        props.onChange(props.dkey, newObj);
      }

        return (
            <Dropdown options={values} onChange={handleChange} value={values[selected]} placeholder="Select an option" />
        );
    
}

export default DropDown;