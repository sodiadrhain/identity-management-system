const { checkSchema } = require("express-validator");
const validator = require("../utils/validator");

exports.updateProfileValidator = validator(
  checkSchema({
    fullName: {
      in: ["body"],
      isString: {
        errorMessage: "Full name must be a string",
      },
      trim: true,
    },
    birthDate: {
      in: ["body"],
      trim: true,
      isString: {
        errorMessage: "Birth Date not valid",
      },
      isDate: {
        errorMessage: "Birth Date not valid",
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
