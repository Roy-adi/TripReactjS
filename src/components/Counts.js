import React from 'react'
import Countup from 'react-countup'

import './Counts.css'

const Counts = () => {
  return (
    <div className='flexCenter stats'>
        <div className='flexColStart stat'>
            <span>
                <Countup  end={40} duration={6}/>    
            <span>+</span>
            </span>
            <span>Countries</span>

        </div>
        <div className='flexColStart stat'>
            <span className='inc'>
                <Countup start={100} end={520} duration={4}/>    
            <span>+</span>
            </span>
            <span>Travel Destination</span>
            

        </div>
        <div className='flexColStart stat'>
            <span>
                <Countup start={100} end={1400} duration={2}/>    
            <span>+</span>
            </span>
            <span>Happy Customers</span>
        </div>
    </div>
  )
}

export default Counts