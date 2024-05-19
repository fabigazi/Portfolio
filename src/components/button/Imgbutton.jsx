import * as React from "react";
import './imgbutton.css';


const Imgbutton = ({ image, newClick, variant = "primary" }) => (
  <div className={`custom-img-btns ${variant}`}>
    <button className={`${variant}`} onClick={newClick}  ><img className="image-circle" src={image}  /></button>
  </div>
);

export default Imgbutton