package com.hyg.service.impl;

import com.hyg.entity.Keywords;
import com.hyg.entity.KeywordsExample;
import com.hyg.mapper.KeywordsMapper;
import com.hyg.service.KeyWordsService;
import com.hyg.utils.MyResult;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Date;
import java.util.List;

@Service
public class KeyWordsServiceImpl implements KeyWordsService {

    @Resource
    private KeywordsMapper keywordsMapper;

    /**
     * 未登录用户默认的keyWords列表
     * @return keyWords列表
     */
    @Override
    public List<Keywords> findAllNoLogin() {
        KeywordsExample example = new KeywordsExample();
        //UID为0，代表未登录用户默认的KeyWords
        //0代表没有被删除的关键字
        example.createCriteria().andUidEqualTo(0).andIsdeleteEqualTo(0);
        List<Keywords> keywordsList = keywordsMapper.selectByExample(example);
        return keywordsList;
    }

    /**
     * 用户用户id，获得关键字列表
     * @param uid uid
     * @return
     */
    @Override
    public List<Keywords> findByUid(Integer uid) {
        KeywordsExample example = new KeywordsExample();
        //uid,0代表没有被删除的关键字
        example.createCriteria().andUidEqualTo(uid).andIsdeleteEqualTo(0);
        List<Keywords> keywordsList = keywordsMapper.selectByExample(example);
        return keywordsList;
    }

    /**
     * 删除
     * @param id
     * @return
     */
    @Override
    public int deleteById(Integer id) {
        Keywords kw = new Keywords();
        kw.setId(id);
        kw.setIsdelete(1);
        int i = keywordsMapper.updateByPrimaryKeySelective(kw);
        return i;
    }

    /**
     * 添加
     * @param uid id
     * @param keyWord 关键词
     * @return  MyResult
     */
    @Override
    public MyResult addKeyWord(Integer uid, String keyWord) {
        KeywordsExample example = new KeywordsExample();
        //数据库查询：匹配uid,keyWord
        example.createCriteria().andUidEqualTo(uid).andKeywordEqualTo(keyWord).andIsdeleteEqualTo(0);
        List<Keywords> list = this.keywordsMapper.selectByExample(example);
        //该关键字已经存在
        if(list != null && list.size() > 0)
            return MyResult.build(201,"该关键字已存在！");
        //如果关键字不存在则添加
        Keywords kw = new Keywords();
        kw.setUid(uid);
        kw.setKeyword(keyWord);
        kw.setAdddate(new Date());
        //保存
        int num = keywordsMapper.insertSelective(kw);
        if(num<=0)
            return  MyResult.build(201,"关键词添加失败");
        return MyResult.build(200,"关键词添加成功！",kw);
    }
}
