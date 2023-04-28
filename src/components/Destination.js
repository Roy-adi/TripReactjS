import React from 'react'
import './Destination.css'
const Destination = () => {
  return (
    <div className='destination' >
        <h1 className='secondaryText'> Popular Destination </h1>
        <p className='orangeText'> Tour's Gives You The Opportunity to Live Life</p>
        <div className='first-des' >
            <div className='des-text'> 
            <h2 className='primaryText '>
                Masai Mara
            </h2>
            <p>
            Situated in the southwest of Kenya, covering an area of 1,510 square km (583 square miles), the Masai Mara National Reserve is a land of breathtaking vistas, abundant wildlife and endless plains.
The quintessential Masai Mara safari delivers many attractions, as the reserve is home to an excellent year-round concentration of game, including the more than two million wildebeest, zebras and other antelopes that make up the famous Great Migration. &Beyond owns 2 lodges in the Masai Mara; Kichwa Tembo Tented Camp and Bateleur Camp.
The reserve is a photographer’s and naturalist’s paradise, with abundant elephant, buffalo, giraffe, lion and cheetah alongside the migratory wildebeest and zebra. Leopards are frequently encountered, endangered black rhino hide in the dense thickets and large rafts of hippo and enormous crocodiles are found in the Mara River. The park is also home to over 450 bird species.
            </p>
            </div>
            <div className='image'>
                <img src='https://images.unsplash.com/photo-1569691106162-cfdf73228d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hc2FpJTIwbWFyYXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60' alt='img'/>
                <img src='https://images.unsplash.com/photo-1519659528534-7fd733a832a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFzYWklMjBtYXJhfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='img'/>
            </div>
        </div>
        <div className='first-des-rev' >
            <div className='des-text'> 
            <h2 className='primaryText '>
               Astonished Alaska
            </h2>
            <p>
            The state of Alaska is a land of untouched nature, diverse wildlife, rich culture, and thrilling adventure; America’s “Last Frontier”. Alaska is known for its wide-open spaces, abundant outdoor experiences, and Alaskan Native culture.
Alaska is also one of the best places in the world in which to view the Northern Lights. From the mountains to the sea fjords, and Alaska’s vast interior terrain, the 49th state is a photographer’s dream.
Capture scenes from Denali National Park, walk on a glacier, explore historic Gold Rush towns, and venture through the wild terrain in a kayak, by hiking, or a scenic flight.
Wherever you choose to visit in Alaska, you’re sure to add something to your experiences of a lifetime.
            </p>
            </div>
            <div className='image'>
                <img src='https://images.unsplash.com/photo-1577456020912-85d0604ad403?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF1cm9yYXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60' alt='img'/>
                <img src='https://images.unsplash.com/photo-1515885267349-1fcef6e00fd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFsYXNrYXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60' alt='img'/>
            </div>
        </div>
    </div>
  )
}

export default Destination