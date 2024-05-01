import * as React from "react";
import './navbar.css';

const NavBar = ({ label, link }) => (
    <div className="nav-item">
        <a href={link} className="nav-link">
            {label}
        </a>
    </div>
);

export default NavBar