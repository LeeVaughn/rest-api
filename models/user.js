"use strict";

const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  class User extends Sequelize.Model {}

  User.init({
    firstName: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: {
          msg: "First Name is required"
        }
      }
    },
    lastName: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: {
          msg: "Last Name is required"
        }
      }
    },
    emailAddress: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: {
          msg: "Email Address is required"
        }
      }
    },
    password: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: {
          msg: "Password is required"
        }
      }
    }
  }, { sequelize });

  return User;
}