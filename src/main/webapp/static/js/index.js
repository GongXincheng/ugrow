//全局方法
var AjaxFunc = {
    firstKeyWord:'',
    currentPage: 1,
    timer:null,
    /**
     * 删除关键词 //////////////////////////////////////////////////////////////////////
     */
    deleteKeyWord:function(id,keyName){
        $.ajax({
            url : '/keyWord/deleteKw.action',
            type: 'POST',
            dataType : 'json',
            data : {
                id : id
            },
            success : function(data){
                if(data.status == 200){
                    AjaxFunc.showKeyWords();
                }
            }
        });
    },

    /**
     * 添加关键词 //////////////////////////////////////////////////////////////////////
     */
    addKeyWords : function(){
        var keyWord = $("#inputkeyWord").val().trim();
        if(keyWord == null || keyWord.length == 0 ){
            return;
        }
        //先判断该关键词是否已经存在
        $.post("/keyWord/add.action",{keyWord:keyWord},function (data) {
            if(data.status != 200){
                $("#inputkeyWord").val("");
                alert(data.msg);
                return;
            }
            //添加成功后，填充到列表
            var addDate = new Date(data.data.adddate);
            var addtime = dateFtt("yyyy-MM-dd hh:mm:ss",addDate);
            //列表个数
            var trs = $("#keyWords_tbody tr").length;
            $("#keyWords_tbody").append('<tr>\n' +
'                                        <td>' + (trs + 1) + '</td>\n' +
'                                        <td>'+ data.data.keyword +'</td>\n' +
'                                        <td>\n' +
'                                            '+ addtime +'\n' +
'                                        </td>\n' +
'                                        <td>\n' +
'                                            <button class="btn btn-danger btn-xs" onclick="AjaxFunc.deleteKeyWord('+data.data.id+',\''+data.data.keyword+'\')">删除</button>\n' +
'                                        </td>\n' +
'                                    </tr>');
            $("#keyWords").append('<option value="'+ data.data.keyword +'">'+ data.data.keyword +'</option>');
            $("#inputkeyWord").val("");
            alert(data.msg);
        });
    },

    /**
     * 显示关键词列表 //////////////////////////////////////////////////////////////////////
     */
    showKeyWords : function(){
        $.post("/keyWordList.action",function (data) {
            $("#keyWords_tbody").html("");
            for(var i = 0; i < data.length; i++){
                var date = new Date(data[i].adddate);
                var addDate = dateFtt('yyyy-MM-dd hh:mm:ss',date);
                //刷新Modal的新闻列表
                console.info(data[i].id + "：" + data[i].keyword);
                $("#keyWords_tbody").append('<tr>\n' +
'                              <td>'+ (i+1) +'</td>\n' +
'                              <td class="td_more">'+ data[i].keyword +'</td>\n' +
'                               <td>\n' +
'                                '+ addDate +'\n' +
'                               </td>\n' +
'                               <td>\n' +
'                                  <button class="btn btn-danger btn-xs" onclick="AjaxFunc.deleteKeyWord('+ data[i].id +',\''+data[i].keyword + '\')">删除</button>\n' +
'                               </td>\n' +
'                               </tr>');
            }
        });
    },

    /**
     * 显示新闻列表 //////////////////////////////////////////////////////////////////////
     */
    showNewsList : function(){
        //使用ajax获取
        var size = 4;
        var keyWord = $("#keyWords").val();
        // AjaxFunc.showNewsListHTML(6);
        $.ajax({
            url : "/ajaxSearch.action",
            data :{
                size:size,
                page:AjaxFunc.currentPage++,
                keyWord:keyWord
            },
            dataType:"json",
            type:"POST",
            success:function(data){
                console.info(data);
                //总记录数
                $("#span_num").text(data.total);
                AjaxFunc.showNewsListHTML(data.itemsList);
            }
        });
        //定时更新
        AjaxFunc.timer = setInterval(function () {
            $.ajax({
                url : "/ajaxSearch.action",
                data :{
                    size:size,
                    page:AjaxFunc.currentPage++, //当前页码数 +1
                    keyWord:keyWord
                },
                dataType:"json",
                type:"POST",
                success:function(data){
                    console.info(data);
                    //总记录数
                    $("#span_num").text(data.total);
                    AjaxFunc.showNewsListHTML(data.itemsList);
                }
            });
            // AjaxFunc.showNewsListHTML(6);
        },3000);
    },

    /**
     * 右侧新闻列表的HTML
     */
    showNewsListHTML:function(itemsList){
       //当newModel隐藏时
        for(var i = 0; i < itemsList.length; i++){
            $("#newModel_" + i).on("hidden.bs.modal",function(){
                AjaxFunc.showNewsList();
            });
        }
        var flag = false;    //是否有模态框显示
        var $newsModelShow = $(".newsModelShow"); //获取所有的模态框
        for(var i = 0; i < $newsModelShow.length; i++){
            //如果有一个模态框显示
            if(flag = $($newsModelShow[i]).is($(":visible"))){
                flag = true;
                break;
            }
        }
        console.info(flag);

        //如果有modal显示，停止刷新
        if(flag){
            clearInterval(AjaxFunc.timer);
            return;
        }else{
            //清空
            $("#right_news_list").html("");
            for(var i = 0; i < itemsList.length; i++){
                $("#right_news_list").append('<div class="site-right-item">\n' +
                    '    <a class="site-right-item-head" href="javascript:void(0);" onclick="showNewModal('+ i +')">'+ formatText(itemsList[i].title,23) +'</a>\n' +
                    '    <a class="site-right-item-body" href="javascript:void(0)"; onclick="showNewModal('+ i +')">'+ formatText(itemsList[i].content,35) +'</a>\n' +
                    '    <a class="site-right-item-footer" href="javascript:void(0);" onclick="showNewModal('+ i +')">\n' +
                    '        <span class="col-md-7" style="float: left">'+ formatText(itemsList[i].school,5) +'</span>\n' +
                    '        <span class="col-md-5" style="float: right; padding: 0 0;">'+ itemsList[i].time +'</span>\n' +
                    '    </a>\n' +
                    '    <div style="clear: both"></div>\n' +
                    '</div>\n' +
                    '\n' +
                    '<div class="modal fade bs-example-modal-sm newsModelShow newModel_'+ i +'" id="newModel_'+ i +'" tabindex="-1" role="dialog" aria-labelledby="newsLabel">\n' +
                    '    <div class="modal-dialog  modal-lg" role="document">\n' +
                    '        <div class="modal-content">\n' +
                    '            <div class="modal-header">\n' +
                    '                <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
                    '                    <span aria-hidden="true">&times;</span>\n' +
                    '                </button>\n' +
                    '                <h4 class="modal-title" style="font-weight: bold; letter-spacing: 1px;">新闻详情</h4>\n' +
                    '            </div>\n' +
                    '            <div class="modal-body" style="padding:0px; ">\n' +
                    '                <div class="modal-body-title"><h3>'+ itemsList[i].title +'</h3></div>\n' +
                    '                <div class="modal-body-time">\n' +
                    '                    <span>'+ itemsList[i].school +'</span><span style="margin-left: 50px;">发布时间：'+ itemsList[i].time +'</span></div>\n' +
                    '                <div class="modal-body-body">'+ itemsList[i].content +'</div>\n' +
                    '            </div>\n' +
                    '            <div class="modal-footer">\n' +
                    '            </div>\n' +
                    '        </div>\n' +
                    '    </div>\n' +
                    '</div>');
               }
        }
    }, //showNewsListHTML

    /** 显示地图 */
    showChart: function(keyWord){
        myChart.showLoading({
            text : "加载地图数据...",
            textColor:"#fff",
            maskColor:"rgba(0, 0, 0, 0.3)"
        });
        chart_line1.showLoading({
            text : "",
            textColor:"#fff",
            maskColor:"rgba(0, 0, 0, 0.5)"
        });
        chart_bar1.showLoading({
            text : "",
            textColor:"#fff",
            maskColor:"rgba(0, 0, 0, 0.5)"
        });
        //LineChart
        setTimeout(function(){
            lineChar(lineData); //Line
            chart_line1.hideLoading();
        },500);
        //BarChart
        setTimeout(function(){
            barChar(barDate);   //Bar
            chart_bar1.hideLoading();
        },1000);

        //2、获取地图数据
        $.ajax({
            url : "/mapData.action",
            data:{keyWord:keyWord},
            type:"POST",
            success:function(data){
                if(data.status == 200){
                    console.info(data);
                    setTimeout(function () {
                        mapChar(data.data);
                        myChart.hideLoading();
                    },1400);
                }else{ showModal("提示",data.msg)}
            }
        });
    }
}

