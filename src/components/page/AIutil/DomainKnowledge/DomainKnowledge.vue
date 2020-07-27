<template>
    <div>
        <div style="width: 80%;margin: 0 auto">
            <div class="titletext">
               <span>领域知识库</span>
            </div>
            <div style="width: 70%;margin: 40px auto">
                <el-input style="margin-right: 20px;width: 90%" v-model="word" placeholder="请输入实体词"></el-input>
                <el-button type="primary" icon="el-icon-search" circle size="large" @click="getData"></el-button>
            </div>
        </div>
        <el-row :gutter="20">
            <el-col :span="16">
                <div id="chart" style="height: 700px;width: 100%;"></div>
            </el-col>
            <el-col :span="8">
                <div class="textcontents">
                    <div class="contentchild">
                        <el-scrollbar style="height: 100%" class="scrollbar">
                            <div>
                                <div>
                                    <span>文献摘要：</span>
                                </div>
                                <p style="text-indent: 2em;margin-top: 20px;color: grey">
                                    {{abstractList}}
                                </p>
                                <div style="margin-top: 30px">
                                    <span>关键字：</span>
                                    <el-link :type="primarys(index)"  v-for="(item, index) in keywordlsit" :key="index" style="margin-left: 10px">
                                        {{item}}
                                    </el-link>
                                </div>
                            </div>
                        </el-scrollbar>

                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "DomainKnowledage",
        data () {
            return {
                graph: {},
                word: '金矿'
            }
        },
        mounted () {
          this.getData()
        },
        methods: {
            init () {
                var mychart = this.$echarts.init(document.getElementById('chart'))
                var option = {
                    title: {
                        text: '知识图谱',//标题
                        // subtext: '人物关系：乔布斯',//标题副标题
                        top: 'top',//相对在y轴上的位置
                        left: 'center'//相对在x轴上的位置
                    },
                    tooltip : {//提示框，鼠标悬浮交互时的信息提示
                        trigger: 'item',//数据触发类型
                        formatter: function(params){//触发之后返回的参数，这个函数是关键
                            if (params.data.category !=undefined) {//如果触发节点
                                return '名称:'+params.data.name;//返回标签
                            }else {//如果触发边
                                return '关系:'+params.data.source + '-' + params.data.target;
                            }
                        },
                    },
                    //工具箱，每个图表最多仅有一个工具箱
                    toolbox: {
                        show : true,
                        feature : {//启用功能
                            //dataView数据视图，打开数据视图，可设置更多属性,readOnly 默认数据视图为只读(即值为true)，可指定readOnly为false打开编辑功能
                            dataView: {show: true, readOnly: true},
                            restore : {show: true},//restore，还原，复位原始图表
                            saveAsImage : {show: true}//saveAsImage，保存图片
                        }
                    },
                    //全局颜色，图例、节点、边的颜色都是从这里取，按照之前划分的种类依序选取
                    // color:['rgb(194,53,49)','rgb(178,144,137)','rgb(97,160,168)'],
                    animationEasingUpdate: 'bounceIn',
                    color: ['#fff', '#fff', '#fff'],
                    //图例，每个图表最多仅有一个图例
                    legend: [{
                        x: 'left',//图例位置
                        //图例的名称，这里返回短名称，即不包含第一个，当然你也可以包含第一个，这样就可以在图例中选择主干人物
                        data: this.graph.categories.map(function (a) {
                            return a.name;
                        })
                    }],
                    //sereis的数据: 用于设置图表数据之用
                    series : [
                        {
                            name: '文献图谱',//系列名称
                            type: 'graph',//图表类型
                            layout: 'force',//echarts3的变化，force是力向图，circular是和弦图
                            draggable: true,//指示节点是否可以拖动
                            data: this.graph.nodes,//节点数据
                            links: this.graph.links,//边、联系数据
                            categories: this.graph.categories,//节点种类
                            focusNodeAdjacency:true,//当鼠标移动到节点上，突出显示节点以及节点的边和邻接节点
                            roam: true,//是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
                            label: {//图形上的文本标签，可用于说明图形的一些数据信息
                                normal: {
                                    show : true,//显示
                                    // position: 'right',//相对于节点标签的位置
                                    //回调函数，你期望节点标签上显示什么
                                    formatter: function(params){
                                        return params.data.name;
                                    },
                                }
                            },
                            symbolSize: 50,
                            //节点的style
                            itemStyle:{
                                normal:{
                                    "borderColor": "rgb(165, 190, 198)",
                                    "borderWidth": 8,
                                    "shadowBlur": 20,
                                    "shadowColor": "rgb(165, 190, 198)",
                                    "color": "rgb(165, 190, 198)"
                                },
                            },
                            // 关系边的公用线条样式
                            lineStyle: {
                                normal: {
                                    show : true,
                                    color: 'target',//决定边的颜色是与起点相同还是与终点相同
                                    curveness: 0//边的曲度，支持从 0 到 1 的值，值越大曲度越大。
                                }
                            },
                            force: {
                                edgeLength: [100,250],//线的长度，这个距离也会受 repulsion，支持设置成数组表达边长的范围
                                repulsion: 1000//节点之间的斥力因子。值越大则斥力越大
                            }
                        }
                    ]
                }
                mychart.setOption(option);
            },
            getData () {
                var url = 'http://ailab.sdu.edu.cn:80/atalsInquire'
                this.$axios.post(url, this.$qs.stringify({
                    entity: this.word
                })).then((res) => {
                    this.graph = res.data.data
                    this.init()
                })
            }
        }
    }
</script>

<style scoped>
    .titletext {
        width: 200px;
        font-size: 28px;
        /*text-align: center;*/
        margin: 20px auto;
        color: #0099CC;
    }
    .textcontents {
        /*background-color: #dea726;*/
        height: 350px;
        padding: 40px;
    }
    .contentchild {
        background-color: #FFFFCC;
        height: 100%;
        padding: 20px;
        border-radius: 4px;
        border: 1px grey solid;
    }
    .scrollbar >>> .el-scrollbar__wrap{
        overflow-x: hidden;

    }
</style>
