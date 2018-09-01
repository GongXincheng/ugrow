package com.hyg.service;

import com.hyg.entity.Keywords;
import com.hyg.utils.MyResult;

import java.util.List;

public interface KeyWordsService {
    List<Keywords> findAllNoLogin();

    List<Keywords> findByUid(Integer id);

    int deleteById(Integer id);

    MyResult addKeyWord(Integer id, String keyWord);
}
