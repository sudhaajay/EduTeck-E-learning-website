import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBars from './components/NavBars/NavBars';
import Footers from './components/Footers/Footers';
import Home from './Page/Home/Home'; 
import Courses from './components/Courses/Courses'; 
import CourseDetails from './Page/CourseDetails/CourseDetails';  
import AboutUs from './Page/AboutUs/AboutUs'; 

function App() {
  return (
    <>
      <NavBars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footers />
    </>
  );
}

export default App;
