	$(function(){
				
				
				var password_2=$("#password_2").val();
				var flag=0;
				var flag_pass_1=0;
				var flag_pass_2=0;
				
				$("#verfication").text(code());

			$("#username").blur(function(){
					var _username=$("#username").val();
					var reg=/^[a-zA-Z][a-zA-Z0-9_]{3,}/   //用户名4+
					// console.log(_username);
					if(_username.length==0){
						$(this).css("color","Red");
						$(this).val("用户名为空");
						flag=0;
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
				$("#password_1").focus(function(){
					if(flag_pass_1==0){
						$(this).val("");
						$(this).css("color","black");
					}
				})
				$("#password_2").focus(function(){
					if(flag_pass_2==0){
						$(this).val("");
						$(this).css("color","black");
					}
				})

				$("#password_1").blur(function(){
					var password_1=$("#password_1").val();
					if(password_1.length==0){
						$(this).css("color","Red");
						$(this).val("密码不能为空") 
						return;
					}
					var reg=/^[a-zA-Z][a-zA-Z0-9_]{3,}/;
					if(isTrue(password_1,reg,"密码格式不正确",$(this),flag_pass_1)){
						flag_pass_1=1;
					}else{
						flag_pass_1=0;
					}
				})
				$("#password_2").blur(function(){
					var password_1=$("#password_1").val();
					var password_2=$("#password_2").val();
					var reg=/^[a-zA-Z][a-zA-Z0-9_]{3,}/;
					if(isTrue(password_2,reg,"密码格式不正确",$(this))){
						flag_pass_2=1;
					}else{
						flag_pass_2=0;
					}
					if(password_1!=password_2){
						$(this).css("color","Red");
						$(this).val("两次密码不一致")
					}
				})
		
			//点击换验证码
			$("#verfication").click(function(){
				$(this).text(code());
			})
			var flag_code=0;
			$("#verfication-validation").blur(function(){
				var code_1=$("#verfication").text();
				var code_2=$(this).val();
				// console.log(code_1,code_2)
				if(code_1!==code_2){
					$(this).css("color","red");
					$(this).val("验证码不正确");
					flag_code=0;
				}else{
					flag_code=1;
					$(this).css("color","black");
				}
				console.log(flag_code)
			})
			$("#verfication-validation").focus(function(){
				console.log(flag_code)
				if(flag_code==0){
					$(this).val("");
					$(this).css("color","black");
				}
			})


//提交表单
			
					$("#register").submit(function(e){
						e.preventDefault();

						if(flag==1 && flag_code==1 && flag_pass_1==1 && flag_pass_2==1){
							var _username=$("#username").val();
							var _password=$("#password_1").val();

							$.ajax({
								url:"http://192.168.155.1:3000/deal/register",
								method:"get",
								data:{
									"username":_username,
									"password":_password
								},
								success:function(data){
									// console.log(data)
									if(data.status=="ok"){
										alert("注册成功");
										location.href="/login";
									}
								}
							})
						}else{
							alert("请输入正确信息");
						}
						
					})
			
		
		})