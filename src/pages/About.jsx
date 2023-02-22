import React from 'react'
import "../sass/pages/about.scss"

import { Header } from '../components/Header'
import HeaderImage from "../images/Banner-1.png"

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Home / About Us
      </Header>
      <section className='container'>
        <div className='quote'>
          <div className='frame'>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className='quote__container'>
            <h1>“</h1>
            <h2>I like an interior that defies labeling. I don't really want someone to walk into a room and know that I did it</h2>
            <p>Bunny Williams</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About