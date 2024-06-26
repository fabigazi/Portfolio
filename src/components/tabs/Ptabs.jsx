
import React, { useState } from 'react';
import Tab from './Tab';
import './ptabs.css';
import Software from '../../containers/projects/Software';
import Machine from '../../containers/projects/Machine';
import Other from '../../containers/projects/Other';
//ptabs are short for project tabs

const TabCondition = ({ tabnum }) => {
    if (tabnum == 0) {
        return (
            <Software />
        );
    } else if (tabnum == 1) {
        return (
            <Machine />
        );
    } else if (tabnum == 2) {
        return (
            <Other />
        );
    } else {
        return (
            <p>Error with {tabnum} tabs</p>
        );
    }
}

const Ptabs = ({ tabs }) => {
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
            <TabCondition tabnum={activeTab} />
        </div>
    );
};

export default Ptabs;
