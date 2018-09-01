    //测试数据
    var mapData = [
    {name: '承德市', value: 343.57},
    {name: '张家口市', value: 369.8},
    {name: '保定市', value: 1457.61},
    {name: '唐山市', value: 4530.19},
    {name: '沧州市', value: 2362.94},
    {name: '石家庄市', value: 3432.99},
    {name: '邢台市', value: 1413.37},
    {name: '邯郸市', value: 2607.73},
    {name: '秦皇岛市', value: 1662.17},
    {name: '衡水市', value: 1384.02},
    {name: '廊坊市', value: 3847.98},
    {name: '忻州市', value: 271.23},
    {name: '吕梁市', value: 450.01},
    {name: '临汾市', value: 572.69},
    {name: '晋中市', value: 637.72},
    {name: '运城市', value: 827.88},
    {name: '大同市', value: 745.65},
    {name: '长治市', value: 860.21},
    {name: '朔州市', value: 845.18},
    {name: '晋城市', value: 1103.71},
    {name: '太原市', value: 3928.34},
    {name: '阳泉市', value: 1303.51},
    {name: '呼伦贝尔市', value: 63.12},
    {name: '阿拉善盟', value: 11.94},
    {name: '锡林郭勒盟', value: 49.37},
    {name: '鄂尔多斯市', value: 487.16},
    {name: '赤峰市', value: 206.77},
    {name: '巴彦淖尔市', value: 137.78},
    {name: '通辽市', value: 315.33},
    {name: '乌兰察布市', value: 167.69},
    {name: '兴安盟', value: 83.99},
    {name: '包头市', value: 1345.99},
    {name: '呼和浩特市', value: 1794.3},
    {name: '乌海市', value: 3191.75},
    {name: '大连市', value: 6148.88},
    {name: '朝阳市', value: 433.92},
    {name: '丹东市', value: 644.15},
    {name: '铁岭市', value: 570.81},
    {name: '沈阳市', value: 5602.7},
    {name: '抚顺市', value: 1079.21},
    {name: '葫芦岛市', value: 691.48},
    {name: '阜新市', value: 507.53},
    {name: '锦州市', value: 1288.55},
    {name: '鞍山市', value: 2525.94},
    {name: '本溪市', value: 1384.73},
    {name: '营口市', value: 2821.53},
    {name: '辽阳市', value: 2171.84},
    {name: '盘锦市', value: 3086.56},
    {name: '延边朝鲜族自治州', value: 196.18},
    {name: '吉林市', value: 882.62},
    {name: '白城市', value: 271.78},
    {name: '松原市', value: 776.34},
    {name: '长春市', value: 2683.95},
    {name: '白山市', value: 382.36},
    {name: '通化市', value: 641.48},
    {name: '四平市', value: 875.89},
    {name: '辽源市', value: 1413.7},
    {name: '黑河市', value: 65.17},
    {name: '大兴安岭地区', value: 24.96},
    {name: '哈尔滨市', value: 1083.75},
    {name: '齐齐哈尔市', value: 299.12},
    {name: '牡丹江市', value: 322.97},
    {name: '绥化市', value: 365.02},
    {name: '伊春市', value: 75.77},
    {name: '佳木斯市', value: 247.73},
    {name: '鸡西市', value: 228.44},
    {name: '双鸭山市', value: 186.71},
    {name: '大庆市', value: 1406.04},
    {name: '鹤岗市', value: 181.31},
    {name: '七台河市', value: 341.83},
    {name: '盐城市', value: 2482.03},
    {name: '徐州市', value: 4725.05},
    {name: '南通市', value: 7684.54},
    {name: '淮安市', value: 2725.47},
    {name: '苏州市', value: 17087.94},
    {name: '宿迁市', value: 2485.32},
    {name: '连云港市', value: 2880.86},
    {name: '扬州市', value: 6094.24},
    {name: '南京市', value: 14757.51},
    {name: '泰州市', value: 6372.46},
    {name: '无锡市', value: 18409.9},
    {name: '常州市', value: 12060.78},
    {name: '镇江市', value: 9104.45},
    {name: '丽水市', value: 637.82},
    {name: '杭州市', value: 6055.8},
    {name: '温州市', value: 3918.94},
    {name: '宁波市', value: 8153.63},
    {name: '舟山市', value: 7589.21},
    {name: '台州市', value: 3776.28},
    {name: '金华市', value: 3109.72},
    {name: '衢州市', value: 1296.39},
    {name: '绍兴市', value: 5394.33},
    {name: '嘉兴市', value: 8985.46},
    {name: '湖州市', value: 3582.45},
    {name: '六安市', value: 565.47},
    {name: '安庆市', value: 925.34},
    {name: '滁州市', value: 965.54},
    {name: '宣城市', value: 788.33},
    {name: '阜阳市', value: 1296.63},
    {name: '宿州市', value: 1262.73},
    {name: '黄山市', value: 541.35},
    {name: '巢湖市', value: 300.73},
    {name: '亳州市', value: 1125.64},
    {name: '池州市', value: 658.54},
    {name: '合肥市', value: 8032.22},
    {name: '蚌埠市', value: 2105.27},
    {name: '芜湖市', value: 7408.28},
    {name: '淮北市', value: 2774.14},
    {name: '淮南市', value: 3485.82},
    {name: '马鞍山市', value: 8097.9},
    {name: '铜陵市', value: 8190.48},
    {name: '南平市', value: 509.04},
    {name: '三明市', value: 741.78},
    {name: '龙岩市', value: 911.96},
    {name: '宁德市', value: 1122.71},
    {name: '福州市', value: 4299.79},
    {name: '漳州市', value: 2149.76},
    {name: '泉州市', value: 5572.15},
    {name: '莆田市', value: 4018.36},
    {name: '厦门市', value: 22034.33},
    {name: '赣州市', value: 501.25},
    {name: '吉安市', value: 525.71},
    {name: '上饶市', value: 724.33},
    {name: '九江市', value: 1010.83},
    {name: '抚州市', value: 587.22},
    {name: '宜春市', value: 868.3},
    {name: '南昌市', value: 5403.95},
    {name: '景德镇市', value: 1468.91},
    {name: '萍乡市', value: 2385.95},
    {name: '鹰潭市', value: 1798.71},
    {name: '新余市', value: 2976.42},
    {name: '烟台市', value: 4689.43},
    {name: '临沂市', value: 2189.04},
    {name: '潍坊市', value: 3202.94},
    {name: '青岛市', value: 8243.31},
    {name: '菏泽市', value: 1961.73},
    {name: '济宁市', value: 3755.89},
    {name: '德州市', value: 2656.38},
    {name: '滨州市', value: 2491.36},
    {name: '聊城市', value: 3056.37},
    {name: '东营市', value: 4355.22},
    {name: '济南市', value: 7460.2},
    {name: '泰安市', value: 4069.05},
    {name: '威海市', value: 5177.8},
    {name: '日照市', value: 3124.16},
    {name: '淄博市', value: 6924.13},
    {name: '枣庄市', value: 4451.03},
    {name: '莱芜市', value: 2964.52},
    {name: '南阳市', value: 1081.45},
    {name: '信阳市', value: 960.93},
    {name: '洛阳市', value: 2277.76},
    {name: '驻马店市', value: 1198.11},
    {name: '周口市', value: 1747.39},
    {name: '商丘市', value: 1692.98},
    {name: '三门峡市', value: 1191.92},
    {name: '新乡市', value: 2417.72},
    {name: '平顶山市', value: 2164.15},
    {name: '郑州市', value: 9819.37},
    {name: '安阳市', value: 2542.13},
    {name: '开封市', value: 2492},
    {name: '焦作市', value: 4731.22},
    {name: '许昌市', value: 4345.79},
    {name: '濮阳市', value: 3113.79},
    {name: '漯河市', value: 3793.85},
    {name: '鹤壁市', value: 3287.14},
    {name: '恩施土家族苗族自治州', value: 278.22},
    {name: '十堰市', value: 549.04},
    {name: '宜昌市', value: 1608.14},
    {name: '襄樊市', value: 1714.73},
    {name: '黄冈市', value: 910.95},
    {name: '荆州市', value: 1130.5},
    {name: '荆门市', value: 1119.37},
    {name: '咸宁市', value: 1044.59},
    {name: '随州市', value: 814.93},
    {name: '孝感市', value: 1635.47},
    {name: '武汉市', value: 12839.19},
    {name: '黄石市', value: 2679.71},
    {name: '神农架林区', value: 85.16},
    {name: '天门市', value: 1529.37},
    {name: '仙桃市', value: 2893.59},
    {name: '潜江市', value: 4139.44},
    {name: '鄂州市', value: 4853.79},
    {name: '怀化市', value: 460.93},
    {name: '永州市', value: 631.96},
    {name: '邵阳市', value: 665.87},
    {name: '郴州市', value: 1037.79},
    {name: '常德市', value: 1489.29},
    {name: '湘西土家族苗族自治州', value: 321.74},
    {name: '衡阳市', value: 1700.49},
    {name: '岳阳市', value: 1913.1},
    {name: '益阳市', value: 1115.3},
    {name: '长沙市', value: 7200.36},
    {name: '株洲市', value: 2070.87},
    {name: '张家界市', value: 470.48},
    {name: '娄底市', value: 1591.31},
    {name: '湘潭市', value: 3396.01},
    {name: '清远市', value: 671.29},
    {name: '韶关市', value: 622.86},
    {name: '湛江市', value: 1908.45},
    {name: '梅州市', value: 604.78},
    {name: '河源市', value: 517.89},
    {name: '肇庆市', value: 1301.72},
    {name: '惠州市', value: 2814.16},
    {name: '茂名市', value: 2134.44},
    {name: '江门市', value: 2356.93},
    {name: '阳江市', value: 1573.13},
    {name: '云浮市', value: 916.76},
    {name: '广州市', value: 24348.14},
    {name: '汕尾市', value: 1445.77},
    {name: '揭阳市', value: 3606.9},
    {name: '珠海市', value: 11907.18},
    {name: '佛山市', value: 20800.21},
    {name: '潮州市', value: 2935.84},
    {name: '汕头市', value: 9050.51},
    {name: '深圳市', value: 87865.97},
    {name: '东莞市', value: 25456.69},
    {name: '中山市', value: 16722.41},
    {name: '百色市', value: 270.81},
    {name: '河池市', value: 184.45},
    {name: '桂林市', value: 698.69},
    {name: '南宁市', value: 1542.2},
    {name: '柳州市', value: 1234.69},
    {name: '崇左市', value: 393.54},
    {name: '来宾市', value: 415.86},
    {name: '玉林市', value: 1126.45},
    {name: '梧州市', value: 856.84},
    {name: '贺州市', value: 394.87},
    {name: '钦州市', value: 871},
    {name: '贵港市', value: 816.08},
    {name: '防城港市', value: 997.63},
    {name: '北海市', value: 2673.32},
    {name: '甘孜藏族自治州', value: 13.96},
    {name: '阿坝藏族羌族自治州', value: 31.47},
    {name: '凉山彝族自治州', value: 217.61},
    {name: '绵阳市', value: 838.14},
    {name: '达州市', value: 813.91},
    {name: '广元市', value: 370.98},
    {name: '雅安市', value: 328.44},
    {name: '宜宾市', value: 1149.81},
    {name: '乐山市', value: 1014.53},
    {name: '南充市', value: 1215.01},
    {name: '巴中市', value: 408},
    {name: '泸州市', value: 1106.73},
    {name: '成都市', value: 8931.05},
    {name: '资阳市', value: 1595.56},
    {name: '攀枝花市', value: 1243.53},
    {name: '眉山市', value: 1433.16},
    {name: '广安市', value: 1585.15},
    {name: '德阳市', value: 2715.39},
    {name: '内江市', value: 2225.36},
    {name: '遂宁市', value: 1719.84},
    {name: '自贡市', value: 2614.03},
    {name: '遵义市', value: 704.88},
    {name: '黔东南苗族侗族自治州', value: 262.81},
    {name: '毕节地区', value: 544.21},
    {name: '黔南布依族苗族自治州', value: 327.67},
    {name: '铜仁地区', value: 428.13},
    {name: '黔西南布依族苗族自治州', value: 468.99},
    {name: '六盘水市', value: 1207.61},
    {name: '安顺市', value: 674.88},
    {name: '贵阳市', value: 3598.71},
    {name: '普洱市', value: 113.26},
    {name: '红河哈尼族彝族自治州', value: 370.8},
    {name: '文山壮族苗族自治州', value: 207.84},
    {name: '曲靖市', value: 552.76},
    {name: '楚雄彝族自治州', value: 260.78},
    {name: '大理白族自治州', value: 305.55},
    {name: '临沧市', value: 205.21},
    {name: '迪庆藏族自治州', value: 67.51},
    {name: '昭通市', value: 307.71},
    {name: '昆明市', value: 1838.57},
    {name: '丽江市', value: 136.49},
    {name: '西双版纳傣族自治州', value: 175.65},
    {name: '保山市', value: 281.09},
    {name: '玉溪市', value: 814.22},
    {name: '怒江傈僳族自治州', value: 76.96},
    {name: '德宏傣族景颇族自治州', value: 253.62},
    {name: '那曲地区', value: 2.43},
    {name: '阿里地区', value: 1.22},
    {name: '日喀则地区', value: 9.27},
    {name: '林芝地区', value: 9.32},
    {name: '昌都地区', value: 12.82},
    {name: '山南地区', value: 14.26},
    {name: '拉萨市', value: 127.62},
    {name: '榆林市', value: 601.52},
    {name: '延安市', value: 323.64},
    {name: '汉中市', value: 390.83},
    {name: '安康市', value: 328.31},
    {name: '商洛市', value: 322.33},
    {name: '宝鸡市', value: 985.96},
    {name: '渭南市', value: 1118.54},
    {name: '咸阳市', value: 2114.47},
    {name: '西安市', value: 5739.22},
    {name: '铜川市', value: 836.01},
    {name: '酒泉市', value: 28.09},
    {name: '张掖市', value: 89.1},
    {name: '甘南藏族自治州', value: 35.68},
    {name: '武威市', value: 125.22},
    {name: '陇南市', value: 112.9},
    {name: '庆阳市', value: 224.73},
    {name: '白银市', value: 205.26},
    {name: '定西市', value: 149.99},
    {name: '天水市', value: 385.67},
    {name: '兰州市', value: 1601.72},
    {name: '平凉市', value: 311.28},
    {name: '临夏回族自治州', value: 284.71},
    {name: '金昌市', value: 252.38},
    {name: '嘉峪关市', value: 647.51},
    {name: '海西蒙古族藏族自治州', value: 14.62},
    {name: '玉树藏族自治州', value: 3.06},
    {name: '果洛藏族自治州', value: 4.67},
    {name: '海南藏族自治州', value: 31.48},
    {name: '海北藏族自治州', value: 27.85},
    {name: '黄南藏族自治州', value: 38.76},
    {name: '海东地区', value: 343.18},
    {name: '西宁市', value: 1524.25},
    {name: '吴忠市', value: 198.49},
    {name: '中卫市', value: 186.56},
    {name: '固原市', value: 150.5},
    {name: '银川市', value: 1563.48},
    {name: '石嘴山市', value: 908.44},
    {name: '巴音郭楞蒙古自治州', value: 21.53},
    {name: '和田地区', value: 9.41},
    {name: '哈密地区', value: 27.69},
    {name: '阿拉尔市', value: 10.41},
    {name: '图木舒克市', value: 12.4},
    {name: '五家渠市', value: 13.43},
    {name: '石河子市', value: 45.2},
    {name: '阿克苏地区', value: 63.25},
    {name: '阿勒泰地区', value: 18.83},
    {name: '喀什地区', value: 55.94},
    {name: '塔城地区', value: 62.52},
    {name: '昌吉回族自治州', value: 154.77},
    {name: '克孜勒苏柯尔克孜自治州', value: 13.81},
    {name: '吐鲁番地区', value: 41.43},
    {name: '伊犁哈萨克自治州', value: 49.89},
    {name: '博尔塔拉蒙古自治州', value: 115.37},
    {name: '乌鲁木齐市', value: 1851.16},
    {name: '克拉玛依市', value: 659.23},
    {name: '密云县', value: 14024.28},
    {name: '怀柔区', value: 14024.28},
    {name: '房山区', value: 14024.28},
    {name: '延庆县', value: 14024.28},
    {name: '门头沟区', value: 14024.28},
    {name: '昌平区', value: 14024.28},
    {name: '大兴区', value: 14024.28},
    {name: '顺义区', value: 14024.28},
    {name: '平谷区', value: 14024.28},
    {name: '通州区', value: 14024.28},
    {name: '朝阳区', value: 14024.28},
    {name: '海淀区', value: 14024.28},
    {name: '丰台区', value: 14024.28},
    {name: '石景山区', value: 14024.28},
    {name: '西城区', value: 14024.28},
    {name: '东城区', value: 14024.28},
    {name: '宣武区', value: 14024.28},
    {name: '崇文区', value: 14024.28},
    {name: '蓟县', value: 13877.97},
    {name: '武清区', value: 13877.97},
    {name: '宝坻区', value: 13877.97},
    {name: '静海县', value: 13877.97},
    {name: '宁河县', value: 13877.97},
    {name: '大港区', value: 13877.97},
    {name: '塘沽区', value: 13877.97},
    {name: '西青区', value: 13877.97},
    {name: '北辰区', value: 13877.97},
    {name: '东丽区', value: 13877.97},
    {name: '汉沽区', value: 13877.97},
    {name: '津南区', value: 13877.97},
    {name: '河西区', value: 13877.97},
    {name: '河东区', value: 13877.97},
    {name: '南开区', value: 13877.97},
    {name: '河北区', value: 13877.97},
    {name: '红桥区', value: 13877.97},
    {name: '和平区', value: 13877.97},
    {name: '儋州市', value: 1082.75},
    {name: '文昌市', value: 1082.75},
    {name: '乐东黎族自治县', value: 1082.75},
    {name: '三亚市', value: 1082.75},
    {name: '琼中黎族苗族自治县', value: 1082.75},
    {name: '东方市', value: 1082.75},
    {name: '海口市', value: 1082.75},
    {name: '万宁市', value: 1082.75},
    {name: '澄迈县', value: 1082.75},
    {name: '白沙黎族自治县', value: 1082.75},
    {name: '琼海市', value: 1082.75},
    {name: '昌江黎族自治县', value: 1082.75},
    {name: '临高县', value: 1082.75},
    {name: '陵水黎族自治县', value: 1082.75},
    {name: '屯昌县', value: 1082.75},
    {name: '定安县', value: 1082.75},
    {name: '保亭黎族苗族自治县', value: 1082.75},
    {name: '五指山市', value: 1082.75},
    {name: '酉阳土家族苗族自治县', value: 1910.48},
    {name: '奉节县', value: 1910.48},
    {name: '巫溪县', value: 1910.48},
    {name: '开县', value: 1910.48},
    {name: '彭水苗族土家族自治县', value: 1910.48},
    {name: '云阳县', value: 1910.48},
    {name: '万州区', value: 1910.48},
    {name: '城口县', value: 1910.48},
    {name: '江津区', value: 1910.48},
    {name: '石柱土家族自治县', value: 1910.48},
    {name: '巫山县', value: 1910.48},
    {name: '涪陵区', value: 1910.48},
    {name: '丰都县', value: 1910.48},
    {name: '武隆县', value: 1910.48},
    {name: '南川区', value: 1910.48},
    {name: '秀山土家族苗族自治县', value: 1910.48},
    {name: '黔江区', value: 1910.48},
    {name: '合川区', value: 1910.48},
    {name: '綦江县', value: 1910.48},
    {name: '忠县', value: 1910.48},
    {name: '梁平县', value: 1910.48},
    {name: '巴南区', value: 1910.48},
    {name: '潼南县', value: 1910.48},
    {name: '永川区', value: 1910.48},
    {name: '垫江县', value: 1910.48},
    {name: '渝北区', value: 1910.48},
    {name: '长寿区', value: 1910.48},
    {name: '大足县', value: 1910.48},
    {name: '铜梁县', value: 1910.48},
    {name: '荣昌县', value: 1910.48},
    {name: '璧山县', value: 1910.48},
    {name: '北碚区', value: 1910.48},
    {name: '万盛区', value: 1910.48},
    {name: '九龙坡区', value: 1910.48},
    {name: '沙坪坝区', value: 1910.48},
    {name: '南岸区', value: 1910.48},
    {name: '江北区', value: 1910.48},
    {name: '大渡口区', value: 1910.48},
    {name: '双桥区', value: 1910.48},
    {name: '渝中区', value: 1910.48},
    {name: '高雄市', value: 9313.67},
    {name: '屏东县', value: 9313.67},
    {name: '台南市', value: 9313.67},
    {name: '新竹市', value: 9313.67},
    {name: '新竹县', value: 9313.67},
    {name: '宜兰县', value: 9313.67},
    {name: '基隆市', value: 9313.67},
    {name: '苗栗县', value: 9313.67},
    {name: '台北市', value: 9313.67},
    {name: '新北市', value: 9313.67},
    {name: '桃园县', value: 9313.67},
    {name: '彰化县', value: 9313.67},
    {name: '嘉义县', value: 9313.67},
    {name: '嘉义市', value: 9313.67},
    {name: '花莲县', value: 9313.67},
    {name: '南投县', value: 9313.67},
    {name: '台中市', value: 9313.67},
    {name: '云林县', value: 9313.67},
    {name: '台东县', value: 9313.67},
    {name: '澎湖县', value: 9313.67},
    {name: '金门', value: 9313.67},
    {name: '马祖', value: 9313.67},
    {name: '中西区', value: 177631.54},
    {name: '湾仔区', value: 177631.54},
    {name: '东区', value: 177631.54},
    {name: '南区', value: 177631.54},
    {name: '油水旺区', value: 177631.54},
    {name: '九龙市', value: 177631.54},
    {name: '深水埗区', value: 177631.54},
    {name: '黄大仙区', value: 177631.54},
    {name: '观塘区', value: 177631.54},
    {name: '西贡区', value: 177631.54},
    {name: '沙田区', value: 177631.54},
    {name: '葵青区', value: 177631.54},
    {name: '荃湾区', value: 177631.54},
    {name: '屯门区', value: 177631.54},
    {name: '元朗区', value: 177631.54},
    {name: '北区', value: 177631.54},
    {name: '大埔区', value: 177631.54},
    {name: '离岛区', value: 177631.54},
    {name: '澳门', value: 968326.74},
    {name: '崇明县', value: 39623.85},
    {name: '南汇区', value: 39623.85},
    {name: '奉贤区', value: 39623.85},
    {name: '东新区', value: 39623.85},
    {name: '金山区', value: 39623.85},
    {name: '青浦区', value: 39623.85},
    {name: '松江区', value: 39623.85},
    {name: '嘉定区', value: 39623.85},
    {name: '宝山区', value: 39623.85},
    {name: '闵行区', value: 39623.85},
    {name: '杨浦区', value: 39623.85},
    {name: '普陀区', value: 39623.85},
    {name: '徐汇区', value: 39623.85},
    {name: '长宁区', value: 39623.85},
    {name: '闸北区', value: 39623.85},
    {name: '虹口区', value: 39623.85},
    {name: '黄浦区', value: 39623.85},
    {name: '卢湾区', value: 39623.85},
    {name: '静安区', value: 39623.85},
    {name:'浦东新区',value: 39623.85}
]
    var lineData = [820, 300, 901, 934, 1290, 1330, 1320];
    var barDate = [120, 400, 150, 80, 70, 110, 130];

    //获取容器
    var myChart = echarts.init(document.getElementById('main'));
    var chart_line1 = echarts.init(document.getElementById('left_line1'),"default");
    var chart_bar1 = echarts.init(document.getElementById('left_bar1'),"light");

    //加载中国地图
    cityname=[];
    $.ajax({
        url : "/static/map/app2.json",
        async: true,
        success :function(geoJson){
            echarts.registerMap('chinacity', geoJson);
            var mapFeatures = echarts.getMap('chinacity').geoJson.features;
            mapFeatures.forEach(function(v) {
                // 地区名称
                var name = v.properties.name;
                cityname.push(name)
            });
        }
    });

    //地图点击事件
    myChart.on('click', function (params) {
        //获取市
        console.log(params.name);
        //获取关键词
    });

    //Echarts响应式
    $(window).resize(function(){
        chart_bar1.resize();
    });
    $(window).resize(function(){
        chart_line1.resize();
    });
    $(window).resize(function(){
        chart_bar1.resize();
    });

