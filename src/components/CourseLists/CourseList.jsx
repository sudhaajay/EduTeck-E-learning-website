import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CourseContents } from "../CourseContents/CourseContent"; // Adjust path if needed
import Courses from "../Courses/Courses"; // Adjust path if needed

const CourseList = () => {
  // Use context to get courseContents
  const { courseContents } = useContext(CourseContents);

  // Check if courseContents is defined and has items
  if (!courseContents || courseContents.length === 0) {
    return <div>No courses available</div>;
  }

  return (
    <div className='course_wrapper'>
      <h2>In-Demand <span>Courses</span></h2>
      <div className="course_container">
        {courseContents.map((course) => (
          <Link to={`/course/${course.id}`} key={course.id}>
            <Courses course={course} /> {/* Make sure Courses component is set up to handle `course` prop */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
