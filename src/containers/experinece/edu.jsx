import * as React from "react";
import './exp.css'
import ExperienceCard from '../../components/experienceCard/ExperienceCard'



function Edu() {
    const experiences = [
        
        {
            title: "Masters of Computer Science",
            company: "Northeastern University Khoury College of Computer Sciences | Sept 2022 - May 2024 | GPA: 3.92/4.0",
            description:
                "Relevant Courses include, Programing Design Paradigm, Algorithms, Mobile App Development, Web Development, Database Management Systems, Foundations of Artificial Inteligence, Machine Learning, and Computer Systems.",
            image: "https://www.ivyscholars.com/wp-content/uploads/2021/12/northeastern_univresity_seal.png",
            isLeft: false,
        },
        {
            title: "Bachelor of Computer Science",
            company: "Worcester Polytechnic Institute | Sept 2016 - May 2020 | GPA: 2.99/4.0",
            description:
                "Relevant Courses include, Sofware Engineering, Machine Learning, Mobile Design, Computer Graphics, Assembly Language, Data Science, Databases. Suporting courses such as beginer intermediate and advanced German as well as Track and field as extracaricular",
            image: "https://gw-advance-prod-us-east-1-system.s3.amazonaws.com/uploads/entity/headlogo/5f2444c83ef52e001b923ca4/WPI_Giving_Day_headlogo.png",
            isLeft: true,
        },
    ];
    return (
        <div>
            {experiences.map((experience, index) => (
                <ExperienceCard key={index} {...experience} />
            ))}
        </div>

    );
}

export default Edu