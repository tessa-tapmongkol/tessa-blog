import React from 'react';
import { Link } from 'react-router-dom';
import { navbarItems } from '../../constants/categories';
import "./Navbar.css"

const Navbar = (props) => {
    return (
        <div id="navbar">
            <Link exact to="/">
                <h1 id="logo">tess</h1>
            </Link>
            <div>
                {navbarItems.map((navbarItem) => {
                    return (
                        <Link exact to={`/${navbarItem}`}>
                            <h3 className={`navbar-item ${navbarItem === props.type ? "underline" : ""}`}>{navbarItem}</h3>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Navbar;