/////////////////////////////////////////////////////////////////////////////////////////
//页面加载时
// 1、显示<select>中的关键词列表
// 2、搜索框赋值(<select>的selected选项的值)
// 3、获取新闻列表

$(function () {
    var height = $("#echarts_left").height();
    $("#right_news_list").css({
        "max-height":height,
        "min-height":height
    });

    //1、ajax加载关键词列表
    $.post("/keyWordList.action",function (data) {
        for(var i = 0; i < data.length; i++) {
            $("#keyWords").append('<option value="' + data[i].keyword + '">' + data[i].keyword + '</option>');
        }
        //给右上搜索框赋值
        var val = $("#keyWords").val();
        $("#keyWord").val(val);
        //图表
        AjaxFunc.showChart(val);
        //显示新闻列表
        AjaxFunc.showNewsList();
    });

    //关键词改变的时候
    $("#keyWords").change(function(){
        $("#keyWord").val( $("#keyWords").val());
        clearInterval(AjaxFunc.timer);
        AjaxFunc.currentPage = 1;
        //获取新闻列表
        AjaxFunc.showNewsList();
        //显示图表
        AjaxFunc.showChart($("#keyWords").val());
    });

    //2、关键词管理
    $("#btnKeyWord").click(function(){
        //判断用户是否登录
        var url = "/hasLogin.action";
        $.post(url,function(data){
            if(data.status != 200){
                showModal("提示","请先登录...")
                return ;
            }
            //ajax加载关键词列表
            AjaxFunc.showKeyWords();
            //显示列表
            $("#keyWordModal").modal("show");
        });
    });

    // Modal关闭事件
    $("#keyWordModal").on("hidden.bs.modal",function(){
        $("#inputkeyWord").val("");
    });
}); // $(function()


