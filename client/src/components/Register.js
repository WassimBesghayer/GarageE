// Import necessary dependencies
import React, { useState } from "react"; // Import React and useState hook for managing component state
import { useDispatch } from "react-redux"; // Import useDispatch hook to dispatch actions to Redux store
import { userRegister } from "../redux/userSlice"; // Import userRegister action from Redux slice
import { Link, useNavigate } from "react-router-dom"; // Import routing components from React Router

// Define Register component
function Register() {
  // Initialize state for registration form using useState hook
  // Create an object with empty strings for all form fields
  const [register, setregister] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    phonenumber:""
  });

  const navigate = useNavigate(); // Initialize navigate function for programmatic routing
  const dispatch = useDispatch(); // Initialize dispatch function for Redux actions

  return (
    <div>
      <div className="wrapper">
        {/* Form with preventDefault to stop default form submission */}
        <form onSubmit={(e) => e.preventDefault()} className="form-signin">
          <h2 className="form-signin-heading">Please Register</h2>

          {/* Name input field */}
          <input
            type="text"
            class="form-control" // Bootstrap class for styling
            name="name"
            placeholder="name"
            required="" // Field is required
            autofocus="" // Automatically focus this field on load
            // Update only the name field while preserving other state values using spread operator
            onChange={(e) => setregister({ ...register, name: e.target.value })}
          />

          {/* Last name input field */}
          <input
            type="text"
            class="form-control"
            name="LastName"
            placeholder="LastName"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...register, lastname: e.target.value })
            }
          />

          {/* Email input field */}
          <input
            type="text" // Should be type="email" for better validation
            class="form-control"
            name="username"
            placeholder="Email Address"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...register, email: e.target.value })
            }
          />

          {/* Password input field */}
          <input
            type="text" // Should be type="password" for security
            class="form-control"
            name="Password"
            placeholder="Password"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...register, password: e.target.value })
            }
          />

          {/* Phone number input field */}
          <input
            type="text" // Could be type="tel" for better mobile keyboards
            class="form-control"
            name="Password" // Should be "phoneNumber" for consistency
            placeholder="phone number"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...register, phonenumber: e.target.value })
            }
          />

          {/* Register button */}
          <button
            className="btn btn-lg btn-primary btn-block" // Bootstrap classes for styling
            onClick={() => {
              dispatch(userRegister(register)); // Dispatch registration action to Redux
              navigate("/"); // Navigate to home page after registration
            }}
          >
            Register
          </button>

          {/* Login link for existing users */}
          <h5>
            u already have account <Link to="/login">sign in </Link>{" "}
          </h5>
        </form>
      </div>
    </div>
  );
}

// Export the component for use in other parts of the application
export default Register;