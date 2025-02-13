// Import necessary dependencies from React and React Router
import React from "react";
import {Navigate, Outlet} from "react-router-dom";

// Define a PrivateRoute component that protects routes requiring authentication
const PrivateRoute = () => {
   // Check if user is authenticated by looking for JWT token in localStorage
   // This will return either the token string if present, or null if not found
   const isAuth = localStorage.getItem("token");

   /* 
   Use ternary operator to conditionally render based on authentication status:
   - If isAuth has a token (truthy), render the <Outlet/> component which displays the protected route content
   - If isAuth is null (falsy), redirect to login page using <Navigate/>
   
   The Outlet component is a special component from React Router that renders whatever child route matches our current URL.
   It's like a placeholder showing where a child route should be displayed.
   */
   return isAuth ? <Outlet/> : <Navigate to="/login"/>;
};

// Export the PrivateRoute component for use in other parts of the application
export default PrivateRoute;