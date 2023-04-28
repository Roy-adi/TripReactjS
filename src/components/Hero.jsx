import React from 'react'
import './Hero.css'
import { motion } from 'framer-motion'
const Hero = (props) => {
  return (
    <div className={props.cNames}>
        <img  src={props.heroImg} alt='pic'/>
        <div className='hero-text'>
        <motion.h1 
        initial={{y:"2rem",opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:6,type:"spring"}}
        >{props.title}</motion.h1>
        <motion.p
        initial={{y:"2rem",opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:6,type:"spring"}}
        >
           {props.text}
        </motion.p>
        <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
      </div>
    </div>
    
    )
}

export default Hero