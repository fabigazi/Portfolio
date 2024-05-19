import * as React from "react";
import './projects.css'
import Card from "../../components/card/Card";
import PMKS from '../../imgs/PMKSimg.png'
import PMKSclick from '../../imgs/PMKSclick.png'
import F1 from '../../imgs/F1img.png'
import F1click from '../../imgs/F1click.png'
import Ptabs from "../../components/tabs/PsubTabs";

const Project = ({ image, index }) => (
    <img className="image-circle" key={index} src={image} />
    //{/* <img className="image-circle" src="https://cdn.builder.io/api/v1/image/assets/TEMP/86638d571e74480da6e01f78fb9c548b5f2e66771134a3f81060c83c3fb5abbe?apiKey=c18181df491445f49c3752cb0e8829d9&" alt="" className="image" /> */ }

);

function Software() {
    const projects = [
        {
            title: "PMKS+",
            description:
                "The Planar Mechanism Kinematic Simulator (PMKS), a legacy Silverlight application, as a modern desktop application with additional features. The recreation, named PMKS+Desktop (PMKS+D), contains user interface elements and functionality adapted from PMKS and PMKS+, a previous recreation of PMKS.",
            image: PMKS,
            clkimg: PMKSclick,
            link: "https://digital.wpi.edu/concern/student_works/rv042w50z?locale=en",
            id: 0,
        },
        {
            title: "Explore F1",
            description:
                "The Planar Mechanism Kinematic Simulator (PMKS), a legacy Silverlight application, as a modern desktop application with additional features. The recreation, named PMKS+Desktop (PMKS+D), contains user interface elements and functionality adapted from PMKS and PMKS+, a previous recreation of PMKS.",
            image: F1,
            clkimg: F1click,
            link: "https://digital.wpi.edu/concern/student_works/rv042w50z?locale=en",
            id: 1,
        },
    ];
    return (
        <main className="main-content">
            <Ptabs projects={projects}/>
        </main>
    );
}

export default Software;