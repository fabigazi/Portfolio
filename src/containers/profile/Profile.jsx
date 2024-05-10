import * as React from "react";
import './profile.css';

import NavBar from "../../components/navbar/Navbar";
import Button from "../../components/button/Button";

import profImage from '../../imgs/Fabi Profile Picture.jpg';
import character from '../../imgs/Portfolio-Character.png';
//"https://cdn.builder.io/api/v1/image/assets/TEMP/f5c91dca58c4038c73387136ec2b6d12fcb133dc17d4e48d3868e6445247580b?apiKey=c18181df491445f49c3752cb0e8829d9&"


function Profile() {
  return (
    <section className="hero-content">
      
      <img
        loading="lazy"
        src={character}
        alt="Profile"
        className="profile-image"
      />
      <h1 className="greeting">Hey</h1>
      <h2 className="name">I'm Fabian Gaziano</h2>
      <div className="title-container">
        <h3 className="title">
          Machine Learning Engineer
        </h3>
        <div className="title-separator" />
        <h3 className="title">
          Software Engineer
        </h3>
      </div>
      <p className="bio">
        I completed a Masters degree in Computer Science from Northeastern
        University. I am also working as a Software Engineer/ IT consultant at QHI, inc. I
        have a bachelors degree from Worcester Polytechnic Institute (WPI) in Computer
        Science. I have a passion for math and physics, and I enjoy finding innovative
        solutions to problems using my professional and educational experience.
      </p>
      <div className="cta-buttons">
        <Button label="Learn More" />
        <Button label="Contact me" variant="secondary" />
      </div>
    </section>
  )
}

export default Profile