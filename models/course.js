"use strict";

const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  class Course extends Sequelize.Model {}

  Course.init({
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Title is required"
        },
        notNull: {
          msg: "Request must contain a First Name"
        }
      }
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Description is required"
        },
        notNull: {
          msg: "Request must contain a First Name"
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