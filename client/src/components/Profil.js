// Import necessary dependencies
import React from "react"; // Import React
import { useDispatch, useSelector } from "react-redux"; // Import Redux hooks for state management
import { useNavigate } from "react-router-dom"; // Import navigation hook from React Router
import { logout } from "../redux/userSlice"; // Import logout action from user slice

// Define Profile component
function Profil() {
  // Get user data from Redux store using useSelector
  // state.user.user means: from the root state, get the user reducer, then get the user property
  const user = useSelector((state) => state.user.user);
  
  // Log user data to console for debugging purposes
  console.log(user);

  // Initialize navigate function for programmatic routing
  const navigate = useNavigate();
  
  // Initialize dispatch function to dispatch Redux actions
  const dispatch = useDispatch();

  return (
    <div>
      {/* Display greeting with user's name 
          The ?. (optional chaining) ensures no error if user is null */}
      <h1>hello {user?.name}</h1>

      {/* Logout button with click handler */}
      <button
        onClick={() => {
          dispatch(logout()); // Dispatch logout action to Redux
          navigate("/login"); // Redirect to login page after logout
        }}
      >
        logout
      </button>
    </div>
  );
}

// Export the component for use in other parts of the application
export default Profil;