import * as React from "react";
import './exp.css'
import ExperienceCard from '../../components/experienceCard/ExperienceCard'



function Exp() {
    const experiences = [
        {
            title: "Software Engineer / Information Technology Consultant",
            company: "Quality Health Ideas, Suffield. CT  | May 2020 - Present ",
            description:
                "Coordinated with engineering teams to assess and optimize cross-functional hardware and software interfaces, reducing cost by half and increasing efficiency and organization. Monitored business functions to gather data for performance reports and Analysis, providing solutions to bottleneck deficiencies and increasing marketing and productive user time spent on app by 5%. Conducted integration of system installations, testing and code corrections, replacing existing systems. Communicated two years of consumer metrics, by sorting complex data analytics, in compliance with HIPPA regulations. Boosted process efficiency flow to enhance back-end tracking and reporting procedures. Participated in code reviews and documentation prior to releases, in a fast-paced environment.",
            image: "https://static1.squarespace.com/static/560b293ce4b0a5bb18f95135/t/56d719212b8dde44a007f7ee/1704819914178/",
            isLeft: true,
        },
        {
            title: "Software Engineer Intern",
            company: "Quality Health Ideas, Suffield. CT | May 2018 - Aug 2019",
            description:
                "Utilized a wide range of development front end tools, including Visual Studio, SQL Management Studio and VS Version Control. Created real-time and innovative integrated full stack content using database organization, SQL commands, vb.net, and html to meet multiple website hosting requirements.",
            image: "https://static1.squarespace.com/static/560b293ce4b0a5bb18f95135/t/56d719212b8dde44a007f7ee/1704819914178/",
            isLeft: false,
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

export default Exp