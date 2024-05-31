import * as React from "react";
import './button.css';


const Button = ({ label, newClick, variant = "primary", type }) => (
  <div className={`custom-btns ${variant}`}>
    <button className={`${variant}`} onClick={newClick} type={type} >{label}</button>
    {/* <div className="button-label">{label}</div> */}
  </div>
);

export default Button