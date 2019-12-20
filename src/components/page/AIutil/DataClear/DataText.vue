<template>
    <div>
        <div>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-card class="box-card1" shadow="hover">
                        <div slot="header" class="clearfix headertext">
                            <span>一、预处理阶段</span>
                            <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                        </div>
                        <div style="height: 300px">
                            <el-scrollbar style="height: 100%" class="scrollbar">
                                <div style="margin: auto">
                                    <p class="ptext">预处理阶段主要做两件事情：一是将数据导入处理工具。二是看数据。这里包含两个部分：一是看元数据，包括字段解释、数据来源、代码表等等一切描述数据的信息；二是抽取一部分数据，使用人工查看方式，对数据本身有一个直观的了解，并且初步发现一些问题，为之后的处理做准备。
                                    </p>
                                </div>
                            </el-scrollbar>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="16">
                    <el-card class="box-card1" shadow="hover">
                        <div slot="header" class="clearfix headertext">
                            <span>二、阶段1：缺失值清洗</span>
                            <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                        </div>
                        <div style="height: 300px">
                            <el-scrollbar style="height: 100%" class="scrollbar">
                                <div>
                                    <p class="ptext">缺失值是最常见的数据问题，处理缺失值也有很多方法，四个步骤：</p>

                                    <p class="ptext">1、确定缺失值范围：对每个字段都计算其缺失值比例，然后按照缺失比例和字段重要性，分别制定策略。</p>
                                    <!--<h1 class="htext">2.算法要点</h1>-->
                                    <p class="ptext">2、去除不需要的字段：直接删掉即可</p>
                                    <!--<h1 class="htext">3.优缺点分析</h1>-->
                                    <p class="ptext">3、填充缺失内容：某些缺失值可以进行填充，方法有以下三种：。</p>
                                    <p class="ptext">（1）以业务知识或经验推测填充缺失值；</p>
                                    <p class="ptext">（2）以同一指标的计算结果（均值、中位数、众数等）填充缺失值；</p>
                                    <p class="ptext">（3）以不同指标的计算结果填充缺失值。</p>
                                    <p class="ptext">4、重新取数：如果某些指标非常重要又缺失率高，那就需要和取数人员或业务人员了</p>

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
                            <span>阶段2：格式内容清洗</span>
                        </div>
                        <div style="width: 700px;margin: 0 auto">
                            <p class="ptext">如果数据是由系统日志而来，那么通常在格式和内容方面，会与元数据的描述一致。而如果数据是由人工收集或用户填写而来，则有很大可能性在格式和内容上存在一些问题，简单来说，格式内容问题有以下几类：</p>
                            <p class="ptext">1、时间、日期、数值、全半角等显示格式不一致</p>
                            <p class="ptext">2、内容中有不该存在的字符</p>
                            <p class="ptext">某些内容可能只包括一部分字符，比如身份证号是数字+字母，中国人姓名是汉字（赵C这种情况还是少数）。最典型的就是头、尾、中间的空格，也可能出现姓名中存在数字符号、身份证号中出现汉字等问题。这种情况下，需要以半自动校验半人工方式来找出可能存在的问题，并去除不需要的字符。</p>
                            <p class="ptext">3、内容与该字段应有内容不符</p>
                            <p class="ptext">姓名写了性别，身份证号写了手机号等等，均属这种问题。 但该问题特殊性在于：并不能简单的以删除来处理，因为成因有可能是人工填写错误，也有可能是前端没有校验，还有可能是导入数据时部分或全部存在列没有对齐的问题，因此要详细识别问题类型。</p>
                            <p class="ptext">格式内容问题是比较细节的问题，但很多分析失误都是栽在这个坑上，比如跨表关联或VLOOKUP失败（多个空格导致工具认为“陈丹奕”和“陈 丹奕”不是一个人）、统计值不全（数字里掺个字母当然求和时结果有问题）、模型输出失败或效果不好（数据对错列了，把日期和年龄混了）。因此，请各位务必注意这部分清洗工作，尤其是在处理的数据是人工收集而来，或者你确定产品前端校验设计不太好的时候。</p>
                        </div>




                        <!--<div style="width: 900px;margin: 0 auto">-->
                        <!--<el-image :src="url" :preview-src-list="srcList" style="width: 900px"></el-image>-->
                        <!--</div>-->
                    </el-card>
                </el-col>
            </el-row>
            <el-row style="margin-top: 20px">
                <el-col>
                    <el-card class="box-card" shadow="hover">
                        <div slot="header" class="clearfix headertext">
                            <span>四、阶段3  逻辑错误清洗</span>
                        </div>
                        <div style="width: 700px;margin: 0 auto">
                            <p class="ptext">这部分的工作是去掉一些使用简单逻辑推理就可以直接发现问题的数据，防止分析结果走偏。主要包含以下几个步骤：</p>
                            <p class="ptext">1、去重</p>
                            <p class="ptext">有的分析师喜欢把去重放在第一步，但我强烈建议把去重放在格式内容清洗之后，原因已经说过了（多个空格导致工具认为“陈丹奕”和“陈 丹奕”不是一个人，去重失败）。而且，并不是所有的重复都能这么简单的去掉。</p>
                            <p class="ptext">2、去除不合理值</p>
                            <p class="ptext">一句话就能说清楚：有人填表时候瞎填，年龄200岁，年收入100000万（估计是没看见”万“字），这种的就要么删掉，要么按缺失值处理。这种值如何发现？提示：可用但不限于箱形图（Box-plot）.</p>
                            <p class="ptext">姓名写了性别，身份证号写了手机号等等，均属这种问题。 但该问题特殊性在于：并不能简单的以删除来处理，因为成因有可能是人工填写错误，也有可能是前端没有校验，还有可能是导入数据时部分或全部存在列没有对齐的问题，因此要详细识别问题类型。</p>
                            <p class="ptext">3、修正矛盾内容</p>
                            <p class="ptext">有些字段是可以互相验证的，举例：身份证号是1101031980XXXXXXXX，然后年龄填18岁，我们虽然理解人家永远18岁的想法，但得知真实年龄可以给用户提供更好的服务啊。在这种时候，需要根据字段的数据来源，来判定哪个字段提供的信息更为可靠，去除或重构不可靠的字段。</p>
                            <p class="ptext">逻辑错误除了以上列举的情况，还有很多未列举的情况，在实际操作中要酌情处理。另外，这一步骤在之后的数据分析建模过程中有可能重复，因为即使问题很简单，也并非所有问题都能够一次找出，我们能做的是使用工具和方法，尽量减少问题出现的可能性，使分析过程更为高效。</p>
                        </div>




                        <!--<div style="width: 900px;margin: 0 auto">-->
                        <!--<el-image :src="url" :preview-src-list="srcList" style="width: 900px"></el-image>-->
                        <!--</div>-->
                    </el-card>
                </el-col>
            </el-row>
            <el-row :gutter="20" style="margin-top: 20px">
                <el-col :span="12">
                    <el-card class="box-card1" shadow="hover">
                        <div slot="header" class="clearfix headertext">
                            <span>五、非需求数据清洗</span>
                            <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                        </div>
                        <div style="height: 300px">
                            <el-scrollbar style="height: 100%" class="scrollbar">
                                <div style="margin: auto">
                                    <p class="ptext">这一步说起来非常简单：把不要的字段删了。但实际操作起来，有很多问题，例如：
                                        把看上去不需要但实际上对业务很重要的字段删了；某个字段觉得有用，但又没想好怎么用，不知道是否该删；一时看走眼，删错字段了。如果数据量没有大到不删字段就没办法处理的程度，那么能不删的字段尽量不删。第三种情况，勤备份数据。
                                    </p>
                                </div>
                            </el-scrollbar>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="12">
                    <el-card class="box-card1" shadow="hover">
                        <div slot="header" class="clearfix headertext">
                            <span>六、关联性验证</span>
                            <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                        </div>
                        <div style="height: 300px">
                            <el-scrollbar style="height: 100%" class="scrollbar">
                                <div>
                                    <p class="ptext">如果数据有多个来源，那么有必要进行关联性验证。例如，你有汽车的线下购买信息，也有电话客服问卷信息，两者通过姓名和手机号关联，那么要看一下，同一个人线下登记的车辆信息和线上问卷问出来的车辆信息是不是同一辆，如果不是，那么需要调整或去除数据。
                                        严格意义上来说，这已经脱离数据清洗的范畴了，而且关联数据变动在数据库模型中就应该涉及。多个来源的数据整合是非常复杂的工作，一定要注意数据之间的关联性，尽量在分析过程中不要出现数据之间互相矛盾，而你却毫无察觉的情况。</p>

                                </div>
                            </el-scrollbar>
                        </div>


                    </el-card>
                </el-col>
            </el-row>
            <div style="text-align: center">
                <img src="../../../../assets/shujvqingli.png">
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "DataText"
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
