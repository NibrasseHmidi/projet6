const express = require("express");
const passport = require("passport")
const app = express();
const morgan = require('morgan');
const bodyParser =require('body-parser')
const authRoutes = require("./routes/authRoutes");
const productRoute = require("./routes/productRoute");
const connectDb = require("./config/connectDb");
const cors = require('cors');
const path = require('path');

app.use('/uploads',express.static('uploads'))
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
      extended: true
    })
);
//middelwares
app.use(express.json());
app.use(passport.initialize())

//connect db
connectDb();
app.use(cors());
app.use("/auth", authRoutes);
app.use("/product", productRoute);
// start server
const port = process.env.PORT || 5000;

app.listen(port, (err) =>
  err ? console.error(err) : console.log(`server is running on port ${port}!`)
);
