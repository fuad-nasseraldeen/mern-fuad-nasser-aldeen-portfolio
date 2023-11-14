import React from 'react'

import HeaderMobileMode from './headerMobileMode';
import FirstPage from './FirstPage';
import Projects from './Projects';
import SkillsSet from './Skills';
import Education from './Education';
import Courses from './Courses';
import Work from './Work';
import Recommendations from './Recommendations';
import About from './About';
import Resume from './Resume';

const Home = () => {

    const mobileMode = window.innerWidth <= 600 ?? true;
    return (
        <>
            {!mobileMode && <FirstPage />}
            {mobileMode && <HeaderMobileMode />}
            {mobileMode && <About />}
            <Projects />
            <Education />
            <SkillsSet />
            <Work />
            <Courses />
            <Recommendations />
            <Resume />
        </>
    )
}

export default Home