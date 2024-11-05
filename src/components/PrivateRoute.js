// PrivateRoute.js
import React from "react";
import { useAuth } from './AuthContext';
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    return <>{children}</>;
};

export default PrivateRoute;
