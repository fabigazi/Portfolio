
import React, { useState } from 'react';
import Tab from './Tab';
import './etabs.css';
import Exp from '../../containers/experinece/exp';
import Edu from '../../containers/experinece/edu';
//Etab stands for education tabs


const TabCondition = ({ tabnum }) => {
    if(tabnum == 0){
        return(
            <Exp/>
        );
    } else if(tabnum == 1) {
        return(
            <Edu/>
        );
    } else {
        return(
            <p>Error with {tabnum} tabs</p>
        );
    }
}

const Etabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="tabs-container">
            <div className="tabs">
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        label={tab.label}
                        onClick={() =>
                            handleTabClick(index)
                        }
                        isActive={index === activeTab}
                    />
                ))}
            </div>
                <TabCondition tabnum={activeTab}/>

        </div>
    );
};

export default Etabs;
