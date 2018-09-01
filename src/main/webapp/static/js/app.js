//地图容器
var chart = echarts.init(document.getElementById('main'));

//34个省、市、自治区的名字拼音映射数组
var provinces = {
    //23个省
    "台湾": "taiwan",
    "河北": "hebei",
    "山西": "shanxi",
    "辽宁": "liaoning",
    "吉林": "jilin",
    "黑龙江": "heilongjiang",
    "江苏": "jiangsu",
    "浙江": "zhejiang",
    "安徽": "anhui",
    "福建": "fujian",
    "江西": "jiangxi",
    "山东": "shandong",
    "河南": "henan",
    "湖北": "hubei",
    "湖南": "hunan",
    "广东": "guangdong",
    "海南": "hainan",
    "四川": "sichuan",
    "贵州": "guizhou",
    "云南": "yunnan",
    "陕西": "shanxi1",
    "甘肃": "gansu",
    "青海": "qinghai",
    //5个自治区
    "新疆": "xinjiang",
    "广西": "guangxi",
    "内蒙古": "neimenggu",
    "宁夏": "ningxia",
    "西藏": "xizang",
    //4个直辖市
    "北京": "beijing",
    "天津": "tianjin",
    "上海": "shanghai",
    "重庆": "chongqing",
    //2个特别行政区
    "香港": "xianggang",
    "澳门": "aomen"
};

//直辖市和特别行政区-只有二级地图，没有三级地图
var special = ["北京","天津","上海","重庆","香港","澳门"];
var mapdata = [];
//绘制全国地图
$.getJSON('/static/map/china.json', function(data){
	d = [];
	for( var i=0;i<data.features.length;i++ ){
		d.push({
			name:data.features[i].properties.name
		})
	}
	mapdata = d;

	//注册地图
	echarts.registerMap('中国', data);

	//绘制地图
	renderMap('中国',d);

    //隐藏按钮
    $("#btnBack").css("display","none");
});

//地图点击事件
chart.on('click', function (params) {
	console.log( params);
	if( params.name in provinces ){
		//如果点击的是34个省、市、自治区，绘制选中地区的二级地图
		$.getJSON('/static/map/province/'+ provinces[params.name] +'.json', function(data){
			echarts.registerMap( params.name, data);
			var d = [];
			for( var i=0;i<data.features.length;i++ ){
				d.push({
					name:data.features[i].properties.name
				})
			}
			renderMap(params.name,d);

            //隐藏按钮
            $("#btnBack").css("display","block");
		});
	}
	else{
		renderMap('中国',mapdata);
	}
});

//初始化绘制全国地图配置
var option = {
	backgroundColor: 'rgba(0,0,0,0)',

    title : {
        top: 20,
        left: '48%',
        textStyle:{
            color: '#fff',
            fontSize:16,
            fontWeight:'normal',
            fontFamily:"Microsoft YaHei"
        },
        subtextStyle:{
        	color: '#ccc',
            fontSize:13,
            fontWeight:'normal',
            fontFamily:"Microsoft YaHei"
        }
    },

    tooltip: {
        trigger: 'item',
        formatter: '{b}'
    },

    toolbox: {
        show: true,
        orient: 'horizontal',
        left: 'right',
        bottom: 20,
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        },
        iconStyle:{
        	normal:{
        		color:'#fff'
        	}
        }
    },
    animationDuration:1000,
	animationEasing:'cubicOut',
	animationDurationUpdate:1000
     
};

function renderMap(map,data){
	option.title.subtext = map;
    option.series = [ 
		{
            top:'10%',
            left:'12%',
            name: map,
            type: 'map',
            mapType: map,
            roam: false,
            nameMap:{
			    'china':'中国'
			},
            zoom:1.2,
            label: {
	            normal:{
					show:true,
					textStyle:{
						color:'#999',
						fontSize:13
					}  
	            },
	            emphasis: {
	                show: true,
	                textStyle:{
						color:'#fff',
						fontSize:13
					}
	            }
	        },
	        itemStyle: {
	            normal: {
	                areaColor: '#323c48',
	                borderColor: 'dodgerblue'
	            },
	            emphasis: {
	                areaColor: 'darkorange'
	            }
	        },
            data:data
        }	
    ];

    //响应式
    $(window).resize(function(){
        chart.resize();
    });

    //渲染地图
    chart.setOption(option);
}

////////////////////////////////   左一（线）   /////////////////////////////////////////////
var option_line1 = {
    //标题
    title: {
        text: '数据态势',
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
        data: [820, 300, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {},
        //填充
        // itemStyle:{
        //     normal: {
        //         areaStyle:{
        //             type: 'light'
        //         }
        //     }
        // }
    }]
};
//left1_line
var chart_line1 = echarts.init(document.getElementById('left_line1'),"default");
chart_line1.setOption(option_line1);
//响应式
$(window).resize(function(){
    chart_line1.resize();
});

////////////////////////////////////   左二   ///////////////////////////////////////

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
        data: [120, 400, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
}

//left1_line
var chart_bar1 = echarts.init(document.getElementById('left_bar1'),"light");
chart_bar1.setOption(option_bar1);
//响应式
$(window).resize(function(){
    chart_bar1.resize();
});