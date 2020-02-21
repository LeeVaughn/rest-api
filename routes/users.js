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
      res.status(500).send(error);
    }
  }
}

// returns the currently authenticated user
router.get("/", asyncHandler(async (req, res) => {
  console.log("working");
}));

// creates a new user
router.post("/", asyncHandler(async (req, res) => {

}));

module.exports = router;
