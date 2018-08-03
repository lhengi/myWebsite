
const express = require('express');
const app = express();
const port = 8080;
//const httpsPort = 443;
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
const fs = require('fs');
const apiRoute = require('./controllers/requestHandler');

const httpsOptions = {
    cert : fs.readFileSync('/etc/letsencrypt/live/lhengi.com/fullchain.pem'),
    key : fs.readFileSync('/etc/letsencrypt/live/lhengi.com/privkey.pem')
};


app.use('/api',apiRoute);
app.use(express.static(__dirname + "/public/build"));
app.get('/',function(req,res){

    res.sendFile('./public/build/index.html');
});


app.listen(port, function(){
    console.log(`Server start on port ${port}`);
}); 

httpsOptions.creatServer(httpsOptions,app).listen(443);
