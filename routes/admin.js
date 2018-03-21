/*
* @Author: Administrator
* @Date:   2018-03-03 14:42:44
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-20 12:53:09
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
	// 设置一个cookie判断是否登录
	console.log(req.cookies.isLogin);
	if(req.cookies.isLogin=="true"){
		res.render("admin")
	}else{
		res.render("adminLogin");
	}
	// res.render("adminLogin")
})
// router.use("/index",function(req,res,next){
// 	// if()
// 	res.render("admin")
// })
// res.send()解析json格式的post参数  res.json()解析get参数
router.post("/dealAdminLogin",function(req,res,next){
	// console.log(req.cookies.usernameAdmin);
	// console.log(res.locals)
	// console.log(req.body)
	// if(req.body.username==undefined){
	// 	res.render("adminLogin");
	// }else{
		var _username=req.body.username;
		var _password=req.body.password;
		var queryString="select * from adminuser where uname=?";
		connection.query(queryString,_username,function(err,results,fileds){
			if(err){throw err;}
			console.log(results.length)
			if(results.length==0){
				res.cookie("isLogin","false")

				res.send({"status":"no","msg":"用户名不存在"})
			}else{
				console.log(results[0].password,_password)
				if(results[0].password!=_password){
					console.log("不等")
					res.cookie("isLogin","false")

					res.send({"status":"no","msg":"密码错误"})
				}else{
					// console.log("相等")
					// 不能使用render 或者redirect 可以传递参数在前台跳转
					// res.render("admin");
					res.cookie("isLogin","true")

					res.send({"status":"ok","msg":"登录成功"});
					// res.render("admin")

				}
			}
			
		})
		// res.render("admin");
	// }
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
 		queryString="select * from company";

 		connection.query(queryString,function(err,results,fileds){
	 		if(err){
	 			throw err;
	 		}
	 		res.json(results);

		})
 	}else if(req.query.type=="del"){
 		console.log("AAAAAAAAAAAAAAAAAAA")
 		queryString="delete from company where id=?";
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

 		queryString="update company set companyName='"+_companyName+"',address='"+_address+"',companyInfo='"+_info+"',companyPerson='"+_companyPerson+"',tel='"+_tel+"',companyPic='"+_pic+"' where id=?";
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

router.get('/infoList', function(req, res, next) {
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
 		var _job=req.query.job;
 		var _salary=req.query.salary;
 		var _time=req.query.time;
 		var _condition1=req.query.condition1;
 		var _condition2=req.query.condition2;
 		var _condition3=req.query.condition3;
 		var _tel=req.query.tel;
 		var _pic=req.query.pic;

 		queryString="update info set companyName='"+_companyName+"',address='"+_address+"',job='"+_job+"',salary='"+_salary+"',time='"+_time+"',condition1='"+_condition1+"',condition2='"+_condition2+"',condition3='"+_condition3+"',companyPic='"+_pic+"' where id=?";
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