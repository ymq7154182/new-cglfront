<template>
    <div class="contents">
        <div class="move_header" v-if="navBarFixed">
            <HomeHeader v-on:flaglogin="flaglogin" :dashow="dashow"></HomeHeader>
        </div>
        <div>
            <HomeHeader v-on:flaglogin="flaglogin" :dashow="dashow"></HomeHeader>
        </div>
        <div class="picture">
            <div class="head_word">
                <span>科教融合</span>
                <div class="underline"></div>
            </div>
            <!--<div style="width: 40%;color: white;font-size: 18px;position: absolute;top: 60%;left: 50%; transform: translate(-50%, -60%)">-->
                <!--<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;专注于前沿信息技术领域，整合科研与产业一线的资深实践专家，以实验室为平台推进“产学研”融合。实验室提供专家师资、前沿课程、平台技术、项目课题等解决方案，服务于“高层次、实践性、创新型”大数据技术与智能化应用人才的提升和发展。</span>-->
            <!--</div>-->
        </div>
        <div style="margin: 0 auto;max-width: 1500px">
            <div class="box">
                <!--<div class="head">-->
                    <!--产学结合模式-->
                <!--</div>-->
                <hr class="box_line"/>
                <div class="box_text">
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;专注于前沿信息技术领域，整合科研与产业一线的资深实践专家，以实验室为平台推进“产学研”融合。实验室提供专家师资、前沿课程、平台技术、项目课题等解决方案，服务于“高层次、实践性、创新型”大数据技术与智能化应用人才的提升和发展。
                    </p>
                </div>
            </div>
            <div class="box">
                <div class="head">
                    技术前沿学习服务
                </div>
                <hr class="box_line"/>
                <div class="box_text">
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验室结合课题研究与技术前沿实践，开发并形成了一系列具有产业引领科技实践课程：大数据平台技术、大数据分析技术、大数据基础设施运维和优化、Python分析与数据挖掘、机器学习算法与实践、智能问答技术、大数据分析与互联网产品设计等。<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;课程以项目实践为导向，带动知识体系的梳理与学习，引导学生在实践过程中更加自主的学习，同时训练解决问题和分析问题的能力，为学校、产业及相关机构提供有效的学习方案。
                    </p>
                </div>
                <div class="xue_img">
                    <div class="img_1 xue_img_div">
                        <div class="up_img">
                            <img src="../../assets/shiyou5.jpg">
                        </div>
                        <div class="img_word">
                            <div class="img_header">
                                <span class="img_header_style">Python数据处理</span>
                                <div class="img_line"></div>
                                <div class="img_word_text">
                                   <p>
                                       &nbsp;&nbsp;&nbsp;&nbsp;由于Python语言的简洁性、易读性以及可扩展性，在国外用Python做科学计算的研究机构日益增多，一些知名大学已经采用Python来教授程序设计课程
                                   </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="img_2 xue_img_div" >
                        <div class="up_img">
                            <img src="../../assets/shiyou1.gif">
                        </div>
                        <div class="img_word">
                            <div class="img_header">
                                <span class="img_header_style">视觉图像处理</span>
                                <div class="img_line"></div>
                                <div class="img_word_text">
                                    <p>
                                        &nbsp;&nbsp;&nbsp;&nbsp;人脸识别，是基于人的脸部特征信息进行身份识别的一种生物识别技术。用摄像机或摄像头采集含有人脸的图像或视频流， 并自动在图像中检测和跟踪人脸。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="img_3 xue_img_div">
                        <div class="up_img">
                            <img src="../../assets/shiyou3.jpg">
                        </div>
                        <div class="img_word">
                            <div class="img_header">
                                <span class="img_header_style">人工智能</span>
                                <div class="img_line"></div>
                                <div class="img_word_text">
                                    <p>
                                        &nbsp;&nbsp;&nbsp;&nbsp;人工智能将改变我们的生活,专业的人工智能网站内容有人工智能、人工智能技术、人工智能机器人、人工智能语音系统等人工智能的最新技术最新动态最新产品。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="img_4 xue_img_div">
                        <div class="up_img">
                            <img src="../../assets/shiyou2.jpg">
                        </div>
                        <div class="img_word">
                            <div class="img_header">
                                <span class="img_header_style">自然语言处理</span>
                                <div class="img_line"></div>
                                <div class="img_word_text">
                                    <p>
                                        &nbsp;&nbsp;&nbsp;&nbsp;大数据”是需要新处理模式才能具有更强的决策力、 洞察发现力和流程优化能力来适应海量、高增长率 和多样化的信息资产。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="head">
                    青少年编程与竞赛平台服务
                </div>
                <hr class="box_line"/>
                <div class="box_text">
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;面向青少年科技实践，瞄准人工智能领域，为中小学校、有科技兴趣的学生、合作社会机构提供基于PBL的人工智能系列实践课程。科技实践分为基础实践课（认知与体验）、升阶科技实践课（科技实践与计算思维和学科学习融合）、高级实践课（项目实践类）。<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前课程包括：Python趣味编程（基础实践课）、Python进阶与实践（智能家居、贪吃蛇博弈思维训练、机器人与逻辑训练、python与乐高实践）、数据采集与交互机器人（高级实践融合大数据ELT机器学习和AI）。<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;STEAM课程一方面增强学生对智能科技前沿认知并获的科技实践机会，同时实践过程中把机器学习、认知学习等问题、原理、理论、算法、框架、模型结合，形成“机器智能与认知”、“生活中的机器学习”以及可视化效果强的“地球科学大数据”“智慧城市大数据”等展示模块，提升学生的计算思维能力和逻辑思考能力，并助力学生学科学习提升。<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在课程学习过程中，通过在线学习平台提供线上线下融合的模式，提供线上线下融合的模式，同时进行师资辅导和服务。<br/>
                    </p>
                </div>
                <div class="box_img">
                    <div class="img_up">
                        <div class="up_left img_style">
                            <img src="../../assets/up_left.png">
                        </div>
                        <div class="up_right img_style">
                            <img src="../../assets/up_right.png">
                        </div>
                    </div>
                    <div class="img_down">
                        <div class="down_left img_style">
                            <img src="../../assets/down_left.png">
                        </div>
                        <div class="down_right img_style">
                            <img src="../../assets/down_right.png">
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
    import HomeHeader from '@/components/common/HomeHeader'
    import Footer from '@/components/common/Footer'
    export default {
        name: "KeJiao",
        components: {
            Footer,
            HomeHeader,
        },
        data () {
            return {
                navBarFixed: false
            }
        },
        mounted () {
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
        }
    }
