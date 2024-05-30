import React, { useState } from 'react';
import './psubtabs.css';
import Card from "../../components/card/Card";
import Imgbutton from '../button/Imgbutton';
//ptabs are short for project tabs

const Project = ({ image, index, onClick, isActive }) => (
    <Imgbutton image={image} key={index} newClick={onClick} variant={isActive ? "active" : ""} />
);

const TabCondition = ({ tabnum, projects }) => {
    return (
        <Card title={projects[tabnum].title} description={projects[tabnum].description} image={projects[tabnum].image} link={projects[tabnum].link} />
    );
}

const Ptabs = ({ projects }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="tabs-container">

            <div className="content-wrapper">
                <div className="column image-column">
                    <div className="image-wrapper">
                        {projects.map((item, index) => (
                            <Project
                                key={index}
                                image={item.clkimg}
                                onClick={() =>
                                    handleTabClick(index)
                                }
                                isActive={index === activeTab} />
                        ))}

                    </div>
                </div>
                <TabCondition tabnum={activeTab} projects={projects} />
            </div>
        </div>
    );
};

export default Ptabs;