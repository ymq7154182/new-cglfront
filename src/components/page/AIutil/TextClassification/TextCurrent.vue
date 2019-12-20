<template>
    <div>
        <div>
            <el-row :gutter="20">
                <el-col :span="24">
                    <el-card class="box-card1" shadow="hover">
                        <div slot="header" class="clearfix headertext">
                            <span>文本分类的方法研究</span>
                            <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                        </div>
                        <div style="height: 300px">
                            <el-scrollbar style="height: 100%" class="scrollbar">
                                <div>
                                    <p class="ptext">1、根据文本数据集有预先定义好的类别，将文本分类分为：有监督文本分类、半监督文本分类、无监督文本分类。</p>
                                    <!--<h1 class="htext">文本分类的定义</h1>-->
                                    <div style="width: 300px;margin: 0 auto">
                                        <!--<img src="../../../assets/111.jpg" width="300"  class="img">-->
                                    </div>

                                    <p class="ptext">（1）有监督文本分类：所谓的有监督学习，就是是机器可以根据给定的输入样本集推演出指定目标变量的可能结果。针对文本分类而言，有监督文本分类需要带有事先标记好类别的文本信息的数据集去训练相应的分类器模型，然后再使用模型对未知类别的文本进行类别预测。</p>
                                    <!--<h1 class="htext">2.算法要点</h1>-->
                                    <p class="ptext">（2）半监督文本分类：半监督学习(Semi-Supervised Learning，SSL)是监督学习与无监督学习相结合的一种学习方法，而半监督文本分类方法就是在分类器训练过程中，同时考虑有标记和无标记数据集。</p>
                                    <!--<h1 class="htext">3.优缺点分析</h1>-->
                                    <p class="ptext">（3）无监督文本分类：由于有监督分类需要大量的人工去对文本数据进行类别标注，这非常耗费人力物力，而相比于带标签数据集，我们获取无标注数据集也方便的多，由此，无监督文本分类应运而生。</p>

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
        name: "TextCurrent"
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
    }
    .img {
        margin-top: 20px;margin-bottom: 20px
    }
    .scrollbar >>> .el-scrollbar__wrap{
        overflow-x: hidden;

    }
</style>
