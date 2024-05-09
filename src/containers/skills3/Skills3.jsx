import React, { useRef, useState } from "react";
import "./skills3.css";
import { SAMPLE_DATA } from "./data";
import { data } from "./skillsData"
import Button from "../../components/button/Button";

function Skills() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const containerRef = useRef();

    // Function to handle scrolling when the button is clicked
    const handleScroll = (scrollAmount) => {
        // Calculate the new scroll position
        const newScrollPosition = scrollPosition + scrollAmount;

        // Update the state with the new scroll position
        setScrollPosition(newScrollPosition);

        // Access the container element and set its scrollLeft property
        containerRef.current.scrollLeft = newScrollPosition;
    };

    return (

        <div className="scroll-container">
            <div className="button-div">
            <Button label={"<"} newClick={() => handleScroll(-200)} />
            </div>
            
            <div
                ref={containerRef}
                style={{
                    width: "80%",
                    overflowX: "scroll",
                    scrollBehavior: "smooth",
                }}
            >

                <div className="content-box">
                    {data.map((item) => (
                        <div className="card" style={{ backgroundColor: item.color }}>
                            <div className="skill-item">
                                <img className="skill-img" src={item.img} />
                            </div>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="button-div">
                <Button label={">"} newClick={() => handleScroll(200)} />
            </div>
        </div>
    );
}

export default Skills;