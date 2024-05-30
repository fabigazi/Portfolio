import React, { useState } from "react";
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const NavBarButton = ({ label, link }) => {
    return (
        <div className="nav-item">
            <a href={link} className="nav-link">
                {label}
            </a>
        </div>
    );
}

const NavMenuItem = ({ label, link }) => {
    return (
        <p>
            <a href={link}>{label}</a>
        </p>
    );
}

const NavBar = ({ navItems }) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div>
            <nav className="navbar-links">
                {navItems.map((item) => (
                    <NavBarButton key={item.label} {...item} />
                ))}
            </nav>
            <div className='navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='navbar-menu_container scale-up-center'>
                        <div className='navbar-menu_container-links'>
                            {navItems.map((item) => (
                                <NavMenuItem key={item.label} {...item} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default NavBar