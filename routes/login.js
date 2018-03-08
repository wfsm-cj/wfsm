// /*
// * @Author: Administrator
// * @Date:   2018-03-01 15:36:31
// * @Last Modified by:   Administrator
// * @Last Modified time: 2018-03-07 14:53:27
// */
// var express=require("express");
// var router=express.Router();

// router.get("/login",function(req,res,next){
// 	// res.render('index',function(err,html){
// 	// 	// res.send(html)
// 	// })
// 	res.send("login");
// })

// module.exports=router;

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');

});

module.exports = router;