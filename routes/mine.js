/*
* @Author: Administrator
* @Date:   2018-03-03 13:32:37
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-03 13:35:11
*/
var express=require("express");
var router=express.Router();

router.get("/",function(req,res,next){
	res.render("mine");
})

module.exports=router;