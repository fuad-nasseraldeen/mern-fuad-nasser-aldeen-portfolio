import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './sass/main.scss';

import Home from './Components/Home';

import HeaderMobileMode from './Components/headerMobileMode';
import FirstPage from './Components/FirstPage';
import Projects from './Components/Projects';
import SkillsSet from './Components/Skills';
import Education from './Components/Education';
import Courses from './Components/Courses';
import Work from './Components/Work';
import Recommendations from './Components/Recommendations';
import About from './Components/About';
import Resume from './Components/Resume';
import { getProfile, } from './actions/profile';
import _ from 'lodash';
import { RootState } from 'Layouts/types.tsx'


const App = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.profile);

  useEffect(() => {
    if (_.isEmpty(profile)) { // Add a check for 'loading' property
      getProfile(dispatch)
    }
  }, [dispatch, profile]);


  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/header' element={<FirstPage />} />
          <Route path='/headerMobileMode' element={<HeaderMobileMode />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/education' element={<Education />} />
          <Route path='/skills' element={<SkillsSet />} />
          <Route path='/work' element={<Work />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/recommendations' element={<Recommendations />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
