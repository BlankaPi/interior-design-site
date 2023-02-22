import React from "react";
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";
import "../sass/ui/_index.scss";


const Card = ({ title, text, path }) => {
    return (
        <article className="card">
            <h3>{title}</h3>
            <p>{text}</p>
            <Link to={path} className='btn-sm'>Learn more <RiIcons.RiArrowRightLine /></Link>
        </article>
    )
}

const OpinionCard = (props) => {
    return (
        <article className="opinion-card">
            <div>
                <img src={props.avatar} alt="avatar" className='opinion-card-img'></img>
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.city}, {props.country}</p>
                </div>
            </div>
            <p>{props.comment}</p>
        </article>
    )
}

const ProjectCard = ({ image, title, description, path, text }) => {
    return (
        <article className="project-card">
            <div className="project-card__img">
                <img src={image} alt="interior"></img>
                <p className="toggle-text">{text}</p>
            </div>
            <div className="project-card__text">
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <Link to={path} className='btn-circle'><RiIcons.RiArrowRightSLine /></Link>
            </div>
        </article>
    )
}

const ContactCard = (props) => {
    return (
        <article className="contact-card">
            <div>
                <div className='btn-circle'><RiIcons.RiAtLine /></div>
                <p>info@yourdomain.com</p>
            </div>
            <div>
                <div className='btn-circle'><RiIcons.RiPhoneLine /></div>
                <p>+1 (378) 400-1234</p>
            </div>
            <div>
                <div className='btn-circle'><RiIcons.RiComputerLine /></div>
                <p>www.yourdomain.com</p>
            </div>
            <div className="media">
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
    )
}

export { Card, OpinionCard, ProjectCard, ContactCard };
