//import './Slider.css';

import React from 'react';



class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.updateRange = this.updateRange.bind(this);
  }
  
  updateRange(e) {
    console.log(e.target.value);
    this.props.updateRange=e.target.value;
    
  }
  
  render() {
    
    const { range } = this.props;
    console.log(range);
    return (
      <div>
        <input id="range" type="range"
          value={range}
          min="0"
          max="10"
          step="1"
          onChange={(e) => {this.updateRange(e)}}
        />
        <span id="output">{2}</span>
      </div>
    )
  }
}

export default Slider;