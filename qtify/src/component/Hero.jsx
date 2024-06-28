import React from 'react'
import headphone from '../images/headphone.png'
function Hero() {
  return (
    <div className='heroSection'>
       
            <div className='tagline'>
                <p>100 Thousand Songs, ad-free</p>
                <p>Over thousands podcast episodes</p>
            </div>
            <img className='heroImg' src={headphone} alt=''/>
            
       </div>
   
  )
}

export default Hero