<template>
    <div class="shortcut" >
        <div class="w">
            <div class="fl">
                <img src="../../assets/111.png" height="80">
                <!--<div style="color: #398A86;line-height: 40px;text-align: center">知识图谱与智能化应用平台</div>-->
            </div>
            <ul class="fr">
                <li>
                    <a href="#" @click="goBackHome">首页</a>
                </li>
                <li>
                    <el-dropdown>
                        <a href="#" @click="gotoAtlas">知识图谱</a>
                        <el-dropdown-menu slot="dropdown"  class="dropdown">
                            <el-dropdown-item class="menutext" @click.native="gotochuizhi">垂直图谱</el-dropdown-item>
                            <el-dropdown-item class="menutext" @click.native="gotolinyu">领域知识库</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>

                </li>
                <li><el-dropdown>
                    <a href="#">精准检索</a>
                    <el-dropdown-menu slot="dropdown"  class="dropdown">
                        <el-dropdown-item class="menutext">智慧推荐</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown></li>
                <li><a href="#" @click="QA">智能问答</a></li>
                <li><a href="#">热点预测</a></li>
                <li>
                    <el-dropdown>
                        <a href="#" @click="gotoAIuilt">
                            智能工具
                        </a>
                        <el-dropdown-menu slot="dropdown"  class="dropdown">
                            <el-dropdown-item class="menutext" @click.native="gotoPachong">数据爬虫</el-dropdown-item>
                            <el-dropdown-item class="menutext" @click.native="gotoDataClear">数据处理</el-dropdown-item>
                            <el-dropdown-item class="menutext">文本分类</el-dropdown-item>
                            <el-dropdown-item class="menutext" @click.native="gotoChineseParticple">中文分词</el-dropdown-item>
                            <el-dropdown-item class="menutext" @click.native="gotoChineseParticiples">知识发现</el-dropdown-item>
                            <el-dropdown-item class="menutext" @click.native="gotovisualization">数据可视化</el-dropdown-item>
                            <el-dropdown-item class="menutext" @click.native="gotojishu">技术工程库</el-dropdown-item>
                            <el-dropdown-item class="menutext" @click.native="gotosuanfa">算法库</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>

                </li>

                <li>
                    <a href="#" @click="loginpre" v-if="flagimg">注册/登录</a>
                    <el-avatar :size="40" :src="circleUrl" v-if="flagimg===0" style="margin-top: 20px"></el-avatar>
                    <div v-if="flagimg===0" style="float: right;margin-left: 20px;">
                        <el-dropdown  trigger="click" @command="handleCommand" style="height: 50px">
                            <span class="el-dropdown-link">
                                {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="set">设置</el-dropdown-item>
                                <el-dropdown-item command="out">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <el-dialog
                        :visible.sync="dialogVisible"
                        :fullscreen="fullscreen" class="dialog">
                        <Particles></Particles>
                        <transition name="formlogins">
                            <div class="login" v-if="show1">
                                <div class="wordlogin"><span>登录</span></div>
                                <div style="width: 100%">
                                    <div class="loginform">
                                        <el-row>
                                            <el-col :span="4">
                                                <i class="ymq-iconuser formicon"></i>
                                            </el-col>
                                            <el-col :span="20">
                                                <el-input  placeholder="用户名" class="forminput" v-model="ruleForm1.username"></el-input>
                                            </el-col>
                                        </el-row>
                                        <el-row>
                                            <el-col :span="4">
                                                <i class="ymq-iconlock formicon"></i>
                                            </el-col>
                                            <el-col :span="20">
                                                <el-input  placeholder="密码" class="forminput" v-model="ruleForm1.password" type="password" :show-password="showpassword"></el-input>
                                            </el-col>
                                        </el-row>
                                        <div>
                                            <span class="spans1">忘记密码</span>
                                            <span class="spans2" @click="applyuser">新用户注册</span>
                                        </div>

                                        <el-button type="primary" style="width: 200px" size="large" @click="login">登录</el-button>
                                    </div>
                                    <!--<div class="loginform">-->
                                       <!---->

                                    <!--</div>-->
                                    <!--<div class="loginform">-->

                                    <!--</div>-->
                                    <!--<div class="loginform">-->
                                        <!---->
                                    <!--</div>-->
                                </div>

                            </div>

                        </transition>
                        <transition name="formlogins">
                            <div  class="login" v-if="!show1">
                                <div  class="iconreturn">
                                    <i class="ymq-iconarrowleft" style="font-size: 32px;" @click="returnlogin"></i>
                                </div>
                                <div class="wordlogin" style="margin-top: 80px">
                                    <span>注册</span>
                                </div>
                                <div style="width: 100%">
                                    <el-form :model="ruleForm2" status-icon :rules="rules" ref="ruleForm2">
                                        <div class="loginform">
                                            <el-form-item prop="username" style="margin-top: 20px">
                                                <el-row>
                                                    <el-col :span="4">
                                                        <i class="ymq-iconuser formicon"></i>
                                                    </el-col>
                                                    <el-col :span="20">
                                                        <el-input  placeholder="用户名" class="forminput" v-model="ruleForm2.username" ></el-input>
                                                    </el-col>
                                                </el-row>
                                            </el-form-item>
                                            <el-form-item prop="password1" style="margin-top: 40px">
                                                <el-row>
                                                    <el-col :span="4">
                                                        <i class="ymq-iconlock formicon"></i>
                                                    </el-col>
                                                    <el-col :span="20">
                                                        <el-input  placeholder="请输入密码" class="forminput" v-model="ruleForm2.password1" type="password" :show-password="showpassword" autocomplete="off"></el-input>
                                                    </el-col>
                                                </el-row>
                                            </el-form-item>
                                            <el-form-item prop="password2" style="margin-top: 40px">
                                                <el-row>
                                                    <el-col :span="4">
                                                        <i class="ymq-iconlock formicon"></i>
                                                    </el-col>
                                                    <el-col :span="20">
                                                        <el-input  placeholder="确认密码" class="forminput" v-model="ruleForm2.password2" type="password" :show-password="showpassword" autocomplete="off"></el-input>
                                                    </el-col>
                                                </el-row>
                                            </el-form-item>
                                            <el-button type="primary" style="width: 200px" size="large" @click="userregister('ruleForm2')">注册</el-button>


                                        </div>
                                    </el-form>

                                    <!--<div class="loginform">-->


                                    <!--</div>-->
                                    <!--<div class="loginform">-->
                                        <!---->
                                       <!---->
                                    <!--</div>-->
                                    <!--<div class="loginform">-->
                                        <!---->
                                    <!--</div>-->
                                </div>

                            </div>
                        </transition>

                    </el-dialog>
                </li>
                <!--<li>-->
                    <!--<a href="#" style="margin-left: 30px" @click="gotousetext"><i class="ymq-iconshiyongwendang"></i> 使用手册</a>-->
                <!--</li>-->
            </ul>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import bus from './bus'
    import particlesJs from '../particles/Particles'
    export default {
        name: "HomeHeader",
        components: {
            Particles: particlesJs,
        },
        data () {
            var checkName = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('用户名不能为空'))
                }
                setTimeout(() => {
                   callback()
                }, 1000)
            }
            var validatePass = (rule, value ,callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'))
                } else {
                    if (this.ruleForm2.password2 !== '') {
                        this.$refs.ruleForm2.validateField('password2')
                    }
                    callback();
                }
            }
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'))
                } else if (value !== this.ruleForm2.password1) {
                    callback(new Error('两次输入密码不一致！'))
                } else {
                    callback()
                }
            }
            return {
                dialogVisible: false,
                ruleForm1: {
                    username: '',
                    password: '',
                },
                showpassword: true,
                fullscreen: true,
                circleUrl: 'http://hbimg.b0.upaiyun.com/35c1bbf1039fed2470db2891c03a0ccae2ae23ee1d44-pHn81e_fw658',
                flagimg: 1,
                username: '',
                ruleForm2: {
                  username: '',
                  password1: '',
                  password2: ''
                },
                show1: true,
                strflag: '',
                rules: {
                    password1: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    password2: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    username: [
                        { validator: checkName, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            gotoAIuilt () {
                const {href} = this.$router.resolve({
                    path: `/AIuilt`
                })
                window.open(href, '_blank')
            },
            goBackHome(){
                this.$router.push("/HomePage")
            },
            gotochuizhi () {
                var url = 'http://114.242.223.253:8080/SSMLibrary/connection.jsp'
                window.open(url, '_blank')
            },
            gotolinyu () {
                var url = 'http://114.242.223.253:8080/SSMLibrary/gold64.jsp'
                window.open(url, '_blank')
            },
            QA () {
                // var url = 'http://58.119.112.11:11004/chatbot'
                var url = 'http://zhongkeruitong.top/show/chatbot/'
                window.open(url, '_blank')
            },
            gotoPachong () {
                var href = 'http://zhongkeruitong.top/crawl'
                window.open(href, '_blank')
            },
            gotoDataClear () {
                this.strflag= '数据处理工具'
                const {href} = this.$router.resolve({
                    path: `/DataClear`
                })
                window.open(href, '_blank')
                localStorage.setItem('flag', this.strflag)
            },
            gotoChineseParticple () {
                this.strflag= '中文分词工具'
                const {href} = this.$router.resolve({
                    path: `/ChineseParticple`
                })
                window.open(href, '_blank')
                localStorage.setItem('flag', this.strflag)
            },
            gotoChineseParticiples() {
                var href = 'http://114.242.223.253:8080/SSMLibrary/literatureupload.jsp'
                window.open(href, '_blank')
            },
            gotovisualization () {
                this.strflag = '数据可视化'
                const {href} = this.$router.resolve({
                    path: `/text`
                })
                window.open(href, '_blank')
                localStorage.setItem('flag', this.strflag)
            },
            gotojishu () {
                var url = 'http://www.zhongkeruitong.top/pel/pel/index.html'
                window.open(url, '_blank')
            },
            gotosuanfa () {
                var url = 'http://zhongkeruitong.top/boot/#/springboot'
                window.open(url, '_blank')
            },
            gotoAtlas () {
                this.strflag = '知识图谱'
                const {href} = this.$router.resolve({
                    path: `/ChuizhiAtlas`
                })
                window.open(href, '_blank')
                localStorage.setItem('flag', this.strflag)
            },
            gotousetext () {
                const {href} = this.$router.resolve({
                    path: `/usetext`
                })
                window.open(href, '_blank')
            },
            loginpre () {
              this.dialogVisible = true
            },
            applyuser () {
                // $(function () {
                //     $(".login").css({
                //         "transform": "rotateY(180deg) ",
                //         // "transform-origin": "0 0",
                //         "backface-visibility": "hidden"
                //
                //     })
                //     $(".zhuci").css({
                //         "z-index": "0",
                //         "backface-visibility": "visible"
                //     })
                // })
                this.show1 = false

            },
            returnlogin () {
              this.show1 = true
            },
            userregister (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var url = 'http://zhongkeruitong.top/show/AIPlatform/register'
                        this.$axios.post(url, this.$qs.stringify({
                            userId: this.ruleForm2.username,
                            password: this.ruleForm2.password1
                        })).then((res) => {
                           if (res.data.info === 1) {
                               this.$message.success('注册成功！')
                               this.show1 = true
                               this.resetForm(formName)
                           } else if (res.data.info === 0) {
                               this.$message.warning('该用户名已经注册过了')
                           }

                        })
                    } else {
                        return false
                    }
                })

            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            login () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/login'
                this.$axios.post(url, this.$qs.stringify({
                    userId: this.ruleForm1.username,
                    password: this.ruleForm1.password
                })).then((res) => {
                    if (res.data.info === 1) {
                        this.$message.success('登录成功！')
                        this.dialogVisible = false
                        this.username = this.ruleForm1.username
                        this.flagimg = 0
                        localStorage.setItem('userId', this.ruleForm1.username)
                    } else if (res.data.info === 0) {
                        this.$message.error('用户名或密码不正确')
                    }
                })
            },
            handleCommand (command) {
                if (command === 'out') {
                    this.flagimg = 1
                }
            }
        }
    }
