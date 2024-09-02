// CourseContent.jsx
import React, { createContext, useState, useEffect } from 'react';
import { courseData } from '../../data/courseData'; // Ensure this path is correct

// Create the CourseContents context
export const CourseContents = createContext();

// CourseContentProvider component
const CourseContentProvider = ({ children }) => {
    const [courseContents, setCourseContents] = useState([]);

    useEffect(() => {
        // Using static data for now
        setCourseContents(courseData);
    }, []);

    return (
        <CourseContents.Provider value={{ courseContents }}>
            {children}
        </CourseContents.Provider>
    );
};

export default CourseContentProvider;
