import React from 'react'
import './NavBar.css'
import { MenuItem } from './MenuItem'
import { Link } from 'react-router-dom'
import logo from '../assets/tw.png'


const NavBar = () => {
  return (
    <nav className='navbarItem' >
      <div className='yatra'>
        <img src={logo} alt='logo' />
        </div>
        <ul className='nav-menu'>
          {MenuItem.map((item,index)=>{
            return(
              <li key={index}>
              <Link className={item.cName} to={item.url}>
             
              <a className={item.icon}>{item.title}</a>
               </Link>
               </li>
            )
          })}
         <button className='bttn'>Sign Up</button>
        </ul>
    </nav>
  )
}

export default NavBar