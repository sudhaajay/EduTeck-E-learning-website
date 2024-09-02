import React from 'react'
import './CourseDetails.css'
import { courseData } from "../../data/courseData";

import {useParams} from 'react-router-dom'
import Courses from '../../components/Courses/Courses'

const CourseDetails = () => {
    //get course id
    const{id} = useParams();
    const course = courseData.find(course=>{
        return course.id === parseInt(id);
    })
  return (
    <div className='course_details'>
        <div className="details_top">
            <div className="details_left">
                <h2 className="name">{Courses.name}</h2>
                <p className="desc">{Courses.CourseDetails.description}</p>
                <p className="lang">{Courses.CourseDetails.language}</p>
                <p className="date">{Courses.CourseDetails.date}</p>
                <div className="price_container">
                    <h3 className="price">Price: ${Courses.price}</h3>
                    <button>Buy Course</button>
                </div>
            </div>
            <div className="details_right">
                <img src={Courses.image} alt="course_images" className='course_img'/>
            </div>
        </div>
        <div className="course_journey">
            <h2>Curriculum</h2>
            <fieldset className='field_container'>
                <legent className='phase'>Phase01</legent>
                <h3 className='p-name'>{Courses.phase1.phaseName}</h3>
                <ul>
                    <li>{course.phase1.phaseList}</li>
                    <li>{course.phase1.phaseList1}</li>
                    <li>{course.phase1.phaseList2}</li>
                    <li>{course.phase1.phaseList3}</li>
                    <li>{course.phase1.phaseList4}</li>
                </ul>
            </fieldset>
            <fieldset className='field_container'>
                <legent className='phase'>Phase02</legent>
                <h3 className='p-name'>{Courses.phase1.phaseName}</h3>
                <ul>
                    <li>{course.phase2.phaseList}</li>
                    <li>{course.phase2.phaseList1}</li>
                    <li>{course.phase2.phaseList2}</li>
                    <li>{course.phase2.phaseList3}</li>
                    <li>{course.phase2.phaseList4}</li>
                </ul>
            </fieldset>
            <fieldset className='field_container'>
                <legent className='phase'>Phase03</legent>
                <h3 className='p-name'>{Courses.phase1.phaseName}</h3>
                <ul>
                    <li>{course.phase3.phaseList}</li>
                    <li>{course.phase3.phaseList1}</li>
                    <li>{course.phase3.phaseList2}</li>
                    <li>{course.phase3.phaseList3}</li>
                    <li>{course.phase3.phaseList4}</li>
                </ul>
            </fieldset>
            <fieldset className='field_container'>
                <legent className='phase'>Phase04</legent>
                <h3 className='p-name'>{Courses.phase1.phaseName}</h3>
                <ul>
                    <li>{course.phase4.phaseList}</li>
                    <li>{course.phase4.phaseList1}</li>
                    <li>{course.phase4.phaseList2}</li>
                    <li>{course.phase4.phaseList3}</li>
                    <li>{course.phase4.phaseList4}</li>
                </ul>
            </fieldset>
        </div>
 </div>
  )
}

export default CourseDetails
