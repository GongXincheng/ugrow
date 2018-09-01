package com.hyg.utils;

import com.hyg.entity.News;
import org.apache.commons.lang3.StringUtils;
import org.elasticsearch.action.search.SearchRequestBuilder;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.action.search.SearchType;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.text.Text;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.index.query.MatchQueryBuilder;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.SearchHits;
import org.elasticsearch.search.aggregations.Aggregation;
import org.elasticsearch.search.aggregations.AggregationBuilders;
import org.elasticsearch.search.aggregations.Aggregations;
import org.elasticsearch.search.aggregations.bucket.terms.StringTerms;
import org.elasticsearch.search.aggregations.bucket.terms.Terms;
import org.elasticsearch.search.fetch.subphase.highlight.HighlightBuilder;
import org.elasticsearch.search.fetch.subphase.highlight.HighlightField;
import org.elasticsearch.transport.client.PreBuiltTransportClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.InetAddress;
import java.util.*;

/**
 * @Auther: 楚森
 * @Description:
 * @Company: 枣庄学院
 * @Date: 2018/8/7 18:48
 * @Version: 1.0
 */
public class EsUtils {

    private static Logger logger = LoggerFactory.getLogger(EsUtils.class);
    private static TransportClient client;

    static {
        try {
            Settings settings = Settings.builder().put("cluster.name", "elasticsearch").build();
            client = new PreBuiltTransportClient(settings).addTransportAddress(
                    new InetSocketTransportAddress(InetAddress.getByName("192.168.43.41"), 9300));
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("ES建立连接失败!");
        }
    }

    /**
     *
     */
    public static Map<String,Long> keywordCount() {

        Map<String,Long> map = new HashMap<>();
//        FilterBuilders.andFilter(
//                FilterBuilders.rangeFilter("age").from(1).to(100),
//                FilterBuilders.prefixFilter("name", "Jack")
//        );
        SearchRequestBuilder requestBuilder = client.prepareSearch("hyg").setQuery(QueryBuilders.matchAllQuery());
        //聚合分析查询出现次数最多的10个词汇
        SearchResponse actionGet = requestBuilder.addAggregation(AggregationBuilders.terms("hotWord").field("content").size(10)).execute().actionGet();
        //获取分析后的数据
        Aggregations aggregations = actionGet.getAggregations();
        Terms trem = aggregations.get("hotWord");
        List<Terms.Bucket> buckets = trem.getBuckets();
        for (Terms.Bucket bucket : buckets) {
            String key = (String) bucket.getKey();
            long count = bucket.getDocCount();
            map.put(key,count);
        }
        return map;
    }


    /**
     * 根据关键词搜索  并高亮显示
     * 包括标题 和 内容
     * @param keyWords 关键字
     * @param from  开始
     * @param size  每页显示多少条
     * @param school 学校名称
     * @return
     */
    public static Map<String, Object> searchByKey(String keyWords, int from, int size, String school) {
        Map<String, Object> msgMap = new HashMap<>();
        MatchQueryBuilder mb1 = QueryBuilders.matchQuery("title", keyWords);
        MatchQueryBuilder mb2 = QueryBuilders.matchQuery("content", keyWords);
        QueryBuilder qb = QueryBuilders.boolQuery().should(mb1).should(mb2);
        HighlightBuilder hiBuilder = new HighlightBuilder().field("*").fragmentSize(800000).numOfFragments(0);
        hiBuilder.preTags("<span style=\"color:red\">");
        hiBuilder.postTags("</span>");
        SearchResponse response = null;
        SearchRequestBuilder builder = client.prepareSearch("hyg");
        if (school != null) {
            String[] headByString = PinYin4jUtils.getHeadByString(school);
            String join = StringUtils.join(headByString, "");
            response = builder.setTypes(join.toLowerCase()).setSearchType(SearchType.DFS_QUERY_THEN_FETCH ).setQuery(qb).highlighter(hiBuilder).setExplain(true).setFrom(from).setSize(size).get();
        }else
            response = builder.setSearchType(SearchType.DFS_QUERY_THEN_FETCH ).setQuery(qb).highlighter(hiBuilder).setExplain(true).setFrom(from).setSize(size).get();

        //获取总记录数
        SearchHits searchHits = response.getHits();
        long totalCount = searchHits.getTotalHits();

        //新闻列表
        List<News> result = new ArrayList<>();
        for (SearchHit hit : response.getHits()) {
            Map<String, Object> source = hit.getSource();
            //处理高亮片段
            Map<String, HighlightField> highlightFields = hit.getHighlightFields();
            HighlightField nameField = highlightFields.get("title");
            HighlightField contentField = highlightFields.get("content");
            // 标题高亮
            if (nameField != null) {
                Text[] fragments = nameField.fragments();
                String nameTmp = "";
                for (Text text : fragments) {
                    nameTmp += text;
                }
                //将高亮片段组装到结果中去
                source.put("title", nameTmp);
            }
            //内容高亮
            if (contentField != null) {
                Text[] contentfrag = contentField.fragments();
                String contentTmp = "";
                for (Text text : contentfrag) {
                    contentTmp += text;
                }
                source.put("content",contentTmp);
            }


            //将Map<String, Object>转为New对象
            News news = new News();
            news.setCity((String) source.get("city"));
            news.setContent((String)source.get("content"));
            news.setProvince((String)source.get("province"));
            news.setSchool((String)source.get("school"));
            news.setTime((String)source.get("time"));
            news.setTitle((String)source.get("title"));
            result.add(news);
        }
        msgMap.put("itemsList", result);     //搜索结果
        msgMap.put("total", totalCount);     //获得查询的总记录数
        return msgMap;
    }


