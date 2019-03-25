import React from 'react';
import PropTypes from 'prop-types';




const Tab =(props)=> {

  const clickHandler = () => {
    const { label, onClick } = props;
    onClick(label);
  }



    let className = 'tab-list-item';
 
    if (props.activeTab === props.label) {
      className += ' tab-list-active';
    }

    return (
      <li 
        className={className}
        onClick={clickHandler}
      >
        {props.label}
      </li>
    );
  
}

 Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;