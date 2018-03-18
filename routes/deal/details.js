/*
* @Author: Administrator
* @Date:   2018-03-10 18:13:08
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-10 21:04:01
*/
var express = require('express');
var router = express.Router();
var mysql=require("mysql");

var connection=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"root",
	database:"cj"
})
connection.connect();

/* GET home page. */
router.get('/:id', function(req, res, next) {
	//直接获取动态路由
	console.log(req.params.id)
	var arr=req.params.id.split(".");
	if(arr[1]=="html"){
 		 var queryString="select * from info where id=?";
 		 connection.query(queryString,arr[0],function(err,results,fields){
 		 	if(err){
 		 		throw err;
 		 	}
 		 	// if(results.length==0){
 		 	// 	console.log("meiyouneirong");
 		 	// }else{
 		 	// 	res.render("detail");
 		 	// }
 		 	// res.send("detail")
 		 	console.log( results[0] );
 		 	res.render("detail",results[0]);
 		 	
 		 	// console.log(results);
 		 	// html可以用模板引擎
 		 	// {"id":3,"companyName":"奢分期","companyPic":"//www.lgstatic.com/thumbnail_100x100/i/image/M00/39/2F/CgpFT1lLvN6AWUoDAAGz2E_qpKU69.jpeg","job":"资深 Node.js 研发工程师","salary":"12k-24k","time":" [10:18发布] "}
 		 	
 		 	// return res.json(results[0]);
 		 })

	}else{
		res.send("404")
	}
});

module.exports = router;