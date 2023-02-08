import React from 'react'

import { Card } from '../UI/Card';
import { stages } from '../data';

import { MainHeader } from '../components/Header';
import Motto from '../components/Motto';
import Testimonials from '../components/Testimonials';
import GallerySm from '../components/GallerySm';
import "../sass/main.scss"


const Home = () => {
  return (
    <>
      <MainHeader />
      <section className='container'>
        <div className='grid'>
          {
            stages.map(({ id, icon, title, text, path }) => {
              return (
                <Card title={title} text={text} key={id} path={path} />
              )
            })
          }
        </div>
      </section>
      <Motto />
      <Testimonials />
      <GallerySm />
    </>

  )
}

export default Home 