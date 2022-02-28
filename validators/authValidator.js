const { checkSchema } = require("express-validator");
const validator = require("../utils/validator");

exports.registerValidator = validator(
  checkSchema({
    email: {
      in: ["body"],
      isString: {
        errorMessage: "Email must be a string",
      },
      isEmail: {
        errorMessage: "Email is not valid",
      },
      trim: true,
    },
    password: {
      in: ["body"],
      trim: true,
      isString: {
        errorMessage: "Password must be a string",
      },
      isLength: {
        options: { min: 8 },
        errorMessage: "Password is too short and must be minimum 8 characters",
      },
    },
    isAdmin: {
      in: ["body"],
      trim: true,
      isInt: {
        errorMessage: "isAdmin must be a interger 1 or 0",
      },
      isLength: {
        options: { min: 1 },
        errorMessage: "isAdmin must be a interger 1 or 0",
      },
    },
  })
);

exports.loginValidator = validator(
  checkSchema({
    email: {
      in: ["body"],
      isString: {
        errorMessage: "Email must be a string",
      },
      isEmail: {
        errorMessage: "Email is not valid",
      },
      trim: true,
    },
    password: {
      in: ["body"],
      trim: true,
      isString: {
        errorMessage: "Password must be a string",
      },
      isLength: {
        options: { min: 8 },
        errorMessage: "Password is not valid",
      },
    },
  })
);
