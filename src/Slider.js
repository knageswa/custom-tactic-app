import './Slider.css';

import React from 'react';



const genSlideStyle = (value) => {
  
  return {
    point: {
      left: `calc(${value * 10}% - ${ 3 * value}px)`,
    },
    range: {
      width: `${value * 10}%`,
    },
  };
};

class Slider extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: 5,
    }
  }
  
  handleChange = (e) => {
    this.setState({ value: e.target.value });
    console.log(e.target.value);
  }
  
  render () {
    const slideStyle = genSlideStyle(this.state.value);
    return (
      <div className="range">
        <span className="bullet" />
        <span className="bullet-1" />
        <span className="bullet-2" />
        <span className="bullet-3" />
        <span className="bullet-4" />
        <span className="bullet-5" />
        <span className="bullet-6" />
        <span className="bullet-7" />
        <span className="bullet-8" />
        <span className="bullet-9" />
        <span className="range-value" style={slideStyle.range} />
        <span className="circle" style={slideStyle.point}>{this.state.value}</span>
        <input
          className="range-slide"
          name="range"
          type="range"
          min="0"
          max="10"
          value={this.state.value}
          step="1"
          onChange={this.handleChange}
        />
         
      </div>
      
      
    );
  }
}
export default Slider;