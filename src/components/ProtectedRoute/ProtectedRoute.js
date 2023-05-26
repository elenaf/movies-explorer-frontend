import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children }) => {
    return localStorage.getItem('token') ? children : <Navigate to="/" replace />
};

export default ProtectedRoute;