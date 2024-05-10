import React from "react";
import './experiencecard.css'

function ExperienceCard({ title, company, date, description, image, isLeft }) {
    return (
        <div>
            {/* Conditional rendering using ternary operator */}
            {isLeft ? (
                <div className="experience-row-left">
                    <div className="experience-card">
                        <div className="experience-details">
                            <h3 className="experience-title">{title}</h3>
                            <p className="experience-company">{company}</p>
                            <p className="experience-description">{description}</p>
                        </div>
                    </div>
                    <div className="experience-image-container">
                        <div className="experience-image">
                            <img src={image} alt={title}/>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="experience-row-right">
                    <div className="experience-image-container">
                        <div className="experience-image">
                            <img src={image} alt={title}/>
                        </div>
                    </div>
                    <div className="experience-card">
                        <div className="experience-details">
                            <h3 className="experience-title">{title}</h3>
                            <p className="experience-company">{company}</p>
                            <p className="experience-description">{description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ExperienceCard;