<template>
    <div class="contents">
        <div style="background-color: rgba(255, 255, 255, 0.9);position: fixed;width: 100%;z-index: 999" v-if="navBarFixed">
            <HomeHeader v-on:flaglogin="flaglogin" :dashow="dashow"></HomeHeader>
        </div>
        <HomeHeader v-on:flaglogin="flaglogin" :dashow="dashow"></HomeHeader>

        <!--<div class="shortcut" >-->
            <!--<div class="w">-->
                <!--<div class="fl">-->
                    <!--<img src="../../assets/111.png" height="80" style="">-->
                <!--</div>-->
                <!--<ul class="fr">-->
                    <!--<li>-->
                        <!--<a href="#">首页</a>-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--<el-dropdown>-->
                            <!--<a href="#">知识图谱</a>-->
                            <!--<el-dropdown-menu slot="dropdown"  class="dropdown">-->
                                <!--<el-dropdown-item class="menutext">垂直图谱</el-dropdown-item>-->
                                <!--<el-dropdown-item class="menutext">领域知识库</el-dropdown-item>-->
                            <!--</el-dropdown-menu>-->
                        <!--</el-dropdown>-->

                    <!--</li>-->
                    <!--<li><el-dropdown>-->
                        <!--<a href="#">精准检索</a>-->
                        <!--<el-dropdown-menu slot="dropdown"  class="dropdown">-->
                            <!--<el-dropdown-item class="menutext">智慧推荐</el-dropdown-item>-->
                        <!--</el-dropdown-menu>-->
                    <!--</el-dropdown></li>-->
                    <!--<li><a href="#">智能问答</a></li>-->
                    <!--<li><a href="#">热点预测</a></li>-->
                    <!--<li>-->
                        <!--<el-dropdown>-->
                            <!--<a href="#">-->
                                <!--智能工具-->
                            <!--</a>-->
                            <!--<el-dropdown-menu slot="dropdown"  class="dropdown">-->
                                <!--<el-dropdown-item class="menutext">数据爬虫</el-dropdown-item>-->
                                <!--<el-dropdown-item class="menutext">数据处理</el-dropdown-item>-->
                                <!--<el-dropdown-item class="menutext">文本分类</el-dropdown-item>-->
                                <!--<el-dropdown-item class="menutext">中文分词</el-dropdown-item>-->
                                <!--<el-dropdown-item class="menutext">知识发现</el-dropdown-item>-->
                                <!--<el-dropdown-item class="menutext">数据可视化</el-dropdown-item>-->
                                <!--<el-dropdown-item class="menutext">技术工程库</el-dropdown-item>-->
                                <!--<el-dropdown-item class="menutext">算法库</el-dropdown-item>-->
                            <!--</el-dropdown-menu>-->
                        <!--</el-dropdown>-->

                    <!--</li>-->
                    <!--<li>-->
                        <!--<a href="#" @click="dialogVisible = true">注册/登录</a>-->
                        <!--<el-dialog-->
                            <!--:visible.sync="dialogVisible"-->
                            <!--fullscreen="true">-->
                            <!--<Particles></Particles>-->
                            <!--<div style="" class="login">-->
                                <!--<div class="wordlogin"><span>登录</span></div>-->
                                <!--<div style="width: 100%">-->
                                    <!--<div class="loginform">-->
                                        <!--<i class="ymq-iconuser formicon"></i>-->
                                        <!--<el-input  placeholder="用户名" class="forminput" v-model="username"></el-input>-->
                                    <!--</div>-->
                                    <!--<div class="loginform">-->
                                        <!--<i class="ymq-iconlock formicon"></i>-->
                                        <!--<el-input  placeholder="密码" class="forminput" v-model="password" type="password" show-password="true"></el-input>-->

                                    <!--</div>-->
                                    <!--<div class="loginform">-->
                                        <!--<span class="spans1">忘记密码</span>-->
                                        <!--<span class="spans2">新用户注册</span>-->
                                    <!--</div>-->
                                    <!--<div class="loginform">-->
                                        <!--<el-button type="primary" style="width: 200px" size="large">登录</el-button>-->
                                    <!--</div>-->
                                <!--</div>-->

                            <!--</div>-->


                        <!--</el-dialog>-->
                    <!--</li>-->
                <!--</ul>-->
            <!--</div>-->
        <!--</div>-->
        <div>
            <el-carousel style="width: 100%"  :height="bannerH +'px'">
                <el-carousel-item>
                    <div class="wrappers wrapper1">
                        <div class="title1">
                            <h2>智能问答</h2>
                            <h3>智能问答系统是将积累的无序语料信息，进行有序和科学的整理，并建立基于知识的分类模型。
                            </h3>
                            <h3>
                                将用户的问题整理为规范的问答库形式，以支撑各种形式问题的智能问答，方便用户进行答案查找。
                            </h3>
                        </div>
                    </div>
                </el-carousel-item>
                <el-carousel-item>
                    <div class="wrappers wrapper2">
                        <div class="title1">
                            <h2>智能工具</h2>
                            <h3>系统在智能工具部分为用户提供了用户个人文档处理服务，
                            </h3>
                            <h3>包括分词、标注以及用户个人文档图谱生成，以便用户快速理解文献信息。</h3>
                        </div>
                    </div>
                </el-carousel-item>
                <el-carousel-item>
                    <div class="wrappers wrapper3">
                        <div class="title1">
                            <h2>知识图谱</h2>
                            <h3>知识图谱是图书情报界称为知识域可视化或知识领域映射地图，其目的在于发现显示知识发展的结构信息。
                            </h3>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="part">
            <div class="part1">
                <div class="word1">
                    <div class="text1">
                        <span>知识图谱</span>
                    </div>
                    <div class="text2">
                        <span>知识图谱是图书情报界称为知识域可视化或知识领域映射地图，其目的在于发现显示知识发展的结构信息。</span>
                    </div>
                </div>
                <div class="image">
                    <div class="box">
                        <img src="../../assets/22000.jpg">
                        <div class="box-content">
                            <h3 class="title">领域知识库</h3>
                            <span class="post">Knowledge Graph</span>
                        </div>
                        <ul class="icon">
                            <!--<li><a href="#"><i class="fa fa-search"></i></a></li>-->
                            <li><a href="#" @click="gotochuizhi"><i class="fa ymq-iconcharulianjie"></i></a></li>
                        </ul>

                    </div>
                    <div class="image1 image21" @click="QA">
                        <!--<img src="../../assets/890.jpg">-->
                        <!--<div  class="imgtext">-->
                            <!--<span>领域知识库</span>-->
                        <!--</div>-->
                        <div class="icon1">
                            <i class="ymq-iconwuguan iconstyle1"></i>
                        </div>
                        <div  class="imgtext">
                            <span>智能问答</span>
                        </div>
                    </div>
                    <div class="box">
                        <img src="../../assets/327.jpg">
                        <div class="box-content">
                            <h3 class="title">热点预测</h3>
                            <span class="post">Hotspot prediction</span>
                        </div>
                        <ul class="icon">
                            <!--<li><a href="#"><i class="fa fa-search"></i></a></li>-->
                            <li><a href="#"><i class="fa ymq-iconcharulianjie"></i></a></li>
                        </ul>

                    </div>
                    <div class="image1 image22">
                        <!--<img src="../../assets/444.jpg">-->
                        <!--<div  class="imgtext">-->
                            <!--<span>垂直图谱</span>-->
                        <!--</div>-->
                        <div class="icon1">
                            <i class="ymq-iconfuwudiqiu iconstyle1"></i>
                        </div>
                        <div  class="imgtext">
                            <span>风险防范</span>
                        </div>
                    </div>
                </div>
                <div class="image" style="margin-top: 0">
                    <div class="image1 image23" @click="gotochuizhi">
                        <!--<img src="../../assets/444.jpg">-->
                        <!--<div  class="imgtext">-->
                            <!--<span>垂直图谱</span>-->
                        <!--</div>-->
                        <div class="icon1">
                            <i class="ymq-iconyunyingguanli iconstyle1"></i>
                        </div>
                        <div  class="imgtext">
                            <span>领域知识库</span>
                        </div>
                    </div>
                    <div class="box">
                        <img src="../../assets/0990.jpg">
                        <div class="box-content">
                            <h3 class="title">智能问答</h3>
                            <span class="post">Intelligent  Q&A</span>
                        </div>
                        <ul class="icon">
                            <!--<li><a href="#"><i class="fa fa-search"></i></a></li>-->
                                <li><a href="#" @click="QA"><i class="fa ymq-iconcharulianjie"></i></a></li>
                        </ul>

                    </div>
                    <div class="image1 image24">
                        <!--<img src="../../assets/444.jpg">-->
                        <!--<div  class="imgtext">-->
                            <!--<span>热点预测</span>-->
                        <!--</div>-->
                        <div class="icon1">
                            <i class="ymq-iconrenjijiaohu iconstyle1"></i>
                        </div>
                        <div  class="imgtext">
                            <span>热点预测</span>
                        </div>
                    </div>
                    <div class="box">
                        <img src="../../assets/7899.jpg">

                        <div class="box-content">
                            <h3 class="title">风险防范</h3>
                            <span class="post">Risk Prevention</span>
                        </div>
                        <ul class="icon">
                            <!--<li><a href="#"><i class="fa fa-search"></i></a></li>-->
                            <li><a href="#"><i class="fa ymq-iconcharulianjie"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="part2">
                <div class="word1">
                    <div class="text1">
                        <span>智能工具</span>
                    </div>
                    <div class="text2">
                        <span>系统在智能工具部分为用户提供了用户个人文档处理服务，包括分词、标注以及用户个人文档图谱生成，以便用户快速理解文献信息。</span>
                    </div>
                </div>
                <div class="part3">
                    <!--<div>-->
                        <!--<div class="wordpart3" @click="gotoPachong">-->
                            <!--<i class="ymq-iconbug1 textpart3"></i>-->
                        <!--</div>-->
                        <!--<div class="word3">-->
                            <!--数据爬虫-->
                        <!--</div>-->
                    <!--</div>-->
                    <div>
                        <div class="wordpart3" @click="gotoDataClear">
                            <i class="ymq-iconshujuwajue textpart3"></i>
                        </div>
                        <div class="word3">
                            数据处理
                        </div>

                    </div>
                    <div>
                        <div class="wordpart3" @click="TextClassification">
                            <i class="ymq-iconliebiao textpart3"></i>
                        </div>
                        <div class="word3">
                            文本分类
                        </div>
                    </div>
                    <div>
                        <div class="wordpart3" @click="gotoChineseParticple">
                            <i class="ymq-icontranslate textpart3"></i>
                        </div>
                        <div class="word3">
                            中文分词
                        </div>
                    </div>
                </div>
                <div class="part3">
                    <div>
                        <div class="wordpart3" @click="gotoChineseParticiples">
                            <i class="ymq-iconbranches textpart3"></i>
                        </div>
                        <div class="word3">
                            知识发现
                        </div>
                    </div>
                    <div>
                        <div class="wordpart3" @click="gotovisualization">
                            <i class="ymq-icontubiao-zhuzhuangtu textpart3"></i>
                        </div>
                        <div class="word3">
                            数据可视化
                        </div>

                    </div>
                    <!--<div>-->
                        <!--<div class="wordpart3" @click="gotojishu">-->
                            <!--<i class="ymq-iconsever textpart3"></i>-->
                        <!--</div>-->
                        <!--<div class="word3">-->
                            <!--技术工程库-->
                        <!--</div>-->
                    <!--</div>-->
                    <div>
                        <div class="wordpart3" @click="gotosuanfa">
                            <i class="ymq-iconcontainer-fill textpart3"></i>
                        </div>
                        <div class="word3">
                            模型算法库
                        </div>
                    </div>
                </div>
            </div>
            <div class="part3_1">
                <div class="word1">
                    <div class="text1">
                        <span>行业服务</span>
                    </div>
                    <div class="text2">
                        <!--<span>系统在智能工具部分为用户提供了用户个人文档处理服务，包括分词、标注以及用户个人文档图谱生成，以便用户快速理解文献信息。</span>-->
                    </div>
                </div>
                <div class="part3_1_img">
                    <div class="part-fl">
                        <div class="img_up img_style">
                            <div class="img_text_style">
                                <span>教育AI</span>
                            </div>
                            <img src="../../assets/jiaoyu_4.jpg" style="width: 100%;height: 100%"/>
                        </div>
                        <div class="img_down img_style">
                            <div class="img_text_style">
                                <span>智慧城市</span>
                            </div>
                            <img src="../../assets/zhihuichengshi_4.jpg" style="width: 100%;height: 100%"/>
                        </div>
                    </div>
                    <div class="part-fr">
                        <div class="img_left img_style">
                            <div class="img_text_style">
                                <span>文情大数据</span>
                            </div>
                            <img src="../../assets/dashujv_5.jpg" style="width: 100%;height: 100%"/>
                        </div>
                        <div class="img_right img_style">
                            <div class="img_text_style">
                                <span>青少年编程</span>
                            </div>
                            <img src="../../assets/biancheng_2.jpg" style="width: 100%;height: 100%"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="background-color: #333333">
            <div style="margin: 0 auto;width: 80%">
                <Footer/>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import Footer from '@/components/common/Footer'
    import HomeHeader from '@/components/common/HomeHeader'
    import bus from '../common/bus'
    import particlesJs from '../particles/Particles'
    export default {
        name: "HomePage",
        components: {
          Footer,
            HomeHeader,
            particlesJs
        },
        inject: ['reload'],
        data () {
            return {
                navBarFixed: false,
                strflag: '',
                bannerH: 0,
                flaglogins: false,
                dashow: false
            }
        },
        mounted() {
            window.addEventListener('scroll', this.watchScroll)
            this.setBannerH()
            window.addEventListener('resize', () => {
                this.setBannerH()
            }, false)

        },
        methods: {
            setBannerH(){
                this.bannerH = document.body.clientWidth / 4
            },
            watchScroll () {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                if (scrollTop > 49) {
                    this.navBarFixed = true
                } else {
                    this.navBarFixed = false
                }
                console.log(scrollTop)
            },
            flaglogin(flaglogin) {
              this.flaglogins  = flaglogin
            },
            gotoChineseParticple () {
                console.log(this.flaglogins)
                if (this.flaglogins === false) {
                    alert('请先登录！')
                    this.dashow = true
                } else {
                    this.strflag = '中文分词工具'
                    const {href} = this.$router.resolve({
                        path: `/concept`,
                        // query: {
                        //     flag: this.strflag
                        // }
                    })
                    window.open(href, '_blank')
                    localStorage.setItem('flag', this.strflag)
                }
                // bus.$emit('flag', this.strflag)

            },
            TextClassification () {
                if (this.flaglogins === false) {
                    alert('请先登录！')
                    this.dashow = true
                } else {
                    this.strflag = '文本分类'
                    const {href} = this.$router.resolve({
                        path: `/TextClassification`,
                        // query: {
                        //     flag: this.strflag
                        // }
                    })
                    window.open(href, '_blank')
                    localStorage.setItem('flag', this.strflag)
                }
            },
            gotoDataClear () {
                if (this.flaglogins === false) {
                    alert('请先登录！')
                    this.dashow = true
                } else {
                    this.strflag = '数据处理工具'
                    const {href} = this.$router.resolve({
                        path: `/DataText`
                    })
                    window.open(href, '_blank')
                    localStorage.setItem('flag', this.strflag)
                }
            },
            gotovisualization () {
                if (this.flaglogins === false) {
                    alert('请先登录！')
                    this.dashow = true
                } else {
                    this.strflag = '数据可视化'
                    const {href} = this.$router.resolve({
                        path: `/text`
                    })
                    window.open(href, '_blank')
                    localStorage.setItem('flag', this.strflag)
                }
            },
            gotoPachong () {
                if (this.flaglogins === false) {
                    alert('请先登录！')
                    this.dashow = true
                } else {
                    var href = 'http://zhongkeruitong.top/crawl'
                    window.open(href, '_blank')
                }
            },
            gotoChineseParticiples() {
                if (this.flaglogins === false) {
                    alert('请先登录！')
                    this.dashow = true
                } else {
                    this.strflag = '知识发现'
                    const {href} = this.$router.resolve({
                        path: `/KnowDiscovery`
                    })
                    window.open(href, '_blank')
                    localStorage.setItem('flag', this.strflag)
                }
                // var href = 'http://114.242.223.253:8080/SSMLibrary/literatureupload.jsp'
                // window.open(href, '_blank')
            },
            gotochuizhi () {
                if (this.flaglogins === false) {
                    alert('请先登录！')
                    this.dashow = true
                } else {
                    // var url = 'http://114.242.223.253:8080/SSMLibrary/connection.jsp'
                    // window.open(url, '_blank')
                    this.strflag = '领域知识库'
                    const {href} = this.$router.resolve({
                        path: `/DomainKnowledge`
                    })
                    window.open(href, '_blank')
                    localStorage.setItem('flag', this.strflag)
                }
            },
            gotoAIuilt () {
                if (this.flaglogins === false) {
                    alert('请先登录！')
                    this.dashow = true
                } else {
                    const {href} = this.$router.resolve({
                        path: `/AIuilt`
                    })
                    window.open(href, '_blank')
                }
            },
            QA () {
                // var url = 'http://58.119.112.11:11004/chatbot'
                // if (this.flaglogins === false) {
                //     alert('请先登录！')
                //     this.dashow = true
                // } else {
                //     var url = 'http://58.119.112.15:11014/home'
                //     window.open(url, '_blank')
                // }
                if (this.flaglogins === false) {
                    alert('请先登录！')
                    this.dashow = true
                } else {
                    this.strflag = '智能问答'
                    const {href} = this.$router.resolve({
                        path: `/QA`
                    })
                    window.open(href, '_blank')
                    localStorage.setItem('flag', this.strflag)
                }
            },
            gotojishu () {
                if (this.flaglogins === false) {
                    alert('请先登录！')
                    this.dashow = true
                } else {
                    var url = 'http://www.zhongkeruitong.top/pel/pel/index.html'
                    window.open(url, '_blank')
                }
            },
            gotosuanfa () {
                if (this.flaglogins === false) {
                    alert('请先登录！')
                    this.dashow = true
                } else {
                    var url = 'http://zhongkeruitong.top/boot/#/springboot'
                    window.open(url, '_blank')
                }

            },
        }


    }
