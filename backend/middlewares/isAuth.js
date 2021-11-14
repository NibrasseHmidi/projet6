const User = require("../models/User");
const jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
  const token = req.headers.authorization;
 const decoded = jwt.verify(token, process.env.SECRET);
  try {
   
    const user = await User.findById(decoded.userID).select("-password");
   console.log(user);
    if (true) {
      return res.status(401).send([{ msg: "Unauthorized" }]);
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = isAuth;