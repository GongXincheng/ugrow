<%@ page import="com.hyg.entity.News" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="gxc" uri="http://gxc.cn/common/" %>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="${pageContext.request.contextPath}/style/bootstrap/css/bootstrap.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/static/css/animate.css" rel="stylesheet" >
    <link href="${pageContext.request.contextPath}/style/bootstrap/css/bootstrap-datetimepicker.min.css" rel="stylesheet" >
    <script src="${pageContext.request.contextPath}/style/jquery-1.11.0.min.js"></script>
    <script src="${pageContext.request.contextPath}/static/js/wow.min.js"></script>
    <script src="${pageContext.request.contextPath}/style/jquery.singlePageNav.min.js"></script>
    <script> new WOW().init() </script>
    <title>荟英谷</title>

    <style>
        .sousuo_left {
            margin-left: 0px;
            float: left;
            border: #dddddd 1px solid;
            background: #fff;
            height: 35px;
            border-radius: 10px;
            padding: 0 10px;

        }
        .sousuo_k {
            background: #fff;
            width: 200px;
            height: 28px;
            border: none;
            outline: none;
            float: left;
            margin-top: 3px;
        }
        .clearx {
            cursor: pointer;
            height: 40px;
            width: 40px;
            display: inline-block;
            line-height: 40px;
            text-align: center;
            margin-top: -3px;
        }
        .sousuo_btn {
            cursor: pointer;
            background: url(/static/images/search_25x25.png) no-repeat center center;
            width: 40px;
            height: 40px;
            border: none;
            margin-top: -3px;
            margin-left: 10px;
            border-radius: 10px;
        }
        .sousuo_btn:focus{
            border:none;
            outline: none;
            box-shadow: none;
            outline: none;
        }
        #searchForm .form-group{
            margin-left: 00px;
        }
        .div_newsList_footer{
            margin-top: 10px;
        }
        #div_right_list_ul{
            text-decoration: none;
            list-style: none;
            padding-left: 0px;
        }
        #a_right_list:hover{
            background: #ffff00;
        }
        .modal-body-body p{
            padding: 15px 0px;
        }
    </style>
