import React from 'react';
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
            </div>
        </div>
    );
};

export default TopCourses;