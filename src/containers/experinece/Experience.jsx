import * as React from "react";
import './experience.css'
import Button from "../../components/button/Button";



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



function Experience() {
    const experiences = [
        {
            title: "Software Engineer/Information Technology Consultant",
            company: "Quality Health Ideas, Suffield. CT  | May 2020 - Present ",
            description:
                "Coordinated with engineering teams to assess and optimize cross-functional hardware and software interfaces, reducing cost by half and increasing efficiency and organization. Monitored business functions to gather data for performance reports and Analysis, providing solutions to bottleneck deficiencies and increasing marketing and productive user time spent on app by 5%. Conducted integration of system installations, testing and code corrections, replacing existing systems. Communicated two years of consumer metrics, by sorting complex data analytics, in compliance with HIPPA regulations. Boosted process efficiency flow to enhance back-end tracking and reporting procedures. Participated in code reviews and documentation prior to releases, in fast-paced environment.",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/974bd6e460d8738ebf584b348aed4ea29485669ee507299515179bb357a2ce1b?apiKey=c18181df491445f49c3752cb0e8829d9&",
            isLeft: true,
        },
        {
            title: "Software Engineer Intern",
            company: "Quality Health Ideas, Suffield. CT | May 2018 - Aug 2019",
            description:
                "Utilized a wide range of development front end tools, including Visual Studio, SQL Management Studio and VS Version Control. Created real-time and innovative integrated full stack content using database organization, SQL commands, vb.net, and html to meet multiple website hosting requirements.",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3071775b33f1114b67f6971f674778467ff9a20794a145f3ff494dd329b2d702?apiKey=c18181df491445f49c3752cb0e8829d9&",
            isLeft: false,
        },
    ];
    return (
        <section className="experinece-section">
            <header className="section-header">
                <Button label={"Experinece"} />
                <Button label={"Education"} />
            </header>
            <div>
                {experiences.map((experience, index) => (
                    <ExperienceCard key={index} {...experience} />
                ))}
            </div>
        </section>

    );
}

export default Experience