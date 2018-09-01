package com.hyg.entity;

import java.io.Serializable;

/**
 * 查询条件的Bean
 */
public class NewsSearchBean implements Serializable{

    private String keyWord;//关键词
    private String startDate;//起始日期
    private String endDate; //终止日期
    private String province; //省
    private String orderBy; //排序
    private String school; //学校名称

    public String getKeyWord() {
        return keyWord;
    }

    public void setKeyWord(String keyWord) {
        this.keyWord = keyWord;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getOrderBy() {
        return orderBy;
    }

    public void setOrderBy(String orderBy) {
        this.orderBy = orderBy;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    @Override
    public String toString() {
        return "NewsSearchBean{" +
                "startDate='" + startDate + '\'' +
                ", endDate='" + endDate + '\'' +
                ", province='" + province + '\'' +
                ", orderBy='" + orderBy + '\'' +
                ", school='" + school + '\'' +
                '}';
    }
}
