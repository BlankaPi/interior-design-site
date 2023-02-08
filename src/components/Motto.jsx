import React from 'react'
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";
import motto from "../images/Motto.jpg";
import call from "../images/Call Icon.png";
import "../sass/main.scss";

const Motto = () => {
    return (
        <section className='container'>
            <div className='motto__container'>
                <div className='motto__container-text'>
                    <h1>We Create The Art Of Stylish Living Stylishly</h1>
                    <p>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.</p>
                    <div className='call'>
                        <img src={call} alt='kitchen'></img>
                        <div>
                            <h3>012345678</h3>
                            <p>Call Us Anytime</p>
                        </div>
                    </div>
                    <div>
                        <Link to="/#" className='btn'>Get Free Estimate <RiIcons.RiArrowRightLine /></Link>
                    </div>
                </div>
                <div className='motto__container-img'>
                    <img src={motto} alt='kitchen'></img>
                </div>
            </div>
        </section>
    )
}

export default Motto