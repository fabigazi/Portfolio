import * as React from "react";
import MNIST from '../../imgs/MNIST.png'
import MNISTclick from '../../imgs/MNISTclick.png'
import Ptabs from "../../components/tabs/PsubTabs";

function Other() {
    const projects = [
        {
            title: "PMKS+",
            description:
                "The Planar Mechanism Kinematic Simulator (PMKS), a legacy Silverlight application, as a modern desktop application with additional features. The recreation, named PMKS+Desktop (PMKS+D), contains user interface elements and functionality adapted from PMKS and PMKS+, a previous recreation of PMKS.",
            image: MNIST,
            clkimg: MNISTclick,
            link: "https://digital.wpi.edu/concern/student_works/rv042w50z?locale=en",
            id: 0,
        },
        {
            title: "Explore F1",
            description:
                "The Planar Mechanism Kinematic Simulator (PMKS), a legacy Silverlight application, as a modern desktop application with additional features. The recreation, named PMKS+Desktop (PMKS+D), contains user interface elements and functionality adapted from PMKS and PMKS+, a previous recreation of PMKS.",
            image: "https://www.cidrap.umn.edu/sites/default/files/styles/article_detail/public/article/iStock-1292254104.jpg?itok=EScrAQ6Q",
            clkimg: "https://www.brainline.org/sites/default/files/slides/mri.jpg",
            link: "https://digital.wpi.edu/concern/student_works/rv042w50z?locale=en",
            id: 1,
        },
    ];
    return (
        <Ptabs projects={projects} />
    );
}

export default Other;