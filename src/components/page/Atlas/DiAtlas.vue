<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card class="box-card1" shadow="hover">
                    <div slot="header" class="clearfix headertext">
                        <span>地质图书馆项目</span>
                        <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                    </div>
                    <div style="height: 300px">
                        <el-scrollbar class="scrollbar" style="height: 100%;">
                            <p class="ptext">随着学科专业的逐步细化，专业文献的研究范围开始缩小，专业间的沟通变得越来越困难。原本专业文献间有价值的关联信息，由于专业文献的高度分化，日益被专业内部海量的信息所掩盖，而不易被发现。然而，专业文献间的隐性关联往往与科学发现有着重大意义并指导于实践应用。因此，基于地学文献的地质学知识发现研究将对推动该领域的进一步深入发展。</p>
                            <p class="ptext">通过对地质专业文献数据的挖掘，结合知识图谱，自然语言处理，机器学习等方法；分析专业关键词并建立实体之间的关联关系，实现知识发现的目标。</p>
                            <!--<div style="width: 400px;margin: 0 auto">-->
                                <!--<el-image :src="url" :preview-src-list="srcList" style="width: 400px"></el-image>-->
                            <!--</div>-->
                        </el-scrollbar>

                    </div>
                </el-card>
            </el-col>
            <el-col :span="16">
                <el-card class="box-card1" shadow="hover">
                    <div slot="header" class="clearfix headertext">
                        <!--<span>图谱有关系图谱和属性图谱</span>-->
                        <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                    </div>
                    <div style="height: 300px">
                        <el-scrollbar style="height: 100%" class="scrollbar">
                            <div>
                                <h1 class="htext">
                                    ·可用数据
                                </h1>
                                <p class="ptext">对可用的生物432300篇生物文献和30387篇文献进行数据处理。在可用的叙词表、地球大辞典、地质大辞典、常用字典的基础上，添加金矿术语（2668个）、期刊金矿术语（26794个）、以及常用的字典（677844）作为词典，构建了包含717819个词的词典。</p>
                                <h1 class="htext">
                                    ·基于词典的分词
                                </h1>
                                <p class="ptext">
                                    基于字典分词器，采用中科院词性标注集进行分词后的标注。
                                </p>
                                <p class="ptext">
                                    [通过/p,对/p,河南省/ns,老湾金矿/userDefine,矿区/n,的/uj,各种/r,地质勘察/userDefine,,,分析/vn,了/ul,老湾金矿/userDefine的/uj,地质环境问题/userDefine,,,采用/v,了/ul,拦水坝/nz,工程/n,、/w,地表/n,排水工程/nz,、/w,边坡/userDefine,整理/v,工程/n,、/w,覆/vg,土/n,工程/n,、/w,生物工程/nz,等/u,治理措施/userDefine,,,对/p,老湾金矿/userDefine,的/uj,地质环境/userDefine,进行/v,恢复治理/userDefine,,,并/c,取得/v,了/ul,较/d,好/a,的/uj,工程/n,效应/n]
                                </p>
                                <h1 class="htext">
                                    ·关系抽取
                                </h1>
                                <p class="ptext">
                                    关系抽取模块在领域上来说分为专业领域关系抽取和跨领域关联关系抽取。从抽取的方式来分分为关系抽取和关系扩展。从目的来说关系扩展模块属于关系抽取的补充模块，主要用来扩充同类别的关系，提高关系抽取的召回率。
                                </p>
                                <div style="width: 600px;margin: 0 auto">
                                    <el-image :src="url" :preview-src-list="srcList" style="width: 600px"></el-image>
                                </div>
                                <p class="ptext">
                                    引入统计语言模型，通过统计语言模型，计算关系三元组的联合概率，以选取得分最高的关系词，组成抽取的关系三元组。通过这些步骤，可以获取一个三元关系候选集。系统中还引入了可信度这一度量，来衡量抽取关系的支持程度，可信度采用关系三元组共现（句子粒度）的频率表示。
                                </p>
                                <p class="ptext">
                                    对句子语法结果进行限制。对于句子中抽取出来的关系三元组（entity1，relation，entity2）：
                                </p>
                                <p class="ptext">
                                    规则1： 如果关系词是动词词性，且第二个实体（entity2）后面紧跟着动词。这类句式通常是一种连动结构，关系三元组不能表达清楚其中的关系。例如，在“刘宇宸告诉艾米丽说费曼是个伟大而又有趣的物理学家”这句话中抽取出（刘宇宸，告诉，艾米丽）关系三元组没有表达有意义的内容也没有表达整个句子的核心关系与语义。
                                </p>
                                <p class="ptext">
                                    规则2： 如果关系词是动词词性，且第二个实体（entity2）后面紧跟着“的”。这类句式容易抽取出错位的关系。例如，在“阿里巴巴的总裁是马元坤的爸爸”这句话中，容易抽取出（阿里巴巴，总裁，马元坤）关系三元组。
                                </p>
                                <p class="ptext">
                                    对于满足以上两种句式规则的关系三元组进行后过滤。经过后过滤后得到关系三元组有较高的质量。将会存入数据库，以构建图谱。
                                </p>
                                <div style="width: 600px;margin: 0 auto">
                                    <el-image :src="url2" :preview-src-list="srcList2" style="width: 600px"></el-image>
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
                        <span>·关系扩展</span>
                    </div>
                    <div style="height: 500px;">
                        <el-scrollbar class="scrollbar" style="height: 100%">
                            <h1 class="htext">
                                关系扩展过程如下图所示：
                            </h1>
                            <div style="width: 900px;margin: 0 auto;text-align: center">
                                <el-image :src="url3" :preview-src-list="srcList3" style="width: 900px"></el-image>
                            </div>
                            <p class="ptext">
                                主要流程共分为如下几个阶段：上下文构建阶段、模板抽取阶段、候选种子抽取阶段和候选种子评分阶段。
                            </p>
                            <p class="ptext">
                                上下文构建阶段主要是利用一种前缀字典树的数据结构来存储种子的前后的文字，在抽取上下文的时候，只选择在同一个分句当中的内容即任何标点符号都作为边界处理。前缀字典树是一种压缩存储的数据结构，他的特征在于父节点是子节点的前缀。构造两个字典树，分别存储种子之前的文字和之后的文字。
                            </p>
                            <p class="ptext">
                                模板抽取阶段主要是利用上下文构建得到的两个字典树，找到满足所有种子的最长的句式模板。
                            </p>
                            <p class="ptext">
                                候选种子抽取阶段主要是利用找到的句式模板，在整个语料中找到满足句式句子并利用句式抽出去对应位置的种子，作为候选种子。
                            </p>
                            <p class="ptext">
                                候选种子评分阶段主要是利用随机游走的方法从图中进行迭代直到到达图中的任何一点的概率收敛。在这里的图的构造如下：共有三种类型的节点，分别为文档、句式和候选种子，文档和句式之间的关系是包含，句式和种子之间的关系是抽取，文档和种子的关系是含有。具体的如下图所示。
                            </p>
                            <div style="width: 900px;margin: 0 auto;text-align: center">
                                <el-image :src="url4" :preview-src-list="srcList4" style="width: 900px"></el-image>
                                <span>图 随机游走所构造的图结构</span>
                            </div>
                            <p class="ptext">
                                反欺诈已经是金融行业一个核心应用，通过图数据库可以对不同的个体、团体做关联分析，从人物在指定时间内的行为，例如去过地方的IP地址、曾经使用过的MAC地址（包括手机端、PC端、WIFI等）、社交网络的关联度分析，同一时间点是否曾经在同一地理位置附近出现过，银行账号之间是否有历史交易信息等。
                            </p>
                            <p class="ptext">
                                在具体算法的实施过程中，首先由人工给出2-3个种子，每次迭代的过程中，从已有的种子集合中抽取三个种子并加上上一次迭代得到的分数最高的种子作为本次迭代的初始种子，利用上述的四个阶段提取种子，每次仅选取最高的一个加入到种子集合当中。
                            </p>
                        </el-scrollbar>
                    </div>

                </el-card>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: "DiAtlas",
        data () {
            return {
                url: 'http://114.242.223.253/bd58939dafd244159f27f7270479f2231569063522528.jpg',
                srcList: ['http://114.242.223.253/bd58939dafd244159f27f7270479f2231569063522528.jpg'],
                url2: 'http://114.242.223.253/371ff0b6f54e41088fe3db50506740a41569063726577.jpg',
                srcList2: ['http://114.242.223.253/371ff0b6f54e41088fe3db50506740a41569063726577.jpg'],
                url3: 'http://114.242.223.253/821a32b39ac64dc5a37c2d65c0a60e8c1569063814398.jpg',
                srcList3: ['http://114.242.223.253/821a32b39ac64dc5a37c2d65c0a60e8c1569063814398.jpg'],
                url4: 'http://114.242.223.253/784f8925a79049e8bf6958f316efecd51569064782441.jpg',
                srcList4: ['http://114.242.223.253/784f8925a79049e8bf6958f316efecd51569064782441.jpg']
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
        margin-top: 20px;
    }
    .img {
        margin-top: 20px;margin-bottom: 20px
    }
    .scrollbar >>> .el-scrollbar__wrap{
        overflow-x: hidden;

    }
</style>
