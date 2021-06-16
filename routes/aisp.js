const {  axios } = require('axios');
var express = require('express');
var router = express.Router();
var data = require('../response.json');
var service = require('../services/offerService')
var filter = require('../filters/channelFilter')

router.get('/', function(req, res, next) {
    res.send(data);
});

router.get('/:AccountId/offers/',async function(req,res,next){
    filter.wholeresFilter(req,res);

});



module.exports = router;
