import React from 'react';
import './scrollbar.css';

function Slider({ value, onChange }) {
  return (
    <input 
      type="range"
      min="0"
      max="100"
      value={value}
      onChange={onChange}
      className="custom-slider"
    />
  );
}

export default Slider;