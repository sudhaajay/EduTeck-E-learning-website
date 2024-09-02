// CourseList.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CourseContents } from "../CourseContents/CourseContent"; // Correct path to CourseContents context
import Courses from "../Courses/Courses"; // Correct path to Courses component

const CourseList = () => {
  // Extracting courseContents from context
  const { courseContents } = useContext(CourseContents);

  return (
    <div className='course_wrapper'>
      <h2>In-Demand <span>Courses</span></h2>
      <div className="course_container">
        {courseContents.map((course) => (
          <Link to={`/course/${course.id}`} key={course.id}>
            <Courses course={course} /> {/* Assuming Courses component is used to display each course */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
