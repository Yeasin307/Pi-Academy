import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import TopCourses from '../TopCourses/TopCourses';

const Home = () => {

    useEffect(() => {
        document.title = "Home";
    }, []);

    return (
        <>
            <Banner></Banner>
            <TopCourses></TopCourses>
        </>
    );
};

export default Home;