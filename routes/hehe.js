/*
* @Author: Administrator
* @Date:   2018-03-01 16:09:51
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-01 16:14:15
*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hehe', function(req, res, next) {
  res.render('index', { title: 'cj' });
});

module.exports = router;