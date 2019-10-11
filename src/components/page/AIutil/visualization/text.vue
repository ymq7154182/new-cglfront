<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card class="box-card1" shadow="hover">
                    <div slot="header" class="clearfix headertext">
                        <span>数据可视化</span>
                        <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                    </div>
                    <div>
                        <p class="ptext">数据可视化，是关于数据视觉表现形式的科学技术研究。其中，这种数据的视觉表现形式被定义为，一种以某种概要形式抽提出来的信息，包括相应信息单位的各种属性和变量。</p>
                        <p class="ptext">它是一个处于不断演变之中的概念，其边界在不断地扩大。主要指的是技术上较为高级的技术方法，而这些技术方法允许利用图形、图像处理、计算机视觉以及用户界面，通过表达、建模以及对立体、表面、属性以及动画的显示，对数据加以可视化解释。与立体建模之类的特殊技术方法相比，数据可视化所涵盖的技术方法要广泛得多。</p>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="16">
                <el-card class="box-card1" shadow="hover">
                    <div slot="header" class="clearfix headertext">
                        <span>数据可视化概述</span>
                        <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                    </div>
                    <div style="height: 300px">
                        <el-scrollbar style="height: 100%" class="scrollbar">
                            <div>
                                <p class="ptext">数据可视化主要旨在借助于图形化手段，清晰有效地传达与沟通信息。但是，这并不就意味着数据可视化就一定因为要实现其功能用途而令人感到枯燥乏味，或者是为了看上去绚丽多彩而显得极端复杂。为了有效地传达思想概念，美学形式与功能需要齐头并进，通过直观地传达关键的方面与特征，从而实现对于相当稀疏而又复杂的数据集的深入洞察。然而，设计人员往往并不能很好地把握设计与功能之间的平衡，从而创造出华而不实的数据可视化形式，无法达到其主要目的，也就是传达与沟通信息。</p>
                                <div style="width: 600px;margin: 0 auto">
                                    <img src="../../../../assets/7892.png" width="500"  class="img">
                                </div>
                                <h1 class="htext">数据可视化技术包含以下几个基本概念：</h1>

                                <div style="width: 600px;margin: 0 auto">
                                    <!--<img src="../../../assets/789.png" width="559" class="img">-->
                                    <h3 class="htext">(1) 数据空间</h3>
                                    <p class="ptext">是由n维属性和m个元素组成的数据集所构成的多维信息空间</p>
                                    <h3 class="htext">(2)数据开发</h3>
                                    <p class="ptext">是指利用一定的算法和工具对数据进行定量的推演和计算</p>
                                    <h3 class="htext">(3)数据分析</h3>
                                    <p class="ptext">指对多维数据进行切片、块、旋转等动作剖析数据，从而能多角度多侧面观察数据；</p>
                                    <h3 class="htext">(4)数据可视化</h3>
                                    <p class="ptext">是指将大型数据集中的数据以图形图像形式表示，并利用数据分析和开发工具发现其中未知信息的处理过程。</p>
                                    <div style="width: 600px;margin: 0 auto">
                                        <img src="../../../../assets/3455.jpg" width="500"  class="img">
                                    </div>
                                    <p class="ptext">数据可视化已经提出了许多方法，这些方法根据其可视化的原理不同可以划分为基于几何的技术、面向像素技术、基于图标的技术、基于层次的技术、基于图像的技术和分布式技术等等</p>
                                </div>

                            </div>
                        </el-scrollbar>
                    </div>


                </el-card>
            </el-col>
        </el-row>
        <el-row style="margin-top: 20px">
            <el-col>
                <el-card class="box-card" shadow="hover">
                    <div slot="header" class="clearfix headertext">
                        <span>实例图</span>
                        <!--<el-button style="float: right;" type="primary">项目下载</el-button>-->
                        <!--<el-button style="float: right;margin-right: 10px" type="success">日志展示</el-button>-->
                    </div>
                    <div style="margin-top: 20px">
                        <div id="eximage" style="height: 400px;width: 100%"></div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "text",
        mounted () {
          this.getcharts()
        },
        methods: {
            getcharts () {
                var echarts = require('echarts');
                var chart = echarts.init(document.getElementById('eximage'));
                chart.setOption({
                    ooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },
                    toolbox: {
                        feature: {
                            dataView: {show: true, readOnly: false},
                            magicType: {show: true, type: ['line', 'bar']},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    legend: {
                        data:['蒸发量','降水量','平均温度']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                            axisPointer: {
                                type: 'shadow'
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '水量',
                            min: 0,
                            max: 250,
                            interval: 50,
                            axisLabel: {
                                formatter: '{value} ml'
                            }
                        },
                        {
                            type: 'value',
                            name: '温度',
                            min: 0,
                            max: 25,
                            interval: 5,
                            axisLabel: {
                                formatter: '{value} °C'
                            }
                        }
                    ],
                    series: [
                        {
                            name:'蒸发量',
                            type:'bar',
                            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                        },
                        {
                            name:'降水量',
                            type:'bar',
                            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                        },
                        {
                            name:'平均温度',
                            type:'line',
                            yAxisIndex: 1,
                            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                        }
                    ]
                })
            }
        }
    }
</script>

<style scoped>
    .item {
        padding: 18px 0;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }
    /*.box-card {*/
    /*width: 480px;*/
    /*}*/
    .headertext {
        font-size: 24px;font-weight: bold
    }
    .ptext {
        text-indent: 2em;
        margin-bottom: 10px;
    }
    .box-card1 {
        height: 400px;
    }
    .htext {
        font-size: 22px;
        margin-bottom: 10px;
    }
    .img {
        margin-top: 20px;margin-bottom: 20px
    }
    .scrollbar >>> .el-scrollbar__wrap{
        overflow-x: hidden;

    }
</style>
