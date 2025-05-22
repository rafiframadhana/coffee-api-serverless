import express from "express";
import Coffee from "../models/coffee.js";

const router = express.Router();

// Get all coffees
router.get("/", async (req, res) => {
  try {
    const coffees = await Coffee.find();
    res.status(200).json(coffees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new coffee
router.post("/", async (req, res) => {
  const coffee = new Coffee(req.body);
  try {
    const savedCoffee = await coffee.save();
    res.status(201).json(savedCoffee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a coffee
router.put("/:id", async (req, res) => {
  try {
    const updatedCoffee = await Coffee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedCoffee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a coffee
router.delete("/:id", async (req, res) => {
  try {
    await Coffee.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;