</script>

<style scoped>
    .contents {
        width: 100%;
        height: 100%;
        background-color: #FCFCFC;
    }
    .move_header {
        background-color: rgba(255, 255, 255, 0.9);position: fixed;width: 100%;z-index: 999
    }
    .picture {
        height: 600px;
        background-image: url("../../assets/kejiao_3.jpg");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center center;
    }
    .head_word {
        color: white;
        text-align: center;
        font-size: 35px;
        /*width: 140px;*/
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.6s;
    }
    .underline {
        width: 140px;
        height: 2px;
        margin-top: 10px;
        transition: all 0.6s;
        background-image: linear-gradient( 135deg, #C2FFD8 10%, #465EFB 100%);
    }
    /*.head_word:hover .underline{*/
        /*width: 140px;*/
        /*background-image: linear-gradient( 135deg, #C2FFD8 10%, #465EFB 100%);*/
    /*}*/
    .head_word:hover {
        cursor: pointer;
    }
    .box {
        margin-top: 50px;
        margin-bottom: 80px;
    }
    .head {
        text-align: center;
        font-size: 30px;
    }
    .box_line {
        width: 30%;
        /*height: 1px;*/
        /*background-color: #8c939d;*/
        margin: 20px auto;
        border: 0;
        border-top: 1px solid #eee
    }
    .box_text {
        width: 55%;
        margin: 20px auto;
    }
    .box_text p {
        line-height: 28px;
    }
    .box_img {
        width: 45%;
        margin: 30px auto;
        /*padding: 1%;*/
    }
    .img_up {
        height: 280px;
        /*background-color: blue;*/
        display: flex;
    }
    .img_down {
        margin-top: 20px;
        height: 280px;
        display: flex;
    }
    .img_up .img_style {
        flex: 1;
        margin-right: 20px;
    }
    .img_down .img_style {
        flex: 1;
        margin-right: 20px;
    }
    .img_style {
        border-radius: 4px;
        overflow: hidden;
    }
    .img_style img {
        height: 100%;
        width: 100%;
        border-radius: 4px;
        transition: all 1s;
    }
    .img_style:hover {
        cursor: pointer;
    }
    .img_style:hover img {
        transform: scale(1.2);
    }
    .xue_img {
        height: 420px;
        width: 75%;
        margin: 20px auto;
        display: flex;
    }
    .xue_img .xue_img_div {
        flex: 1;
        margin-left: 20px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.4)
    }
    .up_img {
        height: 50%;
        overflow: hidden;
    }
    .up_img img {
        height: 100%;
        width: 100%;
        transition: all 1s;
    }
    .up_img:hover {
        cursor: pointer;
    }
    .up_img:hover img {
        transform: scale(1.2);
    }
    .img_header {
        margin-top: 30px;
        margin-left: 30px;
    }
    .img_line {
        margin-top: 20px;
        width: 50px;
        height: 1px;
        background-color: #8c939d;
        transition: all 0.6s;
    }
    .xue_img_div:hover .img_line {
        width: 110px;
        background-image: linear-gradient( 135deg, #C2FFD8 10%, #465EFB 100%);
    }
    .img_word_text {
        margin-right: 10px;margin-top: 10px;
    }
    .img_word_text p {
        font-size: 14px;
        color: #8c939d;
        line-height: 24px;
    }
    .img_header_style {
        font-weight: bold;
    }
</style>
