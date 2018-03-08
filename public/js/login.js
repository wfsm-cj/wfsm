		
		$(function(){
			var flag=0;
			$("#username").blur(function(){
					var _username=$("#username").val();
					var reg=/^[a-zA-Z][a-zA-Z0-9_]{3,}/   //用户名4+
					// console.log(_username);
					if(_username.length==0){
						$(this).css("color","yellow");
						$(this).val("用户名为空");
						flag=0;
						console.log($(this).css("color"))
						console.log("hello")
						return;
					}
					if(isTrue(_username,reg,"用户名非法",$(this))){
						flag=1;
					}else{
						flag=0;
					}
				})
				$("#username").focus(function(){
					if(flag==0){
						$(this).val("");
						$(this).css("color","black");
					}
				})

				var flag_pass=0;
				$("#password").blur(function(){
					if($(this).val().length!=0){
						flag_pass=1
					}
				})

			$("#myForm").submit(function(e){
				e.preventDefault();
				// console.log("aaa")
				// return false;
				var _username=$("#username").val();
				var _password=$("#password").val();


				if(flag==1 && flag_pass==1){

					alert("fdsa")
					$.ajax({
						method:"get",
						url:"http://192.168.155.1:3000/deal/login",
						data:{
							username:_username,
							password:_password
						},
						success:function(data){
							// console.log(data)
							alert("success")
							if(data.status==="ok"){
								alert("登录成功");
								location.href="/";
							}else{
								alert(data.msg);
							}
						},
						error:function(xhr,msg){
							alert(xhr)
							alert(msg)
						}
					})
				}else{
					alert("请输入正确信息");
				}
			})
		})