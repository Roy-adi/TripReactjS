import React from 'react'
import './Trip.css'
import TripData from './TripData'


const Trip = () => {
  return (
    <div className='trip'>
        <h1 className='secondaryText'>
            Good To Go
        </h1>
        <p className='orangeText'> 
        Better to see something once than hear about it a thousand times !!
        </p>
        <div className='tripcard'>
            <TripData/>
        </div>
    </div>
  )
}

export default Trip