import * as React from "react";
import './experience.css'
import Button from "../../components/button/Button";
import Exp from "./exp";
import Etabs from "../../components/tabs/Etabs";


function Experience() {
    const tabData = [
        { label: "Experience" },
        { label: "Education" },
    ];

    return (
        <section className="experinece-section">
            <Etabs tabs={tabData}/>
        </section>

    );
}

export default Experience