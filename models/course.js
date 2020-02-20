"use strict";

const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  class Course extends Sequelize.Model {}

  Course.init({
    title: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: {
          msg: "Title is required"
        }
      }
    },
    description: {
      type: Sequelize.TEXT,
      validate: {
        notEmpty: {
          msg: "Description is required"
        }
      }
    },
    estimatedTime: Sequelize.STRING,
    materialsNeeded: Sequelize.STRING
  }, { sequelize });

  Course.associate = (models) => {
    Course.belongsTo(models.User, { foreignKey: "UserId" });
  };

  return Course;
}