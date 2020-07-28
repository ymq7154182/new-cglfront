import Vue from 'vue';
import Router from 'vue-router';
import ChineseParticiple from "../components/page/AIutil/ChineseParticiple/ChineseParticiple";
import DataClear from "../components/page/AIutil/DataClear/DataClear";
import AIuilt from "../components/page/AIutil/AIuilt";
import HomePage from "../components/page/HomePage";
import AboutUs from "../components/page/AboutUs";
import KeJiao from "../components/page/KeJiao";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/HomePage'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '主页' },
            children:[
                {
                  path: '/DataClear',
                  component: resolve => require(['../components/page/AIutil/DataClear/DataClear'], resolve),
                  meta: {title: '上传数据'}
                },
                {
                    path: '/DataText',
                    component: resolve => require(['../components/page/AIutil/DataClear/DataText'], resolve),
                    meta: {title: '数据处理简介'}
                },
                {
                    path: '/startdeal1',
                    component: resolve => require(['../components/page/AIutil/DataClear/startdeal1'], resolve),
                    meta: {title: '规则一'}
                },
                {
                    path: '/startdeal2',
                    component: resolve => require(['../components/page/AIutil/DataClear/startdeal2'], resolve),
                    meta: {title: '规则二'}
                },
                {
                    path: '/startdeal3',
                    component: resolve => require(['../components/page/AIutil/DataClear/startdeal3'], resolve),
                    meta: {title: '规则三'}
                },
                {
                    path: '/ChineseParticple',
                    component: resolve => require(['../components/page/AIutil/ChineseParticiple/ChineseParticiple'], resolve),
                    meta: {title: '中文分词'}
                },
                {
                    path: '/Hanlp',
                    component: resolve => require(['../components/page/AIutil/ChineseParticiple/Hanlp'], resolve),
                    meta: {title: 'Hanlp分词'}
                },
                {
                    path: '/Ansj',
                    component: resolve => require(['../components/page/AIutil/ChineseParticiple/Ansj'], resolve),
                    meta: {title: 'Ansj分词器'}
                },
                {
                    path: '/Jieba',
                    component: resolve => require(['../components/page/AIutil/ChineseParticiple/Jieba'], resolve),
                    meta: {title: 'Jieba分词器'}
                },
                {
                    path: '/Thulac',
                    component: resolve => require(['../components/page/AIutil/ChineseParticiple/Thulac'], resolve),
                    meta: {title: 'Thulac分词器'}
                },
                {
                    path: '/Word',
                    component: resolve => require(['../components/page/AIutil/ChineseParticiple/Word'], resolve),
                    meta: {title: 'Word分词器'}
                },
                {
                    path: '/Shenwu',
                    component: resolve => require(['../components/page/AIutil/ChineseParticiple/Shenwu'], resolve),
                    meta: {title: '生物领域分词'}
                },
                {
                    path: '/Jinkuang',
                    component: resolve => require(['../components/page/AIutil/ChineseParticiple/Jinkuang'], resolve),
                    meta: {title: '金矿领域分词'}
                },
                {
                    path: '/concept',
                    component: resolve => require(['../components/page/AIutil/ChineseParticiple/concept'], resolve),
                    meta: {title: '分词概念'}
                },
                {
                    path: '/fenciapplication',
                    component: resolve => require(['../components/page/AIutil/ChineseParticiple/fenciapplication'], resolve),
                    meta: {title: '分词应用'}
                },
                {
                    path: '/Buxian',
                    component: resolve => require(['../components/page/AIutil/ChineseParticiple/Buxian'], resolve),
                    meta: {title: '不限领域分词'}
                },
                {
                    path: '/wordcloud',
                    component: resolve => require(['../components/page/AIutil/visualization/wordcloud.vue'], resolve),
                    meta: {title: '词云可视化'}
                },
                {
                    path: '/chart',
                    component: resolve => require(['../components/page/AIutil/visualization/chart.vue'], resolve),
                    meta: {title: '图表可视化'}
                },
                {
                    path: '/text',
                    component: resolve => require(['../components/page/AIutil/visualization/text.vue'], resolve),
                    meta: {
                        title: '可视化简介'
                    }
                },
                {
                    path: '/util',
                    component: resolve => require(['../components/page/AIutil/visualization/until.vue'], resolve),
                    meta: {
                        title: '工具包'
                    }
                },
                {
                    path: '/feedback1',
                    component: resolve => require(['../components/page/AIutil/ChineseParticiple/feedback.vue'], resolve),
                    meta: {title: '问题反馈'}
                },
                {
                    path: '/feedback2',
                    component: resolve => require(['../components/page/AIutil/DataClear/feedback.vue'], resolve),
                    meta: {title: '问题反馈'}
                },
                {
                    path: '/feedback3',
                    component: resolve => require(['../components/page/AIutil/visualization/feedback.vue'], resolve),
                    meta: {title: '问题反馈'}
                },
                {
                    path: '/ChuizhiAtlas',
                    component: resolve => require(['../components/page/Atlas/ChuizhiAtlas.vue'], resolve),
                    meta: {title: '垂直领域图谱'}
                },
                {
                    path: '/AtlasGN',
                    component: resolve => require(['../components/page/Atlas/AtlasGN.vue'], resolve),
                    meta: {title: '图谱基本概念'}
                },
                {
                    path: '/AlgorithmModel',
                    component: resolve => require(['../components/page/Atlas/AlgorithmModel.vue'], resolve),
                    meta: {title: '算法模型'}
                },
                {
                    path: '/GraphDatabase',
                    component: resolve => require(['../components/page/Atlas/GraphDatabase.vue'], resolve),
                    meta: {title: '图数据库'}
                },
                {
                    path: '/DiAtlas',
                    component: resolve => require(['../components/page/Atlas/DiAtlas.vue'], resolve),
                    meta: {title: '地质图书馆项目'}
                },
                {
                    path: '/SmartCourt',
                    component: resolve => require(['../components/page/Atlas/SmartCourt.vue'], resolve),
                    meta: {title: '智慧法院'}
                },
                {
                    path: '/feedback4',
                    component: resolve => require(['../components/page/Atlas/feedback4.vue'], resolve),
                    meta: {title: '问题反馈'}
                },
                {
                    path: '/KnowDiscovery',
                    component: resolve => require(['../components/page/AIutil/KnowDiscovery/KnowDiscovery.vue'], resolve),
                    meta: {title: '上传文献'}
                },
                {
                    path: '/ProduceAtlas',
                    component: resolve => require(['../components/page/AIutil/KnowDiscovery/ProduceAtlas.vue'], resolve),
                    meta: {title: '生成图谱'}
                },
                {
                    path: '/DomainKnowledge',
                    component: resolve => require(['../components/page/AIutil/DomainKnowledge/DomainKnowledge.vue'], resolve),
                    meta: {title: '领域知识库'}
                },
                {
                    path: '/HotPoint',
                    component: resolve => require(['../components/page/HotPoint/HotPoint.vue'], resolve),
                    meta: {title: '热点预测'}
                },
                {
                    path: '/TextClassification',
                    component: resolve => require(['../components/page/AIutil/TextClassification/TextClassification.vue'], resolve),
                    meta: {title: '文本分类'}
                },
                {
                    path: '/TextCurrent',
                    component: resolve => require(['../components/page/AIutil/TextClassification/TextCurrent.vue'], resolve),
                    meta: {title: '文本分类现状'}
                },
                {
                    path: '/TextApplication',
                    component: resolve => require(['../components/page/AIutil/TextClassification/TextApplication.vue'], resolve),
                    meta: {title: '文本分类应用'}
                },
                {
                    path: '/ProjectIntroduce',
                    component: resolve => require(['../components/page/AIutil/TextClassification/ProjectIntroduce.vue'], resolve),
                    meta: {title: '项目介绍'}
                },
                {
                    path: '/BlackmouthDistinguish',
                    component: resolve => require(['../components/page/AIutil/TextClassification/BlackmouthDistinguish.vue'], resolve),
                    meta: {title: '黑嘴识别'}
                },
                {
                    path: '/TextAnalysis',
                    component: resolve => require(['../components/page/AIutil/TextClassification/TextAnalysis.vue'], resolve),
                    meta: {title: '文本分析'}
                },
                {
                    path: '/TextAnalysis2',
                    component: resolve => require(['../components/page/AIutil/TextClassification/TextAnalysis2.vue'], resolve),
                    meta: {title: '文本分析2'}
                },
                {
                    path: '/TextAnalysis3',
                    component: resolve => require(['../components/page/AIutil/TextClassification/TextAnalysis3.vue'], resolve),
                    meta: {title: '文本分析3'}
                },
                {
                    path: '/QA',
                    component: resolve => require(['../components/page/QA/QA.vue'], resolve),
                    meta: {title: '问答机器人简介'}
                }
                // {
                //     path: '/dashboard',
                //     component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                //     meta: { title: '系统首页' }
                // },
                // {
                //     path: '/dividesearch',
                //     component: resolve => require(['../components/page/Divide/DivideSearch.vue'], resolve),
                //     meta: { title: '分层查询' }
                // },
                // {
                //     path: '/termadd',
                //     component: resolve => require(['../components/page/TermAdd/TermAdd.vue'], resolve),
                //     meta: { title: '学期增加' }
                // },
                // {
                //     path: '/studentselect',
                //     component: resolve => require(['../components/page/PeiSelectClass/StudentSelect.vue'], resolve),
                //     meta: { title: '学生选课' }
                // },
                // {
                //     path: '/schedule',
                //     component: resolve => require(['../components/page/AttentPaike/ScheduleIndex.vue'], resolve),
                //     meta: { title: '配课区域' }
                // },
                // {
                //     path: '/studentdivide',
                //     component: resolve => require(['../components/page/Divide/StudentDivide.vue'], resolve),
                //     meta: { title: '学生分层' }
                // },
                //
                // {
                //     // 图片上传组件
                //     path: '/upload',
                //     component: resolve => require(['../components/page/Upload/Upload.vue'], resolve),
                //     meta: { title: '文件上传' }
                // },
                // {
                //     // 教师上传组件
                //     path: '/uploadTeacher',
                //     component: resolve => require(['../components/page/Upload/UploadTeacher.vue'], resolve),
                //     meta: { title: '教师上传组件' }
                // },
                // {
                //     // 上课场地上传组件
                //     path: '/uploadSpace',
                //     component: resolve => require(['../components/page/Upload/UploadSpace.vue'], resolve),
                //     meta: { title: '上课场地上传组件' }
                // },
                // {
                //     // 教学计划上传组件
                //     path: '/uploadProgram',
                //     component: resolve => require(['../components/page/Upload/UploadProgram.vue'], resolve),
                //     meta: { title: '行政班教学计划上传组件' }
                // },
                // {
                //     // 走班课教学计划上传组件
                //     path: '/uploadAttendProgram',
                //     component: resolve => require(['../components/page/Upload/UploadAttendProgram.vue'], resolve),
                //     meta: { title: '走班课教学计划上传组件' }
                // },
                //
                // {
                //     // 拖拽列表组件
                //     path: '/teacherpeike',
                //     component: resolve => require(['../components/page/PeiSelectClass/TeacherPeike.vue'], resolve),
                //     meta: { title: '教师配课' }
                // }


            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '/HomePage',
            component: HomePage
        },
        {
          path: '/AboutUs',
          component: AboutUs
        },
        {
          path: '/KeJiao',
          component: KeJiao
        },
        // {
        //     path: '/ChineseParticple',
        //     component: ChineseParticiple
        // },
        // {
        //     path: '/DataClear',
        //     component: DataClear
        // },
        {
            path: '/AIuilt',
            component: AIuilt
        },
        {
            path: '/usetext',
            component: resolve => require(['../components/page/usetext.vue'], resolve),
            meta: {title: '使用手册'}
        }
        // {
        //     path: '*',
        //     redirect: '/404'
        // }
    ]
})
