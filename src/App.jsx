import { Routes, Route } from "react-router-dom";
import NavBars from './components/NavBars/NavBars';
import Footers from './components/Footers/Footers';
import Home from './Page/Home/Home'; 
import CourseDetails from './Page/CourseDetails/CourseDetails';  // Updated path

function App() {
  return (
    <>
      <NavBars/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/CourseDetails/:id' element={<CourseDetails />} />
      </Routes>
      <Footers />
    </>
  )
}

export default App;
