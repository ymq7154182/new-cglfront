<template>
    <div>
        <div>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-card class="box-card1" shadow="hover">
                        <div slot="header" class="clearfix headertext">
                            <span>文本分类的背景</span>
                            <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                        </div>
                        <div style="height: 300px">
                            <el-scrollbar style="height: 100%" class="scrollbar">
                                <div style="margin: auto">
                                    <p class="ptext">随着科技的快速发展，互联网已经成为各类数据的主要载体，因特网上的数据更是呈爆发式地高速增长，面对这海量且杂乱无章的数据，人们想要从中找出一些对自己有用的信息，简直是大海捞针。因此如何在这海量的文本中找到、并有效地组织和管理这些有用的数据，成为当前自然语言处理领域中要解决的一个重要问题，而文本分类成为目前解决这一问题的有效技术。
                                    </p>
                                </div>
                            </el-scrollbar>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="16">
                    <el-card class="box-card1" shadow="hover">
                        <div slot="header" class="clearfix headertext">
                            <span>分类的定义</span>
                            <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                        </div>
                        <div style="height: 300px">
                            <el-scrollbar style="height: 100%" class="scrollbar">
                                <div>
                                    <p class="ptext">所谓分类，就是按照一定的规则将某一事物划分到预先定义好的类别中，把无规律的事物分为有规律的，按照不同的特点划分事物，使事物更有规律。</p>
                                    <h1 class="htext">文本分类的定义</h1>
                                    <div style="width: 300px;margin: 0 auto">
                                        <!--<img src="../../../assets/111.jpg" width="300"  class="img">-->
                                    </div>

                                    <p class="ptext">文本分类就是把文本数据按照一定的对着划分到预先定义好的类别中。</p>
                                    <!--<h1 class="htext">2.算法要点</h1>-->
                                    <p class="ptext">文本数据可以是短语、句子、包含文本段落的整篇文档，这些数据可以从语料库、博客、互联网的任何地方获得。</p>
                                    <!--<h1 class="htext">3.优缺点分析</h1>-->
                                    <p class="ptext">文本分类程序把一个未见过的文档分成已知类别中的一个或多个。把给定的文档归到两个类别中的一个，叫做二类分类；分到多个类别中的一个，叫做多类分类。</p>

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
                            <span>文本分类的一般流程</span>
                        </div>
                        <div style="width: 700px;margin: 0 auto">
                            <p class="ptext">文本分类通常包含五个阶段：文本预处理、特征提取、词向量表示、分类器训练、分类预测。</p>
                            <p class="ptext">1、文本预处理的目的就是将原始数据集格式化为统一的格式，方便后续处理。目前使用的方法中，文本预处理主要是对文本数据进行分词、去停用词。</p>
                            <p class="ptext">2、对于中文文本数据而言，即使去过停用词，剩余的词也并不一定都与文本所属的标签有关，这就需要从剩余的词中选择与类别相关的特征关键词。即特征提取。</p>
                            <p class="ptext">3、由于电脑不能识别自然语言，需要先对文本特征词进行向量化表示，将其转化为机器能够识别的模式。</p>
                            <p class="ptext">4、分类器是文本分类系统的核心模块，是各种分类算法的具体表现形式，所以如何训练构造分类器是文本分类过程中的关键问题。</p>
                            <p class="ptext">5、分类器训练好之后，可以使用训练的模型去预测文本的类别。</p>
                        </div>



                        <!--<div style="width: 900px;margin: 0 auto">-->
                        <!--<el-image :src="url" :preview-src-list="srcList" style="width: 900px"></el-image>-->
                        <!--</div>-->
                    </el-card>
                </el-col>
            </el-row>
        </div>

    </div>
</template>

<script>
    export default {
        name: "TextClassification"
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
    .uploads >>> .el-upload--text {
        width: 80px;
        height: 32px;
        background-color: #EAEBED;
        border: 0 solid;
    }
</style>
