const express = require ('express');
const app = express()
const mongoose = require('mongoose')
const morgon = require ('morgan');
const dotenv = require('dotenv');
dotenv.config()

mongoose.connect(process.env.MONGO_URI)

.then(() => console.log('DB connected'))

mongoose.connection.on ('error' , err => {
  console.log('DB connection error : ${err.message} ');

});

// app.get ("/" , (req, res ) => {
//     res.send ("Hello world from node js")
// });

// app.listen(8080);
const morgan = require ('morgan');

//bring in routes
//const postContollers = require('./routes/post');

const postRoutes = require('./routes/post');


// const myOwnMiddleware = (req,res,next) =>{
//           console.log ('middle ware applied');
//      next();
//  };

//middeware*

app.use(morgan('dev'));
//app.use(myOwnMiddleware);

app.use("/" ,postRoutes );
 const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('a node js API is listening on port : ${port}');
});