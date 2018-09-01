<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="${pageContext.request.contextPath}/style/bootstrap/css/bootstrap.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/static/css/index.css" rel="stylesheet" >
    <link href="${pageContext.request.contextPath}/static/css/animate.css" rel="stylesheet" >
    <script src="${pageContext.request.contextPath}/style/jquery-1.11.0.min.js"></script>
    <script src="${pageContext.request.contextPath}/static/js/wow.min.js"></script>
    <script>new WOW().init()</script>
    <title>荟英谷</title>
</head>
<body style="background: #10161d;">
<jsp:include page="common/top.jsp"></jsp:include>

<div class="container-fluid" style="padding: 0px; margin: 0px;">
    <!--左 -->
    <div class="col-md-10" style="background: url(/static/images/point_bg1.jpg) no-repeat top center ;padding: 0px;margin: 0px;">
        <!-- 指标 -->
        <div class="col-md-3 container" id="echarts_left" style="padding: 0px;margin: 0px;color: #e5e5e5">
            <div class="col-md-12" id="left_list">
                <div>
                    <label for="keyWords">关键词</label>
                    <select id="keyWords"  class="form-control input-sm">
                    </select>
                </div>
                <span id="span_btn">
                    <button id="btnKeyWord" class="btn btn-info btn-sm">关键词管理</button>
                </span>
                <span style="margin-top: 10px; font-weight: bold;border-top: 1px solid #555555">数据总计</span>
                <span id="span_num">
                </span>
            </div>
            <div class="col-md-12" id="left_line1"></div>
            <div class="col-md-12" id="left_bar1"></div>
        </div>
        <!-- 地图 -->
        <div class="col-md-9">
            <div  class="wow fadeIn" id="main" style="width: 100%;height: 90%;"></div>
        </div>
    </div>
    <!-- 右 -->
    <%--<div class="col-md-2" style="padding: 0px; overflow:scroll;" id="right_news_list"></div>--%>
    <div class="col-md-2" style="padding: 0px; overflow:scroll;" id="right_news_list"></div>
</div>

<!-- 关键词模态框 -->
<div class="modal fade bs-example-modal-sm" id="keyWordModal" tabindex="-1"
     role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog  modal-md" role="document">
        <div class="modal-content">
            <!-- Modal Head -->
            <div class="modal-header" style="padding: 10px;">
                <!-- 关闭按钮 -->
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel"  style="padding-left: 10px;  font-size: 16px; font-weight: bold;letter-spacing: 1px;">关键词管理</h4>
            </div>

            <!-- Modal Body -->
            <div class="modal-body" style="padding:0px; ">
                <!-- body -->
                <div id="modal-body-body">
                    <div class="panel panel-default table-responsive" style="margin-bottom: 0px;table-layout:fixed">
                        <!-- panel_head -->
                        <div class="panel-heading" style="font-size: 15px;font-weight: bold; height: 45px; padding:13px 0px; ">
                            <div class="col-md-4 col-sm-4 col-xs-6" >
                                <input type="text"  id="inputkeyWord" class="form-control input-sm" placeholder="关键词" style="margin-top: -5px;">
                            </div>
                            <div class="col-md-1  col-sm-1 col-xs-1" style="margin-left: -20px;">
                                <button id="btnAddKeyWord" class="btn btn-info btn-sm" onclick="AjaxFunc.addKeyWords();" style="margin-top: -5px;">添加</button>
                            </div>
                        </div>

                        <!-- div_table -->
                        <div id="div_table" style="overflow:scroll; min-height: 400px; max-height: 400px;" >
                            <!-- table -->
                            <table class="table table-bordered table-striped table-hover"  style=" margin-bottom: 0px;text-align: center; max-height: 600px;">
                                <thead>
                                <tr>
                                    <th style="text-align: center;">编号</th>
                                    <th style="text-align: center;">关键词</th>
                                    <th style="text-align: center;">添加时间</th>
                                    <th style="text-align: center;">操作</th>
                                </tr>
                                </thead>
                                <tbody id="keyWords_tbody">
                                </tbody>
                            </table>
                        </div> <!-- div_table -->
                    </div><!-- panel -->
                </div><!-- modal-body-body -->
            </div><!-- modal-body -->
            <div class="modal-footer">
            </div>
        </div>
    </div>
</div><!-- 关键词模态框 -->

<!-- 提示框 -->
<jsp:include page="common/modal.jsp"></jsp:include>

<script src="${pageContext.request.contextPath}/style/bootstrap/js/bootstrap.min.js"></script>
<script src="${pageContext.request.contextPath}/static/js/echarts.min.4.1.0.js"></script>
<script src="${pageContext.request.contextPath}/static/js/app2.js"></script>
<script src="${pageContext.request.contextPath}/static/js/index.js"></script>
</body>
</html>