package com.hyg.entity;

import java.io.Serializable;
import java.util.Date;

public class Keywords implements Serializable{
    private Integer id; //id

    private Integer uid;    //用户id

    private String keyword; //关键字名称

    private Date adddate;   //添加时间

    private Integer isdelete = 0; //0：没删除 1：已删除




    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUid() {
        return uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword == null ? null : keyword.trim();
    }

    public Date getAdddate() {
        return adddate;
    }

    public void setAdddate(Date adddate) {
        this.adddate = adddate;
    }

    public Integer getIsdelete() {
        return isdelete;
    }

    public void setIsdelete(Integer isdelete) {
        this.isdelete = isdelete;
    }
}