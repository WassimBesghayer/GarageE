const express = require("express"); // Import Express.js framework to create and manage routes
const User = require("../models/User"); // Import User model for database operations
const router = express.Router(); // Create a new router instance to handle routes
const bcrypt = require("bcrypt"); // Import bcrypt for password hashing and comparison
const user = require("../models/User"); // Duplicate import of User model (redundant)
const jwt = require("jsonwebtoken"); // Import JWT for token generation and verification
const {
  loginRules,
  registerRules,
  validation,
} = require("../middleware/validator"); // Import validation middleware for registration and login
const isAuth = require("../middleware/passport"); // Import authentication middleware

// REGISTER ROUTE
router.post("/register", registerRules(), validation, async (req, res) => {
  // Define POST route for user registration with validation middleware
  const { name, lastname, email, password } = req.body; // Extract user data from request body using destructuring
  try {
    const newUser = new User({ name, lastname, email, password }); // Create a new User instance with submitted data
    
    // Check if the email already exists in the database
    const searchedUser = await User.findOne({ email });
    if (searchedUser) {
      return res.status(400).send({ msg: "email already exist" }); // Return error if email already exists
    }
    
    // Hash password for security
    const salt = 10; // Define salt rounds for bcrypt (higher = more secure but slower)
    const genSalt = await bcrypt.genSalt(salt); // Generate a salt
    const hashedPassword = await bcrypt.hash(password, genSalt); // Hash the password with the generated salt
    console.log(hashedPassword); // Log the hashed password (security concern - should be removed in production)
    newUser.password = hashedPassword; // Replace plain password with hashed password
    
    // Save the new user to the database
    const newUserToken = await newUser.save();
    
    // Create JWT payload with user ID and name
    const payload = {
      _id: newUser._id, // Note: There's a typo here with *id - should be _id
      name: newUserToken.name,
    };
    
    // Generate JWT token with payload, secret key, and expiration
    const token = await jwt.sign(payload, process.env.SecretOrkey, {
      expiresIn: 3600, // Token expires in 1 hour (3600 seconds)
    });
    
    // Send success response with user data and token
    res
      .status(200)
      .send({ newUserToken, msq: "user is saved", token: `bearer ${token}` });
  } catch (error) {
    res.send(error); // Send error response (Note: should include status code like 500)
    console.log(error); // Log error to console for debugging
  }
});

// LOGIN ROUTE
router.post("/login", loginRules(), validation, async (req, res) => {
  // Define POST route for user login with validation middleware
  const { email, password } = req.body; // Extract login credentials from request body
  try {
    // Find user by email
    const searchedUser = await User.findOne({ email });
    
    // If user not found, return bad credentials error
    if (!searchedUser) {
      return res.status(400).send({ msg: "Bad credential" });
    }
    
    // Compare submitted password with stored hashed password
    const match = await bcrypt.compare(password, searchedUser.password);
    if (!match) {
      return res.status(400).send({ msg: "Bad credential" }); // Return same error for wrong password (security best practice)
    }
    
    // Create JWT payload with user ID and name
    const payload = {
      _id: searchedUser._id, // Note: There's a typo here with *id - should be _id
      name: searchedUser.name,
    };
    
    // Generate JWT token with payload, secret key, and expiration
    const token = await jwt.sign(payload, process.env.SecretOrKey, { // Note: This key name is different from registration route (SecretOrKey vs SecretOrkey)
      expiresIn: 3600, // Token expires in 1 hour (3600 seconds)
    });
    
    // Send success response with user data and token
    res
      .status(200)
      .send({ user: searchedUser, msg: "success", token: `bearer ${token}` });
  } catch (error) {
    res.status(500).send({ msg: "Can not get the user" }); // Send server error response
  }
});

// GET CURRENT USER ROUTE
router.get("/current", isAuth(), (req, res) => {
  // Define GET route to retrieve current authenticated user, protected by isAuth middleware
  res.status(200).send({ user: req.user }); // Send user data from request (populated by passport middleware)
});

module.exports = router; // Export the router to be used in the main application