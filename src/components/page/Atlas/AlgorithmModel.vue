<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="10">
                <el-card class="box-card1" shadow="hover">
                    <div slot="header" class="clearfix headertext">
                        <span>概率统计模型</span>
                        <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                    </div>
                    <div style="height: 300px">
                        <el-scrollbar class="scrollbar" style="height: 100%">
                            <p class="ptext">gram模型是一种语言模型（Language Model，LM），语言模型是一个基于概率的判别模型，它的输入是一句话（单词的顺序序列），输出是这句话的概率，即这些单词的联合概率（joint probability）。</p>
                            <div style="width: 400px;margin: 0 auto">
                                <el-image :src="url" :preview-src-list="srcList" style="width: 400px"></el-image>
                            </div>
                            <p class="ptext">Ngram本身也指一个由N个单词组成的集合，各单词具有先后顺序，且不要求单词之间互不相同。常用的有 Bi-gram (N=2) 和 Tri-gram (N=3)，一般已经够用了。例如在上面这句话里，我可以分解的 Bi-gram 和 Tri-gram ：
                                Bi-gram : {I, love}, {love, deep}, {love, deep}, {deep, learning}
                                Tri-gram : {I, love, deep}, {love, deep, learning}</p>
                            <p class="ptext">三元组抽取问题转换为在“实体1”和“实体2”中寻找最佳关系词的问题。所以，引入统计语言模型，通过统计语言模型，计算关系三元组的联合概率，以选取得分最高的关系词，组成抽取的关系三元组。对三元关系候选集进行后过滤，后过滤引入了规则对抽取出来的三元关系候选集进行过滤，以得到更高质量的三元关系。</p>
                        </el-scrollbar>

                    </div>
                </el-card>
            </el-col>
            <el-col :span="14">
                <el-card class="box-card1" shadow="hover">
                    <div slot="header" class="clearfix headertext">
                        <span>依存句法分析</span>
                        <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                    </div>
                    <div style="height: 300px">
                        <el-scrollbar style="height: 100%" class="scrollbar">
                            <div>
                                <!--<h1 class="htext">1.架构层面</h1>-->
                                <!--<div style="width: 400px;margin: 0 auto">-->
                                    <!--&lt;!&ndash;<img src="../../../assets/2234.png" width="500"  class="img">&ndash;&gt;-->
                                <!--</div>-->

                                <p class="ptext">句法分析是自然语言处理（natural language processing, NLP）中的关键底层技术之一，其基本任务是确定句子的句法结构或者句子中词汇之间的依存关系。</p>
                                <p class="ptext">
                                    句法分析分为句法结构分析（syntactic structure parsing）和依存关系分析(dependency parsing)。以获取整个句子的句法结构或者完全短语结构为目的的句法分析，被称为成分结构分析（constituent structure parsing）或者短语结构分析（phrase structure parsing）；另外一种是以获取局部成分为目的的句法分析，被称为依存分析（dependency parsing）。
                                </p>
                                <p class="ptext">
                                    如以下取自WSJ语料库的句法结构树示例：
                                </p>
                                <div style="width: 600px;margin: 0 auto">
                                    <el-image :src="url1" :preview-src-list="srcList1" style="width: 600px"></el-image>
                                </div>
                                <p class="ptext">
                                    以及取自哈工大LTP的依存句法分析实例：
                                </p>
                                <div style="width: 600px;margin: 0 auto">
                                    <el-image :src="url2" :preview-src-list="srcList2" style="width: 600px"></el-image>
                                </div>
                                <p class="ptext">
                                    目前的句法分析已经从句法结构分析转向依存句法分析，一是因为通用数据集Treebank（Universal Dependencies treebanks）的发展，虽然该数据集的标注较为复杂，但是其标注结果可以用作多种任务（命名体识别或词性标注）且作为不同任务的评估数据，因而得到越来越多的应用，二是句法结构分析的语法集是由固定的语法集组成，较为固定和呆板；三是依存句法分析树标注简单且parser准确率高。
                                </p>

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
                        <span>远距离监督</span>
                        <!--<el-button style="float: right;" type="primary" @click="downloads">项目下载</el-button>-->
                        <!--<el-button style="float: right;margin-right: 10px" type="success" @click="showlog">日志展示</el-button>-->
                    </div>
                    <div style="height: 500px;">
                        <el-scrollbar class="scrollbar" style="height: 100%">
                            <p class="ptext">
                                关系抽取是NER基础上的一个任务，目的是抽取一个句子中实体对之间的关系。想要训练一个关系抽取器，给它一个句子俩实体，首先它需要知道给两个实体间的关系做标注，需要预先标注完的语料。但是，在实际情况中，大多领域没有已经标注好的数据，自己人工标注费时费力，而且数量有限，数据规模大大限制了模型训练。远程监督解决了标注的问题，是一种用KB去对齐朴素文本的标注方法。
                            </p>
                            <h1 class="htext">
                                ·句子特征提取，如下图：
                            </h1>
                            <div style="width: 800px;margin: 0 auto">
                                <el-image :src="url3" :preview-src-list="srcList3" style="width: 800px"></el-image>
                            </div>
                            <div style="width: 900px;margin: 10px auto;">
                                <p class="ptext">
                                    1、使用词向量和位置向量相连接作为单词表示，句子的词表示序列作为模型的输入；
                                </p>
                                <p class="ptext">
                                    2、使用卷积神经网络对输入层提取特征，然后Piecewise Max-pooling，形成句子的特征表示。
                                </p>

                            </div>
                            <h1 class="htext">
                                ·实体表示
                            </h1>
                            <p class="ptext">
                                实体表示在词向量的基础上，使用实体描述信息对向量表示进行调整，形成最终的实体向量表示。最终的实体向量 = 实体表示词向量 + 实体描述信息。
                            </p>
                            <p class="ptext">
                                模型主要思想是，使用CNN对实体的描述信息进行特征提取，得到的特征向量作为实体的特征表示，模型的训练目标是使得实体的词向量表示和从描述信息得到的实体特征表示尽可能接近。
                            </p>
                            <p class="ptext">
                                模型主要思想是，使用CNN对实体的描述信息进行特征提取，得到的特征向量作为实体的特征表示，模型的训练目标是使得实体的词向量表示和从描述信息得到的实体特征表示尽可能接近。
                            </p>
                            <h1 class="ptext">
                                ·bag特征提取
                            </h1>
                            <p class="ptext">
                                bag特征提取模型的关键在句子权重学习，在得到bag中每个句子的权重后，对bag中所有句子的特征向量进行加权求和，得到bag的特征向量表示。
                            </p>
                            <p class="ptext">
                                bag特征提取模型如下图：
                            </p>
                            <div style="width: 800px;margin: 0 auto">
                                <el-image :src="url4" :preview-src-list="srcList4" style="width: 800px"></el-image>
                            </div>
                            <p class="ptext">
                                模型中用到了类似TransE的实体关系表示的思想：e1+r=e2e1+r=e2。使用r=e2−e1r=e2−e1作为实体间关系信息的表达，与句子特征向量相拼接，进行后续的权重学习。
                            </p>
                            <div style="width: 900px;margin: 10px auto;">
                                <p class="ptext">
                                    1、使用bag中的所有句子的特征向量表示，结合r=e2−e1r=e2−e1方式得到的关系表示，作为模型的输入。
                                </p>
                                <p class="ptext">
                                    2、利用attention机制学习权重矩阵，得到每个句子的权重。
                                </p>
                                <p class="ptext">
                                    3、对句子进行加权求和，得到bag的最终表示。
                                </p>
                            </div>
                        </el-scrollbar>
                    </div>

                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "AlgorithmModel",
        data () {
            return {
                url: 'http://zhongkeruitong.top/show/caa952e9922845178f72501bff9eb3c61569044535382.jpg',
                srcList: ['http://zhongkeruitong.top/show/caa952e9922845178f72501bff9eb3c61569044535382.jpg'],
                url1: 'http://zhongkeruitong.top/show/bd66bc27e77b4074becc0a1b1847c7761569044814381.jpg',
                srcList1: ['http://zhongkeruitong.top/show/bd66bc27e77b4074becc0a1b1847c7761569044814381.jpg'],
                url2: 'http://zhongkeruitong.top/show/de4446f5ba2145abbcdbd4e218ff82bf1569044894672.jpg',
                srcList2: ['http://zhongkeruitong.top/show/de4446f5ba2145abbcdbd4e218ff82bf1569044894672.jpg'],
                url3: 'http://zhongkeruitong.top/show/6d2af648d1664ea39970c2ad499535081569045622417.jpg',
                srcList3: ['http://zhongkeruitong.top/show/6d2af648d1664ea39970c2ad499535081569045622417.jpg'],
                url4: 'http://zhongkeruitong.top/show/3606fc22f4f94bbbbb9b2c62cf1d901b1569046135378.jpg',
                srcList4: ['http://zhongkeruitong.top/show/3606fc22f4f94bbbbb9b2c62cf1d901b1569046135378.jpg']

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
    }
    .img {
        margin-top: 20px;margin-bottom: 20px
    }
    .scrollbar >>> .el-scrollbar__wrap{
        overflow-x: hidden;

    }
</style>
