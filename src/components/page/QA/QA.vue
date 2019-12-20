<template>
    <div style="margin: 10px">
        <div>
            <el-row :gutter="20">
                <el-col :span="10">
                    <el-card class="box-card1" shadow="hover">
                        <div slot="header" class="clearfix headertext">
                            <span>问答机器人的简介</span>
                            <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                        </div>
                        <div style="height: 300px">
                            <el-scrollbar style="height: 100%" class="scrollbar">
                                <div style="margin: auto">
                                    <p class="ptext">问答机器人是经由对话语音或文字进行交谈，能够模拟人类对话，通过图灵测试的计算机程序，主要由语音识别、自然语言理解、对话状态管理、自然语言生成、语音合成五部分组成。如下图所示。
                                    </p>
                                    <img src="../../../assets/QA_1.png" width="400" style="margin: 10px auto">
                                </div>
                            </el-scrollbar>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="14">
                    <el-card class="box-card1" shadow="hover">
                        <div slot="header" class="clearfix headertext">
                            <span>问答机器人的现状</span>
                            <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                        </div>
                        <div style="height: 300px">
                            <el-scrollbar style="height: 100%" class="scrollbar">
                                <div>
                                    <p class="ptext">对问答机器人的研究可以追溯到1950年图灵在Mind期刊上发表的文章《计算机和智能》，其提出图灵测试：机器能思考吗？随着科学技术的不断发展，问答机器人不断由基于关键词匹配、基于预定义模板向基于深度学习生成演变。其中基于关键词匹配的如1966年MIT约瑟夫·魏泽鲍姆开发的用于临床模拟罗杰斯心理治疗的BASIC脚本程序ELIZA。基于模板匹配的如1988年英国程序员罗洛·卡彭特创建的聊天机器人Jabberwacky：以有趣、娱乐和幽默的方式模拟自然的人际聊天；又如1995年的查德·华勒斯博士开发的ALICE系统可以通过和网民的聊天不断学习问答方式。在进入2000年后2010年苹果公司推出人工智能助手Siri，自此进入深度学习的问答进程。采用深度问答的基本框架如下：将用户输入信息看为Encoder编码部分，将生成的回复部分看为Decoder解码部分。</p>
                                        <img src="../../../assets/QA_2.png" width="700"  class="img">
                                    <!--<h1 class="htext">文本分类的定义</h1>-->
                                    <!--<div style="width: 300px;margin: 0 auto">-->
                                        <!--&lt;!&ndash;<img src="../../../assets/111.jpg" width="300"  class="img">&ndash;&gt;-->
                                    <!--</div>-->

                                    <p class="ptext">同时根据其交互特点、功能特点与技术特点分为：单轮、多轮、闲聊型、任务型、混合型、模板型、检索型、生成型机器人，如下：</p>
                                    <img src="../../../assets/QA_3.png" width="700" class="img">
                                    <!--<h1 class="htext">2.算法要点</h1>-->
                                    <!--<p class="ptext">文本数据可以是短语、句子、包含文本段落的整篇文档，这些数据可以从语料库、博客、互联网的任何地方获得。</p>-->
                                    <!--<h1 class="htext">3.优缺点分析</h1>-->
                                    <!--<p class="ptext">文本分类程序把一个未见过的文档分成已知类别中的一个或多个。把给定的文档归到两个类别中的一个，叫做二类分类；分到多个类别中的一个，叫做多类分类。</p>-->

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
                            <span>问答机器人的应用</span>
                            <el-link type="success" style="margin-left: 40px" href="http://58.119.112.11:11004/geochat/">地质小助手</el-link>
                            <el-link type="warning" style="margin-left: 20px" href="http://58.119.112.15:11014/home">地质问答机器人</el-link>
                            <el-link type="danger"  style="margin-left: 20px" href="http://zhongkeruitong.top/AIshow/chatbot/">医疗问答机器人</el-link>
                        </div>
                        <div style="width: 700px;margin: 0 auto">
                            <p class="ptext">随着自然语言处理技术的不断演进，以及行业服务质量的提升，问答机器人从2001年通信领域的SmarterChild到2006年IBM最强大脑Watson，再到2010年苹果公司的人工智能助手Siri，得到了大量应用场景。如今微软小冰、微软小娜、阿里小蜜、京东JIMI、网易七鱼等各类机器人层出不穷。</p>
                            <img src="../../../assets/QA_4.png" style="width: 100%">
                            <p class="ptext">在电商与智能客服领域如阿里小密、京东JIMI：</p>
                            <img src="../../../assets/QA_5.png" class="img">
                            <!--<p class="ptext">1、文本预处理的目的就是将原始数据集格式化为统一的格式，方便后续处理。目前使用的方法中，文本预处理主要是对文本数据进行分词、去停用词。</p>-->
                            <!--<p class="ptext">2、对于中文文本数据而言，即使去过停用词，剩余的词也并不一定都与文本所属的标签有关，这就需要从剩余的词中选择与类别相关的特征关键词。即特征提取。</p>-->
                            <!--<p class="ptext">3、由于电脑不能识别自然语言，需要先对文本特征词进行向量化表示，将其转化为机器能够识别的模式。</p>-->
                            <!--<p class="ptext">4、分类器是文本分类系统的核心模块，是各种分类算法的具体表现形式，所以如何训练构造分类器是文本分类过程中的关键问题。</p>-->
                            <!--<p class="ptext">5、分类器训练好之后，可以使用训练的模型去预测文本的类别。</p>-->
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
        name: "AQ"
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
        /*margin-top: 20px;margin-bottom: 20px;*/
        margin: 20px auto;
    }
    .scrollbar >>> .el-scrollbar__wrap{
        overflow-x: hidden;

    }
</style>