/**
 * 显示新闻详情modal框
 */
function showNewModal(count) {
    $(".newModel_" + count).modal("show");
}

/**
 * 格式化
 */
function dateFtt(fmt,date) {
    var o = {
        "M+" : date.getMonth()+1,                 //月份
        "d+" : date.getDate(),                    //日
        "h+" : date.getHours(),                   //小时
        "m+" : date.getMinutes(),                 //分
        "s+" : date.getSeconds(),                 //秒
        "q+" : Math.floor((date.getMonth()+3)/3), //季度
        "S"  : date.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt))
        fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
        if(new RegExp("("+ k +")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
}

/**
 * 格式化字符串（标题，内容）
 */
function formatText(content,length){
    //去掉所有的p标签
    //var removeP = content.replace("<p>","").replace("</p>","");
    var removeP = content.replace(/<p>/g,"");
    removeP = removeP.replace(/<\/p>/g,"");
    //替换 将开始标签替换为$，将结束标签替换为&
    var $content = removeP.replace(/<span style=\"color:red\">/g, "$").replace(/<\/span>/g,"&").trim().replace(/undefined/g,"").replace(/ /g,"");
    //如果长度长
    if($content.length > length){
        $content = $content.substring(0,length).concat("....");
    }
    //判断开始标签和结束标签谁在前
    var beginIndex = $content.lastIndexOf("$");
    var endIndex = $content.lastIndexOf("&");
    if(beginIndex > endIndex){
        $content = $content + "&";
    }
    //将字符串替换回来--%>
    content = $content.replace(/\$/g,"<span style=\"color:red\">").replace(/&/g,"</span>");
    return content
}
