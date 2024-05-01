import * as React from "react";
import './divide.css'

const Divide = ({ title }) => (
    <div className="div-container">
        <header>
            <h1 className="title-heading">{title}</h1>
        </header>
        <section className="line-container">
            <div className="divider" />
        </section>
    </div>
);

export default Divide;