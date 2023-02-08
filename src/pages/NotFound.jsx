import React from 'react'
import { Link } from "react-router-dom";
import { Header } from '../components/Header'
import HeaderImage from "../images/404.jpg"

import * as RiIcons from "react-icons/ri";

const NotFound = () => {
  return (
    <>
      <Header title="404" image={HeaderImage}>
        Page doesn't exist
      </Header>
      <article className='not-found container'>
        <h1>We are sorry, but the page you requested was not found</h1>
        <Link to="/" className='btn'>Home<RiIcons.RiArrowRightLine /></Link>

      </article>
    </>

  )
}

export default NotFound