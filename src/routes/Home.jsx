import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import '../components/Hero.css'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'
import homeimg from '../assets/dis.jpg'
import Counts from '../components/Counts'
import Cards from '../components/Cards'

const Home = () => {
  return (
   <>
   <NavBar/>
    <Hero 
    cNames='hero'
    heroImg={homeimg}
    text="Choose Your Favourite Destination"
    buttonText="Travel Plan"
    url="/"
    btnClass="show"

    />
    <Counts/>
    <Destination/>
    <Cards/>
    <Trip/>
    <Footer/>
   </>
  )
}

export default Home