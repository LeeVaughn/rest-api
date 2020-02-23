const express = require("express");
const router = express.Router();
const Course = require("../models").Course;
const User = require("../models").User;
// const Sequelize = require('sequelize');

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

// returns a list of all courses and the user that they belong to
router.get("/", asyncHandler(async (req, res) => {
  const courses = await Course.findAll({
    include: [{ model: User, attributes: { exclude: ["password", "createdAt", "updatedAt"] } }],
    attributes: { exclude: ["createdAt", "updatedAt"] }
  });

  res.json(courses);
}));

// returns a specific course and the user it belongs to based on the provided course id
router.get("/:id", asyncHandler(async (req, res) => {
  const course = await Course.findByPk(req.params.id, {
    include: [{ model: User, attributes: { exclude: ["password", "createdAt", "updatedAt"] } }],
    attributes: { exclude: ["createdAt", "updatedAt"] }
  });

  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ "message": "Course not found" });
  }
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
