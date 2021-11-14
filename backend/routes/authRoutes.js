const express = require("express");
const authrouter = express.Router();




const {
  register,
  login,
  getAuthUser,
} = require("../controllers/authcontrollers");
const {
  registerRules,
  loginRules,
  validator,
} = require("../middlewares/bodyvalidator");


const isAuth = require("../middlewares/passport");
/******* */
/**
 * @params post /auth/register
 * @description register user
 * @access PUBLIC
 */
authrouter.post("/register",registerRules(), validator, register);
/**
 * @param POST /auth/login
 * @description login user
 * @access PUBLIC
 */
authrouter.post("/login", loginRules(), validator, login);
/**
 * @param get /auth/me
 * @description get auth user
 * @access PRIVATE
 */
authrouter.get("/profil", isAuth(), getAuthUser);

module.exports = authrouter;