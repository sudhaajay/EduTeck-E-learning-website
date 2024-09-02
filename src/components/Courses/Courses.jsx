// Courses.jsx
import React from 'react';
import './Courses.css';
import { FaChartSimple } from 'react-icons/fa6';

const Courses = ({ course ={}}) => {
    const { imageUrl = '', name = 'No Name', price = '0', standard = 'N/A' } = course;

    return (
        <div className='course_card'>
            <img src={imageUrl} alt={name} className="course_img" />
            <h3 className="course_name">{name}</h3>
            <h4 className="course_price">${price}</h4>
            <p className="course_standard">
                <FaChartSimple className='analytic' />
                {standard}
            </p>
            <button className="course_button">Explore</button>
        </div>
    );
};

export default Courses;