    /**
     * 根据关键字数量
     * 返回 城市 + 数量(文档数量 并非关键词的个数)
     * @param keyWords 关键词
     * @param category 根据分组的字段 ==== 目前只有三个  province 和 city 以及 school 不可以传其他字段
     */
    public static Map<String,Long> searchBykeyGroupByKey(String keyWords,String category) {
        Map<String,Long> resMap = new HashMap<>();
        MatchQueryBuilder mb1 = QueryBuilders.matchQuery("title", keyWords);
        MatchQueryBuilder mb2 = QueryBuilders.matchQuery("content", keyWords);
        QueryBuilder qb = QueryBuilders.boolQuery().should(mb1).should(mb2);
        SearchResponse response = client.prepareSearch("hyg").setSearchType(SearchType.DFS_QUERY_THEN_FETCH).setQuery(qb)
                .addAggregation(AggregationBuilders.terms("group_by_"+category).field(category)).execute().actionGet();
        Map<String, Aggregation> map = response.getAggregations().asMap();
        StringTerms groupByCountry = (StringTerms) map.get("group_by_"+category);
        Iterator<Terms.Bucket> groupByCityAggr = groupByCountry.getBuckets().iterator();
        while (groupByCityAggr.hasNext()) {
            Terms.Bucket res = groupByCityAggr.next();
            String key = (String) res.getKey();
            long docCount = res.getDocCount();
            resMap.put(key,docCount);
        }
        return resMap;
    }

    public static void main(String[] args) {
//        Map<String, Object> res = EsUtils.searchByKey("Java", 0, 5,"wfxy");
//        for (Map.Entry<String, Object> kv : res.entrySet()) {
//            System.out.println(kv.getKey());
//            System.out.println(kv.getValue());
//        }
//        List<News> liust = (List<News>) res.get("itemsList");
//        System.out.println(liust.size());

//        Map<String, Long> res = EsUtils.searchBykeyGroupByKey("一带一路","city");
//        for (Map.Entry<String, Long> entry : res.entrySet()) {
//            System.out.println(entry.getKey() + "："+ entry.getValue());
//        }

//        Map<String, Long> res = EsUtils.searchBykeyGroupByKey("一带一路","school");
//        for (Map.Entry<String, Long> kv : res.entrySet()) {
//            System.out.println(kv.getKey());
//            System.out.println(kv.getValue());
//        }


//        Map<String, Long> res = EsUtils.searchBykeyGroupByKey("一带一路", "city");
//        for (Map.Entry<String, Long> stringLongEntry : res.entrySet()) {
//            System.out.println(stringLongEntry.getKey() + "=====" + stringLongEntry.getValue());
//        }
        Map<String, Long> res = keywordCount();
        for (Map.Entry<String, Long> stringLongEntry : res.entrySet()) {
            System.out.println(stringLongEntry.getKey() +"===" + stringLongEntry.getValue());
        }

    }
}
