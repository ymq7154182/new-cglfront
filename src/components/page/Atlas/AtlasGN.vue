<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="10">
                <el-card class="box-card1" shadow="hover">
                    <div slot="header" class="clearfix headertext">
                        <span>什么是图谱?</span>
                        <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                    </div>
                    <div style="height: 300px">
                        <el-scrollbar class="scrollbar" style="height: 100%">
                            <div>
                                <p class="ptext">知识图谱的概念最初是由谷歌知识图项目于2012年5月16日提出的。该项目旨在利用结构化知识增强谷歌搜索引擎，提高搜索质量和用户体验。如图1所示，当搜索“Yao Ming”时谷歌中，除了与“姚明”相关的网页显示在左侧外，还有一些结构化的“姚明”的信息也会出现在右侧(例如，出生日期，出生地，身高和他的妻子)。这样全面的返回结果依赖于背景知识图谱。与传统的基于关键词匹配的网络搜索相比，基于知识图谱的语义搜索更具有优势搜索，可以更好地理解用户的查询意图，从而提供更简洁、更智能的搜索结果。例如，当在谷歌中搜索“姚明身高”时，它不仅返回网页分别与“姚明”和“身高”相关，也直接返回“2.29米”给用户。</p>
                            </div>
                            <div style="width: 400px;margin: 10px auto;text-align: center">
                                <img src="../../../assets/67455.png" width="400">
                                <span>图1 “姚明”在谷歌搜索引擎中的搜索结果</span>
                            </div>
                        </el-scrollbar>
                    </div>

                </el-card>
            </el-col>
            <el-col :span="14">
                <el-card class="box-card1" shadow="hover">
                    <div slot="header" class="clearfix headertext">
                        <span>基本构成</span>
                        <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                    </div>
                    <div style="height: 300px">
                        <el-scrollbar style="height: 100%" class="scrollbar">
                            <div>
                                <!--<h1 class="htext">1.架构层面</h1>-->
                                <!--<div style="width: 600px;margin: 0 auto">-->
                                    <!--&lt;!&ndash;<img src="../../../assets/2234.png" width="500"  class="img">&ndash;&gt;-->
                                <!--</div>-->

                                <p class="ptext">知识图谱已成为人工智能、数据库和语义Web领域的一个热门术语，它是指以图形式表示的任何知识集合，如语义Web知识库(如DBpedia和Yago)、RDF数据集和形式本体。图结构中的节点可以是概念、实体和文字，边是不同类型的关系。如图2所示，实体代表现实世界的个人(例如，“P.R.中国”和“北京”)。概念代表了一组具有相同特征的个体，如“中国”、“希腊”、“美国”等，构成了一套与“国家”概念相对应的概念。文字是指表示某些关系的特定值的字符串，如字符串“中国”，实体“P.R.China”的中文名称。这些节点之间的边代表着实体、概念和文字之间的不同关系，如“中华人民共和国”是一个“国家”，“中国”的首都是“北京”。所有这些关系及其相关实体、概念或文字都以知识图谱的三元形式存储，知识图谱是知识图谱的基本存储单元。三元组以主语、谓语、宾语的形式组织知识，例如P.R.中国、is-a、Country>和P.R.中国，中文名称“中国”。</p>
                                <div style="width: 600px;margin: 10px auto;text-align: center">
                                    <el-image :src="url" :preview-src-list="srcList" style="width: 600px"></el-image>
                                    <span>图2 知识图谱部分示例</span>
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
                        <span>图谱构建框架</span>
                        <!--<el-button style="float: right;" type="primary" @click="downloads">项目下载</el-button>-->
                        <!--<el-button style="float: right;margin-right: 10px" type="success" @click="showlog">日志展示</el-button>-->
                    </div>
                    <div style="height: 500px">
                        <el-scrollbar class="scrollbar" style="height: 100%">
                            <div>
                                <p class="ptext">构建图谱该框架包含四个阶段：知识抽取、知识集成知识质量改进和知识更新。如图3。</p>
                            </div>
                            <div style="width: 900px;margin: 10px auto;text-align: center">
                                <el-image :src="url1" :preview-src-list="srcList1" style="width: 900px"></el-image>
                                <span>图3  构建中文知识图谱的总体框架</span>
                            </div>
                            <h1 class="htext">知识抽取:</h1>
                            <p class="ptext">中文知识图谱构建的第一阶段是知识抽取。主要有三种类型的数据源，即结构化数据、半结构化数据和非结构化数据，用于知识抽取。结构化数据是指具有严格数据模型的数据诸如存储在表和关系数据库中的数据的结构。半结构化数据是指具有一定结构但是不是很固定的数据，如XML数据。非结构化数据通常是指没有预先定义的数据模型的信息，例如文本。</p>
                            <h1 class="htext">知识集成:</h1>
                            <p class="ptext">大多数中文知识图谱都是从各种来源提取出来的，因此有必要对这些异构的知识进行集成。中文的知识图谱有些只选择链接知识，即链接在不同来源中的等价的实体、概念、属性等，而另一些中文知识图谱则是在知识链接后再进一步融合等价的知识。</p>
                            <h1 class="htext">知识质量改进:</h1>
                            <p class="ptext">构建中文知识图谱需要大量的数据源(如Wikipedia、百度百科等)，而这些数据源是由人自由编辑的，因此知识图谱中的错误在所难免。因此，通过误差检测和校正技术来提高知识图谱数据的质量是非常重要的。此外，知识图谱是不完整的，为了提高数据质量，知识补全也是必要的。</p>
                            <h1 class="htext">知识更新:</h1>
                            <p class="ptext">由于在新闻和其他网络中不断出现的新兴的实体，并且随着时间的推移，现有实体的知识也可能会发生变化，所以更新机制对于保证在特定的时间点知识图谱的完整性和准确性是很重要的。</p>
                        </el-scrollbar>
                    </div>

                </el-card>
            </el-col>
        </el-row>
        <el-row style="margin-top: 20px">
            <el-col>
                <el-card class="box-card" shadow="hover">
                    <div slot="header" class="clearfix headertext">
                        <span>应用领域</span>
                        <!--<el-button style="float: right;" type="primary" @click="downloads">项目下载</el-button>-->
                        <!--<el-button style="float: right;margin-right: 10px" type="success" @click="showlog">日志展示</el-button>-->
                    </div>
                    <div style="height: 500px">
                        <el-scrollbar class="scrollbar" style="height: 100%">
                            <div>
                                <p class="ptext">目前，中文知识图谱在许多不同的智能应用中都发挥了重要的作用，下面将对其进行介绍。注意，不同语言的知识图谱可以分别应用于不同语言的语义搜索、问答、智能分析、决策等应用。这些不同语言的应用程序使用知识图谱的方式是相似的，唯一的区别在于一些应用程序需要哪种语言技术来支持它们。例如，不同语言的问题回答需要使用不同的方法来解析给定文本问题的句法结构。</p>
                            </div>
                            <h1 class="htext">语义搜索:</h1>
                            <p class="ptext">中文知识图谱能够提供高质量的结构化背景知识和常识性知识，帮助搜索引擎更好地理解用户的查询意图，从而提供更简洁、智能的搜索结果。该技术克服了传统的基于关键词的搜索模型的局限性，将基于web的搜索转化为语义搜索。这使得搜索引擎更加智能化，有效地提高了搜索结果的质量。目前，大多数中文搜索引擎如百度、搜狗和都建立了自己的知识图谱，以增强用户的搜索体验。如图4所示,当你在百度搜索引擎搜索一带一路,除了相关的网页左侧所示一带一路,一带一路的成员也在右边。这就是知识图谱技术的应用。搜索引擎首先识别用户搜索关键字中的实体，然后在知识图谱中获取与这些实体相关的知识，最后将结构化的知识返回给用户。</p>
                            <div style="width: 500px;margin: 10px auto;text-align: center">
                                <el-image :src="url2" :preview-src-list="srcList2" style="width: 500px"></el-image>
                                <span>图4 百度搜索“一带一路”的搜索结果</span>
                            </div>
                            <h1 class="htext">问答：</h1>
                            <p class="ptext">智能问答(QA)是人工智能的重要应用。它可以用准确、简洁的自然语言为用户提供问题的答案。可大大提高效率，降低人工干预成本。这种对话性的信息获取依赖于质量保证系统的准确性和可靠性。知识图谱通过提供高质量的背景知识，可以帮助提高机器人、物联网等设备的智能。如图5所示,当提交一个问题：“一带一路的倡议国是？”到支持中文知识图谱的QA系统,该系统将首先使用自然语言处理技术将问题转换为实体“一带一路”的属性为“倡议国”的属性值是什么？,然后在给定知识图谱中获得属性值“中国”，最后再把答案返回给用户。目前,许多研究人员正在研究知识库问答(KBQA)的技术(29、30)和目前在中国已经有很多的QA平台，并且已经引入了知识图谱，以确保更好的用户体验。比如百度公司的机器人“Xiaodu”，阿里巴巴公司的机器人“Xiaomi”,苹果公司的智能语音助理“Siri”和微软的机器人“Cortana”。</p>
                            <div style="width: 900px;margin: 10px auto;text-align: center">
                                <el-image :src="url3" :preview-src-list="srcList3" style="width: 900px"></el-image>
                                <span>图5 基于知识图谱的中文问答系统示例</span>
                            </div>
                            <h1 class="htext">智能分析决策：</h1>
                            <p class="ptext">知识图谱可以表示和链接多种类型的数据，如文本、多媒体、传感器等，在不同类型的大数据之间建立关联。这种关联的大数据可以很容易地用于信息分析和辅助决策。知识图谱在智能分析中起着非常重要的作用。如图6所示，在反欺诈情报分析的场景中，我们可以通过融合来自不同数据源的信息，添加领域专家建立的业务规则来构建一个情报知识图谱。通过知识图谱中的数据不一致性检测，可以识别潜在的欺诈风险。例如，借款人张先生和借款人吴先生在填写个人信息时声称是同事，但填写的公司名称不同。此外，张先生的电话号码也是另一位借款人甄先生的。这些不一致表明存在潜在的欺诈行为，因此银行将分别拒绝张先生、吴先生和郑先生的贷款请求。此外，知识图谱已经应用于许多其他类型的情报分析，如警察情报分析、库存情报分析等，以辅助决策。</p>
                            <div style="width: 900px;margin: 10px auto;text-align: center">
                                <el-image :src="url4" :preview-src-list="srcList4" style="width: 900px"></el-image>
                                <span>图6 情报分析的反欺诈示例</span>
                            </div>
                            <h1 class="htext">信息融合：</h1>
                            <p class="ptext">随着万维网的发展，人们可以从大量不同的数据源获取大量的信息，这就导致了信息异构的问题，传统的方法很难根据用户的需求来集成这些信息。知识图谱可以表示、链接和集成来自不同数据源的不同类型的数据，成为信息集成的有效工具。近年来，随着中国经济的发展，中国已成为全球制造业中心。由于各种来源的制造信息规模呈爆炸式增长，我们可以将不同数据源的制造信息集成到一个知识图谱中，便于利用和可视化。图7给出了装备制造部分知识图谱。</p>
                            <div style="width: 900px;margin: 10px auto;text-align: center">
                                <el-image :src="url5" :preview-src-list="srcList5" style="width: 900px"></el-image>
                                <span>图7 设备制造部分知识图谱</span>
                            </div>
                            <h1 class="htext">垂直领域应用：</h1>
                            <p class="ptext">在金融领域，知识图谱推动了多情景智能的发展。我们可以通过整合来自不同来源的客户数据来制定营销策略，构建客户知识图谱。通过从财务报告、招股说明书、公司公告等数据中提取数据，构建公司相关知识图谱，帮助金融研究人员做出投资决策。通过对影响股票的各种因素进行建模，可以构建股票知识图谱。目前，国内很多金融企业都引进了知识图谱技术，目的是想获得该行业金融AI的头把交椅。以中兴通讯公司为例,在美国限制出口中兴的消息公布后,如果我们有中兴通讯的知识图谱及其相关公司包括供应商、合作伙伴和竞争对手(见图8),我们可以迅速筛选受影响的上市公司，挖掘投资机会或控制投资风险。</p>
                            <div style="width: 900px;margin: 10px auto;text-align: center">
                                <el-image :src="url6" :preview-src-list="srcList6" style="width: 900px"></el-image>
                                <span>图8 与中兴通讯相关的部分知识图谱</span>
                            </div>
                            <p class="ptext">在社交网络、生物医学、物联网等领域，知识图谱谱也发挥着越来越重要的作用。这是由于知识图谱的广泛应用，使得它在近年来变得越来越受欢迎。</p>
                        </el-scrollbar>
                    </div>

                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "AtlasGN",
        data () {
            return {
                url: 'http://zhongkeruitong.top/show/67cb1c76f649455189d337e26e1044651569042531620.jpg',
                srcList: [
                    'http://zhongkeruitong.top/show/67cb1c76f649455189d337e26e1044651569042531620.jpg',
                ],
                url1: 'http://zhongkeruitong.top/show/73d1263b6ea74f788ab6b0f83f034f191569042929347.jpg',
                srcList1: ['http://zhongkeruitong.top/show/73d1263b6ea74f788ab6b0f83f034f191569042929347.jpg'],
                url2: 'http://zhongkeruitong.top/show/a5d35d3556c54f818f5be433bcef780e1569043588835.jpg',
                srcList2: ['http://zhongkeruitong.top/show/a5d35d3556c54f818f5be433bcef780e1569043588835.jpg'],
                url3: 'http://zhongkeruitong.top/show/28a7dc23769f4df5803b4187164d179a1569043776374.jpg',
                srcList3: ['http://zhongkeruitong.top/show/28a7dc23769f4df5803b4187164d179a1569043776374.jpg'],
                url4: 'http://zhongkeruitong.top/show/83964ce8de184f63a0cbeebae0b059551569043899964.jpg',
                srcList4: ['http://zhongkeruitong.top/show/83964ce8de184f63a0cbeebae0b059551569043899964.jpg'],
                url5: 'http://zhongkeruitong.top/show/75c5117abda9461e854aaea2021cc1ce1569044010531.jpg',
                srcList5: ['http://zhongkeruitong.top/show/75c5117abda9461e854aaea2021cc1ce1569044010531.jpg'],
                url6: 'http://zhongkeruitong.top/show/30ea2972293944a9a0d28e48b742c1811569044162603.jpg',
                srcList6: ['http://zhongkeruitong.top/show/30ea2972293944a9a0d28e48b742c1811569044162603.jpg']

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
