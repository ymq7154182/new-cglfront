<template>
    <div>
        <div class="home">
            <div class="home_textarea">
                <div style="position: relative;height: 50px">
                    <el-upload
                        action="/"
                        ref="upload"
                        :before-upload="beforeUpload"
                        accept=".txt" style="top: 20px;float: right;position: absolute" class="uploads">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传txt文件</div>
                    </el-upload>
                </div>
                <el-input
                    type="textarea"
                    :autosize="{ minRows:15, maxRows: 15}"
                    v-model="textarea1"
                    class="textarea">
                </el-input>
            </div>
            <div class="home_button">
                <el-button class="button" @click="Stars">开始处理</el-button>
            </div>
            <!--<div class="home_some">-->
                <!--<div class="somebac"></div>-->
                <!--<div class="somecircle"></div>-->
                <!--<div>-->
                    <!--<div class="somecircle2">-->
                        <!--<span class="word2">数据处理</span>-->
                    <!--</div>-->
                    <!--<div class="somecircle3 somecircle31" @click="clickrule1">-->
                        <!--<span class="word1">规则一</span>-->
                    <!--</div>-->
                    <!--<div class="somecircle3 somecircle33" @click="clickrule2">-->
                        <!--<span class="word1">规则二</span>-->
                    <!--</div>-->
                    <!--<div class="somecircle3 somecircle35" @click="clickrule3">-->
                        <!--<span class="word1">规则三</span>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="sometext">-->
                    <!--<el-scrollbar style="height: 100%">-->
                        <!--<div style="width: 90%;margin: 20px auto">-->
                            <!--<div v-if="show1">-->
                                <!--<h1>清洗乱码</h1>-->
                                <!--<p>{{result1}}</p>-->
                            <!--</div>-->
                            <!--<div v-if="show2">-->
                                <!--<h1>清洗符号</h1>-->
                                <!--<p>{{result2}}</p>-->
                            <!--</div>-->
                            <!--<div v-if="show3">-->
                                <!--<h1>清洗数字</h1>-->
                                <!--<p>{{result3}}</p>-->
                            <!--</div>-->

                        <!--</div>-->
                    <!--</el-scrollbar>-->
                <!--</div>-->
                <!--&lt;!&ndash;<div class="sometext1">&ndash;&gt;-->
                <!--&lt;!&ndash;<span class="wordtext">用户自定义词典</span>&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="sometext2">&ndash;&gt;-->


                <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--&lt;!&ndash;<el-button type="primary" size="mini" plain class="somebutton">导入</el-button>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "DataClear",
        data () {
            return {
                textarea1: '',
                fileList: [],
                textData: '',
                result1: '',
                result2: '',
                result3: '',
                show1: false,
                show2: false,
                show3: false,
            }
        },
        beforeCreate() {
            // 读取文件
            FileReader.prototype.reading = function ({encode} = pms) {
                let bytes = new Uint8Array(this.result);    //无符号整型数组
                let text = new TextDecoder(encode || 'UTF-8').decode(bytes);
                return text;
            };
            /* 重写readAsBinaryString函数 */
            FileReader.prototype.readAsBinaryString = function (f) {
                if (!this.onload)       //如果this未重写onload函数，则创建一个公共处理方式
                    this.onload = e => {  //在this.onload函数中，完成公共处理
                        let rs = this.reading();
                        console.log(rs);
                    };
                this.readAsArrayBuffer(f);  //内部会回调this.onload方法
            };
        },
        methods: {
            Stars () {
                this.rule1()
                this.rule2()
                this.rule3()
                // this.show1 = true
                // this.show2 = false
                // this.show3 = false

            },
            rule1 () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/dataCleaningRuleOne'
                const fileFormData = new FormData()
                fileFormData.append('filename', this.files)
                this.$axios.post(url,fileFormData).then((res) => {
                    this.result1 = res.data.result
                    localStorage.setItem('rule1', res.data.result)


                })
            },
            rule2 () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/dataCleaningRuleTwo'
                const fileFormData = new FormData()
                fileFormData.append('filename', this.files)
                this.$axios.post(url,fileFormData).then((res) => {
                    this.result2 = res.data.result
                    localStorage.setItem('rule2', res.data.result)
                })
            },
            rule3 () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/dataCleaningRuleThree'
                const fileFormData = new FormData()
                fileFormData.append('filename', this.files)
                this.$axios.post(url,fileFormData).then((res) => {
                    this.result3 = res.data.result
                    localStorage.setItem('rule3', res.data.result)
                })
            },
            beforeUpload(file){
                // this.fileList = [file]
                console.log('选择了文件beforeUpload')
                this.files = file
                // 读取数据
                this.read(file);
                return false
            },
            read(f) {
                let rd = new FileReader();
                rd.onload = e => {
                    //this.readAsArrayBuffer函数内，会回调this.onload函数。在这里处理结果
                    let cont = rd.reading({encode: 'utf-8'});
                    console.log(cont);
                    this.textarea1 = cont
                    let  formerData = this.textData;
                    this.textData = formerData + "\n" + cont;
                    console.log(this.textData)
                };
                rd.readAsBinaryString(f);
            },
            // clickrule1 () {
            //     this.show1 = true
            //     this.show2 = false
            //     this.show3 = false
            // },
            // clickrule2 () {
            //     this.show2 = true
            //     this.show1 = false
            //     this.show3 = false
            // },
            // clickrule3 () {
            //     this.show3 = true
            //     this.show1 = false
            //     this.show2 = false
            //
            // }
        }
    }
