// Import required dependencies
const express = require("express");
const Reservation = require("../models/reservation"); // Import Reservation model
const reservationRouter = express.Router(); // Create Express router instance

// POST endpoint to add a new reservation
reservationRouter.post("/add", async (req, res) => {
  try {
    // Create new Reservation instance from request body
    let newreservation = new Reservation(req.body);
    
    // Save the reservation to database
    let result = await newreservation.save();
    
    // Send success response
    res.send({ reservation: result, msg: "reservation is added" });
  } catch (error) {
    // Should implement proper error handling
    console.log(error);
  }
});

// GET endpoint to retrieve all reservations
reservationRouter.get("/", async (req, res) => {
  try {
    // Find all reservations in database
    let result = await Reservation.find();
    
    // Send all reservations in response
    res.send({ reservations: result, msg: "all reservations" });
  } catch (error) {
    console.log(error);
  }
});

// GET endpoint to retrieve a specific reservation by ID
reservationRouter.get("/:id", async (req, res) => {
  try {
    // Find reservation by ID from URL parameter
    let result = await Reservation.findById(req.params.id);
    
    // Send found reservation in response
    res.send({ reservation: result, msg: " reservation" });
  } catch (error) {
    console.log(error);
  }
});

// DELETE endpoint to remove a reservation
reservationRouter.delete("/:id", async (req, res) => {
  try {
    // Find and delete reservation by ID
    let result = await Reservation.findByIdAndDelete(req.params.id);
    
    // Send success message
    res.send({ msg: "reservation is deleted" });
  } catch (error) {
    console.log(error);
  }
});

// PUT endpoint to update a reservation
reservationRouter.put("/:id", async (req, res) => {
  try {
    // Find reservation by ID and update with request body
    let result = await Reservation.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    
    // Send success message (Note: 'result' is hardcoded in response)
    res.send({ reservation: "result", msg: "reservation is updated" });
  } catch (error) {
    console.log(error);
  }
});

// Export router for use in main application
module.exports = reservationRouter;