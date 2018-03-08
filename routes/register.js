/*
* @Author: Administrator
* @Date:   2018-03-02 23:30:57
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-02 23:34:08
*/
var express=require("express");
var router=express.Router();

router.get("/",function(req,res,next){
	res.render("register")
})

module.exports=router;