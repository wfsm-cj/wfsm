/*
* @Author: Administrator
* @Date:   2018-03-21 18:10:55
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-21 22:15:46
*/
var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var db=require("../conf/db.js");

// 连接数据度
var connection=mysql.createConnection(db.mysql);
connection.connect();




/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.cookies.isLoginCompanyUser)
	if(req.cookies.isLoginCompanyUser=="true"){
 		res.render('companyUser');
	}else{
  		res.render('companyUserLogin');
	}
});



router.post("/dealCompanyUser",function(req,res,next){
	var _username=req.body.username;
	var _password=req.body.password;
	var queryString="select * from companyUser where uname=?";
	connection.query(queryString,_username,function(err,results,fileds){
		if(err){
			throw err;
		}
		// console.log(results)
		if(results.length==0){
			// 设置cookie
			res.cookie("isLoginCompanyUser","false")
			res.json({"status":"no","msg":"用户名不存在"})
		}else if(results[0].password==_password){
			var _id=results[0].id;
			res.cookie("companyId",_id)
			res.cookie("isLoginCompanyUser","true")
			res.json({"status":"ok","msg":"登录成功"})
		}else{
			res.cookie("isLoginCompanyUser","false")
			res.json({"status":"no","msg":"密码错误"})
		}
	})
});


router.get('/:id', function(req, res, next) {
	var queryString="";
	var arr=req.params.id.split(".");
	// var info_Id=req.
	if(arr[1]=="html"){
		var tablename="company"+arr[0];//页面返回要查询的表名
		var flag=0;
		console.log(tablename)
		queryString="show tables";
		connection.query(queryString,function(err,results,fileds){
			if(err){
				throw err;
			}
			console.log(results)
			for(var i=0;i<results.length;i++){
				if(results[i]["Tables_in_cj"]==tablename){
					// 查询这个表

					queryString="select * from  "+tablename;
					connection.query(queryString,function(err,results,fileds){
						if(err){
							throw err;
						}
						console.log(results);
						res.json(results)
					})
					flag=1;
				}		
		}
		if(flag==0){
			// 创建这个表
					queryString=`CREATE TABLE ${tablename} (
								  id int(4) NOT NULL AUTO_INCREMENT,
								  job varchar(200) DEFAULT NULL,
								  salary varchar(100) DEFAULT '10k',
								  condition1 varchar(300) DEFAULT '1111',
								  condition2 varchar(300) DEFAULT '222222',
								  condition3 varchar(300) DEFAULT '33333',
								  PRIMARY KEY (id)
								) ENGINE=InnoDB DEFAULT CHARSET=utf8
								`;

				connection.query(queryString,function(err,results,fileds){
					if(err){
						throw err;
					}
					// console.log(results);
					queryString="select * from  "+tablename;
					connection.query(queryString,function(err,results,fileds){
						if(err){
							throw err;
						}
						console.log(results);
						res.json(results)
					})
				})
						flag=1;
		}
	})


	}
});
module.exports = router;