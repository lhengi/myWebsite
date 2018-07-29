
const express = require('express');
const app = express();
const port = 5000;
const route = require('route');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();


var router = route('/api','./controllers/api.js');
app.use(router);

app.listen(port, function(){
    console.log(`Server start on port ${port}`);
});