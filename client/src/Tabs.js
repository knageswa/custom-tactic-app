import React from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

const Tabs =(props) => {

 const  onClickTabItem = (tab) => {
    props.onClick({ activeTab: tab });
  }

    return (
      <div className="tabs">
        <ol className="tab-list">
          {props.children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={props.activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {props.children.map((child) => {
            if (child.props.label !== props.activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  
}

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
}

export default Tabs;