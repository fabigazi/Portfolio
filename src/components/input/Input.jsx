import * as React from "react";
import './input.css'

function Input({ label, type }) {
    return (
      <div className="input-field">
        <label htmlFor={`${type}-input`} className="visually-hidden">
          {label}
        </label>
        <input
          type={type}
          id={`${type}-input`}
          placeholder={label}
          aria-label={label}
          required
        />
      </div>
    );
  }

  export default Input