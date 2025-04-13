// Import required dependencies
const express = require("express");
const Item = require("../models/item"); // Import Item model
const itemRouter = express.Router(); // Create Express router instance

// POST endpoint to add a new item
itemRouter.post("/add", async (req, res) => {
  try {
    // Create new item instance from request body
    let newitem = new Item(req.body);
    
    // Save the item to database
    let result = await newitem.save();
    
    // Send success response
    res.send({ item: result, msg: "item is added" });
  } catch (error) {
    // Should implement proper error handling
    console.log(error);
  }
});

// GET endpoint to retrieve all items
itemRouter.get("/", async (req, res) => {
  try {
    // Find all items in database
    let result = await Item.find();
    
    // Send all items in response
    res.send({ item: result, msg: "all items" });
  } catch (error) {
    console.log(error);
  }
});

// GET endpoint to retrieve a specific item by ID
itemRouter.get("/:id", async (req, res) => {
  try {
    // Find item by ID from URL parameter
    let result = await Item.findById(req.params.id);
    
    // Send found item in response
    res.send({ item: result, msg: " item" });
  } catch (error) {
    console.log(error);
  }
});

// DELETE endpoint to remove a item
itemRouter.delete("/:id", async (req, res) => {
  try {
    // Find and delete item by ID
    let result = await item.findByIdAndDelete(req.params.id);
    
    // Send success message
    res.send({ msg: "item is deleted" });
  } catch (error) {
    console.log(error);
  }
});

// PUT endpoint to update a item
itemRouter.put("/:id", async (req, res) => {
  try {
    // Find item by ID and update with request body
    let result = await Item.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    
    // Send success message (Note: 'result' is hardcoded in response)
    res.send({ item: "result", msg: "item is updated" });
  } catch (error) {
    console.log(error);
  }
});

// Export router for use in main application
module.exports = itemRouter;