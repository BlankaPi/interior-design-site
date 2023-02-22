import React from 'react';
import { Header } from '../components/Header';
import HeaderImage from "../images/Banner-6.png";
import SectionTitle from "../components/SectionTitle";
import Form from '../components/Form';
import { ContactCard } from '../UI/Card';
import "../sass/pages/contact.scss"

const Contact = () => {
  return (
    <>
      <Header title="Contact us" image={HeaderImage}>
        Home / Contact
      </Header>
      
      <article className='container'>
        <SectionTitle
          header="We love meeting new people and helping them."
          text="It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points."
        />
        <div className='contact-container'>
          <ContactCard />
          <Form />
        </div>
      </article>
    </>
  )
}

export default Contact