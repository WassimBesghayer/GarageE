// Import necessary dependencies
import React, { useState } from "react"; // Import React and useState hook
import { useDispatch } from "react-redux"; // Import Redux dispatch hook
import { Link, useNavigate } from "react-router-dom"; // Import routing components
import { userlogin } from "../redux/userSlice"; // Import login action

// Define Login component
function Login() {
 // Initialize navigate function for routing
 const navigate = useNavigate();

 // Initialize login state with empty email and password
 const [login, setlogin] = useState({
   email: "",
   password: "",
 });

 // Initialize dispatch function for Redux actions  
 const dispatch = useDispatch();

 return (
   // Main container with 50% width
   <div style={{width:"50%"}}> 
     <div className="wrapper">
       {/* Login form with preventDefault to stop default submission */}
       <form onSubmit={(e) => e.preventDefault()} className="form-signin">
         <h2 className="form-signin-heading">Please login</h2>

         {/* Email input field */}
         <input
           type="text" // Should be type="email" for better validation
           class="form-control" // Bootstrap class for styling
           name="username" // Should be "email" for consistency
           placeholder="Email Address"
           required="" // Field is required
           autofocus="" // Automatically focus this field
           // Update email while preserving password in state
           onChange={(e) => setlogin({ ...login, email: e.target.value })}
         />

         {/* Password input field */}
         <input
           type="text" // Should be type="password" for security
           class="form-control"
           name="Password"
           placeholder="Password"
           required=""
           autofocus="" // Should not have autofocus on password field
           // Update password while preserving email in state
           onChange={(e) => setlogin({ ...login, password: e.target.value })}
         />

         {/* Remember me checkbox */}
         <label class="checkbox">
           <input
             type="checkbox"
             value="remember-me"
             id="rememberMe"
             name="rememberMe"
           />{" "}
           Remember me
         </label>

         {/* Login button */}
         <button
           className="btn btn-lg btn-primary btn-block"
           onClick={() => {
             setTimeout(() => {
               dispatch(userlogin(login)); // Dispatch login action
               navigate("/"); // Navigate to home page
             }, 86400); // 24-hour delay - likely a mistake
           }}
         >
           login
         </button>

         {/* Registration link */}
         <h5>
           You already have an account <Link to="/register">Register now</Link>{" "}
         </h5>
       </form>
     </div>
   </div>
 );
}

// Export component
export default Login;