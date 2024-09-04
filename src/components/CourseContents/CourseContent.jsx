import React, { createContext, useState, useEffect } from 'react';
import { courseData } from '../../data/courseData'; // Adjust path if needed

export const CourseContents = createContext();

const CourseContentProvider = ({ children }) => {
  const [courseContents, setCourseContents] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setCourseContents(courseData);
  }, []);

  return (
    <CourseContents.Provider value={{ courseContents }}>
      {children}
    </CourseContents.Provider>
  );
};

export default CourseContentProvider;
