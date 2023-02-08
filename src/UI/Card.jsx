import React from "react";
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";
import "../sass/main.scss"


const Card = ({ title, text, path }) => {
    return (
        <article className="card">
            <h3>{title}</h3>
            <p>{text}</p>
            <Link to={path} className='btn-sm'>Learn more <RiIcons.RiArrowRightLine/></Link>
        </article>
    )
}

const OpinionCard = ({ name, adress, quote, avatar, id }) => {
    return (
        <article className="opinion-card">
            <div>
                <img src={avatar} alt="avatar" className='opinion-card-img'></img>
                <div>
                    <h3>{name}</h3>
                    <p>{adress}</p>
                </div>
            </div>
            <p>{quote}</p>
        </article>
    )
}

const ProjectCard = ({image, title, description, path, text}) => {
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
                <Link to={path} className='btn-circle'><RiIcons.RiArrowRightSLine/></Link>
            </div>
        </article>
    )
}

export { Card, OpinionCard, ProjectCard } ;
