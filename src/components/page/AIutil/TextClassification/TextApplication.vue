<template>
    <div>
        <div>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-card class="box-card1" shadow="hover">
                        <div slot="header" class="clearfix headertext">
                            <span>目前进度</span>
                            <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                        </div>
                        <div style="height: 300px">
                            <el-scrollbar style="height: 100%" class="scrollbar">
                                <div style="margin: auto">
                                    <p class="ptext">目前，使用机器学习中的逻辑回归、朴素贝叶斯、支持向量机三种方法，对地质领域的生物和金矿两类数据进行处理。关于生物和金矿两类文本数据已标注好预先定义的类别标签，因此使用有监督学习方法。分别读取每个类中的5000条文本数据，按照一定的比例划分数据集和测试集，用训练集训练三种方法的分类模型，然后将测试集输入到模型中进行类别标签的预测，并比较预测的类别标签与原始类别标签是否相同，由此来评估方法的性能。
                                    </p>
                                </div>
                            </el-scrollbar>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="16">
                    <el-card class="box-card1" shadow="hover">
                        <div slot="header" class="clearfix headertext">
                            <span>方法性能对比</span>
                            <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                        </div>
                        <div style="height: 500px">
                            <el-scrollbar style="height: 100%" class="scrollbar">
                                <div id="mychart" style="height: 500px">
                                </div>
                            </el-scrollbar>
                        </div>


                    </el-card>
                </el-col>
            </el-row>
        </div>

    </div>
</template>

<script>
    export default {
        name: "TextAnalysis",
        mounted() {
          this.init()
        },
        methods: {
            init() {
                let chart = this.$echarts.init(document.getElementById('mychart'))
                var option = {
                    xAxis: {
                        type: 'category',
                        data: ['方法1', '方法2', '方法3', '方法4', '方法5', '方法6', '方法7']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        smooth: true
                    }]
                };
                chart.setOption(option)
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
        line-height: 28px;
    }
    .box-card1 {
        /*height: 400px;*/
    }
    .htext {
        font-size: 22px;
    }
    .img {
        margin-top: 20px;margin-bottom: 20px
    }
    .scrollbar >>> .el-scrollbar__wrap{
        overflow-x: hidden;

    }
</style>
