import React, { useEffect } from 'react';
import Course from '../Course/Course';
import useAuth from '../Hooks/useAuth';

const AllCourses = () => {

    const { services } = useAuth();

    useEffect(() => {
        document.title = "All Services";
    }, []);

    return (
        <div className="my-5">
            <h3 className="text-center text-primary fw-bold my-5">All Courses</h3>
            <div className="container">
                <div className="row">
                    {
                        services.map(course => <Course
                            key={course.title}
                            course={course}
                        ></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCourses;