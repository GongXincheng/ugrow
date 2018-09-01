<%--
  User: 宫新程
  Date: 2018/8/14
  Time: 14:51
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!-- 删除模态框 -->
<div class="modal fade bs-example-modal-sm" id="myDeleteModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel_delete">
    <div class="modal-dialog  modal-sm" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel_delete">提示</h4>
            </div>
            <div class="modal-body">
                <div style="text-align: center;margin: 10px 0;" id="modalShowMsg_del"></div>
            </div>
            <div class="modal-footer">
                <button type="button"  class="btn btn-primary" data-dismiss="modal">取消</button>
                <button type="button" id="btn_delete" class="btn btn-primary" data-dismiss="modal">确定</button>
            </div>
        </div>
    </div>
</div>

<script>
    //显示删除提示框
    function showDeleteModal(message){
        $("#modalShowMsg_del").text(message);
        alert(message);
    }
</script>