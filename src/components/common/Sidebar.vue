<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in itemsf">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                itemsf: [],
                flag: '',
                items: [
                    {
                        icon: 'el-icon-s-home',
                        index: 'DataText',
                        title: '数据处理简介'
                    },
                    {
                        icon: 'el-icon-upload',
                        index: 'DataClear',
                        title: '上传数据'
                    },
                    {
                        icon: 'el-icon-set-up',
                        index: 'startdeals',
                        title: '数据处理',
                        subs: [
                            {
                                index: 'startdeal1',
                                title: '规则一'
                            },
                            {
                                index: 'startdeal2',
                                title: '规则二'
                            },
                            {
                                index: 'startdeal3',
                                title: '规则三'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-edit-outline',
                        index: 'feedback1',
                        title: '问题反馈'
                    }
                    // {
                    //     icon: 'el-icon-lx-home',
                    //     index: 'dashboard',
                    //     title: '系统首页'
                    // },
                    // {
                    //     icon: 'el-icon-lx-cascades',
                    //     index: 'termadd',
                    //     title: '学期增加'
                    // },
                    // {
                    //     icon: 'el-icon-lx-copy',
                    //     index: '2',
                    //     title: '配选课功能',
                    //     subs: [
                    //         {
                    //             index: 'teacherpeike',
                    //             title: '教师配课'
                    //         },
                    //         {
                    //             index: 'studentselect',
                    //             title: '学生选课'
                    //         }
                    //     ]
                    // },
                    //
                    // {
                    //     icon: 'el-icon-lx-rank',
                    //     index: 'schedule',
                    //     title: '走班排课'
                    // },
                    // {
                    //     icon: 'el-icon-lx-calendar',
                    //     index: 'divide',
                    //     title: '分层功能',
                    //     subs: [
                    //         {
                    //             index: 'studentdivide',
                    //             title: '学生分层'
                    //         },
                    //         {
                    //             index: 'dividesearch',
                    //             title: '分层查询'
                    //         }
                    //     ]
                    // },
                    // {
                    //     icon: 'el-icon-lx-add',
                    //     title: '上传功能',
                    //     subs: [
                    //         {
                    //             index: 'uploadTeacher',
                    //             title: '教师上传'
                    //         },
                    //         {
                    //             index: 'upload',
                    //             title: '学生上传'
                    //         },
                    //         {
                    //             index: 'uploadSpace',
                    //             title: '场地上传'
                    //         },
                    //         {
                    //             index: 'uploadProgram',
                    //             title: '行政班课教学计划上传'
                    //         },
                    //         {
                    //             index: 'uploadAttendProgram',
                    //             title: '走班课教学计划上传'
                    //         }
                    //     ]
                    // }
                ],
                items2: [
                    {
                        icon: 'el-icon-lx-home',
                        index: 'concept',
                        title: '分词概念'
                    },
                    {
                        icon: 'el-icon-document-copy',
                        index: 'fenciapplication',
                        title: '分词应用',
                    },
                    // {
                    //     icon: 'el-icon-document',
                    //     index: 'Ansj',
                    //     title: 'ansj分词器',
                    // },
                    // {
                    //     icon: 'el-icon-s-unfold',
                    //     index: 'Jieba',
                    //     title: 'jieba分词器',
                    // },
                    // {
                    //     icon: 'el-icon-s-operation',
                    //     index: 'Thulac',
                    //     title: 'Thulac分词器',
                    // },
                    // {
                    //     icon: 'el-icon-s-order',
                    //     index: 'Word',
                    //     title: 'Word分词器',
                    // },
                    // {
                    //     icon: 'el-icon-c-scale-to-original',
                    //     index: 'Shenwu',
                    //     title: '生物领域分词',
                    // },
                    // {
                    //     icon: 'el-icon-files',
                    //     index: 'Jinkuang',
                    //     title: '金矿领域分词',
                    // },
                    // {
                    //     icon: 'el-icon-receiving',
                    //     index: 'Buxian',
                    //     title: '不限领域分词',
                    // },
                    // {
                    //     icon: 'el-icon-edit-outline',
                    //     index: 'feedback2',
                    //     title: '问题反馈'
                    // }
                    // {
                    //     icon: 'el-icon-lx-home',
                    //     index: 'dashboard',
                    //     title: '系统首页'
                    // },
                    // {
                    //     icon: 'el-icon-lx-cascades',
                    //     index: 'termadd',
                    //     title: '学期增加'
                    // },
                    // {
                    //     icon: 'el-icon-lx-copy',
                    //     index: '2',
                    //     title: '配选课功能',
                    //     subs: [
                    //         {
                    //             index: 'teacherpeike',
                    //             title: '教师配课'
                    //         },
                    //         {
                    //             index: 'studentselect',
                    //             title: '学生选课'
                    //         }
                    //     ]
                    // },
                    //
                    // {
                    //     icon: 'el-icon-lx-rank',
                    //     index: 'schedule',
                    //     title: '走班排课'
                    // },
                    // {
                    //     icon: 'el-icon-lx-calendar',
                    //     index: 'divide',
                    //     title: '分层功能',
                    //     subs: [
                    //         {
                    //             index: 'studentdivide',
                    //             title: '学生分层'
                    //         },
                    //         {
                    //             index: 'dividesearch',
                    //             title: '分层查询'
                    //         }
                    //     ]
                    // },
                    // {
                    //     icon: 'el-icon-lx-add',
                    //     title: '上传功能',
                    //     subs: [
                    //         {
                    //             index: 'uploadTeacher',
                    //             title: '教师上传'
                    //         },
                    //         {
                    //             index: 'upload',
                    //             title: '学生上传'
                    //         },
                    //         {
                    //             index: 'uploadSpace',
                    //             title: '场地上传'
                    //         },
                    //         {
                    //             index: 'uploadProgram',
                    //             title: '行政班课教学计划上传'
                    //         },
                    //         {
                    //             index: 'uploadAttendProgram',
                    //             title: '走班课教学计划上传'
                    //         }
                    //     ]
                    // }
                ],
                items3: [
                    {
                        icon: 'el-icon-lx-home',
                        index: 'text',
                        title: '可视化简介'
                    },
                    {
                        icon: 'el-icon-data-line',
                        index: '1',
                        title: '可视化技术',
                        subs: [
                            {
                                icon: 'el-icon-lx-home',
                                index: 'wordcloud',
                                title: '词云可视化'
                            },
                            {
                                icon: 'el-icon-lx-home',
                                index: 'chart',
                                title: '图表可视化'
                            },
                            {
                                icon: 'el-icon-lx-home',
                                index: 'spacetime',
                                title: '时空数据可视化'
                            },
                            {
                                icon: 'el-icon-lx-home',
                                index: 'geography',
                                title: '地理数据可视化'
                            },
                            {
                                icon: 'el-icon-lx-home',
                                index: 'flow',
                                title: '流量监控可视化'
                            },
                            {
                                icon: 'el-icon-lx-home',
                                index: 'relation',
                                title: '关系型数据可视化'
                            },
                        ]
                    },
                    {
                        icon: 'el-icon-goods',
                        index: 'util',
                        title: '工具包'
                    },
                    {
                        icon: 'el-icon-edit-outline',
                        index: 'feedback3',
                        title: '问题反馈'
                    }

                    // {
                    //     icon: 'el-icon-lx-home',
                    //     index: 'dashboard',
                    //     title: '系统首页'
                    // },
                    // {
                    //     icon: 'el-icon-lx-cascades',
                    //     index: 'termadd',
                    //     title: '学期增加'
                    // },
                    // {
                    //     icon: 'el-icon-lx-copy',
                    //     index: '2',
                    //     title: '配选课功能',
                    //     subs: [
                    //         {
                    //             index: 'teacherpeike',
                    //             title: '教师配课'
                    //         },
                    //         {
                    //             index: 'studentselect',
                    //             title: '学生选课'
                    //         }
                    //     ]
                    // },
                    //
                    // {
                    //     icon: 'el-icon-lx-rank',
                    //     index: 'schedule',
                    //     title: '走班排课'
                    // },
                    // {
                    //     icon: 'el-icon-lx-calendar',
                    //     index: 'divide',
                    //     title: '分层功能',
                    //     subs: [
                    //         {
                    //             index: 'studentdivide',
                    //             title: '学生分层'
                    //         },
                    //         {
                    //             index: 'dividesearch',
                    //             title: '分层查询'
                    //         }
                    //     ]
                    // },
                    // {
                    //     icon: 'el-icon-lx-add',
                    //     title: '上传功能',
                    //     subs: [
                    //         {
                    //             index: 'uploadTeacher',
                    //             title: '教师上传'
                    //         },
                    //         {
                    //             index: 'upload',
                    //             title: '学生上传'
                    //         },
                    //         {
                    //             index: 'uploadSpace',
                    //             title: '场地上传'
                    //         },
                    //         {
                    //             index: 'uploadProgram',
                    //             title: '行政班课教学计划上传'
                    //         },
                    //         {
                    //             index: 'uploadAttendProgram',
                    //             title: '走班课教学计划上传'
                    //         }
                    //     ]
                    // }
                ],
                items4: [
                    {
                        icon: 'el-icon-c-scale-to-original',
                        index: 'ChuizhiAtlas',
                        title: '垂直领域图谱'
                    },
                    {
                        icon: 'el-icon-film',
                        index: 'AtlasGN',
                        title: '图谱基本概念'
                    },
                    {
                        icon: 'el-icon-files',
                        index: '1',
                        title: '图谱构造方法',
                        subs: [
                            {
                                icon: 'el-icon-lx-home',
                                index: 'AlgorithmModel',
                                title: '算法模型'
                            },
                            {
                                icon: 'el-icon-lx-home',
                                index: 'GraphDatabase',
                                title: '图数据库'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-set-up',
                        index: '2',
                        title: '知识图谱案例',
                        subs: [
                            {
                                icon: 'el-icon-set-up',
                                index: 'DiAtlas',
                                title: '地质图书馆项目'
                            },
                            {
                                icon: 'el-icon-lx-home',
                                index: 'SmartCourt',
                                title: '智慧法院'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-edit-outline',
                        index: 'feedback4',
                        title: '问题反馈'
                    }

                    // {
                    //     icon: 'el-icon-lx-home',
                    //     index: 'dashboard',
                    //     title: '系统首页'
                    // },
                    // {
                    //     icon: 'el-icon-lx-cascades',
                    //     index: 'termadd',
                    //     title: '学期增加'
                    // },
                    // {
                    //     icon: 'el-icon-lx-copy',
                    //     index: '2',
                    //     title: '配选课功能',
                    //     subs: [
                    //         {
                    //             index: 'teacherpeike',
                    //             title: '教师配课'
                    //         },
                    //         {
                    //             index: 'studentselect',
                    //             title: '学生选课'
                    //         }
                    //     ]
                    // },
                    //
                    // {
                    //     icon: 'el-icon-lx-rank',
                    //     index: 'schedule',
                    //     title: '走班排课'
                    // },
                    // {
                    //     icon: 'el-icon-lx-calendar',
                    //     index: 'divide',
                    //     title: '分层功能',
                    //     subs: [
                    //         {
                    //             index: 'studentdivide',
                    //             title: '学生分层'
                    //         },
                    //         {
                    //             index: 'dividesearch',
                    //             title: '分层查询'
                    //         }
                    //     ]
                    // },
                    // {
                    //     icon: 'el-icon-lx-add',
                    //     title: '上传功能',
                    //     subs: [
                    //         {
                    //             index: 'uploadTeacher',
                    //             title: '教师上传'
                    //         },
                    //         {
                    //             index: 'upload',
                    //             title: '学生上传'
                    //         },
                    //         {
                    //             index: 'uploadSpace',
                    //             title: '场地上传'
                    //         },
                    //         {
                    //             index: 'uploadProgram',
                    //             title: '行政班课教学计划上传'
                    //         },
                    //         {
                    //             index: 'uploadAttendProgram',
                    //             title: '走班课教学计划上传'
                    //         }
                    //     ]
                    // }
                ],
                items5: [
                    {
                        icon: 'el-icon-c-scale-to-original',
                        index: 'KnowDiscovery',
                        title: '上传文献'
                    },
                    // {
                    //     icon: 'el-icon-c-scale-to-original',
                    //     index: 'ProduceAtlas',
                    //     title: '生成图谱'
                    // },
                ],
                items6: [
                    {
                        icon: 'el-icon-c-scale-to-original',
                        index: 'KnowDiscovery',
                        title: '领域知识库'
                    },
                    // {
                    //     icon: 'el-icon-c-scale-to-original',
                    //     index: 'ProduceAtlas',
                    //     title: '生成图谱'
                    // },
                ],
                items7: [
                    {
                        icon: 'el-icon-c-scale-to-original',
                        index: 'HotPoint',
                        title: '热点预测'
                    },
                    // {
                    //     icon: 'el-icon-c-scale-to-original',
                    //     index: 'ProduceAtlas',
                    //     title: '生成图谱'
                    // },
                ],
                items8: [
                    {
                        icon: 'el-icon-c-scale-to-original',
                        index: 'TextClassification',
                        title: '文本分类定义'
                    },
                    {
                        icon: 'el-icon-c-scale-to-original',
                        index: 'TextCurrent',
                        title: '文本分类现状'
                    },
                    {
                        icon: 'el-icon-c-scale-to-original',
                        index: 'TextApplication',
                        title: '文本分类应用'
                    },
                ],
                items9: [
                    {
                        icon: 'el-icon-c-scale-to-original',
                        index: 'QA',
                        title: '问答机器人简介'
                    },
                    // {
                    //     icon: 'el-icon-c-scale-to-original',
                    //     index: 'QA1',
                    //     title: '地质小助手'
                    // },
                    // {
                    //     icon: 'el-icon-c-scale-to-original',
                    //     index: 'QA2',
                    //     title: '地质问答机器人'
                    // },
                    // {
                    //     icon: 'el-icon-c-scale-to-original',
                    //     index: 'QA3',
                    //     title: '医疗问答机器人'
                    // },
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
            // this.flag = localStorage.getItem('flag')
            // console.log(this.flag)
            // console.log('fff')
            // if (this.flag === '中文分词工具') {
            //     this.itemsf = this.items2
            // } else {
            //     this.itemsf = this.items
            // }
        },
        mounted() {
            // bus.$on('flag', msg => {
            //     console.log(msg)
            //     this.flag = msg
            // })
            this.flag = localStorage.getItem('flag')
            // this.flag = this.$route.query.flag
            console.log(this.flag)
            // console.log('fff')
            if (this.flag === '中文分词工具') {
                this.itemsf = this.items2
            } else if (this.flag === '数据处理工具') {
                this.itemsf = this.items
            } else if (this.flag === '数据可视化') {
                this.itemsf = this.items3
            } else if (this.flag === '知识图谱') {
                this.itemsf = this.items4
            } else if (this.flag === '知识发现') {
                this.itemsf = this.items5
            } else if (this.flag === '领域知识库') {
                this.itemsf = this.items6
            } else if (this.flag === '热点预测') {
                this.itemsf = this.items7
            } else if (this.flag === '文本分类') {
                this.itemsf = this.items8
            } else if (this.flag === '智能问答') {
                this.itemsf = this.items9
            }
        },
        methods: {
            // gotopage(item) {
            //     console.log(item.title)
            // }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
