<template>
    <div class="contents">
        <div class="move_header" v-if="navBarFixed">
            <HomeHeader v-on:flaglogin="flaglogin" :dashow="dashow"></HomeHeader>
        </div>
        <div>
            <HomeHeader v-on:flaglogin="flaglogin" :dashow="dashow"></HomeHeader>
        </div>
        <div class="bg_img">
            <div style="height: 500px;background-color: rgba(0, 0, 0, 0.6);position: absolute;width: 100%;text-align: center">
                <h4 >大数据技术与认知智能实验室</h4 >
                <div class="line"></div>
                <!--<p>-->
                    <!--&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;大数据技术与认知智能实验室专注在大数据与人工智能技术的应用研究领域，旨在建设大数据分析技术研发与应用平台，结合人工智能技术形成系列与行业融合的具有实践引领价值的智能化产品与服务。<br/>-->
                    <!--&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验室通过可持续的产学研协同创新机制，整合中科院信息科技领域科研专家、山东大学专家教授、中科瑞通等产业资深产品与技术专家，通过发挥在大数据与人工智能技术上的优势，在科技咨询、产品研发、技术服务、以及高端教育培训方向，为行业发展提供整合的数据产品与服务方案。<br/>-->
                    <!--&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验室定位在前沿科技研发与行业及市场需求相结合，形成助推产业发展的科技智库与产学研协同创新技术实践服务与Ai产品研发平台。<br/>-->
                    <!--&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验室在与政府、园区、产业对接融合过程中，有效汇聚产业资源和创新需求，逐步搭建科研与产业融合及科技转移转化平台，同时推进大数据与人工智能领域高层次实用型人才培养，实现在产学研融合驱动下政府科技战略实施与产业创新落地标杆和示范。-->
                <!--</p>-->
            </div>

        </div>
        <div class="text_shi">
            <div class="word_text">
                <span>实验室简介</span>
            </div>
            <div style="width:70%;margin: 20px auto;background-color: rgba(0, 0, 0, 0.2);height: 1px;"></div>
            <div class="text_ss">
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;大数据技术与认知智能实验室专注在大数据与人工智能技术的应用研究领域，旨在建设大数据分析技术研发与应用平台，结合人工智能技术形成系列与行业融合的具有实践引领价值的智能化产品与服务。
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验室通过可持续的产学研协同创新机制，整合中科院信息科技领域科研专家、山东大学专家教授、中科瑞通等产业资深产品与技术专家，通过发挥在大数据与人工智能技术上的优势，在科技咨询、产品研发、技术服务、以及高端教育培训方向，为行业发展提供整合的数据产品与服务方案。
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验室定位在前沿科技研发与行业及市场需求相结合，形成助推产业发展的科技智库与产学研协同创新技术实践服务与Ai产品研发平台。
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验室在与政府、园区、产业对接融合过程中，有效汇聚产业资源和创新需求，逐步搭建科研与产业融合及科技转移转化平台，同时推进大数据与人工智能领域高层次实用型人才培养，实现在产学研融合驱动下政府科技战略实施与产业创新落地标杆和示范。
                </p>
            </div>
        </div>
        <!--研究团队-->
        <div class="details">
            <div class="word_text">
                <span>研究团队</span>
            </div>
            <div style="width:70%;margin: 20px auto;background-color: rgba(0, 0, 0, 0.2);height: 1px;"></div>
            <div class="details_left">
                <img src="../../assets/tuandui_4.jpg">
            </div>
            <!--<img src="../../assets/tuandui_2.jpg">-->
            <div class="details_right">
                <!--<div style="width:70%;margin-left: 58px;background-color: rgba(0, 0, 0, 0.2);height: 1px;margin-top: 30px"></div>-->
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="name_style">李学庆</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;教  授/首席专家/博士生导师<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="name_style">王永吉</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;二级研究员/博士生导师<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="name_style">付立军</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;研究员/实验室主任，数据分析、知识图谱<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="name_style">刘&nbsp;&nbsp;&nbsp;&nbsp;峰</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;研究员/特聘专家，物联网，智能制造<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="name_style">常志军</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;副研究员/实验室副主任，大数据技术<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="name_style">刘&nbsp;&nbsp;&nbsp;&nbsp;锦</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;副教授,计算机视觉、医学影像<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="name_style">杨&nbsp;&nbsp;&nbsp;&nbsp;威</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;副教授，信息安全，物联网<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="name_style">李&nbsp;&nbsp;&nbsp;&nbsp;响</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高级工程师，知识图谱、智能问答<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="name_style">陆&nbsp;&nbsp;&nbsp;&nbsp;明</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高级工程师，资深架构师，大数据、云计算方向<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="name_style">武靖恺</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高级工程师，智慧城市深度信息化资深产品专家<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="name_style">韩&nbsp;&nbsp;&nbsp;&nbsp;晋</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高级工程师，物联网领域资深产业专家<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="name_style">胡晓峰</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高级工程师，数据分析，信息安全<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="name_style">安梦飞</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高级工程师，知识图谱、金融风险研究<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="name_style">张善禹</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;科研助理/对外合作主管<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="name_style">以及博士硕士研究生，形成了科研、产业及实施团队30余人</span><br/>
                </p>
            </div>
        </div>
        <div class="direction">
            <div class="word_text">
                <span>研究方向</span>
            </div>
            <div style="width:70%;margin: 20px auto;background-color: rgba(0, 0, 0, 0.2);height: 1px;"></div>
            <div style="margin-top: 40px">
                <div class="direction_left">
                    <div class="direction_word">
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;围绕基于数据的行业信息化升级和智能化推进，重点在教育AI、智慧城市大脑、文情大数据、舆情风控、行业发展预测、物联网与安全硬件、大健康等领域，开展行业应用研究与前沿技术服务实践。<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;技术方向上，开展在大数据技术、知识图谱、计算机视觉等技术等研究，开展大数据融合与智能化技术的创新落地应用。
                        </p>
                    </div>
                </div>
                <div class="direction_right">
                    <img src="../../assets/tupian1.png" style="width: 80%;margin-left: 40px">
                </div>
            </div>

            <!--<div style="position: absolute;height: 600px;width: 100%;background-color: rgba(0, 0, 0, 0.3);">-->
                <!---->
            <!--</div>-->


            <!--<div>-->
                <!--<img src="../../assets/table.png">-->
            <!--</div>-->
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
        name: "AboutUs",
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
    .bg_img {
        width: 100%;
        height: 500px;
        background-image: url("../../assets/bg_23.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center center;
    }
    .bg_img h4{
        display: block;
        padding-top: 200px;
        /*margin-left: 30%;*/
        font-size:36px;
        font-family:MicrosoftYaHei;
        color:rgba(255,255,255,1);
    }
    .bg_img .line{
        /*margin-left: 35%;*/
        margin: 0 auto;
        margin-top: 39px;
        /*width:6.25%;*/
        width: 30%;
        height:2px;
        /*background:rgba(65,54,242,1);*/
        background-image: linear-gradient( 135deg, #C2FFD8 10%, #465EFB 100%);
    }
    /*.bg_img:hover .line {*/
        /*width: 30%;*/
        /*!*background:rgba(255,153,0,1);*!*/
        /*background-image: linear-gradient( 135deg, #C2FFD8 10%, #465EFB 100%);*/
    /*}*/
    .bg_img .line {
        transition: all 0.6s;
    }
   .bg_img p{
        margin-left: 18.75%;
        margin-top: 30px;
        width:39.79%;
        font-size:14px;
        font-family:MicrosoftYaHei;
        color:rgba(255,255,255,1);
        line-height:24px;
    }
    .details {
        height: 550px;
        margin-top: 100px;
        background-color: #ffffff;
    }
    .details_left {
        float: left;
        width: 50%;
        height: 100%;
    }
    .details_left img {
        width: 60%;
        height: 380px;
        float: right;
        border-radius: 4px;
        margin-top: 80px;
    }
    .details_right {
        float: right;
        width: 50%;
        height: 100%;
    }
    .details_right h4 {
        margin-left: 58px;
        margin-top: 50px;
        font-size: 24px;
    }
    .details_right p {
        margin-left: 58px;
        margin-top: 50px;
        color:rgba(51,51,51,1);
        line-height:28px;
    }
    .direction {
        /*margin-top: 50px;*/
        margin-bottom: 100px;
        height: 400px;
        background-color: #ffffff;
        /*background-image: url("../../assets/yanjiufangxiang.jpg");*/
        /*background-size: 100% 100%;*/
        /*padding-top: 10px;*/
        position: relative;
    }
    .word_text {
        text-align: center;
        font-size: 24px;
        font-weight: bold;
    }
    .direction_left {
        width: 40%;
        height: 100%;
        float: left;
    }
    .direction_word {
        width: 50%;
        float: right;
    }
    .direction_word p {
        /*font-size: 24px;*/
        line-height: 28px;
    }
    .direction_right {
        width: 60%;
        height: 100%;
        float: right;
    }
    .text_shi {
        /*height: 600px;*/
        margin-top: 100px;
    }
    .text_ss {
        width: 60%;
        margin: 25px auto;
    }
    .text_ss p {
        margin-top: 10px;
        font-size: 18px;
        line-height: 28px;
    }
</style>

