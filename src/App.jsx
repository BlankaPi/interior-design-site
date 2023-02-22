import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, About, Services, Pricing, Portfolio, Team, Contact, NotFound } from "./pages";

import Navbar from "./components/Navbar";
import Footer from './components/Footer';

import ScrollToTop from './components/ScrollToTop';


const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='Team' element={<Team />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </ScrollToTop>

    </BrowserRouter>
  )
}

export default App;