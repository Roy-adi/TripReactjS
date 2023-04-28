import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import '../components/Hero.css'
import aboutimg from '../assets/12.jpg'
import Footer from '../components/Footer'
import Trip from '../components/Trip'

const Service = () => {
  return (
    <>
    <NavBar/>
     <Hero 
     cNames='hero-mid'
     heroImg={aboutimg}
     title="Service"
     buttonText="Travel Plan"
     url="/"
     btnClass="hide"
     />
     <Trip/>
     <Footer/>
    </>
  )
}

export default Service