///////////////////////////////
// 1、地图
function mapChar(data){
    myChart.setOption(
        option = {
            backgroundColor: 'transparent',
            visualMap: {
                show: true,
                textStyle : {
                    fontSize : 10,
                    fontWeight: 'bolder',
                    color:'#cccccc'
                },
                type:'piecewise',
                pieces:[
                    {min: 10000}, // 不指定 max，表示 max 为无限大（Infinity）。
                    {min: 5000, max: 8000},
                    {min: 2500, max: 5000},
                    {min: 2000, max: 2500},
                    {min: 1000, max: 2000},
                    {min:100,max: 1000},
                    {max:100}// 不指定 min，表示 min 为无限大（-Infinity）。
                ],
                showLabel:true,
                left: 'right',
                top: 'bottom',
                text: ['多（条）', '少（条）'], // 文本，默认为数值文本
                calculable: true,
                inRange: {
                    color:['#3B5077','red']//蓝红
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}<br/>{c}(条)'
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: {
                        readOnly: false
                    },
                    restore: {},
                    saveAsImage: {
                        pixelRatio: 4
                    }
                }
            },
            series: [{
                top:70,
                zoom:1.2,
                type: 'map',
                mapType: 'chinacity',
                label: {
                    normal: {
                        show: false
                    }
                },
                roam:true,
                itemStyle: {
                    normal: {
                        //borderColor: '#CD4F39',
                        areaColor: '#3B5077'
                    }
                },
                data: data
            }]
        });
}

