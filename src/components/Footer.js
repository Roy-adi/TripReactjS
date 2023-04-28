import './Footer.css'
import React from 'react'
import logo from '../assets/twd.png'

const Footer = () => {
  return (
    <div className='footer' >
        <div className='top'>
        <div className='yatra'>
        <img src={logo} alt='logo' />
        </div>
            <div>
                <a href='/'>
                <i className="fa-brands fa-facebook fa-2xl" style={{color:"#1e57b8"}}></i>
                </a>
                <a href='/'>
                <i class="fa-brands fa-instagram fa-2xl" style={{color: "#d23737"}}></i>
                </a>
                <a href='/'>
                <i class="fa-brands fa-youtube fa-2xl" style={{color: "#ef0b0b"}}></i>
                </a>
            </div>
        </div>
        <div className='bottom'>
            <div>
                <h4>
                  India Tour package
                </h4>
                <a href='./'> Sikkim </a>
                <a href='./'> North India </a>
                <a href='./'> South India </a>
                <a href='./'> North East India </a>
            </div>
            <div>
                <h4>
                  World Tour
                </h4>
                <a href='./'> Masai Mara </a>
                <a href='./'> Egypt </a>
                <a href='./'> Alaska </a>
                <a href='./'> Europe </a>
            </div>
            <div>
                <h4>
                  Our Office
                </h4>
                <a href='./'> Kolkata </a>
                <a href='./'> Delhi </a>
                <a href='./'> Mumbai </a>
                <a href='./'> Chennai </a>
            </div>
            <div>
                <h4>
                Our Service
                </h4>
                <a href='./'>Flight booking </a>
                <a href='./'> Hotel Booking </a>
                <a href='./'> Bus Booking </a>
                <a href='./'> Tour Arrange </a>
            </div>
        </div>
    </div>
  )
}

export default Footer