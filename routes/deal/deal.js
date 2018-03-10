/*
* @Author: Administrator
* @Date:   2018-03-07 14:45:40
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-10 16:17:40
*/
var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var $=require("jquery");


var connection=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"root",
	database:"cj"
});
 connection.connect();//连接是异步的  不能写在里面
 

 // 处理登录
/* GET home page. */
router.get('/login', function(req, res, next) {
	
 	
 // res.set("Content-Type","text/html");

  var queryString="select * from user where uname=?"
  // console.log(req.url);
  // console.log(req.query)
  var username=req.query.username;
  var password=req.query.password;
  console.log(username,password)
  connection.query(queryString,username,function(err,results,fields){
  	if(err){
  		throw err;
  	}
  	// console.log(results);
  	if(results.length==0){
  		// res.send("username is not exist");
  		
   res.json({status:"no",msg:"username is not exist"})
      // res.redirect("/login");
  	}
  
  	else{
  		if(results[0]["password"]===password){
  			 return res.json({status:"ok"});
  			 // res.send("ok")
  			 // res.redirect("/");
  			 // alert("hello")
  		}else{
  			// res.send("密码错误");
  			// res.redirect("/login")
        return res.json({status:"no",msg:"密码错误"});

  		}
  	}
  })

  // connection.end();
});

//处理注册
router.get("/register",function(req,res,next){
  //ajax传过去是password
  var _username=req.query.username;
  var password=req.query.password;
  
  var queryString="select * from user where uname=?"
  connection.query(queryString,_username,function(err,results,fileds){
      if(err){
        throw err;
      }else{
        console.log(results);
        if(results.length!=0){
          return res.json({status:"no",msg:"用户名已存在"});
        }else{
          var queryString_2="insert into user (uname,password) values ('"+_username+"','"+password+"') ";
          connection.query(queryString_2,function(err,results,fileds){
            if(err){
              return res.json({status:"no",msg:"未知错误"});
              throw err;
            }else{
              // console.log(results);
              return res.json({status:"ok",msg:"注册成功"});
            }
          })
        }
      }
  })
})


//处理首页信息
router.get("/info",function(req,res,next){
  var queryString="select * from info";
  connection.query(queryString,function(err,results,fileds){
    if(err){
      throw err;
    }
    // console.log(results);
    return res.json(results);
  })

})



// 处理我的页面
router.get("/mine",function(req,res,next){
  var _username=req.query.username;
      console.log(_username);
      console.log(typeof _username)
      //返回的不是字符"undefined" 是 undefined
  if(_username==undefined){
    console.log("1111");
    // res.setHeader("Cache-Control","no-cache");
    // res.redirect("/login");
    return res.json({status:"no",msg:""})
  }else{
       var queryString="select * from user where uname=?";
        connection.query(queryString,_username,function(err,results,fileds){
          if(err){
            throw err;
          }
          // console.log(results);
          return res.json({status:"ok",msg:results});
        })
  }

  

})
module.exports = router;