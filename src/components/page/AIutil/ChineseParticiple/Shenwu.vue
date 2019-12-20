<template>
    <div>
        <div class="back">
            <div class="back2"></div>
            <div class="somecircle"></div>
            <div class="somecircle2">
                <span class="word2">生物领域分词</span>
            </div>
            <div class="somecircle3 somecircle31" @click="NlpAnalysisSegment">
                <span class="word1">召回率最高</span>
            </div>
            <div class="somecircle3 somecircle35" @click="ThulacSegment">
                <span class="word1">精准率最高</span>
            </div>
            <div class="somecircle3 somecircle33" @click="page2">
                <span class="word1">F1值最高</span>
            </div>
            <div class="sometext">
                <el-scrollbar style="height: 100%" class="scrollbar">
                    <div v-if="shengwuflag===1">
                        <div>
                            <span>ansj分词器：</span>
                        </div>
                        <div>
                            <el-tag v-for="(item, index) in textarea2" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color"><span style="font-size: 16px;color: white">{{item.name}}</span></el-tag>
                        </div>
                    </div>
                    <div v-if="shengwuflag2===1">
                        <div>
                            <span>Thulac分词器：</span>
                        </div>
                        <div>
                            <el-tag v-for="(item, index) in textarea2" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>
                        </div>
                    </div>
                    <div class="infoword" v-if="flag2 === 1">
                        <span>用户自定义词典分词结果：</span>
                        <div style="margin-top: 10px">
                            <div style="margin-left: 20px;font-size: 16px">
                                <span>召回率最高：</span>
                            </div>
                            <div style="margin-bottom: 10px">
                                <el-tag v-for="(item, index) in textareaNlpAnalysisSegment" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color1"><span style="font-size: 16px;color: white">{{item.name}}</span></el-tag>
                            </div>


                            <div style="margin-left: 20px;font-size: 16px">
                                <span>F1值最高：</span>
                            </div>
                            <div style="margin-bottom: 10px">
                                <el-tag v-for="(item, index) in textareaThulacSegment" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color2"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>
                            </div>
                            <div style="margin-left: 20px;font-size: 16px">
                                <span>双向最大匹配分词结果：</span>
                            </div>
                            <div style="margin-bottom: 10px">
                                <el-tag v-for="(item, index) in textareaNlpAnalysisSegment" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color3"><span style="font-size: 16px;color: white">{{item.name}}</span></el-tag>
                            </div>
                        </div>
                    </div>
                </el-scrollbar>

            </div>
            <div class="sometext1">
                <span class="wordtext">用户自定义词典</span>
                <div style="width: 150px;height: 120px">
                    <el-input type="textarea" :autosize="{ minRows: 5, maxRows: 5}" style="margin-top: 10px" v-model="textarea3"></el-input>
                </div>
                <!--<el-input type="textarea" class="sometext2"  :autosize="{ minRows: 2, maxRows: 4}"></el-input>-->
                <el-button type="primary" size="mini" plain class="somebutton" @click="importword">导入</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Word",
        data () {
            return {
                textarea2: [],
                textarea1: '',
                color: '',
                color1: '',
                color2: '',
                color3: '',
                textareaNlpAnalysisSegment: [],
                textareaThulacSegment: [],
                textarea3: '',
                flag2: 0,
                shengwuflag: 0,
                shengwuflag2: 0
            }
        },
        methods: {
            NlpAnalysisSegment () {
                this.shengwuflag2 = 0
                this.textarea1 = localStorage.getItem('text')
                var url = 'http://zhongkeruitong.top/AIshow/AIPlatform/NlpAnalysisSegment?sentence=' + this.textarea1
                this.$axios.get(url).then((res) => {
                    this.textarea2 = res.data.segment.terms
                    this.color = '#FD694E'
                    this.shengwuflag = 1
                })
            },
            ThulacSegment () {
                this.shengwuflag = 0
                this.textarea1 = localStorage.getItem('text')
                var url = 'http://zhongkeruitong.top/AIshow/AIPlatform/ThulacSegment?sentence=' + this.textarea1
                this.$axios.get(url).then((res) => {
                    this.textarea2 = res.data.segment
                    this.color = '#EEAC39'
                    this.shengwuflag2 = 1
                })
            },
            page2 () {
                this.shengwuflag2 = 0
                this.textarea1 = localStorage.getItem('text')
                var url = 'http://zhongkeruitong.top/AIshow/AIPlatform/NlpAnalysisSegment?sentence=' + this.textarea1
                this.$axios.get(url).then((res) => {
                    this.textarea2 = res.data.segment.terms
                    this.color = '#4DC9FE'
                    this.shengwuflag = 1
                })
            },
            NlpAnalysisSegmentDictionary () {
                var url = 'http://zhongkeruitong.top/AIshow/AIPlatform/NlpAnalysisSegmentDictionary?sentence=' + this.textarea1 + '&userDefine=' + this.textarea3
                this.$axios.get(url).then((res) => {
                    this.textareaNlpAnalysisSegment = res.data.segment.terms
                    this.color1 = '#FD694E'
                })
            },
            ThulacSegmentDictionary () {
                var url = 'http://zhongkeruitong.top/AIshow/AIPlatform/ThulacSegmentDictionary?sentence=' + this.textarea1 + '&userDefine=' + this.textarea3
                this.$axios.get(url).then((res) => {
                    this.textareaThulacSegment = res.data.segment
                    this.color2 = '#EEAC39'
                })
            },
            page3 () {
                this.color3 = '#4DC9FE'
            },
            importword () {
                this.flag2 = 1
                this.NlpAnalysisSegmentDictionary()
                this.ThulacSegmentDictionary()
                this.page3()
            }
        }
    }
</script>

<style scoped>
    .back {
        background-color: #3467A5;
        height: 600px;
        position: relative;
    }
    .back2 {
        background-color: rgba(255, 255, 255, 0.6);
        height: 90%;
        width: 80%;
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
        top: 2%;
        left: 7%;
    }
    .somecircle2 {
        width: 150px;
        height: 150px;
        background-color: #90A5FD;
        border-radius: 50%;
        position: absolute;
        top: 2%;
        left: 7%;
        text-align:center;
    }
    .word2 {
        vertical-align:middle;
        line-height: 150px;
        color: white;
        font-weight: bold;
        font-size: 20px;
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
        top: 35%;
        left: 14%;
    }
    .somecircle35 {
        background-color: #EEAC39;
        top: 55%;
        left: 14%;
    }
    .somecircle33 {
        background-color: #4DC9FE;
        top: 75%;
        left: 14%;
    }
    .word1 {
        vertical-align:middle;
        line-height: 100px;
        color: white;
        font-weight: bold;
    }
    .sometext {
        width: 48%;
        height: 63%;
        background-color: white;
        border: 1px solid black;
        position: absolute;
        top: 68%;
        left: 50%;
        transform: translate(-50%, -68%);

    }
    .sometext1 {
        position: absolute;
        top: 68%;
        left: 86%;
        transform: translate(-86%, -68%);
    }
    .wordtext {
        color: black;
        font-weight: bold;
    }
    .somebutton {
        margin-top: 10px;
    }
    .infoword {
        margin-top: 20px;
        margin-left: 10px;
        font-size: 18px;
    }
    .scrollbar >>> .el-scrollbar__wrap{
        overflow-x: hidden;
    }
</style>
<!--<style>-->
    <!--.el-scrollbar__wrap{-->
        <!--overflow-x: hidden;-->
    <!--}-->
<!--</style>-->
