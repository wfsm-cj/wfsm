
	// var bw=document.documentElement.clientWidth;
	// var fz=(bw/720)*100+"px"
	// document.querySelector("html").style.fontSize=fz;
var bw=document.documentElement.clientWidth;
		var fz=bw*100/720;
		var ff=document.querySelector("html").style.fontSize=fz+"px"

/*判断表单内容是否合法  true表示合法   val是表单的值  
reg正则 msg错误后的提示信息  obj操作这个函数的jq对象*/
function isTrue(val,reg,msg,obj){
					var result=reg.test(val);
					if(!result){
						obj.css("color","red");
						obj.val(msg);
						return false;
					}else{
						obj.css("color","black");
						return true;
					}
				}


//生成验证码
function code(len){
				var len=len || 4;
				var arr=[0,1,2,3,4,5,6,7,8,9,"z","x","c","v","b","n","m","a","s"];//...
				var str=""
				for(var i=0;i<len;i++){
					var rand=Math.floor(arr.length*Math.random());
					str+=arr[rand];
				}
				return str;
			}


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