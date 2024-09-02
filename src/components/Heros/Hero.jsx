import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
     <div className='hero'>
      <h1 className='hero_header'>Unlock Your Protential with Top-Tier <br />Online Courses</h1>
      <p>Personalized learning experiances designed to help you achieve your professional and <br /> personal goals.Gain the skills to excel in today's fast-paced world</p>
      <div className='btn'>
        <button className='cta_button'>Explore Courses</button>
      </div>
    <img src="https://online.jwu.edu/wp-content/uploads/2023/06/The20Dos20and20Don27ts20of20Studying.jpg" alt="hero_image" className='hero_img' />


     </div>
    </>
  )
}

export default Hero
