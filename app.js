const express = require ('express');
const app = express();
const morgan = require ('morgan');

//bring in routes
const {getPosts} = require('./routes/post');

const myOwnMiddleware = (req,res,next) =>{
    console.log ('middle ware applied');
    next();
};

//middeware

app.use(morgan('dev'));
app.use(myOwnMiddleware);

app.get("/",getPosts );
const port = 8080;
app.listen(port, () => {
    console.log('a node js API is listening on port : ${port}');
});