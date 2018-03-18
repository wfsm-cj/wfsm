/*
* @Author: Administrator
* @Date:   2018-03-18 15:16:08
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-18 15:16:19
*/
//插入头部
$.ajax({
			method:"get",
			url:"http://192.168.155.1:3000/common/header",
			success:function(data){
				$(".container").before(data);
			}
		})

// 插入footer

$.ajax({
			method:"get",
			url:"http://192.168.155.1:3000/common/footer",
			success:function(data){
				$(".container").after(data);
			}
		})