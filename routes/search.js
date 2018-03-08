/*
* @Author: Administrator
* @Date:   2018-03-03 13:25:05
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-03 13:30:50
*/
var express=require("express");
var router=express.Router();

router.get("/",function(req,res,next){
	res.render("search");
})

module.exports=router;