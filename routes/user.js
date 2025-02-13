// Import required dependencies
const express = require("express");
const User = require("../models/User"); // Import User model
const router = express.Router();
const bcrypt = require("bcrypt"); // For password hashing
const jwt = require("jsonwebtoken"); // For JWT token generation
const {
  loginRules,
  registerRules,
  validation,
} = require("../middleware/validator"); // Custom validation middleware
const isAuth = require("../middleware/passport"); // Authentication middleware

// Registration endpoint
router.post("/register", registerRules(), validation, async (req, res) => {
  // Extract user data from request body
  const { name, lastname, email, password, phonenumber, category } = req.body;
  
  try {
    // Create new user instance
    const newUser = new User({ name, lastname, email, password, phonenumber, category });
    
    // Check if email already exists in database
    const searchedUser = await User.findOne({ email });
    if (searchedUser) {
      return res.status(400).send({ msg: "email already exist" });
    }
    
    // Hash the password for security
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    console.log(hashedPassword); // Should remove this console.log
    newUser.password = hashedPassword;
    
    // Save the new user to database
    const newUserToken = await newUser.save();
    
    // Create JWT payload
    const payload = {
      id: newUser.id, // Note: syntax error in original code with *id
      name: newUserToken.name,
    };
    
    // Generate JWT token
    const token = await jwt.sign(payload, process.env.SecretOrkey, {
      expiresIn: 3600, // Token expires in 1 hour
    });
    
    // Send success response with user data and token
    res
      .status(200)
      .send({ newUserToken, msq: "user is saved", token: `bearer ${token}` });
  } catch (error) {
    res.send(error); // Should include status code
    console.log(error);
  }
});

// Login endpoint
router.post("/login", loginRules(), validation, async (req, res) => {
  const { email, password } = req.body;
  
  try {
    // Find user by email
    const searchedUser = await User.findOne({ email });
    
    // Check if user exists
    if (!searchedUser) {
      return res.status(400).send({ msg: "Bad credential" });
    }
    
    // Verify password
    const match = await bcrypt.compare(password, searchedUser.password);
    if (!match) {
      return res.status(400).send({ msg: "Bad credential" });
    }
    
    // Create JWT payload
    const payload = {
      id: searchedUser.id, // Note: syntax error in original code with *id
      name: searchedUser.name,
    };
    
    // Generate JWT token
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });
    
    // Send success response
    res
      .status(200)
      .send({ user: searchedUser, msg: "success", token: `bearer ${token}` });
  } catch (error) {
    res.status(500).send({ msg: "Can not get the user" });
  }
});

// Get current user endpoint (protected route)
router.get("/current", isAuth(), (req, res) => {
  res.status(200).send({ user: req.user });
});

module.exports = router;