import * as React from "react";
import './about.css';

import profImage from '../../imgs/Fabi Profile Picture.jpg';

//"https://cdn.builder.io/api/v1/image/assets/TEMP/14d7d9a7d236bb222ba2c8e02c5f279a32685e23ec790fbc69b8c48281eb06c7?apiKey=c18181df491445f49c3752cb0e8829d9&"


function About() {
    return (
        <section className="about-section">
            <div className="about-content">
                <div className="about-image-column">
                    <img
                        loading="lazy"
                        src={profImage}
                        alt="About"
                        className="about-image"
                    />
                </div>
                <div className="about-text-column">
                    <div className="about-text-content">
                        <h2 className="about-title">About Me</h2>
                        <p className="about-description">
                        During my time studying I enjoyed diving deep into my projects and working with my classmates. I worked to find creative solutions to difficult problems as well as creating lasting connections. During my undergraduate career I also completed all four years in NCAA Track and Field and pursued my passion for learning German as a second language. I pursued other side projects to keep my skills sharp and practice new concepts. The most important lesson my experience through my six years of Computer Science schooling is that you are never done learning. I am always excited to take what I have learned so far and apply it to the opportunities ahead.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About