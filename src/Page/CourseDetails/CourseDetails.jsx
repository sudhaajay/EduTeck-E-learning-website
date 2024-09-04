import React from 'react';
import './CourseDetails.css';
import { courseData } from "../../data/courseData";
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
    const { id } = useParams();
    const course = courseData.find(course => course.id === parseInt(id));

    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <div className='course_details'>
            <div className="details_top">
                <div className="details_left">
                    <h2 className="name">{course.name}</h2>
                    <p className="desc">{course.description}</p>
                    <p className="lang">{course.language}</p>
                    <p className="date">{course.date}</p>
                    <div className="price_container">
                        <h3 className="price">Price: ${course.price}</h3>
                        <button>Buy Course</button>
                    </div>
                </div>
                <div className="details_right">
                    <img src={course.imageUrl} alt={course.name} className='course_img' />
                </div>
            </div>
            <div className="course_journey">
                <h2>Curriculum</h2>
                {course.curriculum.map((phase, index) => (
                    <fieldset className='field_container' key={index}>
                        <legend className='phase'>Phase0{index + 1}</legend>
                        <h3 className='p-name'>{phase.phaseName}</h3>
                        <ul>
                            {phase.phaseList.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </fieldset>
                ))}
            </div>
        </div>
    );
};

export default CourseDetails;
