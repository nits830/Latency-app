import React from 'react';
import { Route, RouteProps, Navigate } from 'react-router-dom';
import { isLoggedIn } from '../utils/auth';



const ProtectedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
    return (
        <Route
            {...rest}
            element={isLoggedIn() ? children : <Navigate to="/login" replace />}
        />
    );
};

export default ProtectedRoute;
