/*
* @Author: Administrator
* @Date:   2018-03-03 14:42:44
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-07 14:44:56
*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
 	res.send("admin")
});

module.exports = router;