package com.hyg.service;

import com.hyg.entity.News;
import com.hyg.entity.NewsSearchBean;
import com.hyg.utils.MyResult;

import java.util.List;
import java.util.Map;

public interface NewsService {

    public Map<String, Object> getNewsList(NewsSearchBean searchBean, Integer page, Integer size);
    public Map<String, Object> getNewsList2(Integer pageNum, Integer pageSize, String keyWord);
    List<News> getSchoolTopByKeyWord(String keyWord);

    MyResult getMapData(String keyWord);
}
