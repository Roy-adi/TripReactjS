import './Form.css'
import React from 'react'

const Form = () => {
  return (
    <div className='form-container'>
        <h1>Send a message to us</h1>
        <form>
            <input placeholder='Name'/>
            <input placeholder='Email'/>
            <input placeholder='Phone'/>
            <textarea placeholder='Message' rows={4}></textarea>
            <div className='btn'>
            <button>Send</button>
            </div>
        </form>
    </div>
  )
}

export default Form