</script>

<style scoped>
    .home {
        background-color: #EAEBED;
        /*margin-top: 141px;*/
        width: 100%;
        position: relative;
    }
    .home_textarea {
        width: 1200px;
        margin: 0 auto;
    }
    .textarea {
        margin-top: 60px;
        margin-bottom: 40px;
    }
    .home_button {
        width: 140px;
        margin: 0 auto;
    }
    .button {
        width: 140px;
        background-color: #3467A5;
        color: white;
        margin-bottom: 40px;
    }
    .button:hover {
        color: #dea726;
    }
    .home_some {
        margin-top: 60px;
        height: 800px;
        background-color: #3467A5;
        position: relative;
    }
    .somebac {
        background-color: rgba(255, 255, 255, 0.6);
        height: 521px;
        width: 70%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .somecircle {
        width: 170px;
        height: 170px;
        background-color: #3467A5;
        border-radius: 50%;
        position: absolute;
        top: 110px;
        left: 190px;
    }
    .somecircle2 {
        width: 150px;
        height: 150px;
        background-color: #FD9192;
        border-radius: 50%;
        position: absolute;
        top: 120px;
        left: 200px;
        text-align:center;
    }
    .somecircle3 {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        position: absolute;
        text-align:center;
        transition: all 0.6s;
        cursor: pointer;
    }
    .somecircle3:hover {
        transform: scale(1.2,1.2);
    }
    .somecircle31 {
        background-color: #FD694E;
        top: 300px;
        left: 16%;
    }
    .somecircle32 {
        background-color: #5A58D6;
        top: 300px;
        left: 24%;
    }
    .somecircle33 {
        background-color: #4DC9FE;
        top: 420px;
        left: 16%;
    }
    .somecircle34 {
        background-color: #E9D602;
        top: 420px;
        left: 24%;
    }
    .somecircle35 {
        background-color: #EEAC39;
        top: 540px;
        left: 16%;
    }
    .somecircle36 {
        background-color: #91A5FE;
        top: 540px;
        left: 24%;
    }
    .sometext {
        width: 800px;
        height: 400px;
        background-color: white;
        border: 1px solid black;
        position: absolute;
        top: 55%;
        left: 55%;
        transform: translate(-55%, -55%);

    }
    .sometext1 {
        position: absolute;
        top: 65%;
        left: 82%;
        transform: translate(-82%, -65%);
    }
    .sometext2 {
        width: 150px;
        height: 120px;
        background-color: white;
        border: 1px solid black;
        margin-top: 10px;
    }
    .wordtext {
        color: black;
        font-weight: bold;
    }
    .somebutton {
        margin-top: 10px;
    }
    .word1 {
        vertical-align:middle;
        line-height: 100px;
        color: white;
        font-weight: bold;
    }
    .word2 {
        vertical-align:middle;
        line-height: 150px;
        color: white;
        font-weight: bold;
        font-size: 20px;
    }
    .imghome {
        background-color: #DDDEE0;
    }
    .imghome img {
        margin-left: 15%;
    }
    .contents {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        box-sizing: border-box;

    }
    .uploads >>> .el-upload--text {
    width: 80px;
    height: 32px;
    background-color: #EAEBED;
    border: 0 solid;
    }
</style>
<!--<style>-->

    <!--.el-scrollbar__wrap{-->
        <!--overflow-x: hidden;-->
    <!--}-->
<!--</style>-->
