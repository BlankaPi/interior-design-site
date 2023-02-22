import React from 'react';
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";
import "../sass/components/article.scss"

const Article = (props) => {    

    return (
        <article className='blog'>
            <div className='blog-img'>
                <img alt="article" src={props.photo}/>
                <div>
                    <p>{props.detail}</p>
                </div>
            </div>
            <h3>{props.header}</h3>
            <div className='blog-date'>
                <p>1973-12-15</p>
                <Link to="#" className='btn-circle'><RiIcons.RiArrowRightSLine /></Link>
            </div>
        </article>
    )
}

export default Article