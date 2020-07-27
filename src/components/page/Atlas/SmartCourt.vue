<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card class="box-card1" shadow="hover">
                    <div slot="header" class="clearfix headertext">
                        <span>智慧法院项目</span>
                        <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                    </div>
                    <div style="height: 300px">
                        <el-scrollbar class="scrollbar" style="height: 100%;">
                            <p class="ptext">根据最高人民法院《人民法院信息化建设五年发展规划（2018-2022）》的指示精神，要求高级以上人民法院充分利用人工智能等信息技术手段，构建司法领域的知识图谱，支持面向社会公众、法官和司法管理人员的更为丰富的智能化服务内容。</p>
                            <p class="ptext">目前，某市高级人民法院在院领导的决策与支持下，已编写完成一套覆盖整个办案业务环节、规范标准的、约为280万字的《办案指引》指导性文件，该成果意义重大，既能切实规范指导业务判案，也是法院智慧化建设的重要条件。</p>
                            <p class="ptext">
                                法院内关于案件相关数据越积越多，判决书记录了案件的案号、审理法院、原被告身份、公诉人名称、案件事实、适用相关法律条文以及审判人员等信息，基本涵盖了绝大部分信息。判决书知识的充分利用，对“智慧法院”信息化建设具有重要的意义。以办案指南为主要的信息源，对“智慧法院”进行探索：
                            </p>
                            <p class="ptext">
                                (1)案件以及案件中重要知识的结构化展示；
                            </p>
                            <p class="ptext">
                                （2）组织案件之间的关系，破除案件之间的独立性，以案件为核心对知识进行利用
                            </p>
                            <p class="ptext">
                                对需求进行分析，提出构建法院领域知识图谱，解决大规模知识搜索、结构化知识展示以及案件关联分析，知识利用等问题。由于知识图谱中存储的信息已经是结构化的知识。冗余信息较少，基于知识图谱的知识搜索中，不仅可以查询到指定的知识信息，还可以方便的查找与其关联的信息。结合自身的信息以及相关数据。以结构化的数据丰富的展示案件以及案件中的实体信息。通过知识图谱技术，将案件、法院、审判人员、原告、被告、公诉机关等重要实体或概念之间的关系通过边进行连接，通过案件中的主要实体以及概念之间的关系，进行数据的关联分析以及数据应用。例如挖掘审判人员关系以及其历史审理案件，以及案件审理质量、审判流程等多角度分析，实现从法官到审判团队的评价与监督；针对法官案件审理类型以及审理质量，对审判人员或审判团队擅长案件类型进行打标签，构建精准分案方案；通过对案件进行分析，找到相似案件，为今后案件审理提供辅助审判结果，为社会治理与法制化建设提供服务。
                            </p>
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
                                    ·知识图谱的结构
                                </h1>
                                <p class="ptext">结合法院的数据内容，构建包含五中基本类别、六中关系以及若干类别属性的知识图谱结构，用于法院领域知识图谱构建工作。</p>
                                <h1 class="htext">
                                    （1）五种基本类别及其属性
                                </h1>
                                <p class="ptext">
                                    五种基本数据类别包括案件、审判人员、法院、诉讼发起方、诉讼对象。
                                </p>
                                <p class="ptext">
                                    案件：是法院知识图谱的核心概念。为了对案件进行充分的描述，突出案件的重要信息。在知识图谱中，使用案号、案由、案件名称、立案时间、审判时长、法定审判时长、法律条文、案件事实、案发地点、案发时间、案件相关人、案件相关组织、审判结果等属性对案件进行描述。
                                </p>
                                <p class="ptext">
                                    审判员：俗称法官，是判决书中的重要组成实体。我国法律规定，审判人员包含院长、审判员、人民陪审员等。一个判决书中至少包含以为审判长或审判员。
                                </p>
                                <p class="ptext">
                                    法院：法院是案件审判的司法机关，在本文的研究内容中，法院包含法院名称、受理的案件数量以及审判人员数量属性。审判人员是否就职某一个法院，通过判决书中案件与审判人员，案件与法律之间的关系确定，为了对法院基础信息的描述，审判人员数量统计也完全基于判决书中存在的关系。
                                </p>
                                <p class="ptext">
                                    诉讼发起方：在不同的案件类型中，诉讼发起方具有特定的法律称谓，例如刑事公诉案件中称谓是公诉机关；刑事自诉案件中为自诉人；民事一审案件中称为原告；二审中是上诉人等，他们在案件审理中均处于原告地位。他们的属性定义有：称谓、类型、名字、性别、身份证号码、住址、籍贯、受教育程度、法人姓名。
                                </p>
                                <p class="ptext">
                                    诉讼对象：与诉讼发起方对应，在案件审理中处于被告地位，在不同类型的案件中，称呼也不一样，例如在刑事案件中称为被告人；民事一审案件，行政案件中称为被告；再审判决书中称为上诉人。
                                </p>
                                <h1 class="htext">
                                    (2)六中关系
                                </h1>
                                <p class="ptext">
                                    在关系方面，从解决当前案件之间的独立性问题出发。以案件为核心，将案件与法院、审判人员诉讼发起方、诉讼对象之间的关系进行知识图谱的语义关系定义。下表为五种类别之间的六种逻辑关系。
                                </p>
                                <div style="width: 600px;margin: 0 auto">
                                    <el-image :src="url" :preview-src-list="srcList" style="width: 600px"></el-image>
                                </div>
                                <p class="ptext">
                                    “智慧法院”知识图谱的结构如下图所示：
                                </p>
                                <div style="width: 600px;margin: 0 auto">
                                    <el-image :src="url2" :preview-src-list="srcList2" style="width: 600px"></el-image>
                                </div>
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
                                    <span>图 “智慧法院”知识图谱结构</span>
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
                        <span>技术架构设计</span>
                    </div>
                    <div style="height: 500px;">
                        <el-scrollbar class="scrollbar" style="height: 100%">
                            <p class="ptext">
                                在技术实现上，依托现有的办案指引这个资源池，采取自然语言处理技术、大数据技术、以及机器学习和深度学习的算法，构建知识图谱群，形成具有规则特征的知识图谱库，为智能化的业务应用、可视化的领导决策辅助、便利有效的公众服务，提供系列的技术实现，并融合形成基于知识图谱群的自动化实时的智慧化可视平台，为智慧法院建设形成标杆。
                            </p>
                            <p class="ptext">
                                技术设计架构图如下：
                            </p>
                            <div style="width: 900px;margin: 0 auto;text-align: center">
                                <el-image :src="url3" :preview-src-list="srcList3" style="width: 900px"></el-image>
                            </div>
                            <p class="ptext">
                                运用知识图谱、大数据可视化、语义分析、意图识别、主题分类、文本理解等技术，对领导层、业务层、公众服务层提供智能服务。
                            </p>
                            <p class="ptext">
                                领导层：利用《办案指南》这一指导性文件，创建知识图谱和庞大的司法信息案例库，对各级各类案件的分析，结合大数据可视化技术为领导层提供质效评估、犯罪预防、公众引导等决策服务。
                            </p>
                            <p class="ptext">
                                业务层：通过知识图谱、智能化语义分析、案件模型、案例数据库等技术和手段，并通过大数据融合技术和移动技术的使用，为业务法官提供类案检索、同安同判、判决预测、类案推送等服务。
                            </p>
                            <p class="ptext">
                                公众服务层：通过知识图谱群、司法信息案例库的建设，为社会公众和法官、司法人员提供科普学习及虚拟判案等智能服务。
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
        name: "SmartCourt",
        data () {
            return {
                url: 'http://114.242.223.253/aa20020b9d58430fabb7693f46513b331569065368480.jpg',
                srcList: ['http://114.242.223.253/aa20020b9d58430fabb7693f46513b331569065368480.jpg'],
                url2: 'http://114.242.223.253/a93c786d61a349b380f7248b8cec4a861569065548494.jpg',
                srcList2: ['http://114.242.223.253/a93c786d61a349b380f7248b8cec4a861569065548494.jpg'],
                url3: 'http://114.242.223.253/1280e9ee575c456b958f39777fa0ef631569065693109.jpg',
                srcList3: ['http://114.242.223.253/1280e9ee575c456b958f39777fa0ef631569065693109.jpg']

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
