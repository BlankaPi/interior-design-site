import React from 'react';
import { gallery } from '../data';
import { ProjectCard } from '../UI/Card';
import SectionTitle from './SectionTitle';
import "../sass/components/gallery.scss"

const GallerySm = () => {
    return (
        <article className='container gallery small'>
            <SectionTitle
                header="Follow Our Projects"
                text="It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points."
            />
            <div className='gallery-small__container'>
                {
                    gallery.map(({ image, title, description, path, text }, index) => {
                        return index < 4 ? (
                            <ProjectCard
                                image={image} title={title} description={description} path={path} text={text} key={index} />)
                            : (null)
                    })
                }
            </div>
        </article>
    )
}

export default GallerySm