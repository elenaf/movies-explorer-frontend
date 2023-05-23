import React from "react";
import { Navigate } from "react-router-dom";

/* const ProtectedRoute = ({ element: Component, ...props }) => {
    return (
                props.isLoggedIn ? <Component {...props} /> : <Navigate to="/signin" replace/>
    );
}; */

const ProtectedRoute = ({ isLoggedIn, children }) => {
    return isLoggedIn ? children : <Navigate to="/" replace />
};

export default ProtectedRoute;