<template>
    <div>
        <div>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-card shadow="never" style="height:600px">
                        <div slot="header" class="clearfix headertext">
                            <el-button @click="dialogVisible=true" type="primary">导入</el-button>
                            <el-dialog
                                :visible.sync="dialogVisible"
                                width="30%">
                                <el-upload
                                    class="upload-demo"
                                    drag
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    multiple style="width: 100%">
                                    <i class="el-icon-upload"></i>
                                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                                    <!--<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
                                </el-upload>
                                <span slot="footer" class="dialog-footer">
                                    <el-button @click="dialogVisible = false">取 消</el-button>
                                    <el-button type="primary" @click="importset">确 定</el-button>
                                </span>
                            </el-dialog>
                            <el-radio-group v-model="radio" @change="changestyle" style="margin-left: 20px">
                                <el-radio :label="1">词云</el-radio>
                                <el-radio :label="2">柱状图</el-radio>
                                <el-radio :label="3">饼状图</el-radio>
                            </el-radio-group>
                            <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                        </div>
                        <div v-if="flag === 1">{{data}}</div>
                    </el-card>
                </el-col>
                <el-col :span="16">
                    <el-card shadow="never" style="height: 600px">
                        <div v-if="show1">
                            <div id="main" style="height: 500px" ></div>
                        </div>
                        <div v-if="show2">
                            <div id="main3" style="height: 500px" ></div>
                        </div>
                        <div v-if="show3">
                            <div id="main2" style="height: 500px" ></div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>


        </div>


    </div>
</template>

