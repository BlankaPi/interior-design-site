import React from 'react';
import { Header } from '../components/Header';
import HeaderImage from "../images/Banner-4.png";
import { gallery } from '../data';
import { ProjectCard } from '../UI/Card';
import SectionTitle from "../components/SectionTitle";

const Portfolio = () => {
  return (
    <>
      <Header title="Our Projects" image={HeaderImage}>
        Home / Portfolio
      </Header>
      <article className='container gallery'>
        <SectionTitle
          header="Follow Our Projects"
          text="It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points."
        />
        <div className='gallery-large__container'>
          {
            gallery.map(({ ...props }, index) => {
              return (index < 4) &&
                <ProjectCard
                  image={props.image}
                  title={props.title}
                  description={props.description}
                  path={props.path}
                  text={props.text}
                  key={props.index}
                />
            })
          }

        </div>
        <div className='gallery-large__container'>
          {
            gallery.map(({ ...props }, index) => {
              return (index >= 4 && index < 8) &&
                <ProjectCard
                  image={props.image}
                  title={props.title}
                  description={props.description}
                  path={props.path}
                  text={props.text}
                  key={props.index}
                />
            })
          }
        </div>
        <div className='gallery-large__container'>
          {
            gallery.map(({ ...props }, index) => {
              return (index >= 8) &&
                <ProjectCard
                  image={props.image}
                  title={props.title}
                  description={props.description}
                  path={props.path}
                  text={props.text}
                  key={props.index}
                />
            })
          }
        </div>
      </article>
    </>
  )
}

export default Portfolio