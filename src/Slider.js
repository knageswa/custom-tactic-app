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



const  Slider = (props)=> {
  const handleChange = (e) => {
    props.onChange(props.dkey, Number(e.target.value));
  }

    const slideStyle = genSlideStyle(props.data);
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
        <span className="circle" style={slideStyle.point}>{props.data}</span>
        <input
          className="range-slide"
          name="range"
          type="range"
          min="0"
          max="10"
          value={props.data}
          step="1"
          onChange={handleChange}
        />
         
      </div>
      
      
    );
  
}
export default Slider;