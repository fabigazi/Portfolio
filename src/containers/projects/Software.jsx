import * as React from "react";
import PMKS from '../../imgs/PMKSimg.png'
import PMKSclick from '../../imgs/PMKSclick.png'
import F1 from '../../imgs/F1img.png'
import F1click from '../../imgs/F1click.png'
import Ptabs from "../../components/tabs/PsubTabs";

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
        <Ptabs projects={projects} />
    );
}

export default Software;