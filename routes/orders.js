// Import required dependencies
const express = require("express");
const Order = require("../models/orders"); // Import Order model
const orderRouter = express.Router(); // Create Express router instance

// POST endpoint to add a new order
orderRouter.post("/add", async (req, res) => {
  try {
    // Create new Order instance from request body
    let neworder = new Order(req.body);
    
    // Save the order to database
    let result = await neworder.save();
    
    // Send success response
    res.send({ order: result, msg: "order is added" });
  } catch (error) {
    // Should implement proper error handling
    console.log(error);
  }
});

// GET endpoint to retrieve all orders
orderRouter.get("/", async (req, res) => {
  try {
    // Find all orders in database
    let result = await Order.find();
    
    // Send all orders in response
    res.send({ orders: result, msg: "all orders" });
  } catch (error) {
    console.log(error);
  }
});

// GET endpoint to retrieve a specific order by ID
orderRouter.get("/:id", async (req, res) => {
  try {
    // Find order by ID from URL parameter
    let result = await Order.findById(req.params.id);
    
    // Send found order in response
    res.send({ order: result, msg: " order" });
  } catch (error) {
    console.log(error);
  }
});

// DELETE endpoint to remove a order
orderRouter.delete("/:id", async (req, res) => {
  try {
    // Find and delete order by ID
    let result = await order.findByIdAndDelete(req.params.id);
    
    // Send success message
    res.send({ msg: "order is deleted" });
  } catch (error) {
    console.log(error);
  }
});

// PUT endpoint to update a order
orderRouter.put("/:id", async (req, res) => {
  try {
    // Find order by ID and update with request body
    let result = await Order.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    
    // Send success message (Note: 'result' is hardcoded in response)
    res.send({ order: "result", msg: "order is updated" });
  } catch (error) {
    console.log(error);
  }
});

// Export router for use in main application
module.exports = orderRouter;