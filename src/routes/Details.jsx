import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import '../components/Hero.css'
import aboutimg from '../assets/night.jpg'
import Footer from '../components/Footer'
import Description from '../components/Description'

const Details = () => {
  return (
    <>
    <NavBar/>
     <Hero 
     cNames='hero-mid'
     heroImg={aboutimg}
     title="About"
     buttonText="Travel Plan"
     url="/"
     btnClass="hide"
     />
     <Description/>
     <Footer/>
    </>
  )
}

export default Details
