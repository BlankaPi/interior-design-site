import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../images/Logo.svg"
import * as RiIcons from "react-icons/ri";
import "../sass/main.scss"

const Footer = () => {
    return (
        <footer className='footer container'>
            <div className='footer__container'>
                <article>
                    <Link to="/" className='logo'>
                        <img src={Logo} alt="footer logo" />
                    </Link>
                    <p>It is a long established fact that a reader will be distracted lookings.</p>
                    <div className='footer__socials'>
                        <a href='https://linkedin.com/' target="_blank" rel="noreferrer noopener">
                            <RiIcons.RiLinkedinBoxFill />
                        </a>
                        <a href='https://facebook.com/' target="_blank" rel="noreferrer noopener">
                            <RiIcons.RiFacebookCircleFill />
                        </a>
                        <a href='https://twitter.com/' target="_blank" rel="noreferrer noopener">
                            <RiIcons.RiTwitterFill />
                        </a>
                        <a href='https://instagram.com/' target="_blank" rel="noreferrer noopener">
                            <RiIcons.RiInstagramFill />
                        </a>
                    </div>
                </article>
                <article>
                    <h3>Pages</h3>
                    <Link to="/about" >About Us</Link>
                    <Link to="/portfolio" >Our Projects</Link>
                    <Link to="/team" >Our Team</Link>
                    <Link to="/contact" >Contact Us</Link>
                    <Link to="/services" >Services</Link>
                </article>
                <article>
                    <h3>Services</h3>
                    <Link to="/s" >Kitchen</Link>
                    <Link to="/s" >Living Area</Link>
                    <Link to="/s" >Bathroom</Link>
                    <Link to="/s" >Dining Hall</Link>
                    <Link to="/s" >Bedroom</Link>
                </article>
                <article>
                    <h3>Contact</h3>
                    <Link to="/s" >55 East Birchwood Ave. <br/> Brooklyn, New York 11201</Link>
                    <Link to="/s" >contact@interno.com</Link>
                    <Link to="/s" >(123) 456 - 7890</Link>
                </article>
            </div>
            <div className='footer__copyright'>
                Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow
            </div>
        </footer>
    )
}

export default Footer