</script>

<style scoped>
    .shortcut {
        height: 80px;
        line-height: 80px;
        /*background-color: black;*/
        font-size: 16px;
        color: white;
        /*margin-bottom: 10px;*/
    }
    .w {
        width: 1190px;
        margin: 0 auto;
    }
    a {
        text-decoration: none;
        font-size: 16px;
        color: black;
    }
    a:hover {
        color: #66CCFF;
    }
    ul {
        list-style: none;
    }
    .shortcut li {
        float: left;
        margin-left: 40px;
    }
    .fl { /*浮动的公共类*/
        float: left;
    }
    .fr {
        float: right;
        /*margin-right: 50px;*/
    }

    .login {
        width: 380px;
        background-color: white;
        height: 500px;
        /*margin: 0 auto;*/
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        border-radius: 10px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
        text-align: center;
        transition: all 0.5s;
    }
    .wordlogin {
        margin-top: 80px;
        font-size: 30px;
        font-weight: bold;
        /*color: black;*/
    }
    .forminput >>> .el-input__inner {
        border: 0;
        border-bottom: 1px solid #DCDFE6;
        border-radius: 0;
    }
    .loginform {
        width: 250px; margin: 0 auto;
        line-height: 70px;
    }
    .formicon {
        /*float: left;*/
        font-size: 28px;
        margin-right: 20px
    }
    .forminput {
        /*float: left;*/
        width: 200px;
    }
    /*.spans2 {*/
    /*margin-right: 20px*/
    /*}*/
    .spans1 {
        margin-right: 20px;
    }
    .spans1:hover {
        cursor: pointer;
        color: red;
    }
    .spans2:hover {
        cursor: pointer;
        color: red;
    }
    .formlogins-enter-active, .formlogins-leave-active {
        transition: all 1.5s;
    }
    .formlogins-enter, .formlogins-leave-to {
        /*transform: translateX(-10px) translateY(-10px);*/
        opacity: 0;
    }
    .dialog >>> .el-dialog {
    background-image: url("../../assets/bg.jpg");
    background-size: 100% 100%;
    position: relative;
    }
    .iconreturn {
        line-height: 0;float: left;margin-top: 30px;margin-left: 10px;
        transition: all 0.6s;
    }
    .iconreturn:hover {
        cursor: pointer;
        transform: translateY(-5px);
    }
</style>
