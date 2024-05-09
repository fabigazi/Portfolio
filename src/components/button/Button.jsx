import * as React from "react";
import './button.css';


const Button = ({ label, newClick, variant = "primary" }) => (
  <div className={`custom-btns ${variant}`}>
    <button onClick={newClick} >{label}</button>
    {/* <div className="button-label">{label}</div> */}
  </div>
);

export default Button