// 2、LineChar
function lineChar(data){
    var option_line1 = {
        //标题
        title: {
            text: '数据态势',
            left: 'center',
            top:5,
            textStyle:{ //设置主标题风格
                color:'rgba(255, 255, 255, 0.7)',//设置主标题字体颜色
                fontSize:13
            }
        },
        xAxis: {
            axisLine:{
                lineStyle: {
                    color: 'rgba(255, 255, 255, 1)'
                }
            },
            axisLabel:{
                // rotate:'10',
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.7)'
                }
            },
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            axisLabel:{
                //倾斜
                // rotate:'10',
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.7)'
                }
            },
            type: 'value'
        },
        grid:{
            top:'20%',
            left:'20%',
            height:'60%'
        },
        series: [{
            data: data,
            type: 'line',
            areaStyle: {},
        }]
    };
    chart_line1.setOption(option_line1);
}

// 3、BarChar
function barChar(data){
    var option_bar1 = {
        title:{
            text:'数据分布',
            left: 'center',
            top:5,
            // textStyle: {
            //     color: 'rgba(255, 255, 255, 1)',
            //     size:5
            // },
            textStyle:{ //设置主标题风格
                color:'rgba(255, 255, 255, 0.7)',//设置主标题字体颜色
                fontSize:13
            }
        },
        xAxis: {
            axisLine:{
                lineStyle: {
                    color: 'rgba(255, 255, 255, 1)'
                }
            },
            axisLabel:{
                // rotate:'10',
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.7)'
                }
            },
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            axisLine:{
                lineStyle: {
                    color: 'rgba(255, 255, 255, 1)'
                }
            },
            axisLabel:{
                // rotate:'10',
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.7)'
                }
            },
            type: 'value'
        },
        grid:{
            top:'20%',
            left:'20%',
            height:'65%'
        },
        series: [{
            data: data,
            type: 'bar'
        }]
    }
    chart_bar1.setOption(option_bar1);
}


