package com.hyg.utils;

public class PageHtml {

    /**
     * 分页
     * @param totalNum
     * @param currentPage
     * @param pageSize
     * @return
     */
    public static String genPagation(int totalNum, int currentPage, int pageSize){
        int totalPage = totalNum%pageSize==0?totalNum/pageSize:totalNum/pageSize+1;
        StringBuffer pageCode = new StringBuffer();
        pageCode.append("<li><a href='javascript:void(0);' onclick=\"pageHelp(this,1)\">首页</a></li>");
        if(currentPage==1) {
            pageCode.append("<li class='disabled'><a href='#'>上一页</a></li>");
        }else {
            pageCode.append("<li><a href='javascript:void(0);' onclick=\"pageHelp(this,"+(currentPage-1)+")\">上一页</a></li>");
        }
        for(int i=currentPage-2;i<=currentPage+2;i++) {
            if(i<1||i>totalPage) {
                continue;
            }
            if(i==currentPage) {
                pageCode.append("<li class='active'><a href='#'>"+i+"</a></li>");
            } else {
                pageCode.append("<li><a href='javascript:void(0);' onclick=\"pageHelp(this,"+i+")\">"+i+"</a></li>");
            }
        }
        if(currentPage==totalPage) {
            pageCode.append("<li class='disabled'><a href='#'>下一页</a></li>");
        } else {
            pageCode.append("<li><a href='javascript:void(0);' onclick=\"pageHelp(this,"+(currentPage+1)+")\">下一页</a></li>");
        }
        pageCode.append("<li><a href='javascript:void(0);' onclick=\"pageHelp(this,"+totalPage+")\">尾页</a></li>");
        return pageCode.toString();
    }

}
