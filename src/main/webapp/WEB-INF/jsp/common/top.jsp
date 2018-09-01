<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<style>
    .container-fluid {
        background: #10161d;
    }

    /* 去除Border */
    div#bs-example-navbar-collapse-1 {
        border: none;
    }
    form.navbar-form.navbar-right {
        border: none;
    }

    .navbar-default .navbar-brand {
        color: #fff;
        padding-left: 30px;
        font-size: 20px;
        letter-spacing: 1px;
    }
    #container-fluid-top {
        padding: 6px;
    }

    /* 搜索框 */
    .search_box{
        border:1px solid rgb(2,95,139);
        border-radius: 50px;
        padding-right: 10px;
        margin-top: 2px;
    }
    #form_search input[name="keyWord"]{
        font-family: "Microsoft Yahei";
        font-size: 14px;
        width: 200px;
        height: 30px;
        line-height: 30px;
        border: none;
        padding-right: 0px;
        padding-left: 15px;
        background:#10161d;
        border-radius: 15px;
        overflow: hidden;
        position: relative;
        color: #ffffff;
        outline: none;
    }
    input[name="keyWord"]:focus {
        outline: none;
        box-shadow: none;
        outline: none;
    }
    /* 搜索框 */
</style>


<nav class="navbar navbar-default" style="margin-bottom: 0px; border: none;">
    <div class="container-fluid" id="container-fluid-top">
        <div class="navbar-header">
            <a class="navbar-brand"  href="${pageContext.request.contextPath}/index.html" style="font-weight: bold;">大数据舆情分析</a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <c:choose>
                <c:when test="${empty loginUser}">
                    <ul id="ul_Login" class="nav navbar-nav navbar-right" style="margin-right: 40px;">
                        <li>
                            <button type="button" id="btnToLogin" style="margin-top: 10px; letter-spacing: 2px;" class="btn btn-primary btn-sm">登录</button>
                        </li>
                    </ul>
                </c:when>
                <c:otherwise>
                    <ul id="ul_hasLogin" class="nav navbar-nav navbar-right" style="margin-right: 40px;">
                        <li style="line-height: 50px;color: #ffffff; margin-right: 20px; letter-spacing: 1px">${loginUser.username}</li>
                        <li>
                            <button type="button" id="btnLogout" style="margin-top: 10px;" class="btn btn-primary btn-sm">退出登录</button>
                        </li>
                    </ul>
                </c:otherwise>
            </c:choose>


            <div class="navbar-form navbar-right col-md-offset-2"  style="margin-right: 20px;">
                <form action="${pageContext.request.contextPath}/search.html" method="post" id="form_search" style="margin: 0px;">
                    <span class="search_box form-group">

                     <input type="text" class="form-control" name="keyWord" id="keyWord" autocomplete="off"
                            placeholder="Search" onkeyup="doSearch(event)">

                     <a title="点击搜索" class="btn_search" href="javascript:void(0);">
                         <img src="/static/images/search_25x25.png" height="20" width="20">
                     </a>
                </span>
                </form>
            </div>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>

<script>
    $(function(){
        //点击搜索按钮
        $(".btn_search").on("click",function(){
            $("#form_search").submit();
        });
    });

    //按下回车
    function doSearch(even) {
        if(even.keyCode == 13){
            $("#form_search").submit();
        }
    }
    //获取keyWord
    function getKeyWord(){
        var keyWorld = $("#keyWord").val().trim();
        return keyWorld;
    }

    $(function(){
        //登录按钮
        $("#btnToLogin").click(function(){
            window.location.href = "/page/login.html";
        });

        //退出登录
        $("#btnLogout").click(function(){
            window.location.href = "/logout.html";
        });
    })

</script>