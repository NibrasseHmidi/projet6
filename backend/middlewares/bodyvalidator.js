const { body, validationResult } = require("express-validator");
const fs =require("fs")
const registerRules = () => [
  body("name", "name is required").notEmpty(),
  body("lastname", "last name is required").notEmpty(),
  body("email", "email is not valid").isEmail(),
  body("password", "password must contains 6 characters").isLength({
    min: 6,
    max: 20,
  }),
];

const loginRules = () => [
  body("email", "email is not valid").isEmail(),
  body("password", "password must contains 6 characters").isLength({
    min: 6,
    max: 20,
  }),
];




const validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(customError(errors.array()));
  } else next();
};
// hetha l msg eli bch nsta3mlou fl front f router ekher ydhher fyh l msg much alert 3le khtr zahra gelt much acceptable l faza hhhhh
const customError = (errorsArray) =>
  errorsArray.map((err) => ({ msg: err.msg }));
module.exports = {
  validator,
  loginRules,
  registerRules,
};
