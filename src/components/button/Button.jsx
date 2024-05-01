import * as React from "react";
import './button.css';


const Button = ({ label, variant = "primary" }) => (
    <div className={`button ${variant}`}>
      <div className="button-label">{label}</div>
    </div>
  );

export default Button