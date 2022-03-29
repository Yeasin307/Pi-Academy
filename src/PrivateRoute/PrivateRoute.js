import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { allContext } = useAuth();
    const { user, isLoading } = allContext;
    let location = useLocation();

    if (isLoading) {
        return <Spinner animation="border" variant="warning" />
    }

    if (user?.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />
};

export default PrivateRoute;