</head>
<body>

    <section id="pageTop"></section>
    <a href="#pageTop" id="a_top"  style="display: none; position: fixed; bottom: 40px; right: 40px;">
        <img src="${pageContext.request.contextPath}/static/images/top.png" alt="返回顶部">
    </a>

    <jsp:include page="common/top.jsp"></jsp:include>

    <!-- 条件的隐藏域 -->
    <input type="hidden" id="search_startDate" value="${condition.startDate}">
    <input type="hidden" id="search_endDate" value="${condition.endDate}">
    <input type="hidden" id="search_province" value="${condition.province}">
    <input type="hidden" id="search_school" value="${condition.school}">

    <div class="container">
        <div class="row">
            <div class="col-md-8" >

        <form action="${pageContext.request.contextPath}/search.html" method="POST" id="searchForm2" style="margin: 0px;" class="form-inline form-group-sm">
                <input type="hidden" name="page" id="page">
                <input type="hidden" name="school" id="school">
                <!-- 搜索框 -->
                <div id="left_head" style="margin-top: 20px;">
                    <div class="sousuo_left">
                        <input type="text" class="sousuo_k" name="keyWord" id="sousuo_k" maxlength="30" autocomplete="off" value="${condition.keyWord}"/>
                        <b class='clearx'>
                            <img src="/static/images/close_18x18.png" alt="清除" style="margin-top: 12px; height: 15px; width: 15px;" >
                        </b>
                    </div>
                    <input class="sousuo_btn" id="sousuo_btn" type="button" value=""/>
                </div>

                <!-- 条件 -->
               <div style="margin-top: 15px; display: none;">
                       <!-- 时间 -->
                       <div class="form-group" style="margin-left: 0px;">
                           <div class="input-group date form_date" >
                               <input class="form-control" size="10" id="startDate" type="text" name="startDate" placeholder="起始日期" readonly>
                               <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                               <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                           </div>
                       </div>
                       <div class="form-group">
                           <div class="input-group date form_date" >
                               <input class="form-control" size="10" id="endDate" type="text" name="endDate" placeholder="终止日期" readonly>
                               <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                               <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                           </div>
                       </div>
                       <!-- 省份 -->
                        <div class="form-group">
                           <select class="form-control" name="province" id="province">
                               <option value="" selected>省</option>
                               <option value="山东省">山东省</option>
                               <option value="河南省">河南省</option>
                               <option value="上海市">上海市</option>
                           </select>
                        </div>
                        <!-- 市区 -->
                        <div class="form-group">
                           <select class="form-control" name="city" id="city">
                               <option value="" selected>市</option>
                               <option value="山东省">潍坊市</option>
                               <option value="河南省">河南省</option>
                               <option value="上海市">上海市</option>
                           </select>
                        </div>
                       <!-- 排序 -->
                       <%--<div class="form-group">--%>
                           <%--<select class="form-control" name="orderBy">--%>
                               <%--<option value="" selected>排序</option>--%>
                               <%--<option value="1">发布时间</option>--%>
                               <%--<option value="2">发布时间</option>--%>
                               <%--<option value="3">发布时间</option>--%>
                           <%--</select>--%>
                       <%--</div>--%>
                       <div class="form-group">
                           <input type="reset" value="重置" class="btn btn-sm btn-primary">
                       </div>
               </div><!-- 条件 -->
         </form>

                <!-- 查询条数 -->
                <div class="panel panel-default" style="margin-top: 15px;">
                    <div class="panel-heading">
                        <h4 class="panel-title" style="font-weight: bold; float: left" >查询结果</h4>
                        <div style="margin-left: 0px; color: rgb(34, 177, 76); float: right;">
                            查询到相关数据约 <span style="color: #2e95f3; font-weight: bold;">${total}</span> 条
                        </div>
                        <div style="clear: both"></div>
                    </div>
                    <div class="panel-body">
                        <!-- 判断是否为null -->
                        <c:if test="${ itemsList.size() == 0  || itemsList==null }">
                            <div class="itemListIsNull" style="margin-top: 100px;margin-bottom: 100px; text-align: center;">
                                <img src="${pageContext.request.contextPath}/static/images/noSearch_100.png" alt="暂无查询结果" style="margin-right: 20px;">
                                <span style="font-size: 23px;">暂无查询结果</span>
                            </div>
                        </c:if>

                        <c:forEach items="${itemsList}" var="news" varStatus="vs">
                            <div class="div_newsList" style="border-bottom: 1px solid #dddddd; padding: 15px 20px;" >
                                <div class="div_newsList_title">
                                    <!-- 标题 -->
                                    <a href="javascript:void(0);" onclick="showNewModal(${vs.count})">${news.title}</a>
                                </div>
                                <div class="div_newsList_author" style="margin-top: 10px;">
                                    <%--<div class="col-md-3" style="padding-left: 0px;">--%>
                                        <%--<!-- 官网 -->--%>
                                        <%--<a href="javascript:void(0);" style="font-weight: bold;">oobmag.tumblr.com</a>--%>
                                    <%--</div>--%>
                                    <div class="col-md-8"  style="padding-left: 0px;">
                                        <!-- 发布时间 -->
                                        <span>${news.time}</span>
                                    </div>
                                </div>
                                <div style="clear: both"></div>
                                <div class="div_newsList_body" style="margin-top: 10px;">
                                    <!-- 正文 -->&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <c:set var="content1" value="${news.content}" scope="request"></c:set>
                                    <%
                                        //去掉<p>标签后
                                        String content = (String) request.getAttribute("content1");
                                        content = content.replace("<p>","").replaceAll("</p>","");

                                        //处理content字符串，将开始标签替换为$，将结束标签替换为&
                                        String $content = content.replace("<span style=\"color:red\">", "$").replace("</span>","&");
                                        //截取
                                        if($content.length() > 160){
                                            $content = $content.substring(0,160);
                                        }
                                        //判断开始标签和结束标签谁在前
                                        int beginIndex = $content.lastIndexOf("$");
                                        int endIndex = $content.lastIndexOf("&");
                                        if(beginIndex > endIndex){
                                            $content = $content + "&";
                                        }
                                        //将字符串替换回来
                                        content = $content.replace("$","<span style=\"color:red\">").replace("&","</span>");
                                        out.print(content);
                                    %>

                                </div>
                                <div class="div_newsList_footer" style="color: #888888;">
                                    <div class="col-md-2 col-xs-3" style="padding-left: 0px;">
                                        <!-- 省份 -->
                                        <span style="font-size: 13px;">${news.province}</span>
                                    </div>
                                    <div class="col-md-8 col-xs-8"  style="padding-left: 0px;">
                                        <!-- 学校 -->
                                        <span style="font-size: 13px;">${news.school}</span>
                                    </div>
                                    <div style="clear: both"></div>
                                </div>
                            </div>

                            <!-- 文章详情Modal -->
                            <div class="modal fade bs-example-modal-sm newModel_${vs.count}" tabindex="-1" role="dialog" aria-labelledby="newsLabel">
                                <div class="modal-dialog  modal-lg" role="document">
                                    <div class="modal-content">
                                        <!-- Modal Head -->
                                        <div class="modal-header">
                                            <!-- 关闭按钮 -->
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                            <h4 class="modal-title" id="newsLabel"  style="font-weight: bold; letter-spacing: 1px;">新闻详情</h4>
                                        </div>
                                        <!-- Modal Body -->
                                        <div class="modal-body" style="padding:0px; ">
                                            <div class="modal-body-title" style="padding: 5px 200px;text-align: center;font-weight: bold;"><h3 style="line-height: 40px; letter-spacing: 1px;">${news.title}</h3></div>
                                            <div class="modal-body-time" style="text-align: center;padding-bottom: 20px; border-bottom: 1px dashed #dddddd; font-size: 15px;">
                                             <span>${news.school}</span><span style="margin-left: 50px;">发布时间：${news.time}</span></div>
                                            <div class="modal-body-body" style="padding: 20px 50px;line-height: 30px; font-size: 16px;">
                                                    ${news.content}
                                            </div>
                                        </div><!-- modal-body -->
                                        <div class="modal-footer">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </c:forEach>
                        <!-- 分页 -->
                        <c:if test="${ !(itemsList.size() == 0  || itemsList==null) }">
                            <nav aria-label="Page navigation" style="text-align: center;">
                                <ul class="pagination">
                                        ${pageCode}
                                </ul>
                            </nav>
                        </c:if>
                    </div><!-- panel default -->
                </div><!-- col-md-9 -->
            </div><!-- col-md-8  -->


            <!-- Right -->
            <div class="col-md-3" style="border-left: 1px solid #dddddd;">
                <div id="div_right_provinces">
                    <!-- Title -->
                    <div id="div_right_provinces_title" style="margin-top: 40px;padding-bottom: 10px;">
                        学校分布 <span style="font-weight: bold;color: #ff7800;">TOP10</span>
                    </div>
                    <!-- list -->
                    <div id="div_right_list" style="border-top: 1px solid #dddddd;">
                        <ul id="div_right_list_ul">
                            <c:forEach items="${schoolList}" var="schoolTop" varStatus="vs" begin="0" end="10">
                                    <li style="border-bottom: 1px solid #dddddd;">
                                        <input type="hidden"  id="school_keyWord" value="${condition.keyWord}">
                                        <a href="javascript:void(0);" style="font-size: 15px;" id="a_right_list"
                                           onclick="findBySchool('${schoolTop.school}','${condition.keyWord}')">
                                            <div class="row" style="padding: 11px 0px 11px 0;">
                                                <div class="col-md-2 col-xs-2">
                                                    <span style="background: ${vs.count > 3 ? '#666666' : '#ff7800'}; padding: 4px; color: #ffffff">${vs.count}</span>
                                                </div>
                                                <div class="col-md-7 col-xs-7" style="">${schoolTop.school}</div>
                                                <div class="col-md-2 col-xs-2" style="margin-left: -20px;">${schoolTop.schoolNum}</div>
                                            </div>
                                        </a>
                                    </li>
                            </c:forEach>

                        </ul>
                    </div><!-- list -->
                </div><!-- div_right_provinces -->
            </div><!-- Right -->
        </div> <!-- row -->
    </div>

    <script src="${pageContext.request.contextPath}/style/bootstrap/js/bootstrap.min.js"></script>
    <script src="${pageContext.request.contextPath}/style/bootstrap/js/bootstrap-datetimepicker.min.js"></script>
    <script src="${pageContext.request.contextPath}/style/bootstrap/js/bootstrap-datetimepicker.zh-CN.js"></script>
    <script src="${pageContext.request.contextPath}/static/js/echarts.min.js"></script>
    <script>
        //$("#newsModal").modal('show');
    </script>