<script>
    export default {
        name: "wordcloud",
        data () {
            return {
                show1: true,
                show2: false,
                show3: false,
                dialogVisible: false,
                data: [ {
                    name: 'Sam S Club',
                    value: 10000,
                }, {
                    name: 'Macys',
                    value: 6181
                }, {
                    name: 'Amy Schumer',
                    value: 4386
                }, {
                    name: 'Jurassic World',
                    value: 4055
                }, {
                    name: 'Charter Communications',
                    value: 2467
                }, {
                    name: 'Chick Fil A',
                    value: 2244
                }, {
                    name: 'Planet Fitness',
                    value: 1898
                }, {
                    name: 'Pitch Perfect',
                    value: 1484
                }, {
                    name: 'Express',
                    value: 1112
                }, {
                    name: 'Home',
                    value: 965
                }, {
                    name: 'Johnny Depp',
                    value: 847
                }, {
                    name: 'Lena Dunham',
                    value: 582
                }, {
                    name: 'Lewis Hamilton',
                    value: 555
                }, {
                    name: 'KXAN',
                    value: 550
                }, {
                    name: 'Mary Ellen Mark',
                    value: 462
                }, {
                    name: 'Farrah Abraham',
                    value: 366
                }, {
                    name: 'Rita Ora',
                    value: 360
                }, {
                    name: 'Serena Williams',
                    value: 282
                }, {
                    name: 'NCAA baseball tournament',
                    value: 273
                }, {
                    name: 'Point ',
                    value: 273
                }, {
                    name: 'Point Break',
                    value: 265
                }],
                radio: 1,
                flag: 0
            }
        },
        mounted() {
            // this.init()

        },
        methods: {
            importset () {
                // if (this.radio === 1) {
                //     this.init()
                // } else if (this.radio === 3) {
                //     this.pie()
                // }
                this.flag = 1
                this.$nextTick (() => {
                    this.init()
                })
                this.$nextTick (() => {
                    this.zhuzhuang()
                })
                this.$nextTick (() => {
                    this.pie()
                })
                this.dialogVisible = false




            },
            init () {
                require('echarts-wordcloud');
                var chart = this.$echarts.init(document.getElementById('main'))

                // var chart = echarts.init(document.getElementById('main'));
                chart.setOption({
                    series: [
                        {
                            type: 'wordCloud',
                            gridSize: 2,
                            sizeRange: [12, 50],
                            rotationRange: [-90, 90],
                            shape: 'pentagon',
                            textStyle: {
                                normal: {
                                    color: function () {
                                        return 'rgb(' + [
                                            Math.round(Math.random() * 255),
                                            Math.round(Math.random() * 255),
                                            Math.round(Math.random() * 255)
                                        ].join(',') + ')';
                                    }
                                },
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowColor: '#333'
                                }
                            },
                            data: this.data
                        }
                    ]
                })
            },
            pie () {
                var mychart = this.$echarts.init(document.getElementById('main2'))
                mychart.setOption({
                    // tooltip: {
                    //     trigger: 'item',
                    //     formatter: "{a} <br/>{b}: {c} ({d}%)"
                    // },
                    // legend: {
                    //     orient: 'vertical',
                    //     x: 'left',
                    //     data:['Sam S Club','Macys','Amy Schumer','Jurassic World','Charter Communications','Chick Fil A','Planet Fitness','Pitch Perfect','Express','Home', 'Johnny Depp', 'Lena Dunham', 'Lewis Hamilton', 'Mary Ellen Mark', 'Farrah Abraham','Rita Ora', 'Serena Williams', 'NCAA baseball tournament', 'Point', 'Point Break']
                    // },
                    // series: [
                    //     {
                    //         name:'词频量',
                    //         type:'pie',
                    //         selectedMode: 'single',
                    //         radius: [0, '30%'],
                    //
                    //         label: {
                    //             normal: {
                    //                 position: 'inner'
                    //             }
                    //         },
                    //         labelLine: {
                    //             normal: {
                    //                 show: false
                    //             }
                    //         },
                    //         data:[
                    //             {value:4386, name:'Amy Schumer', selected:true},
                    //             {value:6181, name:'Macys'},
                    //             {value:10000, name:'Sam S Club'}
                    //         ]
                    //     },
                    //     {
                    //         name:'词频量',
                    //         type:'pie',
                    //         radius: ['40%', '55%'],
                    //         label: {
                    //             normal: {
                    //                 formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    //                 backgroundColor: '#eee',
                    //                 borderColor: '#aaa',
                    //                 borderWidth: 1,
                    //                 borderRadius: 4,
                    //                 // shadowBlur:3,
                    //                 // shadowOffsetX: 2,
                    //                 // shadowOffsetY: 2,
                    //                 // shadowColor: '#999',
                    //                 // padding: [0, 7],
                    //                 rich: {
                    //                     a: {
                    //                         color: '#999',
                    //                         lineHeight: 22,
                    //                         align: 'center'
                    //                     },
                    //                     // abg: {
                    //                     //     backgroundColor: '#333',
                    //                     //     width: '100%',
                    //                     //     align: 'right',
                    //                     //     height: 22,
                    //                     //     borderRadius: [4, 4, 0, 0]
                    //                     // },
                    //                     hr: {
                    //                         borderColor: '#aaa',
                    //                         width: '100%',
                    //                         borderWidth: 0.5,
                    //                         height: 0
                    //                     },
                    //                     b: {
                    //                         fontSize: 16,
                    //                         lineHeight: 33
                    //                     },
                    //                     per: {
                    //                         color: '#eee',
                    //                         backgroundColor: '#334455',
                    //                         padding: [2, 4],
                    //                         borderRadius: 2
                    //                     }
                    //                 }
                    //             }
                    //         },
                    //         data:this.data
                    //     }
                    // ]
                    title : {
                        // text: '同名数量统计',
                        // subtext: '纯属虚构',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        type: 'scroll',
                        orient: 'vertical',
                        right: 10,
                        top: 20,
                        bottom: 20,
                        data: [{
                            name: 'Sam S Club',
                            value: 10000,
                        }, {
                            name: 'Macys',
                            value: 6181
                        }, {
                            name: 'Amy Schumer',
                            value: 4386
                        }, {
                            name: 'Jurassic World',
                            value: 4055
                        }, {
                            name: 'Charter Communications',
                            value: 2467
                        }, {
                            name: 'Chick Fil A',
                            value: 2244
                        }, {
                            name: 'Planet Fitness',
                            value: 1898
                        }, {
                            name: 'Pitch Perfect',
                            value: 1484
                        }, {
                            name: 'Express',
                            value: 1112
                        }, {
                            name: 'Home',
                            value: 965
                        }, {
                            name: 'Johnny Depp',
                            value: 847
                        }, {
                            name: 'Lena Dunham',
                            value: 582
                        }, {
                            name: 'Lewis Hamilton',
                            value: 555
                        }, {
                            name: 'KXAN',
                            value: 550
                        }, {
                            name: 'Mary Ellen Mark',
                            value: 462
                        }, {
                            name: 'Farrah Abraham',
                            value: 366
                        }, {
                            name: 'Rita Ora',
                            value: 360
                        }, {
                            name: 'Serena Williams',
                            value: 282
                        }, {
                            name: 'NCAA baseball tournament',
                            value: 273
                        }, {
                            name: 'Point ',
                            value: 273
                        }, {
                            name: 'Point Break',
                            value: 265
                        }],

                        selected: ['Sam S Club','Macys','Amy Schumer','Jurassic World','Charter Communications','Chick Fil A', 'Planet Fitness','Pitch Perfect','Express','Home','Johnny Depp','Lena Dunham','Lewis Hamilton','KXAN','Mary Ellen Mark','Farrah Abraham','Rita Ora','Serena Williams','NCAA baseball tournament','Point ','Point Break']
                    },
                    series : [
                        {
                            name: '姓名',
                            type: 'pie',
                            radius : '55%',
                            center: ['40%', '50%'],
                            data: this.data,
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]

                })
            },
            zhuzhuang () {
                var mychart = this.$echarts.init(document.getElementById('main3'))
                mychart.setOption({
                    // title : {
                    //     text: '某地区蒸发量和降水量',
                    //     subtext: '纯属虚构'
                    // },
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['降水量']
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            dataView : {show: true, readOnly: false},
                            magicType : {show: true, type: ['line', 'bar']},
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : true,
                    xAxis : [
                        {
                            type : 'category',
                            data : ['Sam S Club','Macys','Amy Schume','Jurassic World','Charter Communications','Chick Fil A','Planet Fitness','Pitch Perfect','Express','Home','Johnny Depp','Lena Dunham']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        // {
                        //     name:'蒸发量',
                        //     type:'bar',
                        //     data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                        //     markPoint : {
                        //         data : [
                        //             {type : 'max', name: '最大值'},
                        //             {type : 'min', name: '最小值'}
                        //         ]
                        //     },
                        //     markLine : {
                        //         data : [
                        //             {type : 'average', name: '平均值'}
                        //         ]
                        //     }
                        // },
                        {
                            name:'词频数',
                            type:'bar',
                            data:[10000, 6181, 4386, 4055, 2467, 2244, 1898, 1484, 1112,965, 847, 582],
                            markPoint : {
                                data : [
                                    {name : '最高', value : 10000, xAxis: 0, yAxis: 10000},
                                    {name : '最低', value : 582, xAxis: 11, yAxis: 582}
                                ]
                            },
                            markLine : {
                                data : [
                                    {type : 'average', name : '平均值'}
                                ]
                            }
                        }
                    ]
                })
            },
            changestyle (value) {
                if (this.flag === 1) {
                    if (value === 1) {
                        this.show1 = true
                        this.$nextTick (() => {
                            this.show2 = false
                            this.show3 = false
                        })

                    } else if (value === 2) {
                        this.show2 = true
                        this.$nextTick (() => {
                            this.show1 = false
                            this.show3 = false
                        })

                    } else if (value === 3) {
                        this.show3 = true
                        this.$nextTick (() => {
                            this.show1 = false
                            this.show2 = false
                        })

                    }
                    this.importset()

                }

            }
        }
    }
</script>

<style scoped>

</style>
