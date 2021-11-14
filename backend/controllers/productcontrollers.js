const User = require("../models/User");
const Product = require("../models/Product");
const multer = require('multer');

const path = require('path')
const storage= multer.diskStorage({

destination:function(req,res,cb){

  cb(null,path.join(__dirname,'../uploads'))
},
filename:function(req,file,cb){

  console.log(file);
  cb(null,'congar' + '-' + Date.now()+ path.extname(file.originalname))
}

})

const fileFilter=(req,file,cb)=>{
cb(null,true)

}
let upload = multer({
  storage:storage,
  fileFilter:fileFilter
})


/*****************************/
const ajoutProduct = async (req, res) => {
 

  try {
     const {name,numero,address,tarifJ,tarifS,tarifM,caution,message,ville,category
    // user,
  } = req.body;

const pic=req.file.path

    const product = new Product({
        name:name,
        numero:numero,
        address:address,
        tarifJ:tarifJ,
        tarifS:tarifS,
        tarifM:tarifM,
        caution:caution,
        message:message,
        ville:ville,
        category:category,
        pic:pic,
      // user,
    });
     
    await product.save();

    
    res.send({
      product: {
        product
        // user,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  ajoutProduct, upload 

};