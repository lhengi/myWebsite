var express = require('express');
var router = express.Router();


router.get('/',function(req,res){
    res.send('This is the home of api');
});

router.get('/hello',function(req,res){
    console.log('request handled in requesthandler');
});


module.exports = router;