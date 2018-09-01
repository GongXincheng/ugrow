package com.hyg.controller;

import com.hyg.entity.Keywords;
import com.hyg.entity.User;
import com.hyg.service.KeyWordsService;
import com.hyg.utils.MyResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
public class KeywordController {

    @Resource
    private KeyWordsService keyWordsService;

    /**
     * 添加关键词
     * @param keyWord 关键词
     * @param request Request
     * @return MyResult
     */
    @RequestMapping("/keyWord/add")
    @ResponseBody
    public MyResult add(String keyWord,HttpServletRequest request){
        User loginUser = UserController.checkUserLogin(request.getSession());
        MyResult result = keyWordsService.addKeyWord(loginUser.getId(),keyWord);
        return result;
    }

    /**
     * 删除关键词
     * @param id 关键词ID
     * @param request HttpServletRequest
     * @return MyResult
     */
    @RequestMapping("/keyWord/deleteKw")
    @ResponseBody
    public MyResult deleteKw(Integer id, HttpServletRequest request){
        //删除关键词
        int count = keyWordsService.deleteById(id);
        if(count > 0){
            User loginUser = UserController.checkUserLogin(request.getSession());
            //重新获取关键词列表
            List<Keywords> keywords = keyWordsService.findByUid(loginUser.getId());
            return MyResult.build(200,"删除成功",keywords);
        }
        return MyResult.build(201,"删除失败！");

        
    }

    /**
     * 获取登录用户的关键词列表
     * @param request
     * @return
     */
    @RequestMapping("/keyWordList")
    @ResponseBody
    public List<Keywords> keyWordList(HttpServletRequest request){
        //获取登录的用户信息
        User loginUser = UserController.checkUserLogin(request.getSession());
        if(loginUser!=null){
            List<Keywords> list = this.keyWordsService.findByUid(loginUser.getId());
            return list;
        }
        //如果没有登录 uid为0
        List<Keywords> list = this.keyWordsService.findByUid(0);
        return list;
    }

}
