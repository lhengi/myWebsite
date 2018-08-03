
const express = require('express');
const app = express();
const port = 80;
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();

const apiRoute = require('./controllers/requestHandler');



app.use('/api',apiRoute);
app.use(express.static(__dirname + "/public/build"));
app.get('/',function(req,res){

    res.sendFile('./public/build/index.html');
});


app.listen(port, function(){
    console.log(`Server start on port ${port}`);
}); 
