/*
* @Author: Administrator
* @Date:   2018-03-03 14:42:44
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-18 23:08:49
*/
var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var $=require("jquery");
var db=require("../conf/db.js");
//连接数据库 
var connection=mysql.createConnection(db.mysql);
connection.connect();

/* GET home page. */
router.get("/",function(req,res,next){
	res.render("admin")
})
router.get('/userList', function(req, res, next) {
	var queryString="";
 	console.log(req.query.delIndex);
 	if(req.query.currIndex==undefined){
 		queryString="select * from user";

 		connection.query(queryString,function(err,results,fileds){
	 		if(err){
	 			throw err;
	 		}
	 		res.json(results);

		})
 	}else if(req.query.type=="del"){
 		queryString="delete from user where id=?";
 		connection.query(queryString,req.query.currIndex,function(err,results,fileds){
 			if(err){
 				throw err;
 			}
 			console.log(results)
 			res.json({"status":"ok","msg":"删除成功"});
 		})
 	}else if(req.query.type=="alter"){
 		var _uname=req.query.username;
 		var _pass=req.query.password;
 		var _tel=req.query.tel;
 		var _pic=req.query.pic;
 		queryString="update user set uname='"+_uname+"',password='"+_pass+"',tel='"+_tel+"',pic='"+_pic+"' where id=?";
 		connection.query(queryString,req.query.currIndex,function(err,results,fileds){
 			if(err){
 				throw err;
 			}
 			res.json({"status":"ok","msg":"修改成功"})
 		})

 	}
 	// if(req.query.info=="userList"){

	 	
	// }
});


router.get('/companyList', function(req, res, next) {
	var queryString="";
 	console.log(req.query.delIndex);
 	if(req.query.currIndex==undefined){
 		queryString="select * from info";

 		connection.query(queryString,function(err,results,fileds){
	 		if(err){
	 			throw err;
	 		}
	 		res.json(results);

		})
 	}else if(req.query.type=="del"){
 		console.log("AAAAAAAAAAAAAAAAAAA")
 		queryString="delete from info where id=?";
 		connection.query(queryString,req.query.currIndex,function(err,results,fileds){
 			if(err){
 				throw err;
 			}
 			console.log(results)
 			res.json({"status":"ok","msg":"删除成功"});
 		})
 	}else if(req.query.type=="alter"){
 		var _companyName=req.query.companyName;
 		var _address=req.query.address;
 		var _info=req.query.info;
 		var _companyPerson=req.query.companyPerson;
 		var _tel=req.query.tel;
 		var _pic=req.query.pic;

 		queryString="update info set companyName='"+_companyName+"',address='"+_address+"',companyInfo='"+_info+"',companyPerson='"+_companyPerson+"',tel='"+_tel+"',companyPic='"+_pic+"' where id=?";
 		connection.query(queryString,req.query.currIndex,function(err,results,fileds){
 			if(err){
 				throw err;
 			}
 			res.json({"status":"ok","msg":"修改成功"})
 		})

 	}
 	// if(req.query.info=="userList"){

	 	
	// }
});
router.get("/deal",function(req,res,next){
	// res.render("admin")
	res.json({"status":"hahah"})
})

module.exports = router;