const express = require("express");
const productrouter = express.Router();


const validation = require("../middlewares/validation")
const { ajoutProduct, upload} = require("../controllers/productcontrollers");
/**
 * @param POST /ajout
 * @description ajoute une annonce
 * @access PRIVATE
 */
productrouter.post("/add", upload.single('image'), ajoutProduct,validation);
module.exports = productrouter;