<script>
$(function(){
    //返回顶部
    $(window).scroll(function(){
        var topp = $(document).scrollTop();
        if(topp > 1000){
            $("#a_top").css("display","block")
        }else{
            $("#a_top").css("display","none")
        }
    })

    //页面加载时，将查询条件赋值
   var search_startDate = $("#search_startDate").val();
    var search_endDate = $("#search_endDate").val();
    var search_province = $("#search_province").val();
    var search_school = $("#search_school").val();
    $("#startDate").val(search_startDate);
    $("#endDate").val(search_endDate);
    $("#province").val(search_province);
    $("#school").val(search_school);

    //1、日期插件
    $('.form_date').datetimepicker({
        language:  'zh-CN',
        weekStart: 1,
        format: 'yyyy-mm-dd',//显示格式
        todayBtn:  1,
        autoclose: 1,//选择后自动关闭
        todayHighlight: 1,//今天高亮
        startView: 2,
        minView: 2,
        forceParse: 0
    });

    //清除keyWord框
    $(".clearx").click(function(){
        $(".sousuo_k").val("");
    });

    //当搜索的时候，判断学校的keyword和框里的keyword是否相同
    $("#sousuo_btn").click(function(){
//        var kewWord1 = $("#school_keyWord").val();
//        var kewWord2 = $("#sousuo_k").val();
//        if(kewWord1 != kewWord2){
//            $("#school").val("");
//        }
        $("#school").val("");
        $("#searchForm2").submit();
    });
    $("#sousuo_k").keyup(function(even){
        if(even.keyCode == 13){
//            var kewWord1 = $("#school_keyWord").val();
//            var kewWord2 = $("#sousuo_k").val();
//            if(kewWord1 != kewWord2){
//                $("#school").val("");
//            }
            $("#school").val("");
            $("#searchForm2").submit();
        }
    });

}); //$(function(){

//根据学校和keyWord查询
function findBySchool(school, keyWord) {
    //给form表单的school赋值
    $("#school").val(school.trim());
    //给keyWord框中的内容
    $(".sousuo_k").val(keyWord);
    $("#startDate").val("");
    $("#endDate").val("");
    $("#province").val("");
    $("#page").val(1);
    //提交表单
    $("#searchForm2").submit();
}

//分页
function pageHelp(element, page){
    $("#page").val(page);
    $("#searchForm2").submit();
}

//显示新闻详情modal框
function showNewModal(count) {
    $(".newModel_" + count).modal("show");
}
</script>
</body>
</html>
