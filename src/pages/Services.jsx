import React from 'react'
import { Header } from '../components/Header'
import HeaderImage from "../images/Banner-2.png"
import { Card } from '../UI/Card';
import { services } from '../data';
import SectionTitle from "../components/SectionTitle";
import "../sass/pages/services.scss";
import { workDetails } from '../data';
import WorkDetail from '../components/WorkDetail';

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
      <section className='container offwhite'>
        <SectionTitle
          header="How we work"
          text="It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points."
        />
        <div className='service-details'>
          {
            workDetails.map(({...element}) => {
              return (
                <WorkDetail {...element} key={element.id}/>
              )
            })
          }
        </div>
      </section>
    </>

  )
}

export default Services