"use strict";

const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  class User extends Sequelize.Model {}

  User.init({
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "First Name is required"
        },
        notNull: {
          msg: "Request must contain a First Name"
        }
      }
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Last Name is required"
        },
        notNull: {
          msg: "Request must contain a First Name"
        }
      }
    },
    emailAddress: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Email Address is required"
        },
        notNull: {
          msg: "Request must contain a First Name"
        }
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Password is required"
        },
        notNull: {
          msg: "Request must contain a First Name"
        }
      }
    }
  }, { sequelize });

  User.associate = (models) => {
    User.hasMany(models.Course, { foreignKey: "UserId" });
  };

  return User;
}