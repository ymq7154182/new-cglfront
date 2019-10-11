<template>
    <div>
        <div style="width: 80%;margin: 0 auto">
            <div class="text">
                <span>文献图谱上传</span>
            </div>
            <el-row :gutter="20" style="width: 80%;margin: 0 auto">
                <el-col :span="20">
                    <el-input v-model="filename" :disabled="true"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-upload
                        action="/"
                        ref="upload"
                        name="filename"
                        :before-upload="beforeUpload"
                        :on-progress="updatefile"
                        class="uploads">
                        <el-button size="small" type="success">选择文件</el-button>

                        <!--<div slot="tip" class="el-upload__tip">只能上传txt文件</div>-->
                    </el-upload>
                </el-col>
                <!--<el-col :span="3">-->
                    <!--<el-button @click="updatess" type="primary">点击上传</el-button>-->
                <!--</el-col>-->
            </el-row>

            <div style="width: 200px;margin: 20px auto">
                <el-button @click="updatess" type="primary">点击上传</el-button>
                <el-button @click="showListfile" type="primary" v-loading.fullscreen.lock="fullscreenLoading"
                           element-loading-text="拼命加载中"
                           element-loading-spinner="el-icon-loading"
                           element-loading-background="rgba(0, 0, 0, 0.8)">查看文献</el-button>
            </div>
            <div v-if="showList">
                <!--<el-button @click="getdata" type="primary">生成图谱</el-button>-->
                <el-table :data="fileTable">
                    <el-table-column
                        type="selection"
                        width="50" align="center">
                    </el-table-column>
                    <el-table-column
                        type="index"
                        width="50" label="序号" align="center">
                    </el-table-column>
                    <el-table-column label="文件" prop="fileName" align="center" width="auto">
                    </el-table-column>
                    <el-table-column label="上传时间" prop="time" align="center">
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button type="warning" @click="getdata(scope.row)">生成图谱</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div id="chart" style="height: 650px;width: 100%;margin-top: 100px;margin-bottom: 100px"></div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "KnowDiscovery",
        data () {
            return {
                filename: '',
                url: '',
                dates: '',
                showList: false,
                fullscreenLoading: false,
                fileTable: [],
                userId: '',
                graph: {
                    // categories:[{name: "测试行政区位"},       //关系网类别
                    //     {name: "省人民政府关于同意从江县部分乡镇行政区划调整的批复"},
                    //     {name: "水城县４个乡撤乡设镇获省政府批复"}],
                    // nodes:[{category: 0, name: "测试行政区位", value: 5, id: 0},  //展示的节点 //category与关系网类别索引对应 //我的源数据中没有id属性，这里放出来的是目标数据，id是自动生成的
                    //     {category: 1, name: "省人民政府关于同意从江县部分乡镇行政区划调整的批复", value: 3, id: 1},
                    //     {category: 1, name: "丙妹镇", value: 1, id: 2},
                    //     {category: 1, name: "行政区域", value: 1, id: 3},
                    //     {category: 2, name: "水城县４个乡撤乡设镇获省政府批复", value: 3, id: 4},
                    //     {category: 2, name: "水城县", value: 1, id: 5},
                    //     {category: 2, name: "行政区划调整", value: 1, id: 6}],
                    // links:[{source: 0, target: 1, value: 5},    //节点之间连接 //source起始节点，0表示第一个节点  //target目标节点，1表示与索引(id)为1的节点进行连接
                    //     {source: 1, target: 2, value: 3},
                    //     {source: 1, target: 3, value: 3},
                    //     {source: 0, target: 4, value: 5},
                    //     {source: 4, target: 5, value: 3},
                    //     {source: 4, target: 6, value: 3}
                    // ]
                    // nodes: [{
                    //     name: "根瘤菌",
                    //     category: 0,
                    //     value: 8
                    // },
                    //     {
                    //         name: "细菌",
                    //         category: 0,
                    //         value: 8
                    //     },
                    //     {
                    //         name: "菌胶团",
                    //         category: 0,
                    //         value: 8
                    //     },
                    //     {
                    //         name: "菌液",
                    //         category: 0,
                    //         value: 8
                    //     },
                    //     {
                    //         name: "灭菌",
                    //         category: 0,
                    //         value: 8
                    //     },
                    //     {
                    //         name: "杆菌",
                    //         category: 0,
                    //         value: 8
                    //     },
                    //     {
                    //         name: "真菌",
                    //         category: 0,
                    //         value: 8
                    //     },
                    //     {
                    //         name: "菌群",
                    //         category: 0,
                    //         value: 8
                    //     },
                    //     {
                    //         name: "菌",
                    //         category: 0,
                    //         value: 8
                    //     },
                    //     {
                    //         name: "霉菌",
                    //         category: 0,
                    //         value: 8
                    //     },
                    //     {
                    //         name: "养菌",
                    //         category: 0,
                    //         value: 8
                    //     },
                    //     {
                    //         name: "放线菌",
                    //         category: 0,
                    //         value: 8
                    //     },
                    //     {
                    //         name: "菌苗",
                    //         category: 0,
                    //         value: 8
                    //     }
                    // ],
                    // links: [{
                    //
                    //     value: 8,
                    //     source: "根瘤菌",
                    //     target: "菌胶团"
                    // },
                    //     {
                    //
                    //         value: 8,
                    //         source: "细菌",
                    //         target: "根瘤菌"
                    //     },
                    //     {
                    //
                    //         value: 8,
                    //         source: "菌胶团",
                    //         target: "细菌"
                    //     },
                    //     {
                    //
                    //         value: 8,
                    //         source: "细菌",
                    //         target: "菌液"
                    //     },
                    //
                    //     {
                    //
                    //         value: 8,
                    //         source: "灭菌",
                    //         target: "菌液"
                    //     },
                    //     {
                    //
                    //         value: 8,
                    //         source: "杆菌",
                    //         target: "菌液"
                    //     },
                    //     {
                    //
                    //         value: 8,
                    //         source: "杆菌",
                    //         target: "真菌"
                    //     },
                    //     {
                    //
                    //         value: 8,
                    //         source: "真菌",
                    //         target: "灭菌"
                    //     },
                    //     {
                    //
                    //         value: 8,
                    //         source: "菌群",
                    //         target: "灭菌"
                    //     },
                    //     {
                    //
                    //         value: 8,
                    //         source: "杆菌",
                    //         target: "菌"
                    //     },
                    //     {
                    //
                    //         value: 8,
                    //         source: "菌",
                    //         target: "真菌"
                    //     },
                    //     {
                    //
                    //         value: 8,
                    //         source: "霉菌",
                    //         target: "真菌"
                    //     },
                    //     {
                    //
                    //         value: 8,
                    //         source: "养菌",
                    //         target: "菌"
                    //     },
                    //     {
                    //
                    //         value: 8,
                    //         source: "放线菌",
                    //         target: "养菌"
                    //     },
                    //     {
                    //
                    //         value: 8,
                    //         source: "菌类",
                    //         target: "放线菌"
                    //     },
                    //     {
                    //
                    //         value: 8,
                    //         source: "菌苗",
                    //         target: "放线菌"
                    //     }
                    // ],
                    // categories: [{
                    //     name: 0
                    // }]
                }
                // file: ''
            }
        },
        mounted () {
            this.getuserinfo()
            // this.init()
            this.getDates()
        },
        methods: {
            beforeUpload (file) {
                console.log(file)
                this.filename = file.name
                this.file = file
            },
            // handleSuccess(res, file) {
            //     this.$message({
            //         type: 'info',
            //         message: '文件上传成功',
            //         duration: 6000
            //     });
            //     console.log(res)
            //     // if (file.response.success) {
            //     //     this.editor.picture = file.response.message; //将返回的文件储存路径赋值picture字段
            //     // }
            // },
            // handleError(res, file) {
            //     this.$message({
            //         type: 'error',
            //         message: '文件上传失败',
            //         duration: 6000
            //     });
            //     console.log(res)
            // },
            getuserinfo () {
                this.userId = localStorage.getItem('userId')
            },
            updatefile(event, file, fileList) {
                console.log('ss')
                console.log(file)
            },
            updatess() {
                if (this.filename === '') {
                    this.$message.warning('请选择上传的文件')
                } else {
                    var url = 'http://zhongkeruitong.top/show/AIPlatform/fileUpload?currentTime=' + this.dates + '&userId=' + this.userId
                    const fileFormData = new FormData()
                    fileFormData.append('filename', this.file)
                    this.$axios.post(url, fileFormData,{
                        headers: {
                            'Content-Type': 'multipart/form-data/application/x-www-form-urlencoded'
                        }
                    }).then((res) => {
                        if (res.data === '文件上传成功') {
                            this.$message({
                                type: 'info',
                                message: '文件上传成功',
                                duration: 6000
                            });
                        } else {
                            this.$message({
                                type: 'error',
                                message: '文件上传失败',
                                duration: 6000
                            });
                        }
                    })
                }

            },
            showListfile () {
                this.fullscreenLoading = true
                var url = 'http://zhongkeruitong.top/show/AIPlatform/showPdfName'
                this.$axios.post(url, this.$qs.stringify({
                    userId: this.userId
                })).then((res) => {
                    this.fileTable = res.data.info
                    this.showList = true
                    this.fullscreenLoading = false
                })
            },
            getdata (row) {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/sanyuanzushengcheng'
                this.$axios.post(url,this.$qs.stringify({
                    fileName: row.fileName
                })).then((res) => {
                    this.graph = res.data.data
                    // console.log(this.graph)
                    this.init()
                })
            },
            init () {
                var mychart = this.$echarts.init(document.getElementById('chart'))
                var option = {
                    title: {
                        text: '文献图谱',//标题
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
            getDates () {
                var myDate = new Date()
                console.log(myDate.getFullYear())
                console.log(myDate.getMonth() + 1)
                console.log(myDate.getDate())
                console.log(myDate.getHours())
                console.log(myDate.getMinutes())
                console.log(myDate.getSeconds())
                this.dates = String(myDate.getFullYear()) + '-' + String(myDate.getMonth() + 1) + '-' + String(myDate.getDate()) + ' '+ String(myDate.getHours()) + ':' + String(myDate.getMinutes()) + ':' + String(myDate.getSeconds())
                console.log(this.dates)
            }
        }
    }
</script>

<style scoped>
    .text {
        width: 200px;
        font-size: 28px;
        /*text-align: center;*/
        margin: 20px auto;
        color: #0099CC;
    }
    .uploads >>> .el-upload--text {
        width: 80px;
        height: 32px;
        background-color: #EAEBED;
        border: 0 solid;
    }
</style>
