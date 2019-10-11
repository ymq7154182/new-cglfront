<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-card shadow="hover" style="height: 400px">
                    <div slot="header" class="clearfix headertext">
                        <span>Echarts.js</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>
                    <div style="height: 300px">
                        <el-scrollbar style="height: 100%" class="scrollbar">
                            <p class="ptext">
                                ECharts，一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖矢量图形库 ZRender，提供直观，交互丰富，可高度个性化定制的数据可视化图表。
                            </p>
                            <p class="ptext">
                                ECharts 提供了常规的折线图、柱状图、散点图、饼图、K线图，用于统计的盒形图，用于地理数据可视化的地图、热力图、线图，用于关系数据可视化的关系图、treemap、旭日图，多维数据可视化的平行坐标，还有用于 BI 的漏斗图，仪表盘，并且支持图与图之间的混搭。

                                除了已经内置的包含了丰富功能的图表，ECharts 还提供了自定义系列，只需要传入一个renderItem函数，就可以从数据映射到任何你想要的图形，更棒的是这些都还能和已有的交互组件结合使用而不需要操心其它事情。

                                你可以在下载界面下载包含所有图表的构建文件，如果只是需要其中一两个图表，又嫌包含所有图表的构建文件太大，也可以在在线构建中选择需要的图表类型后自定义构建。
                            </p>
                            <div>
                                <el-image
                                    style="width: 500px"
                                    :src="url1"
                                    :preview-src-list="srcList1">
                                </el-image>
                            </div>
                        </el-scrollbar>

                    </div>
                </el-card>
            </el-col>

            <el-col :span="12">
                <el-card shadow="hover" style="height: 400px">
                    <div slot="header" class="clearfix headertext">
                        <span>D3.js</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>
                    <div style="height: 300px">
                        <el-scrollbar style="height: 100%" class="scrollbar">
                            <p class="ptext">
                                D3 是最流行的可视化库之一，它被很多其他的表格插件所使用。它允许绑定任意数据到DOM，然后将数据驱动转换应用到Document中。你可以使用它用一个数组创建基本的HTML表格，或是利用它的流体过度和交互，用相似的数据创建惊人的SVG条形图
                            </p>
                            <div>
                                <el-image
                                    style="width: 500px"
                                    :src="url2"
                                    :preview-src-list="srcList2">
                                </el-image>
                            </div>
                        </el-scrollbar>

                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row style="margin-top: 20px">
            <el-col>
                <el-card shadow="hover" style="height: 600px">
                    <div slot="header" class="clearfix headertext">
                        <span>大数据可视化平台</span>
                        <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                    </div>
                    <div style="height: 500px">
                        <el-scrollbar class="scrollbar" style="height: 100%">
                            <h1 class="htext">1、Tableau</h1>
                            <p class="ptext">Tableau Software致力于帮助人们查看并理解数据。Tableau 帮助任何人快速分析、可视化并分享信息。超过 42,000 家客户通过使用 Tableau 在办公室或随时随地快速获得结果。数以万计的用户使用 Tableau Public 在博客与网站中分享数据。</p>
                            <p class="ptext">它的程序很容易上手，各公司可以用它将大量数据拖放到数字“画布”上，转眼间就能创建好各种图表。这一软件的理念是，界面上的数据越容易操控，公司对自己在所在业务领域里的所作所为到底是正确还是错误，就能了解得越透彻。</p>
                            <div @click="gotopage1" class="imghover">
                                <img src="../../../../assets/4567.jpg" width="700">
                            </div>
                            <h1 class="htext">2、Qlikview</h1>
                            <p class="ptext">QlikView是一个完整的商业分析软件，使开发者和分析者能够构建和部署强大的分析应用。QlikView应用使各种各样的终端用户以一个高度可视化，功能强大和创造性的方式，互动分析重要业务信息。</p>
                            <div @click="gotopage2" class="imghover">
                                <img src="../../../../assets/34222.jpg" width="700">
                            </div>
                            <p class="ptext">QlikView把商业分析需要的三个因素放在一个独立软件包里。QlikView的客户能得到： 一个具有完全集成的ETL工具的向导驱动的应用开发环境 一个考虑到无限钻取的强大AQL分析引擎 一个高度直觉化的，使用简单的用户界面 QlikView让开发者能从多种数据库里提取和清洗数据，建立强大、高效的应用，而且使它们能被power用户、移动用户和每天的终端用户修改后使用。 QlikView获得专利的AQL构架利用了计算机和网络设备的提高，例如价格便宜，速度快的内存。当提供灵活、强大的分析能力时，AQL构架改变了需要OLAP立方体的需求，也不一定要使用数据库。 QlikView是一个可升级的解决方案，完全利用了基础硬件平台，来用上亿的数据记录进行业务分析。QlikView由以下组成：开发工具（QlikView Local Client）；服务器组件（QlikView Server）；发布组件（QlikView Publisher）;其他应用接口（SAP\Salesforce\Informatica）。服务器支持多种方式发布如AJAX客户端、ActiveX客户端。还可以与其他CS/BS系统进行集成。</p>
                            <h1 class="htext">3、Klipfolio</h1>
                            <p class="ptext">Klipfolio是一个BI解决方案，在云中占据100%(不需要桌面应用程序)，为数据可视化和仪表盘组成提供了一个真正具有洞察力的工具。这使得它能够最有效地处理数据、增强实时解决方案和优化，而不是依赖于周期性回归模型。</p>
                            <p class="ptext">Klipfolio支持连接到各种数据源，包括在线和离线数据源。在线资源整合了一系列云托管存储，包括Google表格、关系数据库和其他以各种形式提供数据的服务。服务部门可以在这里找到连接服务的完整参考资料。使用RESTful API也可以连接到您自己的数据源。</p>
                            <div @click="gotopage3" class="imghover">
                                <img src="../../../../assets/78789.jpg" width="700">
                            </div>
                            <p class="ptext">Klipfolio支持多种离线服务类型：MS Excel、CSV、XML、JSON等。可以通过与上面提到的在线来源相同的链接找到完整的参考列表，但是仅在数据存储库部分。</p>
                            <p class="ptext">所有这些数据源，无论是单独或组合，都可以有效地用于整合各种指标，以提取数据愿景，创建、转换和共享定制可视化，以揭示任何无用数字背后的实际含义。</p>
                            <p class="ptext">Klipfolio采用响应原则，利用智能手机和平板电脑等各种技术平台，以及跨越会议室墙壁的台式计算机和智能电视，帮助发现仪表板。</p>
                            <h1 class="htext">4、Kibana</h1>
                            <p class="ptext">Kibana是一个开源的分析与可视化平台，设计出来用于和Elasticsearch一起使用的。你可以用kibana搜索、查看存放在Elasticsearch中的数据。Kibana与Elasticsearch的交互方式是各种不同的图表、表格、地图等，直观的展示数据，从而达到高级的数据分析与可视化的目的。 Elasticsearch、Logstash和Kibana这三个技术就是我们常说的ELK技术栈，可以说这三个技术的组合是大数据领域中一个很巧妙的设计。一种很典型的MVC思想，模型持久层，视图层和控制层。Logstash担任控制层的角色，负责搜集和过滤数据。Elasticsearch担任数据持久层的角色，负责储存数据。而我们这章的主题Kibana担任视图层角色，拥有各种维度的查询和分析，并使用图形化的界面展示存放在Elasticsearch中的数据。</p>
                            <div @click="gotopage4" class="imghover">
                                <img src="../../../../assets/3456.jpg" width="700">
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
        name: "until",
        data () {
            return {
                url1: 'http://zhongkeruitong.top/show/7b4220778ddc4a7993f2c6ef36fd9efb1568704229599.jpg',
                srcList1: [
                    'http://zhongkeruitong.top/show/7b4220778ddc4a7993f2c6ef36fd9efb1568704229599.jpg'
                ],
                url2: 'http://zhongkeruitong.top/show/d6a24db76cee4c3c88d6179cd1f846351568705641227.jpg',
                srcList2: [
                    'http://zhongkeruitong.top/show/d6a24db76cee4c3c88d6179cd1f846351568705641227.jpg'
                ]
            }
        },
        methods: {
            gotopage1 () {
                var url = 'https://www.tableau.com/zh-cn/trial/tableau-software'
                window.open(url, '_blank')
            },
            gotopage2 () {
                var url = 'https://www.ebistrategy.com/QlikView/?&0300101'
                window.open(url, '_blank')
            },
            gotopage3 () {
                var url = 'https://www.klipfolio.com/'
                window.open(url, '_blank')
            },
            gotopage4 () {
                var url = 'https://www.elastic.co/cn/products/kibana'
                window.open(url, '_blank')
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
    .headertext {
        font-size: 20px;font-weight: bold
    }
    .ptext {
        text-indent: 2em;
        margin-bottom: 10px;
    }
    .scrollbar >>> .el-scrollbar__wrap{
        overflow-x: hidden;

    }
     .htext {
        font-size: 22px;
        margin-bottom: 10px;
    }
    .imghover {
        width: 700px;margin: 30px auto
    }
    .imghover:hover {
        cursor: pointer;
    }
</style>
