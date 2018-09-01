<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1,user-scalable=no">
<title>登录</title>
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/animate.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/style/bootstrap/css/bootstrap.min.css">
<script src="${pageContext.request.contextPath}/style/jquery-1.11.0.min.js"></script>
<script src="${pageContext.request.contextPath}/style/bootstrap/js/bootstrap.min.js"></script>
<script src="${pageContext.request.contextPath}/static/js/wow.min.js"></script>
<script type="text/javascript"> new WOW().init(); </script>
<style type="text/css">
	body{
		background: url("/static/images/dl_bg.jpg") no-repeat center left;
	}
	nav.navbar.navbar-default {
	    opacity: 0.8;
	}
	#loginForm #btnLogin{
		margin-top:30px;
		width:100%; 
		height: 40px;
   		line-height: 29px;
   		background-color: #2b8cc5; 
   		color: #fff;
	}
	#msg{
		text-align: center; 
		margin-bottom: 10px; 
		height: 33px;
		line-height:33px;
		margin-top: -5px; 
		font-size:11px;
		font-weight:bold;
		border-radius:8px;
		display:none;
		
		border: solid 1px #ffc2b3;			
    	background: #ffd1ca;
    	color: red; 	 
	}
</style>
</head>
<body>

<jsp:include page="common/top.jsp"></jsp:include>

<div class="col-md-4 col-sm-4"></div>
<div class="container col-md-3  col-sm-3 col-md-offset-1 wow fadeIn" style="margin-top: 5%;">
	<div class="panel panel-default" style="filter:alpha(opacity:95); opacity:0.95;  -moz-opacity:0.95;-khtml-opacity: 0.95">
	  <div class="panel-body" style="padding: 35px 20px 20px;">
	  
	  	<div id="msg">
	  		<span>用户名或密码错误</span>
	  	</div>
	  
		<form method="post" id="loginForm">
		  <div class="form-group">
		    <label for="username">用户名</label>
		    <input type="text" class="form-control" id="username" name="username" autocomplete="off" placeholder="用户名 / 学号">
		  </div>
		  <div class="form-group">
		    <label for="password">密码</label>
		    <input type="password" class="form-control" id="password" name="password" autocomplete="off" placeholder="密码">
		  </div>
		  
<!-- 验证码  -->
 <div class="form-group">
   	<div class="col-md-8 col-sm-8 col-xs-8" style="margin-left: -15px;">
    	<label for="yanZhengMa">验证码</label>
    	<input type="text" class="form-control" id="yanZhengMa" name="yanZhengMa" autocomplete="off" placeholder="验证码" onkeypress="submitForm(event)">
    </div>
    <div class="col-md-4 col-sm-4 col-xs-4" style="margin-left: -10px;">
    	<!-- <img alt="验证码" src="/images/yanZhengMa.jpg" height="50px" width="90px" style="margin-top: 10px"> -->
		<a href="javascript:void(0);" onclick="VerificationCode()"> 
			<img id="randCodeImage" alt="验证码" src="${pageContext.request.contextPath}/generate.action" width="90px" height="50px" style="margin-top: 10px" />
		</a>
    </div>
 </div>
 
		  <button type="button" class="btn btn-default" id="btnLogin">登&nbsp;&nbsp;录</button>
		</form>	  	
	  </div>
	</div>
</div>
<div class="col-md-4  col-sm-4"></div>
</body>

<script type="text/javascript">
var redirectUrl = "${redirectUrl}";

/**
*  验证码刷新
*/
function VerificationCode(){
    var rad = Math.floor(Math.random() * Math.pow(10, 8));
    //uuuy是随便写的一个参数名称，后端不会做处理，作用是避免浏览器读取缓存的链接
    $("#randCodeImage").attr("src", "${pageContext.request.contextPath}/generate.action?uuuy="+rad);
}

/**
 * 回车提交
 */
function submitForm(even) {
    console.log(even)
	if(event.keyCode == 13){
        $("#btnLogin").click();
	}
}

$(function(){
	//点击登录
	$("#btnLogin").click(function(){
		var username = $.trim($("#username").val());
		var password = $.trim($("#password").val());
		var yanZhengMa = $.trim($("#yanZhengMa").val());
		$("#msg").hide(300);
		
		//验证
		if(username.length==0 || password.length==0 || yanZhengMa.length==0){
			$("#msg span").text("请正确填写");
			$("#msg").show(300);
			return ;
		}
		
		//Ajax请求
		$.post("${pageContext.request.contextPath}/login.action",$("#loginForm").serialize(),function(data){

			var rad = Math.floor(Math.random() * Math.pow(10, 8));
			if(data.status != 200){
				$("#msg span").text(data.msg);
				$("#msg").show(300);
				
				//清空验证码输入框内容
				$("#yanZhengMa").val(""); // 清空并获得焦点
				if(data.status == 201){
					$("#yanZhengMa").focus();
				}
				//重新获取验证码
				$("#randCodeImage").attr("src", "${pageContext.request.contextPath}/generate.action?uuuy="+rad);
			}else{
				location.href = data.msg;
			}
		}); //$.post
	});
})
</script>
</html>