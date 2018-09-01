package com.hyg.service.impl;

import com.hyg.entity.News;
import com.hyg.entity.NewsSearchBean;
import com.hyg.service.NewsService;
import com.hyg.utils.EsUtils;
import com.hyg.utils.MyResult;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class NewsServiceImpl implements NewsService {

    /**
     * 使用ES查询新闻列表
     * @param searchBean    条件
     * @param page  当前页
     * @param size  每页条数
     * @return
     */
    public Map<String, Object> getNewsList(NewsSearchBean searchBean, Integer page, Integer size){
        Map<String, Object> stringObjectMap;

        //使用ES工具类查询新闻信息
        stringObjectMap = EsUtils.searchByKey(
                searchBean.getKeyWord(), (page-1)*size, size,
                StringUtils.isBlank( searchBean.getSchool()) ? null : searchBean.getSchool());

        //总记录数
        //Long total = (Long) stringObjectMap.get("total");
        //总页数
        //long totalPage = total % size > 0 ? (total / size) + 1 : total / size;

        return stringObjectMap;
    }

    /**
     *  查询关键词的学校排行
     * @param keyWord 关键词
     * @return
     */
    public List<News> getSchoolTopByKeyWord(String keyWord) {
        Map<String, Long> map = EsUtils.searchBykeyGroupByKey(keyWord, "school");
        List<News> newsList = new ArrayList<>();
        for(Map.Entry<String,Long> entry : map.entrySet()){
            News news = new News();
            news.setSchool(entry.getKey());
            news.setSchoolNum(entry.getValue());
            newsList.add(news);
        }
        //对List排序
        Collections.sort(newsList, new Comparator<News>() {
            public int compare(News n1, News n2) {
                return (int)(n2.getSchoolNum() - n1.getSchoolNum());
            }
        });
        return newsList;
    }

    /**
     * 该关键字在某city的条数
     * @param keyWord
     * @return
     */
    @Override
    public MyResult getMapData(String keyWord) {
        if(StringUtils.isBlank(keyWord))
            return MyResult.build(201,"地图数据加载失败！");
        Map<String, Long> city = EsUtils.searchBykeyGroupByKey(keyWord, "city");
        List<Map<String,Object>> list = new ArrayList<>();
        for (Map.Entry<String, Long> entry : city.entrySet()) {
            Map<String,Object> map = new HashMap<>();
            map.put("name",entry.getKey());
            map.put("value",entry.getValue());
            list.add(map);
        }
        return  MyResult.build(200,"地图数据加载成功！",list);
    }


    /** ///////////////////////////////////////////////////////////////////////////////////////
     * 假数据测试
     * @param pageNum 当前页
     * @param pageSize  每页显示的条数
     * @return
     */
    public Map<String, Object> getNewsList2(Integer pageNum, Integer pageSize, String keyWord){
        Map<String, Object> map = new HashMap<>();
        List<News> list = new ArrayList<>();
        int startIndex = (pageNum - 1) * pageSize;
        for(int i = startIndex + 1; i < startIndex + 1 + pageSize; i++){
            News news = new News();
            news.setTitle(keyWord + "____我校大学生社会实践基地普法宣传活动举行__" + i);
            news.setTime(new SimpleDateFormat("yyyy-MM-dd  HH:mm:ss").format(new Date()));
            news.setSchool("潍坊学院");
            news.setProvince("山东省");
            if(i%2 == 0){
                news.setContent("7月13日，我校大学生社<p>会实践基地挂牌暨青少年反诈骗普法宣传活动仪式在潍坊市寒亭街道万春园社区举行。学校团委、法学院团总支和寒亭团区委、寒亭街道</p>团工委、万春园社区居委会相关负责同志出席本次活动。我校法学院尚德志愿服务队、大学生法律爱好者协会的志愿者律爱好者协会的志愿者们和万春律爱好者协会的志愿者们和万春律爱好者协会的<p>志愿者们和万春律爱好者协会</p>的志愿者们和万春律爱好者协会的志愿者们和万春们和万春园社区的居民参加本次活动。");
            }else{
                news.setContent("本网讯  7月13日，我校大学生社会实践基地挂牌暨青少年反诈骗普法宣传活动仪式在潍坊市寒亭街道万春园社区举行。学校团委、法学院团总支和寒亭团区委、寒亭街道团工委、万春园社区居委会相关负责同志出席本次活动。<p>我校法学院尚德志愿服务队、大学生法律爱好者协会的志愿者们和万春园社区的居民参加本次活动。</p>\n" +
                        "\n" +
                        "团委书记张晓静、万春园社区党支部书记孙春梅分别致辞。<p>张晓静表示，与万春园社区共建社会实践基地，为我校大学生开展实践活动搭建了平台。依托社区周边中小学密集的区位优势和法学院大学生的专业优势，共建青少年法制教育阵地，将对城市社区发展和高校的人才培养等实现双向促进和共同提升。同时，在今后活动中依托潍坊学院“青年之声”和社区“青年之家”等工作载体，大力整合资源，形成工作合力，充分发挥青年之声和校外活动阵地作用，打通联系服务青少年的“最后一公里”。\n" +
                        "\n" +
                        "法学院团总支与万春园社区签订了合作协议；团委科技创新部副部长李静与寒亭街道团工委书记李元晟共同为“潍坊学院大学生社会实践基地”揭牌；</p>大学生法律爱好者协会的同学们发挥专业优势，讲解了有关模拟法庭案例的法律知识，以及法庭各参与人员的职责；法学院尚德志愿服务队成员为社区小学生分发了精心制作的图文并茂的宣传单页，小朋友们对照青少年反诈骗主题宣传单上的内容，积极踊跃地举手回答问题，现场气氛十分活跃。\n" +
                        "\n" +
                        "活动结束后，我校师生冒着高温酷暑走进万春园居民区，实地走访了4家困难家庭，详细了解他们的实际困难，送去米、油、牛奶等慰问品。\n" +
                        "\n" +
                        "据悉，本次活动是响应团省委开展的团干部“三联四促”常态化下沉基层的重点工作之一，学校团干部在前期与对口联系街道密切沟通后，因地制宜，主动设计对接工作，促进校地共青团工作合作共赢。");
            }
            news.setCity("潍坊市");
            list.add(news);
        }
        map.put("itemsList",list);
        map.put("total", (long)(10000 * Math.random()));
        return map;
    }



}