</script>


<style scoped>
    /*.shortcut {*/
        /*height: 80px;*/
        /*line-height: 80px;*/
        /*!*background-color: black;*!*/
        /*font-size: 16px;*/
        /*color: white;*/
        /*!*margin-bottom: 10px;*!*/
    /*}*/
    /*.w {*/
        /*width: 1190px;*/
        /*margin: 0 auto;*/
    /*}*/
    /*a {*/
        /*text-decoration: none;*/
        /*font-size: 16px;*/
        /*color: black;*/
    /*}*/
    /*a:hover {*/
        /*color: #66CCFF;*/
    /*}*/
    /*ul {*/
        /*list-style: none;*/
    /*}*/
    /*.shortcut li {*/
        /*float: left;*/
        /*margin-left: 40px;*/
    /*}*/
    /*.fl { !*浮动的公共类*!*/
        /*float: left;*/
    /*}*/
    /*.fr {*/
        /*float: right;*/
        /*!*margin-right: 50px;*!*/
    /*}*/
    .wrappers {
        height:100%;
        /*height: 0;*/
        /*padding-bottom: 50%;*/
        width:100%;
        text-align: center;
        display: table;
        position:absolute;
        /*background-size: 100%;*/
    }
    .wrapper1 {
        background: url("../../assets/56577.jpg") no-repeat;
        background-size: 100% 100%;
    }
    .wrapper2 {
        background: url("../../assets/2.gif") no-repeat;
        background-size: 100% 100%;
    }
    .wrapper3 {
        background: url("../../assets/5442.jpg") no-repeat;
        background-size: 100% 100%;
    }


    .title1 {
        display: table-cell;
        vertical-align: middle;
        z-index: 999;
    }

    .title1 h2 {
        color: #fff;
        font-size: 45px;
        font-family: "museo-slab";
    }

    .title1 h3 {
        color: #fff;
        font-size: 25px;
        font-family: "museo-sans";
        font-weight: 300
    }

    .dropdown {
        width: auto;
        text-align: center;
    }
    .menutext {
        font-size: 16px;
    }
    /*.el-carousel__item h3 {*/
        /*color: #475669;*/
        /*font-size: 14px;*/
        /*opacity: 0.75;*/
        /*line-height: 150px;*/
        /*margin: 0;*/
    /*}*/

    /*.el-carousel__item:nth-child(2n) {*/
        /*background-color: #99a9bf;*/
    /*}*/

    /*.el-carousel__item:nth-child(2n+1) {*/
        /*background-color: #d3dce6;*/
    /*}*/
    .contents {
        width: 100%;
        height: 100%;
        /*overflow-y: scroll;*/
        box-sizing: border-box;

    }
    .part {
        width: 80%;
        max-width: 1200px;
        margin: 130px auto;
        /*background-color: #409EFF;*/
        /*height: 500px;*/
    }
    .word1 {
        text-align: center;
        font-family: "Helvetica Neue";
    }
    .text1 {
        font-size: 24px;
        color: #565A5C;
        font-weight: bold;
    }
    .text2 {
        margin-top: 50px;
        font-size: 16px;
        color: #B0B0B0;
    }
    .image {
        height: 260px;
        margin-top: 60px;
        /*background-color: #409EFF;*/
        display: flex;
    }
    .image div {
        flex: 1;
        margin-left: 20px;
    }
    .image1 img {
        transition: all 0.6s;
        width: 100%;
        height: 100%;
    }
    .image1 {
        /*background-image: url("../../assets/444.jpg");*/
        /*background-size: 100% 100%;*/
        overflow: hidden;
        position: relative;
    }
    .box{
        font-family: 'Ubuntu', sans-serif;
        position: relative;
        overflow: hidden;
    }
    .box:before {
        content: '';
        background: linear-gradient(45deg,rgba(103,178,111,0.6), rgba(76,162,205,0.6));
        height: 100%;
        width: 100%;
        opacity: 0;
        filter: blur(10px);
        transform: scale(1) rotate(180deg);
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        transition: all 0.4s ease-in-out;
    }
    .box:hover:before {
        box-shadow: 0 0 10px 2px #555;
        opacity: 1;
        filter: blur(0);
        transform: scale(0.92, 0.9) rotate(0);
    }
    .box img{
        width: 100%;
        height: 100%;
        transition: all 0.5s ease-in-out;
    }
    .box:hover img{ transform: scale(1.9) rotate(45deg); }
    .box .box-content{
        color: #fff;
        /*text-align: center;*/
        width: 100%;
        opacity: 0;
        transform: translateX(-50%) translateY(-50%) scale(3);
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 1;
        transition: all 0.5s ease;
    }
    .box:hover .box-content{
        opacity: 1;
        transform: translateX(-50%) translateY(-50%) scale(1);
    }
    .box .title{
        font-size: 25px;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin: 0;
    }
    .box .post{
        font-size: 16px;
        text-transform: capitalize;
    }
    .box .icon{
        padding: 0;
        margin: 0;
        list-style: none;
        filter: blur(10px);
        transform: scale(0);
        position: absolute;
        right: 20px;
        bottom: 20px;
        z-index: 2;
        transition: all 0.5s ease 0.2s;
    }
    .box:hover .icon{
        transform: scale(1);
        filter: blur(0);
    }
    .box .icon li{ display: inline-block; }
    .box .icon li a{
        color: #fff;
        background: rgba(255,255,255,0.2);
        font-size: 20px;
        text-align: center;
        line-height: 40px;
        height: 40px;
        width: 40px;
        margin: 0 3px;
        display: block;
        position: relative;
        transition: all 0.3s;
    }
    .box .icon li a:hover{
        text-shadow: 0 0 6px #555;
        box-shadow: 0 0 5px #555;
    }
    @media only screen and (max-width:990px){
        .box{ margin-bottom: 30px; }
    }
    @media only screen and (max-width:479px){
        .box .title{ font-size: 20px; }
    }
    .image1:hover img {
        transform: scale(1.2);
    }
    .imgtext {
        position: absolute;
        color: white;
        top: 220px;
        left: 20px;
        font-weight: bold;
        font-size: 20px;
        transition: all 0.8s;
    }
    /*.image1:hover .imgtext {*/
        /*color: #66CCFF;*/
    /*}*/
    .image1:hover{
        cursor: pointer;
    }
    .image1:hover .icon1 {
        transform: scale(1.2);
    }
    .part2 {
        height: 500px;
        /*background-color: #5daf34;*/
        margin-top: 130px;
    }
    .part3_1 {
        height: 500px;
        margin-top: 130px;
    }
    .part3_1_img {
        height: 100%;
    }
    .part-fl {
        width: 50%;
        height: 100%;
        float: left;
    }
    .part-fr {
        width: 50%;
        height: 100%;
        float: right;
    }
    .img_up {
        height: 50%;
        overflow: hidden;
    }
    .img_style img {
        transition: all 1s;
    }
    .img_style:hover img {
        transform: scale(1.2);
        cursor: pointer;
    }
    .img_style {
        position: relative;
    }
    .img_down {
        height: 50%;
        overflow: hidden;
    }
    .img_left {
        width: 50%;
        height: 100%;
        float: left;
        overflow: hidden;
    }
    .img_right {
        width: 50%;
       overflow: hidden;
        float: right;
        height: 100%;
    }
    .icontext {
        text-align: center;
        margin-top: 40px;
    }
    .iconstyle1 {
        font-size: 100px;
    }
    .image21 {
        background-color: #0dc2b3;
    }
    .image22 {
        background-color: #fd786f;
    }
    .image23 {
        background-color: #4abdea;
    }
    .image24 {
        background-color: #00d44c;
    }
    .icon1 {
        text-align: center;
        color: white;
        line-height: 260px;
        transition: all 0.6s;
        /*margin-top: -130px;*/
        /*top: 50%;*/
        /*left: 50%;*/
        /*transform: translate(-50%, -50%);*/

    }
    .part3 {
        display: flex;
        height: 100px;
        margin-top: 80px;
    }
    .part3 div {
        flex: 1;
        margin-left: 20px;
    }
    .wordpart3 {
        text-align: center;
        line-height: 100px;
        transition: all 0.6s;
    }
    .textpart3 {
        font-size: 40px;
    }
    .word3 {
        text-align: center;
        font-size: 22px;
    }
    .wordpart3:hover {
        cursor: pointer;
        transform: translateY(-10px);
    }
    /*.service-item {*/
        /*text-align: center;*/
    /*}*/

    /*.service-item .wordpart3:after,*/
    /*.service-item .wordpart3:before,*/
    /*.service-item .wordpart3 span:after,*/
    /*.service-item .wordpart3 span:before {*/
        /*position: absolute;*/
        /*content: "";*/
        /*width: 10px;*/
        /*height: 10px;*/
        /*opacity: 0;*/
        /*-webkit-transition: all 0.5s;*/
        /*transition: all 0.5s;*/
        /*-webkit-transform: rotate(90deg);*/
        /*transform: rotate(90deg);*/
    /*}*/
    /*.service-item .wordpart3:after {*/
        /*left: 0;*/
        /*top: 0;*/
        /*border-left: 2px solid #333;*/
        /*border-top: 2px solid #333;*/
    /*}*/
    /*.service-item .wordpart3:before {*/
        /*right: 0;*/
        /*bottom: 0;*/
        /*border-right: 2px solid #333;*/
        /*border-bottom: 2px solid #333;*/
    /*}*/
    /*.service-item .wordpart3 span:after {*/
        /*right: 0;*/
        /*top: 0;*/
        /*border-right: 2px solid #333;*/
        /*border-top: 2px solid #333;*/
    /*}*/
    /*.service-item .wordpart3 span:before {*/
        /*left: 0;*/
        /*bottom: 0;*/
        /*border-left: 2px solid #333;*/
        /*border-bottom: 2px solid #333;*/
    /*}*/
    /*.service-item:hover .wordpart3:after,*/
    /*.service-item:hover .wordpart3:before,*/
    /*.service-item:hover .wordpart3 span:after,*/
    /*.service-item:hover .wordpart3 span:before {*/
        /*width: 100%;*/
        /*height: 100%;*/
        /*opacity: 1;*/
        /*-webkit-transform: rotate(0deg);*/
        /*transform: rotate(0deg);*/
        /*opacity: 1;*/
    /*}*/
    /*.service-item:hover .wordpart3 {*/
        /*top: -10px;*/
    /*}*/
    .navBarWrap {
        position:fixed;
        top:0;
        z-index:999;
    }
    .img_text_style {
        position: absolute;
        color: white;
        width: 100%;
        text-align: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 30px;
        z-index: 999;
        font-weight: bold;
    }


</style>

