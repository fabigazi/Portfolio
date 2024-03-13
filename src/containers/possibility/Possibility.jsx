import React from 'react'
import './possibility.css';

import possibilityImage from "../../assets/possibility.png"

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibility'/>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Acess to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <h4>Request Early Acess to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
