const express = require("express");
const router = express.Router();
const User = require("../models").User;
const Course = require("../models").Course;
const Sequelize = require('sequelize');

// handler function to wrap each route
function asyncHandler(cb) {
  return async(req, res, next) => {
    try {
      await cb(req, res, next)
    } catch (error) {
      console.log(error)
      res.status(500).send(error);
    }
  }
}

// returns the currently authenticated user
router.get("/", asyncHandler(async (req, res) => {
  console.log("users");
  const users = await User.findAll();
  res.json(users);
}));

// creates a new user
router.post("/", asyncHandler(async (req, res) => {
  console.log(req.body);
  const user = await User.create(req.body);

  res.status(201).end();
}));

module.exports = router;
