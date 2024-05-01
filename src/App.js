import React, {useState} from 'react'
import './app.css';

import Profile from './containers/profile/Profile';
import About from './containers/about/About';
import Divide from './components/divide/Divide';
import Projects from './containers/projects/Projects';
import Skills from './containers/skills/Skills';
import Certifications from './containers/certifications/Certifications';
import Experience from './containers/experinece/Experience';
import Contact from './containers/contact/Contact';
import Slider from './components/scrollbar/Scrollbar';

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
          <Profile />
          <About />
          <Divide title={"Projects"}/>
          <Projects />
          <Divide title={"Skills"}/>
          <Skills />
          <Divide title={"Certifications"}/>
          <Certifications/>
          <Divide title={"Experience"}/>
          <Experience />
          <Divide title={"Contact Me"}/>
          <Contact />
        </div>
      </div>

    </div>
  )
}

export default App
