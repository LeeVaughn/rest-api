const express = require("express");
const router = express.Router();
const Course = require("../models").Course;
const User = require("../models").User;
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

// returns a list of all courses
router.get("/", asyncHandler(async (req, res) => {
  console.log("working");
}));

// returns a specific course based on the provided course id
router.get("/:id", asyncHandler(async (req, res) => {

}));

// creates a new course
router.post("/", asyncHandler(async (req, res) => {

}));

// updates a specific course based on the provided course id
router.put("/", asyncHandler(async (req, res) => {

}));

// deletes a specific course based on the provided course id
router.delete("/", asyncHandler(async (req, res) => {

}));

module.exports = router;
