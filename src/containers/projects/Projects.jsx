import * as React from "react";
import './projects.css'

import Ptabs from "../../components/tabs/Ptabs";


//"https://cdn.builder.io/api/v1/image/assets/TEMP/442b5b1efcadebb56c1f608f96f3f3826e47db501320a3264008cd47ef935a99?apiKey=c18181df491445f49c3752cb0e8829d9&" alt="" className="image"




function Projects() {
    
    const tabData = [
        { label: "Software" },
        { label: "Machine Learning" },
        { label: "Other" },
    ];
    return (
        <div className="proj-container" >
            
                <Ptabs tabs={tabData} />
        </div>
    );
}

export default Projects;