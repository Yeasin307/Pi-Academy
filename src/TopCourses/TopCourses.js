import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';
import useAuth from '../Hooks/useAuth';

const TopCourses = () => {
    const { services } = useAuth();

    return (
        <div>
            <h1 className="text-center text-primary fw-bold my-5">Top Courses</h1>
            <div className="container">
                <div className="row gx-3">
                    {
                        services.slice(0, 4).map(course => <Course
                            key={course.title}
                            course={course}
                        ></Course>)
                    }
                </div>
                <div className='text-end mb-3'>
                    <Link to="/courses">
                        <Button className='text-white fs-5 fw-bold' variant="primary"><span className='text-white fs-4 fw-bold'>»»</span> All Courses</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopCourses;