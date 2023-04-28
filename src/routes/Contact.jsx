import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import '../components/Hero.css'
import aboutimg from '../assets/2.jpg'
import Footer from '../components/Footer'
import Form from '../components/Form'

const Contact = () => {
  return (
    <>
    <NavBar/>
     <Hero 
     cNames='hero-mid'
     heroImg={aboutimg}
     title="Contact"
     buttonText="Travel Plan"
     url="/"
     btnClass="hide"
     />
     <Form/>
     <Footer/>
    </>
  )
}

export default Contact
