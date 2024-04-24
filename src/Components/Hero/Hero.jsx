import React from 'react'
import './Hero.scss'
export default function Hero() {
  return (
    <div className='hero container'>
        <div className="her-text">
            <h1>We Ensure better education for a better world</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
            <button className='btn'> Expolre more <img src={require('../../assets/dark-arrow.png')}/></button>
        </div>
    </div>
  )
}
