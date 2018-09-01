<%--
  User: 宫新程
  Date: 2018/8/14
  Time: 14:47
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!-- 模态框 -->
<div class="modal fade bs-example-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog  modal-sm" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalTitle"></h4>
            </div>
            <div class="modal-body">
                <div style="text-align: center;margin: 10px 0;" id="modalShowMsg"></div>
            </div>
            <div class="modal-footer">
                <button type="button" id="btnHideModal" class="btn btn-primary" data-dismiss="modal">确定</button>
            </div>
        </div>
    </div>
</div>

<script>
    //打开Modal
    function showModal(title,message){
        $('#myModal').modal('show');
        $("#myModalTitle").text(title);
        $("#modalShowMsg").text(message);
    }
</script>