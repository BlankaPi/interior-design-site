import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { useState } from 'react';

import Logo from "../images/Logo.svg"

import * as RiIcons from "react-icons/ri";
import { links } from "../data"
import "../sass/components/navbar.scss"

const Navbar = () => {

    const [isNavShowing, setNavShowing] = useState(false);

    return (
        <nav>
            <div className='nav__container container'>
                <Link to="/" className='logo' onClick={() => setNavShowing(false)}>
                    <img src={Logo} alt="Company logo"></img>
                </Link>
                <ul className={`nav__links scale-up-center ${isNavShowing ? "shov_nav" : "hide_nav"}`}>
                    {
                        links.map(({ name, path }, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={path} className={({ isActive }) => isActive ? "active" : ""}
                                        onClick={() => setNavShowing(prev => !prev)}>
                                        {name}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className='nav__toggle-btn' onClick={() => setNavShowing(prev => !prev)}>
                    {
                        isNavShowing ? <RiIcons.RiCloseLine /> : <RiIcons.RiMenuFill />
                    }

                </button>
            </div>
        </nav>
    )
}

export default Navbar