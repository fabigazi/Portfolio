import React, { useState } from 'react'
import './app.css';

import NavBar from "./components/navbar/Navbar";
import Profile from './containers/profile/Profile';
import About from './containers/about/About';
import Divide from './components/divide/Divide';
import Projects from './containers/projects/Projects';
import Skills from './containers/skills/Skills'
import Experience from './containers/experinece/Experience';
import Contact from './containers/contact/Contact';
import { StrictMode } from 'react';

const navItems = [
  { label: "Contact", link: "#contact" },
  { label: "Experience", link: "#experience" },
  { label: "Skills", link: "#skills" },
  { label: "Projects", link: "#projects" },
];

const App = () => {
  const [value, setValue] = useState(50);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      {/* <Slider value={value} onChange={handleChange} /> */}
      <div className="container">
        <div className="inner-container">
          <nav className="navbar">
            {navItems.map((item) => (
              <NavBar key={item.label} {...item} />
            ))}
          </nav>
          <Profile />
          <About />
          <Divide title={"Projects"} id={"projects"} />
          <Projects />
          <Divide title={"Skills"} id={'skills'} />
          <Skills />
          {/* <Divide title={"Certifications"}/> */}
          {/* <Certifications/> */}
          <Divide title={"Experience"} id={"experience"} />
          <Experience />
          <Divide title={"Contact Me"} id={"contact"} />
          <Contact />
        </div>
      </div>

    </div>
  )
}

export default App
