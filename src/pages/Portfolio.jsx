import React from 'react'
import { Header } from '../components/Header'
import HeaderImage from "../images/Banner-4.png"
import { gallery } from '../data';
import { ProjectCard } from '../UI/Card';
import "../sass/main.scss"

const Portfolio = () => {
  return (
    <>
      <Header title="Our Projects" image={HeaderImage}>
        Home / Portfolio
      </Header>
      <article className='container gallery'>
        <h1>Follow Our Projects</h1>
        <p>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
        <div className='gallery-large__container'>
          {
            gallery.map(({ image, title, description, path, text }, index) => {
              return index < 4 ? (
                <ProjectCard
                  image={image} title={title} description={description} path={path} text={text} key={index} />)
                : (null)
            })
          }

        </div>
        <div className='gallery-large__container'>
          {
            gallery.map(({ image, title, description, path, text }, index) => {
              return index >= 4 && index < 8 ? (
                <ProjectCard
                  image={image} title={title} description={description} path={path} text={text} key={index} />)
                : (null)
            })
          }
        </div>
        <div className='gallery-large__container'>
          {
            gallery.map(({ image, title, description, path, text }, index) => {
              return index >= 8 ? (
                <ProjectCard
                  image={image} title={title} description={description} path={path} text={text} key={index} />)
                : (null)
            })
          }
        </div>
      </article>
    </>
  )
}

export default Portfolio