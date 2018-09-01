package com.hyg.controller;

import com.hyg.entity.News;
import com.hyg.entity.NewsSearchBean;
import com.hyg.service.NewsService;
import com.hyg.utils.MyResult;
import com.hyg.utils.PageHtml;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.lang.reflect.Method;
import java.util.List;
import java.util.Map;
import java.util.ResourceBundle;

/**
 * 新闻
 */
@Controller
public class NewsController {

    private static final String METHOD_GET = "GET";

    @Autowired
    private NewsService newsService;


    /**
     *  Ajax查询新闻列表
     * @param page page
     * @param size size
     * @param keyWord 关键词
     * @return MyResult
     */
    @RequestMapping("/ajaxSearch")
    @ResponseBody
    public Map<String, Object> ajaxSearch(@RequestParam(defaultValue = "1")Integer page, @RequestParam(defaultValue = "5")Integer size,String keyWord){
        NewsSearchBean searchBean = new NewsSearchBean();
        searchBean.setKeyWord(keyWord);
        //查询
        Map<String, Object> map = this.newsService.getNewsList(searchBean, page, size);
        return map;
    }

    /**
     * 关键词搜索
     * @param searchBean 查询条件
     * @param page  当前页
     * @param size 每页显示条数
     * @param model Model
     * @return
     */
    @RequestMapping("/search")
    public String searchNews(NewsSearchBean searchBean, @RequestParam(defaultValue = "1")Integer page,
                             @RequestParam(defaultValue = "8")Integer size , Model model, HttpServletRequest request) throws UnsupportedEncodingException {

        //如果keyWord为空
        if(StringUtils.isBlank(searchBean.getKeyWord())){
            model.addAttribute("total",0);
            return "search";
        }

        /** 使用 ElasticSearch 查询新闻的相关信息 */
        Map<String, Object> ObjectMap = newsService.getNewsList(searchBean, page, size);
        /** 总记录数 */
        Long total = (Long) ObjectMap.get("total");
        model.addAttribute("total",total);
        /** 新闻列表 */
        List<News> newsList = (List<News>) ObjectMap.get("itemsList");
        model.addAttribute("itemsList",newsList);
        /** 右侧学校列表 */
         List<News> schoolList =  newsService.getSchoolTopByKeyWord(searchBean.getKeyWord());
         model.addAttribute("schoolList",schoolList);
        /** 列表分页：调用分页的工具类生成HTML */
        String pageCode = PageHtml.genPagation(total.intValue(),page,size);
        model.addAttribute("pageCode",pageCode);

        /** //////////////////////////////////////////////////////////////////////////////////
         * /////////////////////////////    假数据测试    //////////////////////////////////*/
//        Map<String, Object> stringObjectMap = newsService.getNewsList2(page,size,searchBean.getKeyWord());
//        //总记录数
//        Long total = (Long)stringObjectMap.get("total");
//        //新闻列表
//        List<News> itemsList = (List<News>) stringObjectMap.get("itemsList");
//        //分页
//        String pageCode = PageHtml.genPagation(total.intValue(),page,size);

        //条件
        model.addAttribute("condition",searchBean);
        return "search";
    }


    /**
     *  解决Get请求乱码
     * @param searchBean 查询条件
     * @throws UnsupportedEncodingException
     */
    public void fixGetRequest(NewsSearchBean searchBean) throws UnsupportedEncodingException {
        searchBean.setKeyWord(new String(searchBean.getKeyWord().getBytes("ISO-8859-1"),"UTF-8"));
        if(StringUtils.isNoneBlank(searchBean.getProvince())){
            searchBean.setProvince(new String(searchBean.getProvince().getBytes("ISO-8859-1"),"UTF-8"));
        }
        if(StringUtils.isNoneBlank(searchBean.getSchool())){
            searchBean.setSchool(new String(searchBean.getSchool().getBytes("ISO-8859-1"),"UTF-8"));
        }
    }

}
