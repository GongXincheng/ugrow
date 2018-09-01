package com.hyg.entity;

import java.io.Serializable;

public class News  implements Serializable {

    private String province; //省
    private String school; //学校
    private String city;    //城市
    private String time; //发布时间
    private String title; //标题
    private String content; //内容

    private long schoolNum; //该学校制定关键字的新闻条数

    public long getSchoolNum() {
        return schoolNum;
    }

    public void setSchoolNum(long schoolNum) {
        this.schoolNum = schoolNum;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
