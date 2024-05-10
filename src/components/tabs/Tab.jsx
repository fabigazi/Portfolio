// Filename - Tab.js

import Button from '../button/Button';
import './tab.css';

import React from "react";

const Tab = ({ label, onClick, isActive }) => (
    // <div
    //     className={`tab ${isActive ? "active" : ""}`}
    //     onClick={onClick}
    // >
    //     {label}
    // </div>
    <div className='tab-container'>
        <Button label={label} newClick={onClick} variant={isActive ? "active" : ""} />
    </div>
);

export default Tab;