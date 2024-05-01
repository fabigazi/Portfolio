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
            title: "Technical Content Writer",
            company: "GeeksforGeeks | 11-2023 – 02-2024",
            description:
                "As a content creator, I've authored and published numerous articles on technical topics like Power BI, Python, Data Science, and Machine Learning. My focus is on simplifying complex concepts, ensuring accessibility for all audiences. Each article is carefully crafted to translate intricate jargon into easily understandable terms, fostering a deep understanding. I stay current with the latest developments in these fields, delivering up-to-date content that empowers readers to navigate and excel in the ever-evolving landscape of technology.",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/974bd6e460d8738ebf584b348aed4ea29485669ee507299515179bb357a2ce1b?apiKey=c18181df491445f49c3752cb0e8829d9&",
            isLeft: true,
        },
        {
            title: "Content Writer",
            company: "Wholesome Reliable | 04-22 to 11-22",
            description:
                "I've authored 50+ articles spanning diverse topics such as lifestyle, travel, tech, and digital marketing. Through captivating content tailored for various clients, I've successfully engaged over 100k readers. My writing style transcends subject boundaries, delivering informative and compelling pieces that resonate with a wide audience. Whether exploring lifestyle trends, travel destinations, or delving into the intricacies of technology and digital marketing, each article is crafted to captivate and inform, leaving a lasting impact on the readership.",
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