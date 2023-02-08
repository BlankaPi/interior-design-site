import React from 'react';
import { Link } from "react-router-dom";
import "../sass/main.scss"

import * as RiIcons from "react-icons/ri";

const MainHeader = () => {
    return (
        <header className='main__header'>
            <div className='main__header-container'>
                <div>
                    <h1>Let Your Home<br></br> Be Unique</h1>
                    <p>There are many variations of the passages of lorem Ipsum fromavailable,variations of the passages.</p>
                    <Link to="/services" className='btn'>Get Started<RiIcons.RiArrowRightLine/></Link>
                </div>
            </div>
        </header>
    )
};

const Header = ({title, image, children}) => {
    return (
        <header className='header'>
            <div className='header__container'>
                <div className='header__container-bg'>
                    <img src={image} alt="Header background" />
                </div>
                <div className='header__content'>
                    <h2>{title}</h2>
                    <p>{children}</p>
                </div>
            </div>
        </header>
    )
}

export { MainHeader, Header } ;