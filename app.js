const https = require('https');
const express = require('express');
const app = express();
const httpApp = express();
const port = 8080;
//const httpsPort = 443;
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
const fs = require('fs');
const apiRoute = require('./controllers/requestHandler');
const mongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/clientTracker";

const httpsOptions = {
    cert : fs.readFileSync('/etc/letsencrypt/live/lhengi.com/fullchain.pem'),
    key : fs.readFileSync('/etc/letsencrypt/live/lhengi.com/privkey.pem')
};


app.use('/api',apiRoute);
app.use(express.static(__dirname + "/public/build"));
app.get('/',function(req,res){

    res.sendFile('./public/build/index.html');
    var client_ip = res.connection.remoteAddress || req.headers['x-forwarded-for'];
    var timeOfVist = new Date();
    
    MongoClient.connect(url, function(err,db){

	var collection = db.collection('clientStats');
	collection.update({'ip':client_ip},{{$inc:{numberOfVisit:1}},{$push:{timeStamp:timeOfVisit.toLocaleString()}} });

    });

});

httpApp.get('*', function(req,res){

    res.redirect('https://'+req.headers.host + req.url);
});

httpApp.listen(80,function(){
    console.log("http server start on 80");
});




app.listen(port, function(){
    console.log(`Server start on port ${port}`);
}); 

https.createServer(httpsOptions,app).listen(443);
