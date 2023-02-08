import React from 'react'
import { Header } from '../components/Header'
import HeaderImage from "../images/Banner-2.png"
import { Card } from '../UI/Card';
import { services } from '../data';

const Services = () => {
  return (
    <>
      <Header title="Services" image={HeaderImage}>
        Home / Services
      </Header>
      <section className='container'>
        <div className='grid'>
          {
            services.map(({ id, icon, title, text, path }) => {
              return (
                <Card title={title} text={text} key={id} path={path} />
              )
            })
          }
        </div>
      </section>
    </>

  )
}

export default Services