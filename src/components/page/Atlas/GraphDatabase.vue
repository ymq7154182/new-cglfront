<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card class="box-card1" shadow="hover">
                    <div slot="header" class="clearfix headertext">
                        <span>图数据库</span>
                        <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                    </div>
                    <div style="height: 300px">
                        <el-scrollbar class="scrollbar" style="height: 100%;">
                            <p class="ptext">在一个图中包含两种基本的数据类型：Nodes（节点） 和 Relationships（关系）。Nodes 和 Relationships 包含key/value形式的属性。Nodes通过Relationships所定义的关系相连起来，形成关系型网络结构。</p>
                            <div style="width: 400px;margin: 0 auto">
                                <el-image :src="url" :preview-src-list="srcList" style="width: 400px"></el-image>
                            </div>
                        </el-scrollbar>

                    </div>
                </el-card>
            </el-col>
            <el-col :span="16">
                <el-card class="box-card1" shadow="hover">
                    <div slot="header" class="clearfix headertext">
                        <span>图谱有关系图谱和属性图谱</span>
                        <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                    </div>
                    <div style="height: 300px">
                        <el-scrollbar style="height: 100%" class="scrollbar">
                            <div>

                                <p class="ptext">关系图谱描述的是不同实体关系的如下图所示：</p>
                                <div style="width: 600px;margin: 0 auto">
                                    <el-image :src="url2" :preview-src-list="srcList2" style="width: 600px"></el-image>
                                </div>
                                <p class="ptext">
                                    属性图谱展示的是一个实体各种不同的属性，如下图：
                                </p>
                                <div style="width: 600px;margin: 0 auto">
                                    <el-image :src="url3" :preview-src-list="srcList3" style="width: 600px"></el-image>
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
                        <span>应用行业</span>
                    </div>
                    <div style="height: 500px;">
                        <el-scrollbar class="scrollbar" style="height: 100%">
                            <h1 class="htext">
                                反欺诈多维关联分析场景：
                            </h1>
                            <p class="ptext">
                                通过图分析可以清楚地知道洗钱网络及相关嫌疑，例如对用户所使用的帐号、发生交易时的IP地址、MAC地址、手机IMEI号等进行关联分析。
                            </p>
                            <div style="width: 900px;margin: 0 auto;text-align: center">
                                <el-image :src="url4" :preview-src-list="srcList4" style="width: 900px"></el-image>
                                <span>图 反洗钱模型</span>
                            </div>
                            <p class="ptext">
                                反欺诈已经是金融行业一个核心应用，通过图数据库可以对不同的个体、团体做关联分析，从人物在指定时间内的行为，例如去过地方的IP地址、曾经使用过的MAC地址（包括手机端、PC端、WIFI等）、社交网络的关联度分析，同一时间点是否曾经在同一地理位置附近出现过，银行账号之间是否有历史交易信息等。
                            </p>
                            <div style="width: 900px;margin: 0 auto;text-align: center">
                                <el-image :src="url5" :preview-src-list="srcList5" style="width: 900px"></el-image>
                                <span>图 金融反欺诈关联分析模型</span>
                            </div>
                            <h1 class="htext">
                                社交网络图谱：
                            </h1>
                            <p class="ptext">
                                在社交网络中，公司、员工、技能的信息，这些都是节点，它们之间的关系和朋友之间的关系都是边，在这里面图数据库可以做一些非常复杂的公司之间关系的查询。比如说公司到员工、员工到其他公司，从中找类似的公司、相似的公司，都可以在这个系统内完成。
                            </p>
                            <div style="width: 900px;margin: 0 auto;text-align: center">
                                <el-image :src="url6" :preview-src-list="srcList6" style="width: 900px"></el-image>
                                <span>图 社交关系网络模型</span>
                            </div>
                            <h1 class="htext">
                                企业关系图谱：
                            </h1>
                            <p class="ptext">
                                图数据库可以对各种企业进行信息图谱的建立，包括最基本的工商信息，包括何时注册、谁注册、注册资本、在何处办公、经营范围、高管架构。围绕企业的经营范围，继续细化去查询企业究竟有哪些产品或服务，例如通过企业名称查询到企业的自媒体，从而给予其更多关注和了解。另外也包括对企业的产品和服务的数据关联，查看该企业有没有令人信服的自主知识产权和相关资质来支撑业务的开展。
                            </p>
                            <p class="ptext">
                                企业在日常经营中，与客户、合作伙伴、渠道方、投资者都会打交道，这也决定了企业对社会各个领域都广有涉猎，呈现面错综复杂，因此可以通过企业数据图谱来查询，层层挖掘信息。基于图数据的企业信息查询可以真正了解企业的方方面面，而不再是传统单一的工商信息查询。
                            </p>
                            <div style="width: 900px;margin: 0 auto;text-align: center">
                                <el-image :src="url7" :preview-src-list="srcList7" style="width: 900px"></el-image>
                                <span>图 企业知识图谱模型</span>
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
        name: "GraphDatabase",
        data () {
            return {
                url: 'http://zhongkeruitong.top/show/c95fc4f6ac4242cfae784dfefd4573f01569046505338.jpg',
                srcList: ['http://zhongkeruitong.top/show/c95fc4f6ac4242cfae784dfefd4573f01569046505338.jpg'],
                url2: 'http://zhongkeruitong.top/show/61c4150e63c84536ab9dbd1c99ad9c7c1569046701367.jpg',
                srcList2: ['http://zhongkeruitong.top/show/61c4150e63c84536ab9dbd1c99ad9c7c1569046701367.jpg'],
                url3: 'http://zhongkeruitong.top/show/5a3e6f9314a64427bed92d1be2057a721569046806328.jpg',
                srcList3: ['http://zhongkeruitong.top/show/5a3e6f9314a64427bed92d1be2057a721569046806328.jpg'],
                url4: 'http://zhongkeruitong.top/show/ffb8ef61ef4c43e8a877504b54b814cc1569046900396.jpg',
                srcList4: ['http://zhongkeruitong.top/show/ffb8ef61ef4c43e8a877504b54b814cc1569046900396.jpg'],
                url5: 'http://zhongkeruitong.top/show/a8f62603b6c14d49ad1d1e0178f157eb1569047061501.jpg',
                srcList5: ['http://zhongkeruitong.top/show/a8f62603b6c14d49ad1d1e0178f157eb1569047061501.jpg'],
                url6: 'http://zhongkeruitong.top/show/cb3e2d5511da43bea7de459b104dfa461569047261426.jpg',
                srcList6: ['http://zhongkeruitong.top/show/cb3e2d5511da43bea7de459b104dfa461569047261426.jpg'],
                url7: 'http://zhongkeruitong.top/show/b10c4039552f4c8eb0947ea713d8ddaf1569047384813.jpg',
                srcList7: ['http://zhongkeruitong.top/show/b10c4039552f4c8eb0947ea713d8ddaf1569047384813.jpg']

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
