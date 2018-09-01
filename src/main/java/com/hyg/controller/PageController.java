package com.hyg.controller;

import com.hyg.entity.Keywords;
import com.hyg.entity.News;
import com.hyg.entity.NewsSearchBean;
import com.hyg.service.KeyWordsService;
import com.hyg.service.NewsService;
import com.hyg.utils.MyResult;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Map;

/**
 * 页面跳转Controller
 */
@Controller
public class PageController {

    @Resource
    private NewsService newsService;

    /**
     * 访问一级目录的页面
     * @param page page
     * @return page
     */
    @RequestMapping("/page/{page}")
    public String showPage1(@PathVariable String page) throws Exception {
        return page;
    }

    /**
     * 访问二级目录的页面
     * @param dir 目录
     * @param page 页面
     * @return
     */
    @RequestMapping("/page/{dir}/{page}")
    public String showPage2(@PathVariable String dir, @PathVariable String page){
        return dir + "/" + page;
    }

    /**
     * index页面
     * @return page
     */
    @RequestMapping("/index")
    public String showIndex(){
        return "index";
    }


    /**
     * 加载地图所需数据
     * @param keyWord 关键词
     * @return
     */
    @RequestMapping("/mapData")
    @ResponseBody
    public MyResult getMapData(String keyWord){
        MyResult result = newsService.getMapData(keyWord);
        return result;
    }


    /**
     *  根据关键字查询 newsList
     * @param searchBean 查询条件
     * @param keywordsList 关键字列表
     * @param model Model
     * @return
     */
    public void getNewsListByKeyWord(NewsSearchBean searchBean, List<Keywords> keywordsList,
                                           Model model) throws UnsupportedEncodingException {

        //如果没有传keyWord，获取第一个关键字进行搜索
        if(StringUtils.isBlank(searchBean.getKeyWord())){
            if(keywordsList == null || keywordsList.size()==0)
                searchBean.setKeyWord("教育厅");
            else
                searchBean.setKeyWord(keywordsList.get(0).getKeyword());
            Map<String, Object> map = newsService.getNewsList(searchBean, 1, 5);
            List<News> newsList = (List<News>) map.get("itemsList");
            Long total = (Long)map.get("total");
            model.addAttribute("newsList",newsList);
            model.addAttribute("total",total);
            model.addAttribute("keywordsList",keywordsList);
            model.addAttribute("searchBean",searchBean);
        }
        //如果传了keyWord
        else{
            //解决GET请求乱码问题
            searchBean.setKeyWord(new String(searchBean.getKeyWord().getBytes("ISO-8859-1"),"UTF-8"));
            Map<String, Object> map = newsService.getNewsList(searchBean, 1, 5);
            List<News> newsList = (List<News>) map.get("itemsList");
            Long total = (Long)map.get("total");
            model.addAttribute("newsList",newsList);
            model.addAttribute("total",total);
            model.addAttribute("keywordsList",keywordsList);
            model.addAttribute("searchBean",searchBean);

        }
    }
}
