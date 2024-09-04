import React from 'react';
import './Courses.css';
import { FaChartSimple } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

// Default empty course object to handle cases where course is undefined
const Courses = ({ course = {} }) => {
    // Destructure properties from course with default values
    const { id = '', imageUrl = 'default-image-url.jpg', name = 'No Name', price = '0', standard = 'N/A' } = course;
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/course/${id}`);
    };

    return (
        <div className='course_card' onClick={handleCardClick}>
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
